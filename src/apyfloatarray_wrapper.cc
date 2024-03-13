#include "apyfloatarray.h"
#include "apyfloatarray_iterator.h"
#include "apytypes_common.h"
#include "apytypes_util.h"

#include <nanobind/make_iterator.h>
#include <nanobind/nanobind.h>
#include <nanobind/operators.h>

#include <optional> // std::optional, std::nullopt

namespace py = nanobind;

void bind_float_array(py::module_& m)
{
    py::class_<APyFloatArray>(m, "APyFloatArray")

        /*
         * Constructor: construct from a list of Python integers
         */
        .def(
            py::init<
                const py::sequence&,
                const py::sequence&,
                const py::sequence&,
                std::uint8_t,
                std::uint8_t,
                std::optional<int>>(),
            py::arg("signs"),
            py::arg("exps"),
            py::arg("mans"),
            py::arg("exp_bits"),
            py::arg("man_bits"),
            py::arg("bias") = std::nullopt
        )

        /*
         * Arithmetic operations
         */
        .def(py::self + py::self)
        .def(
            "__add__",
            [](const APyFloatArray& a, int b) {
                if (b == 0) {
                    return a;
                } else {
                    throw nanobind::type_error("Cannot add with int");
                };
            },
            py::is_operator()
        )
        .def(
            "__radd__",
            [](const APyFloatArray& a, int b) {
                if (b == 0) {
                    return a;
                } else {
                    throw nanobind::type_error("Cannot add with int");
                };
            },
            py::is_operator()
        )
        .def(
            "__add__",
            [](const APyFloatArray& a, float b) {
                if (b == 0.) {
                    return a;
                } else {
                    throw nanobind::type_error("Cannot add with float");
                };
            },
            py::is_operator()
        )
        .def(
            "__radd__",
            [](const APyFloatArray& a, float b) {
                if (b == 0.) {
                    return a;
                } else {
                    throw nanobind::type_error("Cannot add with float");
                };
            },
            py::is_operator()
        )
        .def(
            "__add__",
            [](const APyFloatArray& a, APyFloat& b) { return a + b; },
            py::is_operator()
        )
        .def(
            "__radd__",
            [](const APyFloatArray& a, APyFloat& b) { return a + b; },
            py::is_operator()
        )
        .def(py::self - py::self)
        .def(
            "__sub__",
            [](const APyFloatArray& a, int b) {
                if (b == 0) {
                    return a;
                } else {
                    throw nanobind::type_error("Cannot add with int");
                };
            },
            py::is_operator()
        )
        // .def(
        //     "__rsub__",
        //     [](const APyFloatArray& a, int b) {
        //         if (b == 0) {
        //             return a;
        //         } else {
        //             throw nanobind::type_error("Cannot sub with int");
        //         };
        //     },
        //     py::is_operator()
        // )
        .def(
            "__sub__",
            [](const APyFloatArray& a, float b) {
                if (b == 0.) {
                    return a;
                } else {
                    throw nanobind::type_error("Cannot add with float");
                };
            },
            py::is_operator()
        )
        // .def(
        //     "__rsub__",
        //     [](const APyFloatArray& a, float b) {
        //         if (b == 0.) {
        //             return a;
        //         } else {
        //             throw nanobind::type_error("Cannot sub with float");
        //         };
        //     },
        //     py::is_operator()
        // )
        .def(
            "__sub__",
            [](const APyFloatArray& a, APyFloat& b) { return a - b; },
            py::is_operator()
        )
        // .def(
        //     "__rsub__",
        //     [](const APyFloatArray& a, APyFloat& b) { return a - b; },
        //     py::is_operator()
        // )
        .def(py::self * py::self)
        .def(
            "__mul__",
            [](const APyFloatArray& a, int b) {
                if (b == 1) {
                    return a;
                } else {
                    throw nanobind::type_error("Cannot multiply with int");
                };
            },
            py::is_operator()
        )
        .def(
            "__rmul__",
            [](const APyFloatArray& a, int b) {
                if (b == 1) {
                    return a;
                } else {
                    throw nanobind::type_error("Cannot multiply with int");
                };
            },
            py::is_operator()
        )
        .def(
            "__mul__",
            [](const APyFloatArray& a, float b) {
                if (b == 1.) {
                    return a;
                } else {
                    throw nanobind::type_error("Cannot multiply with float");
                };
            },
            py::is_operator()
        )
        .def(
            "__rmul__",
            [](const APyFloatArray& a, float b) {
                if (b == 1.) {
                    return a;
                } else {
                    throw nanobind::type_error("Cannot multiply with float");
                };
            },
            py::is_operator()
        )
        .def(
            "__mul__",
            [](const APyFloatArray& a, APyFloat& b) { return a * b; },
            py::is_operator()
        )
        .def(
            "__rmul__",
            [](const APyFloatArray& a, APyFloat& b) { return a * b; },
            py::is_operator()
        )
        .def(py::self / py::self)
        .def(
            "__truediv__",
            [](const APyFloatArray& a, int b) {
                if (b == 1) {
                    return a;
                } else {
                    throw nanobind::type_error("Cannot divide with int");
                };
            },
            py::is_operator()
        )
        // .def(
        //     "__rtruediv__",
        //     [](const APyFloatArray& a, int b) {
        //         if (b == 0) {
        //             return a;
        //         } else {
        //             throw nanobind::type_error("Cannot divide with int");
        //         };
        //     },
        //     py::is_operator()
        // )
        .def(
            "__truediv__",
            [](const APyFloatArray& a, float b) {
                if (b == 1.) {
                    return a;
                } else {
                    throw nanobind::type_error("Cannot divide with float");
                };
            },
            py::is_operator()
        )
        // .def(
        //     "__rtruediv__",
        //     [](const APyFloatArray& a, float b) {
        //         if (b == 0.) {
        //             return a;
        //         } else {
        //             throw nanobind::type_error("Cannot divide with float");
        //         };
        //     },
        //     py::is_operator()
        // )
        .def(
            "__truediv__",
            [](const APyFloatArray& a, APyFloat& b) { return a / b; },
            py::is_operator()
        )
        // .def(
        //     "__rtruediv__",
        //     [](const APyFloatArray& a, APyFloat& b) { return a / b; },
        //     py::is_operator()
        // )
        /*
         * Methods
         */
        .def_prop_ro("exp_bits", &APyFloatArray::get_exp_bits, R"pbdoc(
            Number of exponent bits.

            Returns
            -------
            :class:`int`
            )pbdoc")

        .def_prop_ro("man_bits", &APyFloatArray::get_man_bits, R"pbdoc(
            Number of mantissa bits.

            Returns
            -------
            :class:`int`
            )pbdoc")

        .def_prop_ro("bias", &APyFloatArray::get_bias, R"pbdoc(
            Bias.

            Returns
            -------
            :class:`int`
            )pbdoc")

        .def_prop_ro("shape", &APyFloatArray::get_shape, R"pbdoc(
            The shape of the array.

            Returns
            -------
            :class:`tuple` of :class:`int`
            )pbdoc")

        .def_prop_ro("ndim", &APyFloatArray::get_ndim, R"pbdoc(
            Number of dimensions in the array.

            Returns
            -------
            :class:`int`
            )pbdoc")
        .def_prop_ro("T", &APyFloatArray::transpose, R"pbdoc(
            The transposition of the array.

            Equivalent to calling :func:`APyFloatArray.transpose`.

            Returns
            -------
            :class:`APyFloatArray`
            )pbdoc")
        .def("to_numpy", &APyFloatArray::to_numpy, R"pbdoc(
            Return array as a :class:`numpy.ndarray` of :class:`numpy.float64`.

            The returned array has the same `shape` and stored value as `self`. This
            method rounds away from infinity on ties.

            Returns
            -------
            :class:`numpy.ndarray`
            )pbdoc")

        /*
         * Static methods
         */
        .def_static(
            "from_float",
            &APyFloatArray::from_double,
            py::arg("float_sequence"),
            py::arg("exp_bits") = std::nullopt,
            py::arg("man_bits") = std::nullopt,
            py::arg("bias") = std::nullopt,
            py::arg("quantization") = std::nullopt,
            R"pbdoc(
            Create an :class:`APyFloatArray` object from a sequence of :class:`float`.

            Parameters
            ----------
            float_sequence : sequence of float
                Floating point values to initialize from. The tensor shape will be taken
                from the sequence shape.
            exp_bits : int
                Number of exponent bits in the created fixed-point tensor
            man_bits : int, optional
                Number of mantissa bits in the created fixed-point tensor
            bias : int, optional
                Bias in the created fixed-point tensor
            quantization : :class:`QuantizationMode`, optional
                Quantization mode to use. If not provided, the global mode,
                see :func:`get_quantization_mode`, is used.

            Returns
            -------
            :class:`APyFloatArray`

            Examples
            --------

            .. code-block:: python

                from apytypes import APyFloatArray

                # Array `a`, initialized from floating-point values.
                a = APyFloatArray.from_float([1.0, 1.25, 1.49], exp_bits=10, man_bits=15)

                # Array `b` (2 x 3 matrix), initialized from floating-point values.
                b = APyFloatArray.from_float(
                    [
                        [1.0, 2.0, 3.0],
                        [4.0, 5.0, 6.0],
                    ],
                    exp_bits=5,
                    man_bits=2
                )
            )pbdoc"
        )

        /*
         * Dunder methods
         */
        .def("__matmul__", &APyFloatArray::matmul, py::arg("rhs"))
        .def("__repr__", &APyFloatArray::repr)
        .def("__len__", &APyFloatArray::get_size)

        .def("is_identical", &APyFloatArray::is_identical, py::arg("other"), R"pbdoc(
            Test if two :class:`APyFloatArray` objects are identical.

            Two :class:`APyFloatArray` objects are considered identical if, and only if:
              * They represent exatly the same tensor shape
              * They store the exact same floating-ppint values in all tensor elements
              * They have the exact same bit format (`exp_bits`, `man_bits`, and `bias`)

            Returns
            -------
            :class:`bool`
            )pbdoc")

        .def("transpose", &APyFloatArray::transpose, R"pbdoc(
            Return the transposition of the array.

            If the dimension of `self` is one, this method returns the a copy of `self`.
            If the dimension of `self` is two, this method returns the matrix
            transposition of `self`.

            Higher order transposition has not been implemented and will raise a
            `NotImplementedException`.

            Returns
            -------
            :class:`APyFloatArray`
            )pbdoc")

        // Iteration and friends
        .def("__getitem__", &APyFloatArray::get_item, py::arg("idx"))
        .def(
            "__iter__",
            [](py::iterable array) {
                return APyFloatArrayIterator(
                    py::cast<const APyFloatArray&>(array), array
                );
            }
        )
        .def("__array__", &APyFloatArray::to_numpy)

        .def(
            "cast",
            &APyFloatArray::cast,
            py::arg("exp_bits"),
            py::arg("man_bits"),
            py::arg("bias") = std::nullopt,
            py::arg("quantization") = std::nullopt
        )
        .def(
            "resize",
            &APyFloatArray::resize,
            py::arg("exp_bits"),
            py::arg("man_bits"),
            py::arg("bias") = std::nullopt,
            py::arg("quantization") = std::nullopt,
            R"pbdoc(
            .. deprecated:: 0.1.pre
               Use :func:`~APyFloatArray.cast` instead.
            )pbdoc"
        ) /*
           * Convenience methods
           */
        .def(
            "cast_to_double",
            &APyFloatArray::cast_to_double,
            py::arg("quantization") = std::nullopt,
            R"pbdoc(
            Cast to IEEE 754 binary64 (double-precision) format.

            Convenience method corresponding to

            .. code-block:: python

               f.cast(exp_bits=11, man_bits=52)

            Parameters
            ----------

            quantization : :class:`QuantizationMode`, optional
                Quantization mode to use. If not provided, the global mode,
                see :func:`get_quantization_mode`, is used.
            )pbdoc"
        )
        .def(
            "cast_to_single",
            &APyFloatArray::cast_to_single,
            py::arg("quantization") = std::nullopt,
            R"pbdoc(
            Cast to IEEE 754 binary32 (single-precision) format.

            Convenience method corresponding to

            .. code-block:: python

               f.cast(exp_bits=8, man_bits=23)

            Parameters
            ----------

            quantization : :class:`QuantizationMode`, optional
                Quantization mode to use. If not provided, the global mode,
                see :func:`get_quantization_mode`, is used.
            )pbdoc"
        )
        .def(
            "cast_to_half",
            &APyFloatArray::cast_to_half,
            py::arg("quantization") = std::nullopt,
            R"pbdoc(
            Cast to IEEE 754 binary16 (half-precision) format.

            Convenience method corresponding to

            .. code-block:: python

               f.cast(exp_bits=5, man_bits=10)

            Parameters
            ----------

            quantization : :class:`QuantizationMode`, optional
                Quantization mode to use. If not provided, the global mode,
                see :func:`get_quantization_mode`, is used.
            )pbdoc"
        )
        .def(
            "cast_to_bfloat16",
            &APyFloatArray::cast_to_bfloat16,
            py::arg("quantization") = std::nullopt,
            R"pbdoc(
            Cast to bfloat16 format.

            Convenience method corresponding to

            .. code-block:: python

               f.cast(exp_bits=8, man_bits=7)

            Parameters
            ----------

            quantization : :class:`QuantizationMode`, optional
                Quantization mode to use. If not provided, the global mode,
                see :func:`get_quantization_mode`, is used.
            )pbdoc"
        );

    py::class_<APyFloatArrayIterator>(m, "APyFloatArrayIterator")
        .def(
            "__iter__",
            [](APyFloatArrayIterator& it) -> APyFloatArrayIterator& { return it; }
        )
        .def("__next__", &APyFloatArrayIterator::next);
}
