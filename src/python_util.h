/*
 * Python utility functions and helpers
 */

// Python object access through Pybind
#include <pybind11/pybind11.h>
#include <pybind11/pytypes.h>
#include <pybind11/stl.h>

// Python details. These should be included before standard header files:
// https://docs.python.org/3/c-api/intro.html#include-files
#include <Python.h>

// Standard includes
#include <algorithm> // std::copy
#include <cassert>   // assert
#include <cstddef>   // offsetof
#include <numeric>   // std::accumulate
#include <optional>  // std::optional, std::nullopt
#include <stack>     // std::stack
#include <stdexcept> // std::runtime_error
#include <vector>    // std::vector

// Custom includes
#include "apytypes_util.h"

// GMP should be included after all other includes
#include <gmp.h>

/*
 * Access of information of PyLongObjects (Python arbitrary length integer objects).
 * -------------------------------------------------------------------------------------
 * Courtesy of `gmpy2`, specifically: gmpy2/src/gmpy2_convert_gmp.c
 *   `https://github.com/aleaxit/gmpy/blob/master/src/gmpy2_convert.h`
 */

#if PY_VERSION_HEX >= 0x030C0000
#define TAG_FROM_SIGN_AND_SIZE(is_neg, size)                                           \
    ((is_neg ? 2 : (size == 0)) | (((size_t)size) << 3))
#define PyLong_SetSignAndDigitCount(obj, is_neg, size)                                 \
    (obj->long_value.lv_tag = TAG_FROM_SIGN_AND_SIZE(is_neg, size))
#elif PY_VERSION_HEX >= 0x030900A4
#define PyLong_SetSignAndDigitCount(obj, is_neg, size)                                 \
    (Py_SET_SIZE(obj, (is_neg ? -1 : 1) * size))
#else
#define PyLong_SetSignAndDigitCount(obj, is_neg, size)                                 \
    (Py_SIZE(obj) = (is_neg ? -1 : 1) * size)
#endif

#if PY_VERSION_HEX >= 0x030C0000 // Python version >= 3.12.0
#define GET_OB_DIGIT(obj) obj->long_value.ob_digit
#define PyLong_IsNegative(obj) ((obj->long_value.lv_tag & 3) == 2)
#define PyLong_DigitCount(obj) (obj->long_value.lv_tag >> 3)
#else // Python version < 3.12.0
#define GET_OB_DIGIT(obj) obj->ob_digit
#define PyLong_IsNegative(obj) (Py_SIZE(obj) < 0)
#define PyLong_DigitCount(obj) (PyLong_IsNegative(obj) ? -Py_SIZE(obj) : Py_SIZE(obj))
#endif

/*!
 * Creation of a new PyLongObject that can be returned to Python
 */
static inline PyLongObject* PyLong_New(std::size_t python_digits)
{
    std::size_t n_digits = python_digits ? python_digits : 1;

    // Allocate data for the new Python type
    PyLongObject* result = (PyLongObject*)PyObject_Malloc(
#if PY_VERSION_HEX >= 0x030C0000 // Python version >= 3.12.0
        offsetof(PyLongObject, long_value.ob_digit) + n_digits * sizeof(digit)
#else // Python version < 3.12.0
        offsetof(PyLongObject, ob_digit) + n_digits * sizeof(digit)
#endif
    );

    if (!result) {
        PyErr_NoMemory();
        return nullptr;
    }

    // Initialize object and return
    PyLong_SetSignAndDigitCount(result, python_digits != 0, python_digits);
    PyObject_Init((PyObject*)result, &PyLong_Type);
    GET_OB_DIGIT(result)[0] = 0;

    // Return the newly created Python integer
    return result;
}

/*!
 * Python arbitrary long integer object to GMP limb vector
 */
