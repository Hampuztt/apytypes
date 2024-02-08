import pytest
from apytypes import APyFloat, APyFloatArray


@pytest.mark.float_array
def test_array_add():
    a = APyFloatArray.from_float([0, 0.125, 2.5, 12], 5, 7)
    b = APyFloatArray.from_float([3, -0.75, -5, 8], 6, 5)
    ans = APyFloatArray.from_float([3, -0.625, -2.5, 20], 6, 7)
    assert (a + b).is_identical(ans)
    assert (a + b).is_identical(ans)

    a = APyFloatArray.from_float(
        [
            [1.0, 2.0, 3.0],
            [-4.0, -5.0, -6.0],
        ],
        exp_bits=8,
        man_bits=8,
    )
    b = APyFloatArray.from_float(
        [
            [6, 2.5, 7.5],
            [-4.0, 20, 6.0],
        ],
        exp_bits=8,
        man_bits=8,
    )
    ans = APyFloatArray.from_float(
        [
            [7.0, 4.5, 10.5],
            [-8.0, 15.0, -0.0],
        ],
        exp_bits=8,
        man_bits=8,
    )
    assert (a + b).is_identical(ans)
    assert (b + a).is_identical(ans)


@pytest.mark.float_array
def test_array_add_scalar():
    a = APyFloatArray.from_float([12, 23, 34], 8, 10)
    b = APyFloat.from_float(8, 9, 8)
    assert (a + b).is_identical(APyFloatArray.from_float([20, 31, 42], 9, 10))
    assert (b + a).is_identical(APyFloatArray.from_float([20, 31, 42], 9, 10))


@pytest.mark.float_array
def test_array_add_int_float():
    a = APyFloatArray.from_float([12, 23, 34], 8, 10)
    assert (a + 0).is_identical(a)
    assert (0 + a).is_identical(a)
    assert (a + 0.0).is_identical(a)
    assert (0.0 + a).is_identical(a)


@pytest.mark.float_array
def test_array_sub():
    a = APyFloatArray.from_float([0, 0.125, 2.5, 12], 5, 7)
    b = APyFloatArray.from_float([3, -0.75, -5, 8], 6, 5)
    ans = APyFloatArray.from_float([-3, 0.875, 7.5, 4], 6, 7)
    assert (a - b).is_identical(ans)

    a = APyFloatArray.from_float(
        [
            [1.0, 2.0, 3.0],
            [-4.0, -5.0, -6.0],
        ],
        exp_bits=8,
        man_bits=8,
    )
    b = APyFloatArray.from_float(
        [
            [6, 2.5, 7.5],
            [-4.0, 20, 6.0],
        ],
        exp_bits=8,
        man_bits=8,
    )
    ans = APyFloatArray.from_float(
        [
            [-5, -0.5, -4.5],
            [-0.0, -25.0, -12.0],
        ],
        exp_bits=8,
        man_bits=8,
    )
    assert (a - b).is_identical(ans)


@pytest.mark.float_array
def test_array_sub_scalar():
    a = APyFloatArray.from_float([12, 23, 34], 8, 10)
    b = APyFloat.from_float(8, 9, 8)
    assert (a - b).is_identical(APyFloatArray.from_float([4, 15, 26], 9, 10))


@pytest.mark.float_array
def test_transpose():

    # High-dimensional transor transposition not implemented
    with pytest.raises(RuntimeError, match="Not implemented: high-dimensional"):
        APyFloatArray([[[1]]], [[[1]]], [[[1]]], 3, 3).T

    # 1-D transposition simply returns the input (just like NumPy-arrays)
    assert APyFloatArray([], [], [], 4, 3).T.is_identical(
        APyFloatArray([], [], [], 4, 3)
    )
    assert APyFloatArray([1, 0, 1], [15, 4, 20], [7, 2, 3], 5, 5).T.is_identical(
        APyFloatArray([1, 0, 1], [15, 4, 20], [7, 2, 3], 5, 5)
    )

    # # 2-D transposition returns the matrix transposition
    a = APyFloatArray.from_float(
        [
            [1.0, 2.0, 3.0],
            [-4.0, -5.0, -6.0],
        ],
        exp_bits=5,
        man_bits=2,
    )
    assert a.T.T.is_identical(a)
    assert a.T.is_identical(
        APyFloatArray.from_float(
            [
                [1.0, -4.0],
                [2.0, -5.0],
                [3.0, -6.0],
            ],
            exp_bits=5,
            man_bits=2,
        )
    )