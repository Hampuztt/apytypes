// Python object access through Nanobind
#include <nanobind/nanobind.h>
#include <nanobind/ndarray.h>
#include <nanobind/stl/variant.h> // std::variant (with nanobind support)
#include <variant>
namespace nb = nanobind;

// Python details. These should be included before standard header files:
// https://docs.python.org/3/c-api/intro.html#include-files
#include <Python.h> // PYLONG_BITS_IN_DIGIT, PyLongObject

// Standard header includes
#include <algorithm> // std::copy, std::max, std::transform, etc...
#include <cstddef>   // std::size_t
#include <cstdint>   // std::int16, std::int32, std::int64, etc...
#include <ios>       // std::dec, std::hex
#include <optional>  // std::optional
#include <set>       // std::set
#include <sstream>   // std::stringstream
#include <stdexcept> // std::length_error
#include <string>    // std::string
#include <vector>    // std::vector, std::swap

#include "apybuffer.h"
#include "apyfixed.h"
#include "apyfixed_util.h"
#include "apyfixedarray.h"
#include "apyfixedarray_iterator.h"
#include "apytypes_common.h"
#include "apytypes_simd.h"
#include "apytypes_util.h"
#include "broadcast.h"
#include "python_util.h"

#include <fmt/format.h>

// GMP should be included after all other includes
#include "../extern/mini-gmp/mini-gmp.h"

/* ********************************************************************************** *
 * *                            Python constructors                                 * *
 * ********************************************************************************** */

APyFixedArray::APyFixedArray(
    const nb::sequence& bit_pattern_sequence,
    std::optional<int> int_bits,
    std::optional<int> frac_bits,
    std::optional<int> bits
)
    : APyFixedArray(
          python_sequence_extract_shape(bit_pattern_sequence), int_bits, frac_bits, bits
      )
{
    // Specialized initialization for NDArray
    if (nb::isinstance<nb::ndarray<>>(bit_pattern_sequence)) {
        auto ndarray = nb::cast<nb::ndarray<nb::c_contig>>(bit_pattern_sequence);
        _set_bits_from_ndarray(ndarray);
        return; // initialization completed
    }

    // Caster for performing two's complement overflow
    APyFixed caster(_bits, _int_bits);

    // 1D vector of Python int object (`nb::int_` objects)
    std::vector<nb::object> python_ints
        = python_sequence_walk<nb::int_>(bit_pattern_sequence);

    for (std::size_t i = 0; i < _data.size() / _itemsize; i++) {

        std::vector<mp_limb_t> limb_vec
            = python_long_to_limb_vec(nb::cast<nb::int_>(python_ints[i]), _itemsize);

        // Two's complements overflowing using caster type
        std::copy_n(limb_vec.begin(), _itemsize, caster._data.begin());
        caster._overflow_twos_complement(
            caster._data.begin(), caster._data.end(), _bits, _int_bits
        );
        std::copy_n(
            caster._data.begin(),         // src
            _itemsize,                    // limbs to copy
            _data.begin() + i * _itemsize // dst
        );
    }
}

/* ********************************************************************************** *
 * *                       More C++ accessible constructors                         * *
 * ********************************************************************************** */

APyFixedArray::APyFixedArray(
    const std::vector<std::size_t>& shape, int bits, int int_bits
)
    : APyBuffer(shape, bits_to_limbs(bits))
    , _bits { bits }
    , _int_bits { int_bits }
{
}

APyFixedArray::APyFixedArray(
    const std::vector<std::size_t>& shape,
    std::optional<int> int_bits,
    std::optional<int> frac_bits,
    std::optional<int> bits
)
    : APyBuffer(shape, bits_to_limbs(bits_from_optional(bits, int_bits, frac_bits)))
    , _bits { bits.has_value() ? *bits : *int_bits + *frac_bits }
    , _int_bits { int_bits.has_value() ? *int_bits : *bits - *frac_bits }
{
}

/* ********************************************************************************** *
 * *                          Binary arithmetic operators                           * *
 * ********************************************************************************** */

template <class ripple_carry_op, class simd_op, class simd_shift_op>
inline APyFixedArray APyFixedArray::_apyfixedarray_base_add_sub(const APyFixedArray& rhs
) const
{
    // Increase word length of result by one
    const int res_int_bits = std::max(rhs.int_bits(), int_bits()) + 1;
    const int res_frac_bits = std::max(rhs.frac_bits(), frac_bits());
    const int res_bits = res_int_bits + res_frac_bits;

    // Resulting vector
    APyFixedArray result(_shape, res_bits, res_int_bits);

    // Special case #1: Operands and result fit in single limb
    if (unsigned(res_bits) <= _LIMB_SIZE_BITS) {
        if (frac_bits() == rhs.frac_bits()) {
            // Operands have equally many fractional bits.
            simd_op {}(
                _data.begin(),
                rhs._data.begin(),
                result._data.begin(),
                result._data.size()
            );
        } else {
            auto rhs_shift_amount = unsigned(res_frac_bits - rhs.frac_bits());
            auto lhs_shift_amount = unsigned(res_frac_bits - frac_bits());
            simd_shift_op {}(
                _data.begin(),
                rhs._data.begin(),
                result._data.begin(),
                lhs_shift_amount,
                rhs_shift_amount,
                result._data.size()
            );
        }
        return result; // early exit
    }

    // Special case #2: Operands and result have equally many limbs
    if (result._itemsize == _itemsize && result._itemsize == rhs._itemsize) {
        const mp_limb_t* src1_ptr;
        const mp_limb_t* src2_ptr;
        if (frac_bits() == rhs.frac_bits()) {
            // Right-hand side and left-hand side have equally many fractional bits
            src1_ptr = &_data[0];
            src2_ptr = &rhs._data[0];
        } else if (frac_bits() <= rhs.frac_bits()) {
            // Right-hand side has more fractional bits. Upsize `*this`
            _cast_correct_wl(result._data.begin(), res_bits, res_int_bits);
            src1_ptr = &result._data[0];
            src2_ptr = &rhs._data[0];
        } else {
            // Left-hand side has more fractional bits. Upsize `rhs`
            rhs._cast_correct_wl(result._data.begin(), res_bits, res_int_bits);
            src1_ptr = &_data[0];
            src2_ptr = &result._data[0];
        }
        for (std::size_t i = 0; i < result._data.size(); i += result._itemsize) {
            ripple_carry_op {}(
                &result._data[i], // dst
                &src1_ptr[i],     // src1
                &src2_ptr[i],     // src2
                result._itemsize  // limb vector length
            );
        }
        return result; // early exit
    }

    // Most general case: Works in any situation, but is slowest
    APyFixedArray imm(_shape, res_bits, res_int_bits);
    _cast_correct_wl(result._data.begin(), res_bits, res_int_bits);
    rhs._cast_correct_wl(imm._data.begin(), res_bits, res_int_bits);

    // Perform ripple-carry operation for each element
    for (std::size_t i = 0; i < result._data.size(); i += result._itemsize) {
        ripple_carry_op {}(
            &result._data[i], // dst
            &result._data[i], // src1
            &imm._data[i],    // src2
            result._itemsize  // limb vector length
        );
    }
    return result;
}

template <class ripple_carry_op, class simd_op_const, class simd_shift_op_const>
inline APyFixedArray APyFixedArray::_apyfixed_base_add_sub(const APyFixed& rhs) const
{
    // Increase word length of result by one
    const int res_int_bits = std::max(rhs.int_bits(), int_bits()) + 1;
    const int res_frac_bits = std::max(rhs.frac_bits(), frac_bits());
    const int res_bits = res_int_bits + res_frac_bits;

    // Resulting vector
    APyFixedArray result(_shape, res_bits, res_int_bits);

    // Special case #1: Operands and result fit in single limb
    if (unsigned(res_bits) <= _LIMB_SIZE_BITS) {
        if (frac_bits() == rhs.frac_bits()) {
            // Operands have equally many fractional bits.
            simd_op_const {}(
                _data.begin(), rhs._data[0], result._data.begin(), result._data.size()
            );
        } else {
            auto rhs_shift_amount = unsigned(res_frac_bits - rhs.frac_bits());
            auto lhs_shift_amount = unsigned(res_frac_bits - frac_bits());
            simd_shift_op_const {}(
                std::begin(_data),                // src1
                rhs._data[0] << rhs_shift_amount, // constant
                std::begin(result._data),         // dst
                lhs_shift_amount,                 // src1 shift amount
                result._data.size()
            );
        }
        return result; // early exit
    }

    // Most general case: Works in any situation, but is slowest
    APyFixed imm(res_bits, res_int_bits);
    auto rhs_shift_amount = unsigned(res_frac_bits - rhs.frac_bits());
    _cast_correct_wl(result._data.begin(), res_bits, res_int_bits);
    rhs._cast_correct_wl(imm._data.begin(), imm._data.end(), rhs_shift_amount);
    for (std::size_t i = 0; i < result._data.size(); i += result._itemsize) {
        // Perform ripple-carry operation
        ripple_carry_op {}(
            &result._data[i], // dst
            &result._data[i], // src1
            &imm._data[0],    // src2
            result._itemsize  // limb vector length
        );
    }
    // Return result
    return result;
}