static inline std::vector<mp_limb_t> python_long_to_limb_vec(
    pybind11::int_ py_long_int, std::optional<std::size_t> n_exact_limbs = std::nullopt
)
{
    PyLongObject* py_long = (PyLongObject*)py_long_int.ptr();
    long py_long_digits = PyLong_DigitCount(py_long);
    bool py_long_is_negative = PyLong_IsNegative(py_long);

    std::vector<mp_limb_t> result;
    if (py_long_digits == 0) {
        // Python integer is zero
        result = { 0 };
    } else if (py_long_digits == 1) {
        // Python integer fits in one Python digit
        result = { GET_OB_DIGIT(py_long)[0] };
    } else {
        // Python integer is stored using multiple Python digits. Import data from
        // multi-digit Python long integer.
        mpz_t mpz_from_py_long;
        mpz_init(mpz_from_py_long);
        mpz_import(
            mpz_from_py_long,                    // Destination operand
            py_long_digits,                      // Words to read
            -1,                                  // LSWord first
            sizeof(GET_OB_DIGIT(py_long)[0]),    // Word size in bytes
            0,                                   // Machine endianness
            sizeof(GET_OB_DIGIT(py_long)[0]) * 8 // Nail bits
                - PYLONG_BITS_IN_DIGIT,          //
            GET_OB_DIGIT(py_long)                // Source operand
        );

        // Compute how many limbs to copy
        std::size_t limb_copy_count {};
        if (n_exact_limbs.has_value()) {
            limb_copy_count = std::min(*n_exact_limbs, mpz_size(mpz_from_py_long));
        } else {
            limb_copy_count = mpz_size(mpz_from_py_long);
        }

        // Copy limbs into a result-vector
        result = std::vector<mp_limb_t>(limb_copy_count, 0);
        std::memcpy(
            &result[0],                       // dst
            mpz_limbs_read(mpz_from_py_long), // src
            limb_copy_count * _LIMB_SIZE_BYTES
        );

        // Clear MPZ resources
        mpz_clear(mpz_from_py_long);
    }

    // Possibly extend the vector
    if (n_exact_limbs.has_value() && *n_exact_limbs > result.size()) {
        std::fill_n(std::back_inserter(result), *n_exact_limbs - result.size(), 0);
    }

    // Negate limb vector if negative
    if (py_long_is_negative) {
        std::transform(result.begin(), result.end(), result.begin(), std::bit_not {});
        mpn_add_1(&result[0], &result[0], result.size(), 1);
    }

    // Return the result
    return result;
}

/*!
 * Convert a limb vector (`std::vector<mp_limb_t>`) to a Python long integer object
 * wrapped in a `Pybind11::int_`.
 */
static inline pybind11::int_ python_limb_vec_to_long(
    const std::vector<mp_limb_t>& vec,
    bool vec_is_signed = false,
    std::optional<unsigned> bits_last_limb = std::nullopt
)
{
    // Guard for empty vectors
    if (vec.size() == 0) {
        return pybind11::reinterpret_steal<pybind11::int_>((PyObject*)PyLong_New(0));
    }

    // Extract sign of limb vector
    bool sign = vec_is_signed ? mp_limb_signed_t(vec.back()) < 0 : false;

    // Take absolute value of limb vector
    std::vector<mp_limb_t> limb_vec_abs = vec;
    if (sign) {
        std::transform(
            limb_vec_abs.cbegin(),
            limb_vec_abs.cend(),
            limb_vec_abs.begin(),
            [](auto limb) { return ~limb; }
        );
        mpn_add_1(&limb_vec_abs[0], &limb_vec_abs[0], limb_vec_abs.size(), 1);
    }

    // Zero bits outside of range if printing as positive and `bits_last_limb` is
    // specified
    if (!vec_is_signed && bits_last_limb.has_value()) {
        if (*bits_last_limb % _LIMB_SIZE_BITS) {
            limb_vec_abs.back()
                &= (mp_limb_t(1) << (*bits_last_limb % _LIMB_SIZE_BITS)) - 1;
        }
    }

    // Number of significant bits in the absolute value limb vector
    std::size_t significant_bits = _LIMB_SIZE_BITS * limb_vec_abs.size()
        - limb_vector_leading_zeros(limb_vec_abs);

    // Number of resulting Python digits in the Python long
    std::size_t python_digits
        = (significant_bits + PYLONG_BITS_IN_DIGIT - 1) / PYLONG_BITS_IN_DIGIT;

    // Intermediate GMP `mpz` variable for import and export
    mpz_t mpz_to_py_long;
    mpz_init(mpz_to_py_long);
    mpz_import(
        mpz_to_py_long,      // Destination operand
        limb_vec_abs.size(), // Words to read
        -1,                  // LSWord first
        sizeof(mp_limb_t),   // Word size in bytes
        0,                   // Machine endianness
        0,                   // Number of nail bits
        &limb_vec_abs[0]     // Source operand
    );

    PyLongObject* result = PyLong_New(python_digits);
    if (!result) {
        throw std::runtime_error("Could not allocate memory for Python long integer");
    }

    // Export the intermediate data to the python integer
    std::size_t words_written = 0;
    mpz_export(
        &GET_OB_DIGIT(result)[0],           // Destination operand
        &words_written,                     // Number of words written
        -1,                                 // LSWord first
        sizeof(GET_OB_DIGIT(result)[0]),    // Word size in bytes
        0,                                  // Machine endianness
        sizeof(GET_OB_DIGIT(result)[0]) * 8 // Nail bits
            - PYLONG_BITS_IN_DIGIT,         //
        mpz_to_py_long                      // Source operand
    );
    if (!words_written) {
        GET_OB_DIGIT(result)[0] = 0;
    }

    // Clear the GMP `mpz` intermediate and finalize the Python long integer
    mpz_clear(mpz_to_py_long);
    while (python_digits > 0 && (GET_OB_DIGIT(result)[python_digits - 1] == 0)) {
        python_digits--;
    }
    PyLong_SetSignAndDigitCount(result, sign, python_digits);

    // Do a PyBind11 steal of the object and return
    return pybind11::reinterpret_steal<pybind11::int_>((PyObject*)result);
}

