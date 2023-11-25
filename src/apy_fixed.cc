/*
 * APyFixed: Dynamic arbitrary fixed-point data type.
 */

#include "apy_fixed.h"
#include "apy_util.h"

#include <algorithm>  // std::copy, std::max
#include <cstddef>    // std::size_t
#include <stdexcept>  // std::domain_error
#include <string>     // std::string

// GMP should be included after all other includes
#include <gmp.h>


/*
 * Zero initializing constructor
 */
APyFixed::APyFixed(int bits, int int_bits) :
    _bits{bits},
    _int_bits{int_bits},
    _data(bits_to_limbs(bits))
{
    _constructor_sanitize_bits();
}

/*
 * Underlying vector iterator-based constructor
 */
template <typename _ITER>
APyFixed::APyFixed(int bits, int int_bits, _ITER begin, _ITER end) :
    _bits{bits},
    _int_bits{int_bits},
    _data(begin, end)
{
    if (bits <= 0) {
        throw std::domain_error(
            "APyInt needs a positive integer bit-size of at-least 1 bit"
        );
    }

    auto iterator_elements = std::distance(begin, end);
    if (iterator_elements <= 0) {
        throw std::domain_error(
            "APyInt vector initialization needs propriate vector size"
        );
    } else if (std::size_t(iterator_elements) != bits_to_limbs(bits)) {
        throw std::domain_error(
            "APyInt vector initialization needs propriate vector size"
        );
    }

    // Two-complements overflow bits outside of the range
    twos_complement_overflow();
}




// Construction from std::vector<mp_limb_t>
APyFixed::APyFixed(int bits, int int_bits, const std::vector<mp_limb_t> &vec) :
    APyFixed(bits, int_bits, vec.begin(), vec.end()) {}

// Construction from std::vector<mp_limb_signed_t>
APyFixed::APyFixed(int bits, int int_bits, const std::vector<mp_limb_signed_t> &vec) :
    APyFixed(bits, int_bits, vec.begin(), vec.end()) {}

/*
 * Methods
 */

void APyFixed::twos_complement_overflow() noexcept
{
    unsigned bits_last_word = _bits & (_LIMB_SIZE_BITS-1);
    if (bits_last_word) {
        // Exploit signed arithmetic right-shift to perform two's complement overflow
        unsigned shft_amnt = _LIMB_SIZE_BITS - bits_last_word;
        _data.back() = mp_limb_signed_t(_data.back() << (shft_amnt)) >> (shft_amnt);
    }
}

/*
 * Binary operators
 */

APyFixed APyFixed::operator+(const APyFixed &rhs) const
{
    const int res_int_bits = std::max(rhs.int_bits(), int_bits()) + 1;
    const int res_frac_bits = std::max(rhs.frac_bits(), frac_bits());

    APyFixed result(res_int_bits+res_frac_bits, res_int_bits);
    std::vector<mp_limb_t> operand_shifted;

    if (frac_bits() < rhs.frac_bits()) {
        // Right-hand side (rhs) has more fractional bits.
        _normalize_binary_points(result, operand_shifted, rhs, *this);
    } else {  // frac_bits() >= rhs.frac_bits() 
        // Left-hand side (*this) has more fractional bits.
        _normalize_binary_points(result, operand_shifted, *this, rhs);
    }

    // Add with carry and return
    mpn_add_n(
        &result._data[0],     // dst
        &result._data[0],     // src1
        &operand_shifted[0],  // src2
        result.vector_size()  // limb vector length
    );
    return result;
}

APyFixed APyFixed::operator-(const APyFixed &rhs) const
{
    const int res_int_bits = std::max(rhs.int_bits(), int_bits()) + 1;
    const int res_frac_bits = std::max(rhs.frac_bits(), frac_bits());

    APyFixed result(res_int_bits+res_frac_bits, res_int_bits);
    std::vector<mp_limb_t> operand_shifted;

    bool swap_operand;
    if (frac_bits() < rhs.frac_bits()) {
        // Right-hand side (rhs) has more fractional bits.
        _normalize_binary_points(result, operand_shifted, rhs, *this);
        swap_operand = false;
    } else {  // frac_bits() >= rhs.frac_bits() 
        // Left-hand side (*this) has more fractional bits.
        _normalize_binary_points(result, operand_shifted, *this, rhs);
        swap_operand = true;
    }

    // Add with carry and return
    mpn_sub_n(
        &result._data[0],                                       // dst
        swap_operand ? &result._data[0] : &operand_shifted[0],  // src1
        swap_operand ? &operand_shifted[0] : &result._data[0],  // src2
        result.vector_size()                                    // limb vector length
    );
    return result;
}