APyFixedArray APyFixedArray::operator+(const APyFixedArray& rhs) const
{
    if (_shape != rhs._shape) {
        auto broadcast_shape = smallest_broadcastable_shape(_shape, rhs._shape);
        if (broadcast_shape.size() == 0) {
            throw std::length_error(fmt::format(
                "APyFixedArray.__add__: shape mismatch, lhs.shape={}, rhs.shape={}",
                tuple_string_from_vec(_shape),
                tuple_string_from_vec(rhs._shape)
            ));
        }
        return broadcast_to(broadcast_shape) + rhs.broadcast_to(broadcast_shape);
    }

    return _apyfixedarray_base_add_sub<
        mpn_add_n_functor<>,
        simd::add_functor<>,
        simd::shift_add_functor<>>(rhs);
}

APyFixedArray APyFixedArray::operator+(const APyFixed& rhs) const
{
    return _apyfixed_base_add_sub<
        mpn_add_n_functor<>,
        simd::add_const_functor<>,
        simd::shift_add_const_functor<>>(rhs);
}

APyFixedArray APyFixedArray::operator-(const APyFixedArray& rhs) const
{
    if (_shape != rhs._shape) {
        auto broadcast_shape = smallest_broadcastable_shape(_shape, rhs._shape);
        if (broadcast_shape.size() == 0) {
            throw std::length_error(fmt::format(
                "APyFixedArray.__sub__: shape mismatch, lhs.shape={}, rhs.shape={}",
                tuple_string_from_vec(_shape),
                tuple_string_from_vec(rhs._shape)
            ));
        }
        return broadcast_to(broadcast_shape) - rhs.broadcast_to(broadcast_shape);
    }

    return _apyfixedarray_base_add_sub<
        mpn_sub_n_functor<>,
        simd::sub_functor<>,
        simd::shift_sub_functor<>>(rhs);
}

APyFixedArray APyFixedArray::operator-(const APyFixed& rhs) const
{
    return _apyfixed_base_add_sub<
        mpn_sub_n_functor<>,
        simd::sub_const_functor<>,
        simd::shift_sub_const_functor<>>(rhs);
}

// Scalar - Array
APyFixedArray APyFixedArray::rsub(const APyFixed& lhs) const
{
    // Increase word length of result by one
    const int res_int_bits = std::max(lhs.int_bits(), int_bits()) + 1;
    const int res_frac_bits = std::max(lhs.frac_bits(), frac_bits());
    const int res_bits = res_int_bits + res_frac_bits;

    // Adjust binary point
    APyFixedArray result(_shape, res_bits, res_int_bits);
    _cast_correct_wl(result._data.begin(), res_bits, res_int_bits);
    auto lhs_shift_amount = unsigned(res_frac_bits - lhs.frac_bits());
    if (unsigned(res_bits) <= _LIMB_SIZE_BITS) {
        mp_limb_t operand = lhs._data[0] << lhs_shift_amount;
        simd::vector_rsub_const(
            result._data.begin(), operand, result._data.begin(), result._data.size()
        );
    } else {
        APyFixed imm(res_bits, res_int_bits);
        lhs._cast_correct_wl(imm._data.begin(), imm._data.end(), lhs_shift_amount);

        // Perform subtraction
        for (std::size_t i = 0; i < result._data.size(); i += result._itemsize) {
            mpn_sub_n(
                &result._data[i], // dst
                &imm._data[0],    // src1
                &result._data[i], // src2
                result._itemsize  // limb vector length
            );
        }
    }

    // Return result
    return result;
}

APyFixedArray APyFixedArray::operator*(const APyFixedArray& rhs) const
{
    if (_shape != rhs._shape) {
        auto broadcast_shape = smallest_broadcastable_shape(_shape, rhs._shape);
        if (broadcast_shape.size() == 0) {
            throw std::length_error(fmt::format(
                "APyFixedArray.__mul__: shape mismatch, lhs.shape={}, rhs.shape={}",
                tuple_string_from_vec(_shape),
                tuple_string_from_vec(rhs._shape)
            ));
        }
        return broadcast_to(broadcast_shape) * rhs.broadcast_to(broadcast_shape);
    }

    const int res_int_bits = int_bits() + rhs.int_bits();
    const int res_frac_bits = frac_bits() + rhs.frac_bits();
    const int res_bits = res_int_bits + res_frac_bits;

    // Resulting `APyFixedArray` fixed-point tensor
    APyFixedArray result(_shape, res_bits, res_int_bits);

    if (unsigned(res_bits) <= _LIMB_SIZE_BITS) {
        simd::vector_mul(
            std::begin(_data),        // src1
            std::begin(rhs._data),    // src2
            std::begin(result._data), // dst
            result._data.size()       // elements
        );
    } else {
        // `_checked_hadamard_product` requires: "The destination has to have space for
        // `s1n` + `s2n` limbs, even if the product’s most significant limb is zero."
        std::vector<mp_limb_t> prod_tmp(_itemsize + rhs._itemsize);
        std::vector<mp_limb_t> op1_abs(_itemsize);
        std::vector<mp_limb_t> op2_abs(rhs._itemsize);
        _checked_hadamard_product(
            rhs,                  // rhs
            result._data.begin(), // dst
            prod_tmp,             // scratch memory: product
            op1_abs,              // scratch memory: operand 1 absolute value
            op2_abs               // scratch memory: operand 2 absolute value
        );
    }

    return result;
}

APyFixedArray APyFixedArray::operator*(const APyFixed& rhs) const
{
    const int res_int_bits = int_bits() + rhs.int_bits();
    const int res_frac_bits = frac_bits() + rhs.frac_bits();
    const int res_bits = res_int_bits + res_frac_bits;

    // Resulting `APyFixedArray` fixed-point tensor
    APyFixedArray result(_shape, res_bits, res_int_bits);

    // Special case #1: The resulting number of bits fit in a single limb
    if (unsigned(res_bits) <= _LIMB_SIZE_BITS) {
        simd::vector_mul_const(
            std::begin(_data),        // src1
            rhs._data[0],             // src2
            std::begin(result._data), // dst
            result._data.size()       // elements
        );
        return result; // early exit
    }

    // General case: This always works but is slower than the special cases.
    auto op2_begin = rhs._data.begin();
    auto op2_end = rhs._data.begin() + rhs.vector_size();
    bool sign2 = mp_limb_signed_t(*(op2_end - 1)) < 0;
    std::vector<mp_limb_t> op2_abs(rhs.vector_size());
    limb_vector_abs(op2_begin, op2_end, op2_abs.begin());

    // Perform multiplication for each element in the tensor. `mpn_mul` requires:
    // "The destination has to have space for `s1n` + `s2n` limbs, even if the product’s
    // most significant limbs are zero."
    std::vector<mp_limb_t> res_tmp_vec(_itemsize + rhs.vector_size(), 0);
    std::vector<mp_limb_t> op1_abs(_itemsize);
    auto op1_begin = _data.begin();
    for (std::size_t i = 0; i < _nitems; i++) {
        // Current working operands
        auto op1_end = op1_begin + _itemsize;

        // Evaluate resulting sign
        bool sign1 = mp_limb_signed_t(*(op1_end - 1)) < 0;
        bool result_sign = sign1 ^ sign2;

        // Retrieve the absolute value of both operands, as required by GMP
        limb_vector_abs(op1_begin, op1_end, op1_abs.begin());

        // Perform the multiplication
        mpn_mul(
            &res_tmp_vec[0], // dst
            &op1_abs[0],     // src1
            op1_abs.size(),  // src1 limb vector length
            &op2_abs[0],     // src2
            op2_abs.size()   // src2 limb vector length
        );

        // Handle sign
        if (result_sign) {
            limb_vector_negate(
                res_tmp_vec.begin(),
                res_tmp_vec.begin() + result._itemsize,
                result._data.begin() + (i + 0) * result._itemsize
            );
        } else {
            // Copy into resulting vector
            std::copy_n(
                res_tmp_vec.begin(),
                result._itemsize,
                result._data.begin() + (i + 0) * result._itemsize
            );
        }
        op1_begin = op1_end;
    }
    return result;
}