/*!
 * Retrieve the shape of a, possibly nested, Python sequence of iterable object.
 */
static inline std::vector<std::size_t>
python_sequence_extract_shape(const pybind11::sequence& bit_pattern_sequence)
{
    namespace py = pybind11;

    // Compute the length along the first dimension of this sequence
    auto sequence_len
        = std::distance(bit_pattern_sequence.begin(), bit_pattern_sequence.end());

    // Early exit
    if (sequence_len == 0) {
        // Empyt Python sequence, array shape is ( 0, )
        return { 0 };
    }

    auto first_element_it = bit_pattern_sequence.begin();
    if (py::isinstance<py::sequence>(*first_element_it)) {
        // First element along this dimension is another sequence. Make sure all
        // elements along this dimesions are also lists and recursivly evaluate their
        // shapes.
        std::vector<std::vector<std::size_t>> recursive_shapes;
        for (auto element : bit_pattern_sequence) {
            if (!py::isinstance<py::sequence>(element)) {
                // Non-sequence detected along dimension of sequences
                throw std::runtime_error("Inhomogeneous sequence shape");
            }

            recursive_shapes.push_back(
                python_sequence_extract_shape(py::cast<py::sequence>(element))
            );
        }

        // Make sure all recursively found shapes are equal
        for (const auto& shape : recursive_shapes) {
            if (shape != recursive_shapes[0]) {
                // Inhomogeneous detected
                throw std::runtime_error("Inhomogeneous sequence shape");
            }
        }

        // Return the recursive shape
        assert(sequence_len > 0);
        std::vector<std::size_t> result { std::size_t(sequence_len) };
        result.insert(
            result.end(), recursive_shapes[0].begin(), recursive_shapes[0].end()
        );
        return result;
    } else {
        // First element along this dimension is not a sequence. Make sure all elements
        // along this dimension are non-sequence.
        for (auto element : bit_pattern_sequence) {
            if (py::isinstance<py::sequence>(element)) {
                // Sequence detected along dimension of non-sequence
                throw std::runtime_error("Inhomogeneous sequence shape");
            }
        }

        // Return the size along this dimension
        assert(sequence_len > 0);
        return std::vector<std::size_t> { std::size_t(sequence_len) };
    }
}

/*!
 * Walk a, possibly nested, Python sequence of iterable objects and convert every Python
 * integer object to a limb vector and return. Throws exception if any object is neither
 * a Python sequence nor a Python long. This method naivly traverses the sequences,
 * depth-first style, so the `shape` must correspond exactly to the shape of the
 * `bit_pattern_sequence` argument, anything else is undefined behaviour.
 */
static inline std::vector<mp_limb_t> python_sequence_walk_ints(
    const pybind11::sequence& bit_pattern_sequence,
    const std::vector<std::size_t> shape,
    std::size_t limbs_per_element
)
{
    namespace py = pybind11;
    std::size_t elements
        = std::accumulate(shape.cbegin(), shape.cend(), 1, std::multiplies());
    std::vector<mp_limb_t> result(limbs_per_element * elements, 0);

    // Result output iterator
    auto result_output_it = result.begin();

    // Walk the Python sequences and extract the data
    using seq_it_t = decltype(bit_pattern_sequence.begin());
    std::stack<seq_it_t, std::vector<seq_it_t>> python_iterator_stack {};
    std::stack<seq_it_t, std::vector<seq_it_t>> python_sentinel_stack {};
    python_iterator_stack.push(bit_pattern_sequence.begin());
    python_sentinel_stack.push(bit_pattern_sequence.end());
    while (!python_iterator_stack.empty()) {

        // Current iterator/sentinel pair (by reference)
        auto& current_iterator = python_iterator_stack.top();
        auto& current_sentinel = python_sentinel_stack.top();

        if (current_iterator == current_sentinel) {
            // End of current iterator/sentinel pair. Pop it.
            python_iterator_stack.pop();
            python_sentinel_stack.pop();
        } else {

            if (py::isinstance<py::sequence>(*current_iterator)) {
                // New sequence found. We need to go deeper
                auto new_sequence = py::cast<py::sequence>(*current_iterator++);
                python_iterator_stack.push(new_sequence.begin());
                python_sentinel_stack.push(new_sequence.end());
            } else if (py::isinstance<py::int_>(*current_iterator)) {
                // New python integer found. Add it
                auto new_int = py::cast<py::int_>(*current_iterator++);
                auto limb_vec = python_long_to_limb_vec(new_int, limbs_per_element);
                result_output_it
                    = std::copy(limb_vec.begin(), limb_vec.end(), result_output_it);
            } else {
                std::string repr_string = py::repr(*current_iterator);
                throw std::runtime_error(
                    std::string("Non integer/sequence found when walking integers: ")
                    + repr_string
                );
            }
        }
    }

    // Return the result
    return result;
}
