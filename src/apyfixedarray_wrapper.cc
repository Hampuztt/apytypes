#include "apyfixedarray.h"
#include "apytypes_common.h"
#include "apytypes_util.h"

#include <pybind11/operators.h>
#include <pybind11/pybind11.h>
#include <pybind11/stl.h>

#include <optional> // std::optional, std::nullopt

namespace py = pybind11;

void bind_fixed_array(py::module& m)
{
    py::class_<APyFixedArray>(m, "APyFixedArray")

        /*
         * Constructor: construct from a list of Python integers
         */
        .def(
            py::init<
                const py::sequence&,
                std::optional<int>,
                std::optional<int>,
                std::optional<int>>(),
            py::arg("bit_pattern_sequence"),
            py::arg("bits") = std::nullopt,
            py::arg("int_bits") = std::nullopt,
            py::arg("frac_bits") = std::nullopt
        )

        /*
         * Arithmetic operations
         */
        .def(py::self + py::self)

        /*
         * Methods
         */
        .def_property_readonly("bits", &APyFixedArray::bits, R"pbdoc(
            Total number of bits in this :class:`APyFixedArray` object.

            Returns
            -------
            :class:`int`
            )pbdoc")
        .def_property_readonly("frac_bits", &APyFixedArray::frac_bits, R"pbdoc(
            Number of fractional bits in this :class:`APyFixedArray` object.

            Returns
            -------
            :class:`int`
            )pbdoc")

        /*
         * Dunder methods
         */
        .def("__repr__", &APyFixedArray::repr)

        ;
}