APyFixedArray APyFixedArray::operator/(const APyFixedArray& rhs) const
{
    // Make sure `_shape` of `*this` and `rhs` are the same
    if (_shape != rhs._shape) {
        auto broadcast_shape = smallest_broadcastable_shape(_shape, rhs._shape);
        if (broadcast_shape.size() == 0) {
            throw std::length_error(fmt::format(
                "APyFixedArray.__div__: shape mismatch, lhs.shape={}, rhs.shape={}",
                tuple_string_from_vec(_shape),
                tuple_string_from_vec(rhs._shape)
            ));
        }
        return broadcast_to(broadcast_shape) / rhs.broadcast_to(broadcast_shape);
    }

    const int res_int_bits = int_bits() + rhs.frac_bits() + 1;
    const int res_frac_bits = frac_bits() + rhs.int_bits();
    const int res_bits = res_int_bits + res_frac_bits;
    APyFixedArray result(_shape, res_bits, res_int_bits);

    // Special case #1: The resulting number of bits fit in a single limb
    if (unsigned(res_bits) <= _LIMB_SIZE_BITS) {
        simd::vector_shift_div_signed(
            std::begin(_data),        // src1 (numerator)
            std::begin(rhs._data),    // src2 (denominator)
            std::begin(result._data), // dst
            rhs.bits(),               // numerator shift amount
            _data.size()              // vector elements
        );
        return result; // early exit
    }

    // General case: This always works but is slower than the special cases.

    // Absolute value denominator
    ScratchVector<mp_limb_t> abs_den(rhs._itemsize);

    // Absolute value left-shifted numerator
    ScratchVector<mp_limb_t> abs_num(result._itemsize);

    for (std::size_t i = 0; i < _nitems; i++) {
        std::fill(std::begin(abs_num), std::end(abs_num), 0);
        if (limb_vector_is_zero(
                std::begin(rhs._data) + (i + 0) * rhs._itemsize,
                std::begin(rhs._data) + (i + 1) * rhs._itemsize
            )) {
            continue;
        }
        bool den_sign = limb_vector_abs(
            std::begin(rhs._data) + (i + 0) * rhs._itemsize,
            std::begin(rhs._data) + (i + 1) * rhs._itemsize,
            std::begin(abs_den)
        );
        bool num_sign = limb_vector_abs(
            std::begin(_data) + (i + 0) * _itemsize,
            std::begin(_data) + (i + 1) * _itemsize,
            std::begin(abs_num)
        );
        limb_vector_lsl(abs_num.begin(), abs_num.end(), rhs.bits());

        // `mpn_tdiv_qr` requires the number of *significant* limbs in denominator
        std::size_t den_significant_limbs
            = significant_limbs(std::begin(abs_den), std::end(abs_den));
        mpn_div_qr(
            &result._data[i * result._itemsize], // Quotient
            &abs_num[0],                         // Numerator
            abs_num.size(),                      // Numerator limbs
            &abs_den[0],                         // Denominator
            den_significant_limbs                // Denominator significant limbs
        );

        // Negate result if negative
        if (num_sign ^ den_sign) {
            limb_vector_negate(
                std::begin(result._data) + (i + 0) * result._itemsize,
                std::begin(result._data) + (i + 1) * result._itemsize,
                std::begin(result._data) + (i + 0) * result._itemsize
            );
        }
    }
    return result;
}

APyFixedArray APyFixedArray::operator/(const APyFixed& rhs) const
{
    const int res_int_bits = int_bits() + rhs.frac_bits() + 1;
    const int res_frac_bits = frac_bits() + rhs.int_bits();
    const int res_bits = res_int_bits + res_frac_bits;
    APyFixedArray result(_shape, res_bits, res_int_bits);

    // Special case #1: The resulting number of bits fit in a single limb
    if (unsigned(res_bits) <= _LIMB_SIZE_BITS) {
        simd::vector_shift_div_const_signed(
            std::begin(_data),        // src1 (numerator)
            rhs._data[0],             // src2 (constant denominator)
            std::begin(result._data), // dst
            rhs.bits(),               // numerator shift amount
            _data.size()              // vector elements
        );
        return result; // early exit
    }

    // General case: This always works but is slower than the special cases.

    // Absolute value denominator. `mpn_tdiv_qr` requires the number of *significant*
    // limbs in denominator
    ScratchVector<mp_limb_t> abs_den(rhs.vector_size());
    bool den_sign = limb_vector_abs(
        std::begin(rhs._data), std::end(rhs._data), std::begin(abs_den)
    );
    std::size_t den_significant_limbs
        = significant_limbs(std::begin(abs_den), std::end(abs_den));

    // Absolute value left-shifted numerator
    ScratchVector<mp_limb_t> abs_num(result._itemsize);

    for (std::size_t i = 0; i < _nitems; i++) {
        std::fill(std::begin(abs_num), std::end(abs_num), 0);
        bool num_sign = limb_vector_abs(
            std::begin(_data) + (i + 0) * _itemsize,
            std::begin(_data) + (i + 1) * _itemsize,
            std::begin(abs_num)
        );
        limb_vector_lsl(abs_num.begin(), abs_num.end(), rhs.bits());

        mpn_div_qr(
            &result._data[i * result._itemsize], // Quotient
            &abs_num[0],                         // Numerator
            abs_num.size(),                      // Numerator limbs
            &abs_den[0],                         // Denominator
            den_significant_limbs                // Denominator significant limbs
        );

        // Negate result if negative
        if (num_sign ^ den_sign) {
            limb_vector_negate(
                std::begin(result._data) + (i + 0) * result._itemsize,
                std::begin(result._data) + (i + 1) * result._itemsize,
                std::begin(result._data) + (i + 0) * result._itemsize
            );
        }
    }
    return result;
}

APyFixedArray APyFixedArray::rdiv(const APyFixed& rhs) const
{
    const int res_int_bits = rhs.int_bits() + frac_bits() + 1;
    const int res_frac_bits = rhs.frac_bits() + int_bits();
    const int res_bits = res_int_bits + res_frac_bits;
    APyFixedArray result(_shape, res_bits, res_int_bits);

    // Special case #1: The resulting number of bits fit in a single limb
    if (unsigned(res_bits) <= _LIMB_SIZE_BITS) {
        simd::vector_rdiv_const_signed(
            std::begin(_data),        // src2 (denominator)
            rhs._data[0] << bits(),   // src1 (constant numerator)
            std::begin(result._data), // dst
            _data.size()              // vector elements
        );
        return result;
    }

    // General case: This always works but is slower than the special cases.

    // Absolute value denominator
    ScratchVector<mp_limb_t> abs_den(_itemsize);

    // Absolute value left-shifted numerator. As `mpn_div_qr` alters the numerator on
    // call, we allocate twice it's size. The first half [ `0`, `result._itemsize` ) is
    // passed to `mpn_div_qr` and [ `result._item_size`, `2*result._itemsize` ) is used
    // to cache the left-shifted absolute numerator.
    ScratchVector<mp_limb_t> abs_num(2 * result._itemsize);
    bool num_sign = limb_vector_abs(
        std::begin(rhs._data),
        std::end(rhs._data),
        std::begin(abs_num) + result._itemsize
    );
    limb_vector_lsl(std::begin(abs_num) + result._itemsize, std::end(abs_num), bits());

    for (std::size_t i = 0; i < _nitems; i++) {
        bool den_sign = limb_vector_abs(
            std::begin(_data) + (i + 0) * _itemsize,
            std::begin(_data) + (i + 1) * _itemsize,
            std::begin(abs_den)
        );
        std::copy_n(
            std::begin(abs_num) + result._itemsize,
            result._itemsize,
            std::begin(abs_num)
        );

        // `mpn_tdiv_qr` requires the number of *significant* limbs in denominator
        std::size_t den_significant_limbs
            = significant_limbs(std::begin(abs_den), std::end(abs_den));
        mpn_div_qr(
            &result._data[i * result._itemsize], // Quotient
            &abs_num[0],                         // Numerator
            result._itemsize,                    // Numerator limbs
            &abs_den[0],                         // Denominator
            den_significant_limbs                // Denominator significant limbs
        );

        // Negate result if negative
        if (num_sign ^ den_sign) {
            limb_vector_negate(
                std::begin(result._data) + (i + 0) * result._itemsize,
                std::begin(result._data) + (i + 1) * result._itemsize,
                std::begin(result._data) + (i + 0) * result._itemsize
            );
        }
    }
    return result;
}