APyFixed APyFixed::operator*(const APyFixed &rhs) const
{
    /*
     * * This needs some thinking as APyFixed::operand-() adds a single bit...
     * * 'mpn_mul' requires the first operand to have longer or equal length to operand
     *   two
     * * Check sign of result!
     */
    const int res_int_bits = int_bits() + rhs.int_bits();
    const int res_frac_bits = frac_bits() + rhs.frac_bits();
    APyFixed abs_operand1 = this->is_negative() ? -(*this) : *this;
    APyFixed abs_operand2 =   rhs.is_negative() ?     -rhs :   rhs;
    APyFixed result(res_int_bits, res_frac_bits);
    mpn_mul(
        &result._data[0],
        &abs_operand1._data[0],
        abs_operand1.vector_size(),
        &abs_operand2._data[0],
        abs_operand2.vector_size()
    );
    return result;
}


/*
 * Unariy operators
 */
 APyFixed APyFixed::operator-() const
{
    // Invert all bits and increment the lsb
    APyFixed result(_bits+1, _int_bits+1);
    for (std::size_t i=0; i<vector_size(); i++) {
        result._data[i] = ~_data[i];
    }
    if (result.vector_size() > vector_size()) {
        mp_limb_t sign = _data.back() & (mp_limb_t(1) << (_LIMB_SIZE_BITS - 1));
        result._data.back() = sign ? 0 : mp_limb_signed_t(-1);
    }
    result.increment_lsb();
    return result;
}

// Increment the LSB without making the fixed-point number wider. Returns carry out
mp_limb_t APyFixed::increment_lsb() noexcept
{
    return mpn_add_1(
        &_data[0],      // dst
        &_data[0],      // src1
        vector_size(),  // limb vector length
        1               // src2
    );
}

/*
 * Utility functions
 */

void APyFixed::from_vector(const std::vector<mp_limb_t> &new_vector)
{
    if (new_vector.size() != this->vector_size()) {
        throw std::domain_error("Vector size miss-match");
    }
    _data = new_vector;
    twos_complement_overflow();
}

/*
 * Conversion to string functions
 */

std::string APyFixed::to_string_dec() const {

    // Print absolute value of number, and conditionally append a minus sign
    APyFixed abs_val(_bits+1, _int_bits+1);
    abs_val = is_negative() ? -(*this) : *this;

    // Conversion of data to BCD
    std::vector<uint8_t> bcd_list = double_dabble(abs_val._data);
    auto bcd_binary_point = 0;
    auto num_prev_bcds = bcd_list.size();

    if (int_bits() < bits()) {
        // Reverse order of BCD list to most-significant-bcd first, so that bcd_div2()
        // can append to bcd_list from the back.
        std::reverse(bcd_list.begin(), bcd_list.end());

        for (int i=0; i<bits()-int_bits(); i++) {
            bcd_div2(bcd_list);
            if (bcd_list.size() > num_prev_bcds) {
                bcd_binary_point++;
                num_prev_bcds = bcd_list.size();
            }
        }

        // Reverse order of BCD list (back) to least-significant-bcd first
        std::reverse(bcd_list.begin(), bcd_list.end());

        // Trim unnecessary zeros at start of BCD number that might be occur during
        // bcd_div2(). The first zero after the decimal point (of value 10^0) is never
        // trimmed.
        while (bcd_list.size() > std::size_t(bcd_binary_point+1)) {
            if (bcd_list.back() != 0) {
                // Nothing more to trim, break out of loop
                break;
            }
            bcd_list.pop_back();
        }
    }

    // Multiply BCD number by two
    for (int i=0; i<int_bits()-bits(); i++) {
        bcd_mul2(bcd_list);
    }

    // Convert BCD number to characters in a string and return
    std::string result = is_negative() ? "-" : "";
    for (int i=bcd_list.size()-1; i >= 0; i--) {
        result.push_back( static_cast<char>(bcd_list[i] + 0x30) );
        if (bcd_binary_point && i == bcd_binary_point) {
            result.append(".");
        }
    }
    return result;
}

