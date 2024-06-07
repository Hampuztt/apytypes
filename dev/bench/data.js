window.BENCHMARK_DATA = {
  "lastUpdate": 1717750169125,
  "repoUrl": "https://github.com/Hampuztt/apytypes",
  "entries": {
    "APyTypes Fixed-Point Array Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "Hampuz Togeretz",
            "name": "Hampuz"
          },
          "committer": {
            "email": "Hampuz Togeretz",
            "name": "Hampuz"
          },
          "distinct": true,
          "id": "a589dab1b96d3fe071d918c694a68dbe8ef357e4",
          "message": "Added reshape for float with tests and improved docstrings",
          "timestamp": "2024-06-07T10:38:47+02:00",
          "tree_id": "92f9395695f89df010a57394667c737fa1c0c48f",
          "url": "https://github.com/Hampuztt/apytypes/commit/a589dab1b96d3fe071d918c694a68dbe8ef357e4"
        },
        "date": 1717750115379,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 258223.69783347796,
            "unit": "iter/sec",
            "range": "stddev: 3.329151687368688e-7",
            "extra": "mean: 3.8726112606631293 usec\nrounds: 129300"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2314282.447480742,
            "unit": "iter/sec",
            "range": "stddev: 3.908286156830008e-8",
            "extra": "mean: 432.0993753759694 nsec\nrounds: 193424"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 58939.869656448915,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018501802406800984",
            "extra": "mean: 16.96644403574084 usec\nrounds: 27991"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 6146.839288746824,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043909861149888316",
            "extra": "mean: 162.6852359440608 usec\nrounds: 1992"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 647.1262524577348,
            "unit": "iter/sec",
            "range": "stddev: 0.00002046767745399113",
            "extra": "mean: 1.5452935129769165 msec\nrounds: 655"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2493131.05041921,
            "unit": "iter/sec",
            "range": "stddev: 4.106554369306017e-8",
            "extra": "mean: 401.1020599306514 nsec\nrounds: 189394"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 60989.10877422571,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014001214348547966",
            "extra": "mean: 16.39637010768396 usec\nrounds: 31607"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2062757.6866465542,
            "unit": "iter/sec",
            "range": "stddev: 4.539438980151251e-8",
            "extra": "mean: 484.7879159407216 nsec\nrounds: 185186"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 60972.559588223,
            "unit": "iter/sec",
            "range": "stddev: 0.000001472200266144231",
            "extra": "mean: 16.400820414190918 usec\nrounds: 33722"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2290145.040818155,
            "unit": "iter/sec",
            "range": "stddev: 4.219278071907245e-8",
            "extra": "mean: 436.65356655435704 nsec\nrounds: 190151"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 82275.34050146877,
            "unit": "iter/sec",
            "range": "stddev: 0.000001109232467390101",
            "extra": "mean: 12.154310075230233 usec\nrounds: 30599"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2217301.9273202857,
            "unit": "iter/sec",
            "range": "stddev: 4.5117581953625317e-8",
            "extra": "mean: 450.9985706856519 nsec\nrounds: 193799"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 57116.98257706854,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016961156266781099",
            "extra": "mean: 17.507927675463062 usec\nrounds: 49831"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2040712.2315246426,
            "unit": "iter/sec",
            "range": "stddev: 4.7496103579166726e-8",
            "extra": "mean: 490.0249944858954 nsec\nrounds: 199204"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 79183.80632822958,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012195776252613522",
            "extra": "mean: 12.62884478999203 usec\nrounds: 45912"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 1990665.6036856554,
            "unit": "iter/sec",
            "range": "stddev: 5.6319307376728364e-8",
            "extra": "mean: 502.34454151866044 nsec\nrounds: 192308"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 72301.81941166896,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013725067877976443",
            "extra": "mean: 13.830910593082638 usec\nrounds: 41451"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 337328.6765830674,
            "unit": "iter/sec",
            "range": "stddev: 3.2225928881343447e-7",
            "extra": "mean: 2.964467800749662 usec\nrounds: 139025"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5127.284321555379,
            "unit": "iter/sec",
            "range": "stddev: 0.000007861292864884343",
            "extra": "mean: 195.03501996094624 usec\nrounds: 5110"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 118336.21759270936,
            "unit": "iter/sec",
            "range": "stddev: 6.953072995334739e-7",
            "extra": "mean: 8.450498252714217 usec\nrounds: 98727"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1483.829585863209,
            "unit": "iter/sec",
            "range": "stddev: 0.000010568247315852503",
            "extra": "mean: 673.9318379463745 usec\nrounds: 1481"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 165612.91020681395,
            "unit": "iter/sec",
            "range": "stddev: 4.979946620159586e-7",
            "extra": "mean: 6.038176605623443 usec\nrounds: 106633"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 194808.8494116781,
            "unit": "iter/sec",
            "range": "stddev: 5.019953668816277e-7",
            "extra": "mean: 5.133237032198464 usec\nrounds: 158932"
          }
        ]
      }
    ],
    "APyTypes Floating-Point Array Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "Hampuz Togeretz",
            "name": "Hampuz"
          },
          "committer": {
            "email": "Hampuz Togeretz",
            "name": "Hampuz"
          },
          "distinct": true,
          "id": "a589dab1b96d3fe071d918c694a68dbe8ef357e4",
          "message": "Added reshape for float with tests and improved docstrings",
          "timestamp": "2024-06-07T10:38:47+02:00",
          "tree_id": "92f9395695f89df010a57394667c737fa1c0c48f",
          "url": "https://github.com/Hampuztt/apytypes/commit/a589dab1b96d3fe071d918c694a68dbe8ef357e4"
        },
        "date": 1717750138012,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 5476.870873310247,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054496056885350095",
            "extra": "mean: 182.58600999216094 usec\nrounds: 5104"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 187332.97779692392,
            "unit": "iter/sec",
            "range": "stddev: 4.4919422485686015e-7",
            "extra": "mean: 5.338088422872549 usec\nrounds: 89920"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 997.7533442218518,
            "unit": "iter/sec",
            "range": "stddev: 0.000010268852497320671",
            "extra": "mean: 1.0022517146057779 msec\nrounds: 890"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 314348.04564132146,
            "unit": "iter/sec",
            "range": "stddev: 3.8459907218858433e-7",
            "extra": "mean: 3.1811872663621505 usec\nrounds: 198060"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 2069.081918548957,
            "unit": "iter/sec",
            "range": "stddev: 0.000006942974064621714",
            "extra": "mean: 483.3061422243242 usec\nrounds: 2032"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 237860.45372555396,
            "unit": "iter/sec",
            "range": "stddev: 4.3232325693263145e-7",
            "extra": "mean: 4.204145684317121 usec\nrounds: 143001"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1799.6205509161455,
            "unit": "iter/sec",
            "range": "stddev: 0.000008228064413158443",
            "extra": "mean: 555.6726941637353 usec\nrounds: 1782"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 235168.8571557608,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023419093036290308",
            "extra": "mean: 4.252263722732913 usec\nrounds: 192308"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 1788.0485327217216,
            "unit": "iter/sec",
            "range": "stddev: 0.00000764503850211133",
            "extra": "mean: 559.2689357697834 usec\nrounds: 1697"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 243360.77646852343,
            "unit": "iter/sec",
            "range": "stddev: 4.1159142839057307e-7",
            "extra": "mean: 4.1091256138778025 usec\nrounds: 191205"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 3267.5283827039752,
            "unit": "iter/sec",
            "range": "stddev: 0.000005221668403844987",
            "extra": "mean: 306.04171804392126 usec\nrounds: 3231"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 387231.5083099687,
            "unit": "iter/sec",
            "range": "stddev: 2.7854776831451955e-7",
            "extra": "mean: 2.582434483093577 usec\nrounds: 194591"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 10380.30943292494,
            "unit": "iter/sec",
            "range": "stddev: 0.000006741609206493114",
            "extra": "mean: 96.33624184922031 usec\nrounds: 10275"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 250061.68242353993,
            "unit": "iter/sec",
            "range": "stddev: 3.772713140765073e-7",
            "extra": "mean: 3.9990133246654644 usec\nrounds: 121729"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2765.9219830842558,
            "unit": "iter/sec",
            "range": "stddev: 0.000012179746447375327",
            "extra": "mean: 361.5430970633917 usec\nrounds: 2792"
          }
        ]
      }
    ],
    "APyTypes Fixed-Point Scalar Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "Hampuz Togeretz",
            "name": "Hampuz"
          },
          "committer": {
            "email": "Hampuz Togeretz",
            "name": "Hampuz"
          },
          "distinct": true,
          "id": "a589dab1b96d3fe071d918c694a68dbe8ef357e4",
          "message": "Added reshape for float with tests and improved docstrings",
          "timestamp": "2024-06-07T10:38:47+02:00",
          "tree_id": "92f9395695f89df010a57394667c737fa1c0c48f",
          "url": "https://github.com/Hampuztt/apytypes/commit/a589dab1b96d3fe071d918c694a68dbe8ef357e4"
        },
        "date": 1717750168712,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_short",
            "value": 5229051.821482647,
            "unit": "iter/sec",
            "range": "stddev: 1.0076073193937382e-8",
            "extra": "mean: 191.2392598389763 nsec\nrounds: 52340"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_long",
            "value": 2514678.7244613576,
            "unit": "iter/sec",
            "range": "stddev: 3.962840023554619e-8",
            "extra": "mean: 397.66511334935797 nsec\nrounds: 196503"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_mixed",
            "value": 2750238.7514928104,
            "unit": "iter/sec",
            "range": "stddev: 3.719384779912842e-8",
            "extra": "mean: 363.6047959316924 nsec\nrounds: 199243"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_short",
            "value": 4693441.308785263,
            "unit": "iter/sec",
            "range": "stddev: 1.4426602315974464e-8",
            "extra": "mean: 213.0632800560048 nsec\nrounds: 47237"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_long",
            "value": 2293704.9888016805,
            "unit": "iter/sec",
            "range": "stddev: 4.001933830206074e-8",
            "extra": "mean: 435.9758577856346 nsec\nrounds: 190151"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_mixed",
            "value": 2622502.1405270556,
            "unit": "iter/sec",
            "range": "stddev: 3.791261557466293e-8",
            "extra": "mean: 381.31522737256716 nsec\nrounds: 199641"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short",
            "value": 5371097.448800519,
            "unit": "iter/sec",
            "range": "stddev: 1.3163006655352406e-8",
            "extra": "mean: 186.1816899679395 nsec\nrounds: 53291"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short_different_wl",
            "value": 5387653.52353066,
            "unit": "iter/sec",
            "range": "stddev: 1.4584601147142737e-8",
            "extra": "mean: 185.6095600120786 nsec\nrounds: 53865"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_long",
            "value": 3852450.315216476,
            "unit": "iter/sec",
            "range": "stddev: 2.6883475036181978e-8",
            "extra": "mean: 259.57505436218077 nsec\nrounds: 192679"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_mixed",
            "value": 3649973.3179362873,
            "unit": "iter/sec",
            "range": "stddev: 3.9810644704862124e-8",
            "extra": "mean: 273.9746055364149 nsec\nrounds: 193799"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_short",
            "value": 4633355.939325429,
            "unit": "iter/sec",
            "range": "stddev: 1.3090947556907663e-8",
            "extra": "mean: 215.82628511496492 nsec\nrounds: 47237"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_long",
            "value": 3717174.6987863705,
            "unit": "iter/sec",
            "range": "stddev: 2.7173989175321972e-8",
            "extra": "mean: 269.02152334313047 nsec\nrounds: 195313"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_to_float_short",
            "value": 10284170.208486812,
            "unit": "iter/sec",
            "range": "stddev: 7.232007741356701e-9",
            "extra": "mean: 97.23681927928762 nsec\nrounds: 101958"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_short",
            "value": 5531405.983264724,
            "unit": "iter/sec",
            "range": "stddev: 1.0158534837105353e-8",
            "extra": "mean: 180.78586222481778 nsec\nrounds: 55206"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_long",
            "value": 3986955.994969249,
            "unit": "iter/sec",
            "range": "stddev: 2.4904936516833706e-8",
            "extra": "mean: 250.81791754454062 nsec\nrounds: 198060"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_short",
            "value": 7674801.46665067,
            "unit": "iter/sec",
            "range": "stddev: 9.953053937860297e-9",
            "extra": "mean: 130.29653005948308 nsec\nrounds: 77376"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_long",
            "value": 5943160.847872473,
            "unit": "iter/sec",
            "range": "stddev: 1.260286413034534e-8",
            "extra": "mean: 168.26063194273075 nsec\nrounds: 59309"
          }
        ]
      }
    ]
  }
}