APyFixedArray APyFixedArray::operator<<(const int shift_val) const
{
    // Left and right shift of data only affects the binary point in the data
    APyFixedArray result = *this;
    result._int_bits += shift_val;
    return result;
}

APyFixedArray APyFixedArray::operator>>(const int shift_val) const
{
    // Left and right shift of data only affects the binary point in the data
    APyFixedArray result = *this;
    result._int_bits -= shift_val;
    return result;
}

APyFixedArray& APyFixedArray::operator<<=(const int shift_val)
{
    // Left shift in place
    _int_bits += shift_val;
    return *this;
}

APyFixedArray& APyFixedArray::operator>>=(const int shift_val)
{
    // Right shift in place
    _int_bits -= shift_val;
    return *this;
}

APyFixedArray APyFixedArray::matmul(const APyFixedArray& rhs) const
{
    if (ndim() == 1 && rhs.ndim() == 1) {
        if (_shape[0] == rhs._shape[0]) {
            // Dimensionality for a standard scalar inner product checks out. Perform
            // the checked inner product.
            return _checked_inner_product(rhs, get_accumulator_mode_fixed());
        }
    }
    if (ndim() == 2 && (rhs.ndim() == 2 || rhs.ndim() == 1)) {
        if (_shape[1] == rhs._shape[0]) {
            // Dimensionality for a standard 2D matrix multiplication checks out.
            // Perform the checked 2D matrix
            return _checked_2d_matmul(rhs, get_accumulator_mode_fixed());
        }
    }

    // Unsupported `__matmul__` dimensionality, raise exception
    throw std::length_error(fmt::format(
        "APyFixedArray.__matmul__: input shape mismatch, lhs: {}, rhs: {}",
        tuple_string_from_vec(_shape),
        tuple_string_from_vec(rhs._shape)
    ));
}

APyFixedArray APyFixedArray::transpose() const
{
    if (ndim() > 2) {
        throw NotImplementedException(fmt::format(
            "Not implemented: high-dimensional (ndim={} > 2) tensor transposition",
            ndim()
        ));
    } else if (ndim() <= 1) {
        // Behave like `NumPy`, simply return `*this` if single-dimensional
        return *this;
    }

    // Resulting array with shape dimensions
    APyFixedArray result(_shape, bits(), int_bits());
    std::reverse(result._shape.begin(), result._shape.end());

    // Copy data
    for (std::size_t y = 0; y < _shape[0]; y++) {
        for (std::size_t x = 0; x < _shape[1]; x++) {
            std::copy_n(
                _data.begin() + (y * _shape[1] + x) * _itemsize,       // src
                _itemsize,                                             // limbs
                result._data.begin() + (x * _shape[0] + y) * _itemsize // dst
            );
        }
    }

    return result;
}

/* ********************************************************************************** *
 * *                               Other methods                                    * *
 * ********************************************************************************** */

APyFixedArray APyFixedArray::broadcast_to(const std::vector<std::size_t> shape) const
{
    if (!is_broadcastable(_shape, shape)) {
        throw nb::value_error(
            fmt::format(
                "Operands could not be broadcast together with shapes: {}, {}",
                tuple_string_from_vec(_shape),
                tuple_string_from_vec(shape)
            )
                .c_str()
        );
    }

    APyFixedArray result(shape, bits(), int_bits());
    broadcast_data_copy(_data.begin(), result._data.begin(), _shape, shape, _itemsize);
    return result;
}

APyFixedArray
APyFixedArray::squeeze(std::optional<std::variant<nb::int_, nb::tuple>> axis) const
{
    std::vector<std::size_t> shape = _shape;
    std::set<int> axis_set;
    if (axis.has_value()) {
        // given an int or tuple of ints, remove the specified dimensions if size is one
        // or throw an error
        auto ax = axis.value();
        nb::tuple axis_tuple;

        if (std::holds_alternative<nb::tuple>(ax)) {
            axis_tuple = std::get<nb::tuple>(ax);
        } else if (std::holds_alternative<nb::int_>(ax)) {
            int axis = int(std::get<nb::int_>(ax));
            axis_tuple = nb::make_tuple(axis);
        }
        for (auto ptr = axis_tuple.begin(); ptr != axis_tuple.end(); ptr++) {
            int axis_n = int(nanobind::cast<nb::int_>(*ptr));
            if (axis_n >= int(shape.size())) {
                throw nb::index_error(
                    "specified axis with larger than number of dimensions in the "
                    "APyFixedArray"
                );
            }
            axis_set.insert(axis_n);
        }
        int cnt = 0;
        auto predicate = [&](std::size_t dim) {
            if (axis_set.find(cnt) != axis_set.end() && dim != 1) {
                throw nb::value_error(
                    "cannot select an axis to squeeze that has size other than one"
                );
            }
            return axis_set.find(cnt++) != axis_set.end() && dim == 1;
        };
        shape.erase(std::remove_if(shape.begin(), shape.end(), predicate), shape.end());
    } else {
        // Given no specified axis, remove all dimensions of size one.
        auto predicate = [](std::size_t dim) { return dim == 1; };
        shape.erase(std::remove_if(shape.begin(), shape.end(), predicate), shape.end());
    }
    // if all dimensions where one, set the dimension to one, to avoid an error
    if (shape.size() == 0) {
        shape = { 1 };
    }

    // create the resulting Array and copy the data
    APyFixedArray result(shape, bits(), int_bits());
    std::copy_n(_data.begin(), _data.size(), result._data.begin());
    return result;
}

APyFixedArray
APyFixedArray::broadcast_to_python(const std::variant<nb::tuple, nb::int_> shape) const
{
    return broadcast_to(cpp_shape_from_python_shape_like(shape));
}

std::string APyFixedArray::repr() const
{
    std::stringstream ss {};
    ss << "APyFixedArray([";
    if (_shape[0]) {
        // Setup hex printing which will properly display the BCD characters
        ss << std::hex;

        std::vector<mp_limb_t> data(_itemsize, 0);
        for (std::size_t offset = 0; offset < _data.size(); offset += _itemsize) {
            std::copy_n(_data.begin() + offset, _itemsize, data.begin());

            // Zero sign bits outside of bit-range
            if (bits() % _LIMB_SIZE_BITS) {
                mp_limb_t and_mask = (mp_limb_t(1) << (bits() % _LIMB_SIZE_BITS)) - 1;
                data.back() &= and_mask;
            }

            // Double-dabble for binary-to-BCD conversion
            ss << bcds_to_string(double_dabble(data));
            ss << ", ";
        }

        ss.seekp(-2, ss.cur);
    }
    ss << "], shape=";
    ss << tuple_string_from_vec(_shape);
    ss << ", "
       << "bits=" << std::dec << bits() << ", "
       << "int_bits=" << std::dec << int_bits() << ")";
    return ss.str();
}