std::string APyFixed::to_string_hex() const 
{
    throw NotImplementedException();
}

std::string APyFixed::to_string_oct() const 
{
    throw NotImplementedException();
}

std::string APyFixed::repr() const {
    return std::string(
        "fx<"
        + std::to_string(_bits)
        + ", "
        + std::to_string(_int_bits)
        + ">("
        + to_string()
        + ")"
    );
}

/*
 * Private helper methods
 */

// Sanitize the _bits and _int_bits parameters
void APyFixed::_constructor_sanitize_bits() const
{
    if (_bits <= 0) {
        throw std::domain_error(
            "APyInt needs a positive integer bit-size of at-least 1 bit"
        );
    }
}

// Sign preserving automatic size extending arithmetic left shift
std::vector<mp_limb_t> APyFixed::_data_asl(unsigned shift_val) const
{
    if (shift_val == 0) {
        return _data;
    }

    // Perform the left-shift
    unsigned vec_skip_val  = shift_val/_LIMB_SIZE_BITS;
    unsigned bit_shift_val = shift_val%_LIMB_SIZE_BITS;
    std::vector<mp_limb_t> result(bits_to_limbs(bits() + shift_val), 0);
    std::copy(_data.cbegin(), _data.cend(), result.begin()+vec_skip_val);
    mpn_lshift(
        &result[0],     // dst
        &result[0],     // src
        result.size(),  // limb vector length
        bit_shift_val   // shift amount
    );

    // Append sign bits for "arithmetic" shift
    if ( (bits()+shift_val)%_LIMB_SIZE_BITS > 0 ) {
        // Arithmetic right-shift
        mp_limb_t sign_int = mp_limb_signed_t(_data.back()) >> (_LIMB_SIZE_BITS - 1);
        mp_limb_t or_mask = ~((mp_limb_t(1) << (bits()+shift_val)%_LIMB_SIZE_BITS) - 1);
        result.back() |= or_mask & sign_int;
    }
    
    return result;
}


// Prepare for binary arithmetic by aligning the binary points of two limb vectors.
// The limbs of the first operand (`operand1`) are copied into the limb vector of
// `result` and vector sign extended. The limbs of the second operand (`operand2`)
// are vector-shifted by `operand1.frac_bits()` - `operand2.frac_bits()` bits to the
// left and copied into the `operand_shifted` limb vector.
// Assumptions when calling this method:
//   * `result` is already initialized with a propriate vector limb size
//   * `operand_shifted` is *not* initialized, i.e., it's an empty (zero element)
//      vector
//   * the number of fractional bits in `operand1` is greater than that of `operand2`
void APyFixed::_normalize_binary_points(
    APyFixed &result,
    std::vector<mp_limb_t> &operand_shifted,
    const APyFixed &operand1,
    const APyFixed &operand2
) const {
    std::copy(operand1._data.cbegin(), operand1._data.cend(), result._data.begin());
    operand_shifted = operand2._data_asl(operand1.frac_bits() - operand2.frac_bits());

    // Vector sign-extend the `result` limb vector
    constexpr unsigned LIMB_SHFT_AMNT = _LIMB_SIZE_BITS-1;
    for (unsigned i=operand1.vector_size(); i<result.vector_size(); i++) {
        result._data[i] = mp_limb_signed_t(operand1._data.back()) >> LIMB_SHFT_AMNT;
    }

    // Vector sign-extend the `operand_shifted` limb vector
    for (unsigned i=operand_shifted.size(); i<result.vector_size(); i++) {
        // Vector sign-extend the `operand_shifted` limb vector
        operand_shifted.push_back(
            mp_limb_signed_t(operand_shifted.back()) >> LIMB_SHFT_AMNT
        );
    }
}