APyFixedArray APyFixedArray::reshape(nb::tuple new_shape) const
{
    std::vector<std::size_t> new_shape_vec;
    std::size_t total_size = ::fold_shape(_shape);
    std::size_t reshape_size = 1;
    int neg_one_count = 0;
    int neg_one_pos = -1;
    int index = 0;
    for (auto it = new_shape.begin(); it != new_shape.end(); ++it, ++index) {
        int current_value = nb::cast<int>(*it);
        if (current_value == -1) {
            neg_one_count++;
            neg_one_pos = index;        // Store the position of -1
            new_shape_vec.push_back(1); // Temporarily push 1, will be replaced later
        } else if (current_value < -1) {
            throw nb::value_error("Negative dimensions less than -1 are not allowed.");
        } else {
            std::size_t c_size_t = nb::cast<std::size_t>(*it);
            new_shape_vec.push_back(c_size_t);
            reshape_size *= c_size_t;
        }
    }

    if (neg_one_count > 1) {
        throw nb::value_error("Only one dimension can be -1.");
    }

    if (neg_one_count == 1) {
        if (total_size % reshape_size != 0) {
            throw nb::value_error(
                "The total size of new array must be unchanged and divisible by the "
                "known dimensions."
            );
        }
        new_shape_vec[neg_one_pos] = total_size / reshape_size;
    }

    // Validate if total elements match the original array
    std::size_t src_elements = ::fold_shape(_shape);
    std::size_t reshape_elements = ::fold_shape(new_shape_vec);
    if (src_elements != reshape_elements) {
        throw nb::value_error(
            "Total number of elements does not match the original array."
        );
    }

    APyFixedArray result = APyFixedArray(new_shape_vec, _bits, _int_bits);

    std::copy_n(this->_data.begin(), _data.size(), result._data.begin());

    return result;
}
// The shape of the array
nb::tuple APyFixedArray::shape() const
{
    nb::list result_list;
    for (std::size_t i = 0; i < _shape.size(); i++) {
        result_list.append(_shape[i]);
    }
    return nb::tuple(result_list);
}

// The dimension in the array
size_t APyFixedArray::ndim() const { return _shape.size(); }

size_t APyFixedArray::size() const { return _shape[0]; }

APyFixedArray APyFixedArray::abs() const
{
    // Increase word length of result by one
    const int res_int_bits = _int_bits + 1;
    const int res_bits = _bits + 1;

    // Resulting `APyFixedArray` fixed-point tensor
    APyFixedArray result(_shape, res_bits, res_int_bits);
    if (unsigned(res_bits) <= _LIMB_SIZE_BITS) {
        for (std::size_t i = 0; i < _data.size(); i++) {
            result._data[i] = std::abs(mp_limb_signed_t(_data[i]));
        }
        return result;
    }
    auto it_begin = _data.begin();
    for (std::size_t i = 0; i < _nitems; i++) {
        auto it_end = it_begin + _itemsize;
        limb_vector_abs(it_begin, it_end, result._data.begin() + i * result._itemsize);
        it_begin = it_end;
    }
    return result;
}

APyFixedArray APyFixedArray::operator-() const
{
    // Increase word length of result by one
    const int res_int_bits = _int_bits + 1;
    const int res_bits = _bits + 1;

    // Resulting `APyFixedArray` fixed-point tensor
    APyFixedArray result(_shape, res_bits, res_int_bits);
    if (unsigned(res_bits) <= _LIMB_SIZE_BITS) {
        for (std::size_t i = 0; i < _data.size(); i++) {
            result._data[i] = -_data[i];
        }
        return result;
    }
    // Sign-extend in case an additional limb is required
    _cast_correct_wl(result._data.begin(), res_bits, res_int_bits);
    auto it_begin = result._data.begin();
    for (std::size_t i = 0; i < _nitems; i++) {
        auto it_end = it_begin + result._itemsize;
        limb_vector_negate(it_begin, it_end, it_begin);
        it_begin = it_end;
    }
    return result;
}

std::variant<APyFixedArray, APyFixed> APyFixedArray::get_item(std::size_t idx) const
{
    if (idx >= _shape[0]) {
        throw std::out_of_range(fmt::format(
            "APyFixedArray.__getitem__: index {} is out of bounds for axis 0 with size "
            "{}",
            idx,
            _shape[0]
        ));
    }

    if (_ndim == 1) {
        // One dimension, return APyFixed
        APyFixed result(_bits, _int_bits);
        std::copy_n(_data.begin() + idx * _itemsize, _itemsize, result._data.begin());
        return result;
    } else {
        // New shape contains all dimensions except the very first one
        auto new_shape = std::vector<std::size_t>(_shape.begin() + 1, _shape.end());

        // Element stride is the new shape folded over multiplication
        std::size_t element_stride = fold_shape(new_shape);

        APyFixedArray result(new_shape, _bits, _int_bits);
        std::copy_n(
            _data.begin() + idx * _itemsize * element_stride,
            _itemsize * element_stride,
            result._data.begin()
        );
        return result;
    }
}

nb::ndarray<nb::numpy, double> APyFixedArray::to_numpy() const
{
    auto size = _nitems;
    // Dynamically allocate data to be passed to python
    double* result_data = new double[size];

    APyFixed type_caster(bits(), int_bits());
    for (std::size_t i = 0; i < size; i++) {
        std::copy_n(
            std::begin(_data) + i * _itemsize, _itemsize, std::begin(type_caster._data)
        );
        result_data[i] = double(type_caster);
    }

    // Delete 'data' when the 'owner' capsule expires
    nb::capsule owner(result_data, [](void* p) noexcept { delete[] (double*)p; });

    return nb::ndarray<nb::numpy, double>(result_data, _ndim, &_shape[0], owner);
}

bool APyFixedArray::is_identical(const APyFixedArray& other) const
{
    bool same_shape = _shape == other._shape;
    bool same_bit_spec = bits() == other.bits() && int_bits() == other.int_bits();
    return same_shape && same_bit_spec && (_data == other._data);
}

APyFixedArray APyFixedArray::cast(
    std::optional<int> int_bits,
    std::optional<int> frac_bits,
    std::optional<QuantizationMode> quantization,
    std::optional<OverflowMode> overflow,
    std::optional<int> bits
) const
{
    // Sanitize the input (bit-specifier validity tested in `bits_from_optional()`)
    const auto [new_bits, new_int_bits]
        = bits_from_optional_cast(bits, int_bits, frac_bits, _bits, _int_bits);

    const APyFixedCastOption cast_option = get_fixed_cast_mode();
    const auto quantization_mode = quantization.value_or(cast_option.quantization);
    const auto overflow_mode = overflow.value_or(cast_option.overflow);

    // The new result array (`bit_specifier_sanitize()` called in constructor)
    std::size_t result_limbs = bits_to_limbs(new_bits);
    std::size_t pad_limbs = bits_to_limbs(std::max(new_bits, _bits)) - result_limbs;
    APyFixedArray result(
        _shape,
        new_bits + _LIMB_SIZE_BITS * pad_limbs,
        new_int_bits + _LIMB_SIZE_BITS * pad_limbs
    );

    // `APyFixed` with the same word length as `*this` for reusing quantization methods
    APyFixed caster(_bits, _int_bits);

    // Do the casting
    _cast(
        result._data.begin(),
        result._data.end(),
        caster,
        new_bits,
        new_int_bits,
        quantization_mode,
        overflow_mode
    );

    result._bits = new_bits;
    result._int_bits = new_int_bits;
    result.buffer_resize(_shape, result_limbs);
    return result;
}

/* ********************************************************************************** *
 * *                      Static conversion from other types                          *
 * ********************************************************************************** */

APyFixedArray APyFixedArray::from_double(
    const nb::sequence& python_seq,
    std::optional<int> int_bits,
    std::optional<int> frac_bits,
    std::optional<int> bits
)
{
    if (nb::isinstance<nb::ndarray<>>(python_seq)) {
        // Sequence is NDArray. Initialize using `from_array`
        auto ndarray = nb::cast<nb::ndarray<nb::c_contig>>(python_seq);
        return from_array(ndarray, int_bits, frac_bits, bits);
    }

    APyFixedArray result(
        python_sequence_extract_shape(python_seq), int_bits, frac_bits, bits
    );

    // Extract all Python doubles and integers
    auto py_obj = python_sequence_walk<nb::float_, nb::int_>(python_seq);

    // Set data from doubles (reuse `APyFixed::from_double` conversion)
    APyFixed fix(result.bits(), result.int_bits());
    for (std::size_t i = 0; i < result._data.size() / result._itemsize; i++) {
        if (nb::isinstance<nb::float_>(py_obj[i])) {
            // Python double object
            double d = static_cast<double>(nb::cast<nb::float_>(py_obj[i]));
            fix.set_from_double(d);
            std::copy_n(
                fix._data.begin(),                          // src
                result._itemsize,                           // limbs to copy
                result._data.begin() + i * result._itemsize // dst
            );
        } else if (nb::isinstance<nb::int_>(py_obj[i])) {
            // Python integer object
            auto max_bits = result.frac_bits() < 0
                ? result.bits() - result.frac_bits() // Negative fractional bits
                : result.bits();                     // Non-negative fractional bits
            auto limb_vec = python_long_to_limb_vec(
                nb::cast<nb::int_>(py_obj[i]), bits_to_limbs(max_bits)
            );
            fix.set_from_double(double(APyFixed(max_bits, max_bits, limb_vec)));
            std::copy_n(
                fix._data.begin(),                          // src
                result._itemsize,                           // limbs to copy
                result._data.begin() + i * result._itemsize // dst
            );
        }
    }

    return result;
}

APyFixedArray APyFixedArray::from_array(
    const nb::ndarray<nb::c_contig>& ndarray,
    std::optional<int> int_bits,
    std::optional<int> frac_bits,
    std::optional<int> bits
)
{
    std::size_t ndim = ndarray.ndim();
    if (ndim == 0) {
        throw nb::type_error(
            "APyFixedArray.from_float(): NDArray with ndim == 0 not supported"
        );
    }
    std::vector<std::size_t> shape(ndim, 0);
    for (std::size_t i = 0; i < ndim; i++) {
        shape[i] = ndarray.shape(i);
    }

    APyFixedArray result(shape, int_bits, frac_bits, bits);
    result._set_values_from_ndarray(ndarray);
    return result;
}

/* ********************************************************************************** *
 * *                            Private member functions                            * *
 * ********************************************************************************** */

template <typename RANDOM_ACCESS_ITERATOR>
void APyFixedArray::_checked_hadamard_product(
    const APyFixedArray& rhs,
    RANDOM_ACCESS_ITERATOR res_out,       // output iterator
    std::vector<mp_limb_t>& prod_scratch, // scratch: product result
    std::vector<mp_limb_t>& op1_scratch,  // scratch: absolute value operand 1
    std::vector<mp_limb_t>& op2_scratch   // scratch: absolute value operand 2
) const
{
    std::size_t res_bits = bits() + rhs.bits();
    if (res_bits <= _LIMB_SIZE_BITS) {
        // Native multiplication supported
        simd::vector_mul(_data.begin(), rhs._data.begin(), res_out, _nitems);
        return; // early exit
    } else {
        // Perform multiplication for each element in the tensor. `mpn_mul` requires:
        // "The destination has to have space for `s1n` + `s2n` limbs, even if the
        // product's most significant limb is zero."
        auto op1_begin = _data.begin();
        auto op2_begin = rhs._data.begin();
        std::size_t result_itemsize = bits_to_limbs(res_bits);
        for (std::size_t i = 0; i < _nitems; i++) {
            // Current working operands
            auto op1_end = op1_begin + _itemsize;
            auto op2_end = op2_begin + rhs._itemsize;

            // Evaluate resulting sign
            bool sign1 = mp_limb_signed_t(*(op1_end - 1)) < 0;
            bool sign2 = mp_limb_signed_t(*(op2_end - 1)) < 0;
            bool result_sign = sign1 ^ sign2;

            // Retrieve the absolute value of both operands, as required by GMP
            limb_vector_abs(op1_begin, op1_end, op1_scratch.begin());
            limb_vector_abs(op2_begin, op2_end, op2_scratch.begin());

            // Perform the multiplication
            mpn_mul(
                &prod_scratch[0],   // dst
                &op1_scratch[0],    // src1
                op1_scratch.size(), // src1 limb vector length
                &op2_scratch[0],    // src2
                op2_scratch.size()  // src2 limb vector length
            );

            if (result_sign) {
                // Negate result
                limb_vector_negate(
                    prod_scratch.begin(),
                    prod_scratch.begin() + result_itemsize,
                    res_out + (i + 0) * result_itemsize
                );
            } else {
                // Copy into resulting vector
                std::copy(
                    prod_scratch.begin(),
                    prod_scratch.begin() + result_itemsize,
                    res_out + (i + 0) * result_itemsize
                );
            }
            op1_begin = op1_end;
            op2_begin = op2_end;
        }
    }
}

APyFixedArray APyFixedArray::_checked_inner_product(
    const APyFixedArray& rhs,                     // rhs
    std::optional<APyFixedAccumulatorOption> mode // optional accumulation mode
) const
{
    int res_bits = bits() + rhs.bits() + bit_width(_shape[0] - 1);
    int res_int_bits = int_bits() + rhs.int_bits() + bit_width(_shape[0] - 1);
    APyFixedArray result({ 1 }, res_bits, res_int_bits);

    if (!mode.has_value()) {
        if (unsigned(res_bits) <= _LIMB_SIZE_BITS) {
            // Fastest path, no accumulation mode specified and result fit in a single
            // limb.
            result._data[0] = simd::vector_multiply_accumulate(
                _data.begin(), rhs._data.begin(), _data.size()
            );
            return result;
        } else { /* unsigned(res_bits) > _LIMB_SIZE_BITS */
            // Scratch memories used for inner product
            std::vector<mp_limb_t> prod_scratch(_itemsize + rhs._itemsize);
            std::vector<mp_limb_t> op1_scratch(_itemsize);
            std::vector<mp_limb_t> op2_scratch(rhs._itemsize);
            APyFixedArray hadamard_scratch(
                _shape, bits() + rhs.bits(), int_bits() + rhs.int_bits()
            );
            _checked_inner_product_full(
                rhs, result, hadamard_scratch, prod_scratch, op1_scratch, op2_scratch
            );
            return result;
        }
    } else { /* mode.has_value() */

        // Scratch memories used for inner product
        std::vector<mp_limb_t> prod_scratch(_itemsize + rhs._itemsize);
        std::vector<mp_limb_t> op1_scratch(_itemsize);
        std::vector<mp_limb_t> op2_scratch(rhs._itemsize);
        APyFixedArray hadamard_scratch(
            _shape, bits() + rhs.bits(), int_bits() + rhs.int_bits()
        );
        _checked_inner_product_acc(
            rhs, result, hadamard_scratch, prod_scratch, op1_scratch, op2_scratch, *mode
        );
        result._bits = mode->bits;
        result._int_bits = mode->int_bits;
        result.buffer_resize(result._shape, bits_to_limbs(mode->bits));
        return result;
    }
}

void APyFixedArray::_checked_inner_product_full(
    const APyFixedArray& rhs,             // rhs
    APyFixedArray& result,                // result
    APyFixedArray& hadamard_scratch,      // scratch: hadamard product
    std::vector<mp_limb_t>& prod_scratch, // scratch: product result
    std::vector<mp_limb_t>& op1_scratch,  // scratch: absolute value operand 1
    std::vector<mp_limb_t>& op2_scratch   // scratch: absolute value operand 2
) const
{
    // Hadamard product of `*this` and `rhs`
    _checked_hadamard_product(
        rhs, hadamard_scratch._data.begin(), prod_scratch, op1_scratch, op2_scratch
    );

    // Accumulate the result
    for (std::size_t i = 0; i < _nitems; i++) {
        mpn_add(
            &*std::begin(result._data),                              // dst
            &*std::begin(result._data),                              // src1
            result._data.size(),                                     // src1 limbs
            &hadamard_scratch._data[i * hadamard_scratch._itemsize], // src2
            hadamard_scratch._itemsize                               // src2 limbs
        );
    }
}

void APyFixedArray::_checked_inner_product_acc(
    const APyFixedArray& rhs,             // rhs
    APyFixedArray& result,                // result
    APyFixedArray& hadamard_scratch,      // scratch: hadamard product
    std::vector<mp_limb_t>& prod_scratch, // scratch: product result
    std::vector<mp_limb_t>& op1_scratch,  // scratch: absolute value operand 1
    std::vector<mp_limb_t>& op2_scratch,  // scratch: absolute value operand 2
    const APyFixedAccumulatorOption& mode // accumulation mode
) const
{
    // Hadamard product of `*this` and `rhs`
    _checked_hadamard_product(
        rhs, hadamard_scratch._data.begin(), prod_scratch, op1_scratch, op2_scratch
    );

    APyFixedArray hadamard_new = hadamard_scratch.cast(
        mode.int_bits, mode.bits - mode.int_bits, mode.quantization, mode.overflow
    );

    // Accumulate the result
    std::size_t hadamard_itemsize = bits_to_limbs(mode.bits);
    for (std::size_t i = 0; i < _nitems; i++) {
        mpn_add(
            &*std::begin(result._data),                      // dst
            &*std::begin(result._data),                      // src1
            result._data.size(),                             // src1 limbs
            &hadamard_new._data[i * hadamard_itemsize],      // src2
            std::min(hadamard_itemsize, result._data.size()) // src2 limbs
        );
    }
}

APyFixedArray APyFixedArray::_checked_2d_matmul(
    const APyFixedArray& rhs, std::optional<APyFixedAccumulatorOption> mode
) const
{
    // Resulting shape
    const std::size_t res_cols = rhs._shape.size() > 1 ? rhs._shape[1] : 1;
    std::vector<std::size_t> res_shape = rhs._shape.size() > 1
        ? std::vector<std::size_t> { _shape[0], rhs._shape[1] } // rhs is 2-D
        : std::vector<std::size_t> { _shape[0] };               // rhs is 1-D

    // Resulting number of bits
    std::size_t res_bits = bits() + rhs.bits() + bit_width(_shape[1] - 1);
    std::size_t res_int_bits = int_bits() + rhs.int_bits() + bit_width(_shape[1] - 1);

    // Resulting tensor and a working column from `rhs`
    APyFixedArray result(res_shape, res_bits, res_int_bits);
    APyFixedArray current_col({ rhs._shape[0] }, rhs.bits(), rhs.int_bits());

    /*
     * Special case #1: No accumulator mode specified and resulting matrix elements fit
     * into a single limb. This is the fastest `_checked_2d_matmul` path.
     */
    if (!mode.has_value()) {
        if (res_bits <= _LIMB_SIZE_BITS) {
            for (std::size_t x = 0; x < res_cols; x++) {
                // Copy column from `rhs` and use as the current working column. As
                // reading columns from `rhs` is cache-inefficient, we like to do this
                // only once for each element in the resulting matrix.
                for (std::size_t row = 0; row < rhs._shape[0]; row++) {
                    current_col._data[row] = rhs._data[x + row * res_cols];
                }
                for (std::size_t y = 0; y < res_shape[0]; y++) {
                    result._data[y * res_cols + x] = simd::vector_multiply_accumulate(
                        _data.begin() + (y * _shape[1]), // src1
                        current_col._data.begin(),       // src2
                        _shape[1]                        // multiply-accumulate length
                    );
                }
            }
            return result; // early exit
        }
    }

    /*
     * General case: This always works but is slower than the special cases.
     */
    // Scratch memories for avoiding memory re-allocation
    std::vector<mp_limb_t> prod_scratch(_itemsize + rhs._itemsize);
    std::vector<mp_limb_t> op1_abs(_itemsize);
    std::vector<mp_limb_t> op2_abs(rhs._itemsize);
    APyFixedArray current_res({ 1 }, res_bits, res_int_bits);
    APyFixedArray current_row({ _shape[1] }, bits(), int_bits());
    APyFixedArray hadamard_tmp(
        { rhs._shape[0] }, bits() + rhs.bits(), int_bits() + rhs.int_bits()
    );
    if (!mode.has_value()) {

        for (std::size_t x = 0; x < res_cols; x++) {
            // Copy column from `rhs` and use as the current working column. As
            // reading columns from `rhs` is cache-inefficient, we like to do this
            // only once for each element in the resulting matrix.
            for (std::size_t row = 0; row < rhs._shape[0]; row++) {
                std::copy_n(
                    rhs._data.begin() + (x + row * res_cols) * rhs._itemsize,
                    rhs._itemsize,
                    current_col._data.begin() + row * rhs._itemsize
                );
            }
            for (std::size_t y = 0; y < res_shape[0]; y++) {
                // Copy current row from lhs (`*this`)
                std::copy_n(
                    _data.begin() + (y * _shape[1] * _itemsize), // src
                    _itemsize * _shape[1],                       // limbs to copy
                    current_row._data.begin()                    // dst
                );

                // Perform the inner product
                current_col._checked_inner_product_full(
                    current_row,
                    current_res,
                    hadamard_tmp,
                    prod_scratch,
                    op1_abs,
                    op2_abs
                );

                // Copy into the resulting vector
                std::copy_n(
                    current_res._data.begin(),
                    result._itemsize,
                    result._data.begin() + (y * res_cols + x) * result._itemsize
                );

                std::fill(current_res._data.begin(), current_res._data.end(), 0);
            }
        }
        return result;

    } else { /* mode.has_value() */

        result._itemsize = bits_to_limbs(mode->bits);
        for (std::size_t x = 0; x < res_cols; x++) {
            // Copy column from `rhs` and use as the current working column. As
            // reading columns from `rhs` is cache-inefficient, we like to do this
            // only once for each element in the resulting matrix.
            for (std::size_t row = 0; row < rhs._shape[0]; row++) {
                std::copy_n(
                    rhs._data.begin() + (x + row * res_cols) * rhs._itemsize,
                    rhs._itemsize,
                    current_col._data.begin() + row * rhs._itemsize
                );
            }
            for (std::size_t y = 0; y < res_shape[0]; y++) {
                // Copy current row from lhs (`*this`)
                std::copy_n(
                    _data.begin() + (y * _shape[1] * _itemsize), // src
                    _itemsize * _shape[1],                       // limbs to copy
                    current_row._data.begin()                    // dst
                );

                // Perform the inner product
                current_col._checked_inner_product_acc(
                    current_row,
                    current_res,
                    hadamard_tmp,
                    prod_scratch,
                    op1_abs,
                    op2_abs,
                    *mode
                );

                // Copy into the resulting vector
                std::copy_n(
                    current_res._data.begin(),
                    result._itemsize,
                    result._data.begin() + (y * res_cols + x) * result._itemsize
                );

                std::fill(current_res._data.begin(), current_res._data.end(), 0);
            }
        }

        result._bits = mode->bits;
        result._int_bits = mode->int_bits;
        result._itemsize = bits_to_limbs(mode->bits);
        result._data.resize(result._itemsize * result._nitems);
        return result;
    }
}

template <typename RANDOM_ACCESS_ITERATOR>
void APyFixedArray::_cast_correct_wl(
    RANDOM_ACCESS_ITERATOR output_it, int new_bits, int new_int_bits
) const
{
    auto result_itemsize = bits_to_limbs(new_bits);
    auto shift_amount = new_bits - new_int_bits - frac_bits();
    auto it_begin = output_it;

    // If item sizes are the same, copy the whole block
    if (_itemsize == result_itemsize) {
        // Copy data into the result
        std::copy_n(
            _data.begin(),       // src
            _itemsize * _nitems, // limbs to copy
            it_begin             // dst
        );
        // If shift if required
        if (shift_amount > 0) {
            // Short data optimization, single limb
            if (_itemsize == 1) {
                // For each scalar in the tensor...
                // Note that it is not possible to shift out any data here
                for (std::size_t i = 0; i < _nitems; i++) {
                    output_it[i] = _data[i] << shift_amount;
                }
                return; // early exit
            }
            unsigned limb_skip = shift_amount / _LIMB_SIZE_BITS;
            unsigned limb_shift = shift_amount % _LIMB_SIZE_BITS;
            // For each scalar in the tensor...
            // Note that it is not possible to shift out any data here
            for (std::size_t i = 0; i < _nitems; i++) {
                auto it_end = it_begin + result_itemsize; // output sentinel
                limb_vector_lsl_inner(
                    it_begin, it_end, limb_skip, limb_shift, result_itemsize
                );
                it_begin = it_end;
            }
        }
        return; // early return
    }

    auto data_begin = _data.begin();
    // Shift if required
    if (shift_amount > 0) {
        // Compute limb skip and shift once
        unsigned limb_skip = shift_amount / _LIMB_SIZE_BITS;
        unsigned limb_shift = shift_amount % _LIMB_SIZE_BITS;
        // For each scalar in the tensor...
        for (std::size_t i = 0; i < _nitems; i++) {
            auto it_end = it_begin + result_itemsize; // output sentinel
            auto data_end = data_begin + _itemsize;
            // Copy data into the result
            std::copy_n(
                data_begin, // src
                _itemsize,  // limbs to copy
                it_begin    // dst
            );

            bool result_is_negative = limb_vector_is_negative(data_begin, data_end);
            std::fill(
                it_begin + _itemsize, it_end, result_is_negative ? mp_limb_t(-1) : 0
            );
            // Shift if required
            // Note that it is not possible to shift out any data here
            limb_vector_lsl_inner(
                it_begin, it_end, limb_skip, limb_shift, result_itemsize
            );
            it_begin = it_end;
            data_begin = data_end;
        }
    } else {
        // For each scalar in the tensor...
        // Same as above, but no shift so only copy and sign-extend
        for (std::size_t i = 0; i < _nitems; i++) {
            auto it_end = it_begin + result_itemsize; // output sentinel
            auto data_end = data_begin + _itemsize;
            // Copy data into the result
            std::copy_n(
                data_begin, // src
                _itemsize,  // limbs to copy
                it_begin    // dst
            );

            bool result_is_negative = limb_vector_is_negative(data_begin, data_end);
            std::fill(
                it_begin + _itemsize, it_end, result_is_negative ? mp_limb_t(-1) : 0
            );
            it_begin = it_end;
            data_begin = data_end;
        }
    }
}

template <typename RANDOM_ACCESS_ITERATOR>
void APyFixedArray::_cast(
    RANDOM_ACCESS_ITERATOR it_begin,
    RANDOM_ACCESS_ITERATOR it_end,
    APyFixed& caster,
    int new_bits,
    int new_int_bits,
    QuantizationMode quantization,
    OverflowMode overflow
) const
{
    (void)it_end;

    // For each scalar in the tensor...
    std::size_t result_limbs = bits_to_limbs(new_bits);
    std::size_t pad_limbs = bits_to_limbs(std::max(new_bits, _bits)) - result_limbs;
    auto data_begin = _data.begin();
    auto it_start = it_begin;
    for (std::size_t i = 0; i < _nitems; i++) {
        // Copy data into caster `APyFixed`. No sign-extension.
        std::copy_n(
            data_begin,          // src
            _itemsize,           // limbs to copy
            caster._data.begin() // dst
        );

        auto it_end_ = it_start + result_limbs;

        // Perform the resizing
        caster._cast(
            it_start,            // output start
            it_end_ + pad_limbs, // output sentinel
            new_bits,
            new_int_bits,
            quantization,
            overflow
        );
        data_begin += _itemsize;
        it_start = it_end_;
    }
}

void APyFixedArray::_set_bits_from_ndarray(const nb::ndarray<nb::c_contig>& ndarray)
{
#define CHECK_AND_SET_BITS_FROM_NPTYPE(__TYPE__)                                       \
    do {                                                                               \
        if (ndarray.dtype() == nb::dtype<__TYPE__>()) {                                \
            auto ndarray_view = ndarray.view<__TYPE__, nb::ndim<1>>();                 \
            for (std::size_t i = 0; i < ndarray.size(); i++) {                         \
                mp_limb_t data;                                                        \
                if (std::is_signed<__TYPE__>::value) {                                 \
                    data = static_cast<mp_limb_signed_t>(ndarray_view.data()[i]);      \
                } else {                                                               \
                    data = static_cast<mp_limb_t>(ndarray_view.data()[i]);             \
                }                                                                      \
                _data[i * _itemsize] = data;                                           \
                if (_itemsize > 0) {                                                   \
                    std::fill_n(                                                       \
                        _data.begin() + i * _itemsize + 1,                             \
                        _itemsize - 1,                                                 \
                        mp_limb_signed_t(data) < 0 ? -1 : 0                            \
                    );                                                                 \
                }                                                                      \
            }                                                                          \
            return; /* Conversion completed, exit `_set_bits_from_ndarray()` */        \
        }                                                                              \
    } while (0)

    // Each `CHECK_AND_SET_BITS_FROM_NPTYPE` checks the dtype of `ndarray` and
    // converts all the data if it matches. If successful,
    // `CHECK_AND_SET_BITS_FROM_NPTYPES` returns. Otherwise, the next attempted
    // conversion will take place
    CHECK_AND_SET_BITS_FROM_NPTYPE(std::int64_t);
    CHECK_AND_SET_BITS_FROM_NPTYPE(std::int32_t);
    CHECK_AND_SET_BITS_FROM_NPTYPE(std::int16_t);
    CHECK_AND_SET_BITS_FROM_NPTYPE(std::int8_t);
    CHECK_AND_SET_BITS_FROM_NPTYPE(std::uint64_t);
    CHECK_AND_SET_BITS_FROM_NPTYPE(std::uint32_t);
    CHECK_AND_SET_BITS_FROM_NPTYPE(std::uint16_t);
    CHECK_AND_SET_BITS_FROM_NPTYPE(std::uint8_t);

    // None of the `CHECK_AND_SET_BITS_FROM_NPTYPE` succeeded. Unsupported type,
    // throw an error. If possible, it would be nice to show a string representation
    // of the `dtype`. Seems hard to achieve with nanobind, but please fix this if
    // you find out how this can be achieved.
    throw nb::type_error(
        "APyFixedArray::_set_bits_from_ndarray(): "
        "expecting integer `dtype`"
    );
}

void APyFixedArray::_set_values_from_ndarray(const nb::ndarray<nb::c_contig>& ndarray)
{
#define CHECK_AND_SET_VALUES_FROM_NPTYPE(__TYPE__)                                     \
    do {                                                                               \
        if (ndarray.dtype() == nb::dtype<__TYPE__>()) {                                \
            auto ndarray_view = ndarray.view<__TYPE__, nb::ndim<1>>();                 \
            if (unsigned(_bits) <= _LIMB_SIZE_BITS) {                                  \
                int fr_bits = frac_bits();                                             \
                unsigned limb_shift_val = bits() & (_LIMB_SIZE_BITS - 1);              \
                auto shft_amnt = _LIMB_SIZE_BITS - limb_shift_val;                     \
                for (std::size_t i = 0; i < ndarray.size(); i++) {                     \
                    double data = static_cast<double>(ndarray_view.data()[i]);         \
                    _data[i] = get_data_from_double(data, bits(), fr_bits, shft_amnt); \
                }                                                                      \
            } else {                                                                   \
                APyFixed caster(bits(), int_bits());                                   \
                for (std::size_t i = 0; i < ndarray.size(); i++) {                     \
                    double data = static_cast<double>(ndarray_view.data()[i]);         \
                    caster.set_from_double(data);                                      \
                    std::copy_n(                                                       \
                        caster._data.begin(), _itemsize, _data.begin() + i * _itemsize \
                    );                                                                 \
                }                                                                      \
            }                                                                          \
            return; /* Conversion completed, exit `_set_values_from_ndarray()` */      \
        }                                                                              \
    } while (0)

    // Each `CHECK_AND_SET_VALUES_FROM_NPTYPE` checks the dtype of `ndarray` and
    // converts all the data if it matches. If successful,
    // `CHECK_AND_SET_VALUES_FROM_NPTYPES` returns. Otherwise, the next attempted
    // conversion will take place
    CHECK_AND_SET_VALUES_FROM_NPTYPE(double);
    CHECK_AND_SET_VALUES_FROM_NPTYPE(float);
    CHECK_AND_SET_VALUES_FROM_NPTYPE(std::int64_t);
    CHECK_AND_SET_VALUES_FROM_NPTYPE(std::int32_t);
    CHECK_AND_SET_VALUES_FROM_NPTYPE(std::int16_t);
    CHECK_AND_SET_VALUES_FROM_NPTYPE(std::int8_t);
    CHECK_AND_SET_VALUES_FROM_NPTYPE(std::uint64_t);
    CHECK_AND_SET_VALUES_FROM_NPTYPE(std::uint32_t);
    CHECK_AND_SET_VALUES_FROM_NPTYPE(std::uint16_t);
    CHECK_AND_SET_VALUES_FROM_NPTYPE(std::uint8_t);

    // None of the `CHECK_AND_VALUES_FROM_NPTYPE` succeeded. Unsupported type, throw
    // an error. If possible, it would be nice to show a string representation of
    // the `dtype`. Seems hard to achieve with nanobind, but please fix this if you
    // find out how this can be achieved.
    throw nb::type_error(
        "APyFixedArray::_set_values_from_ndarray(): "
        "unsupported `dtype` expecting integer/float"
    );
}
