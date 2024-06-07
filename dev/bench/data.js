window.BENCHMARK_DATA = {
  "lastUpdate": 1717756314795,
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
      },
      {
        "commit": {
          "author": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "committer": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "distinct": true,
          "id": "f9d507de5acfdd293b087a31b7530b22d3ba2199",
          "message": "Added reshape for float with tests and improved docstrings",
          "timestamp": "2024-06-07T10:56:24+02:00",
          "tree_id": "92f9395695f89df010a57394667c737fa1c0c48f",
          "url": "https://github.com/Hampuztt/apytypes/commit/f9d507de5acfdd293b087a31b7530b22d3ba2199"
        },
        "date": 1717751057529,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 259786.14442504966,
            "unit": "iter/sec",
            "range": "stddev: 2.9356653232657225e-7",
            "extra": "mean: 3.8493199943867977 usec\nrounds: 127796"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2395395.318235843,
            "unit": "iter/sec",
            "range": "stddev: 3.907228105945792e-8",
            "extra": "mean: 417.4676273211024 nsec\nrounds: 196117"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 60148.56492859606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015886294593235746",
            "extra": "mean: 16.625500561603197 usec\nrounds: 46316"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 6349.393058390301,
            "unit": "iter/sec",
            "range": "stddev: 0.000007281400829592716",
            "extra": "mean: 157.4953685815003 usec\nrounds: 1967"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 678.2231915288393,
            "unit": "iter/sec",
            "range": "stddev: 0.00006019450472095711",
            "extra": "mean: 1.474440880952208 msec\nrounds: 672"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2359068.2648067703,
            "unit": "iter/sec",
            "range": "stddev: 3.1653082031781945e-8",
            "extra": "mean: 423.89616905889574 nsec\nrounds: 193051"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 59791.78313802123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013849322312361312",
            "extra": "mean: 16.724706097017304 usec\nrounds: 44940"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2007280.068074642,
            "unit": "iter/sec",
            "range": "stddev: 4.020796724514008e-8",
            "extra": "mean: 498.18658387776924 nsec\nrounds: 196890"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 63164.94199504582,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012491771499535677",
            "extra": "mean: 15.831566821963241 usec\nrounds: 45494"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2327024.162657062,
            "unit": "iter/sec",
            "range": "stddev: 3.7307661658095565e-8",
            "extra": "mean: 429.73339772199057 nsec\nrounds: 186568"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 83463.14413878962,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010213089869832545",
            "extra": "mean: 11.981336316986992 usec\nrounds: 71501"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2398611.4505409757,
            "unit": "iter/sec",
            "range": "stddev: 3.7590384568615194e-8",
            "extra": "mean: 416.90787383444376 nsec\nrounds: 190477"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 58749.54038132739,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016605151886127376",
            "extra": "mean: 17.021409759281017 usec\nrounds: 56870"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2082050.7795771384,
            "unit": "iter/sec",
            "range": "stddev: 4.019475391685922e-8",
            "extra": "mean: 480.2956824151504 nsec\nrounds: 190477"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 82092.16749993798,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012055483561112286",
            "extra": "mean: 12.1814300980755 usec\nrounds: 67852"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 2045248.5526502912,
            "unit": "iter/sec",
            "range": "stddev: 4.074658663819888e-8",
            "extra": "mean: 488.9381286710492 nsec\nrounds: 193424"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 73871.29481792297,
            "unit": "iter/sec",
            "range": "stddev: 0.000001194266592846537",
            "extra": "mean: 13.537057966356041 usec\nrounds: 66366"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 341089.3578828541,
            "unit": "iter/sec",
            "range": "stddev: 2.220057540324588e-7",
            "extra": "mean: 2.931783055932945 usec\nrounds: 147886"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5321.35817473725,
            "unit": "iter/sec",
            "range": "stddev: 0.000009376772300848628",
            "extra": "mean: 187.921949089506 usec\nrounds: 5598"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 119668.42990443374,
            "unit": "iter/sec",
            "range": "stddev: 8.69030698011875e-7",
            "extra": "mean: 8.356422832643432 usec\nrounds: 98824"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1502.4166851340074,
            "unit": "iter/sec",
            "range": "stddev: 0.0000595546176143681",
            "extra": "mean: 665.5943120804768 usec\nrounds: 1490"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 168231.48218595263,
            "unit": "iter/sec",
            "range": "stddev: 5.055893468751646e-7",
            "extra": "mean: 5.944190629519997 usec\nrounds: 119247"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 195563.55556015403,
            "unit": "iter/sec",
            "range": "stddev: 4.526955545209742e-7",
            "extra": "mean: 5.1134271778588465 usec\nrounds: 155715"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "committer": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "distinct": true,
          "id": "1a6cb6a0a282605281f7083bf3e4016da7c82ac5",
          "message": "Added reshape for float with tests and improved docstrings",
          "timestamp": "2024-06-07T11:17:44+02:00",
          "tree_id": "0762b006dbd273a0755f7f088ce18102b47933b2",
          "url": "https://github.com/Hampuztt/apytypes/commit/1a6cb6a0a282605281f7083bf3e4016da7c82ac5"
        },
        "date": 1717752225244,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 251826.0883046317,
            "unit": "iter/sec",
            "range": "stddev: 4.185022490038465e-7",
            "extra": "mean: 3.9709944538800492 usec\nrounds: 199601"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2419667.2815158134,
            "unit": "iter/sec",
            "range": "stddev: 3.5388842959079904e-8",
            "extra": "mean: 413.27996110842713 nsec\nrounds: 184502"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 48673.97184027536,
            "unit": "iter/sec",
            "range": "stddev: 0.000001728301568590849",
            "extra": "mean: 20.54486129222248 usec\nrounds: 42932"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 6044.20733243843,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043168963056143095",
            "extra": "mean: 165.44766666641917 usec\nrounds: 1947"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 654.1961024208451,
            "unit": "iter/sec",
            "range": "stddev: 0.000015300121053636586",
            "extra": "mean: 1.5285936377479346 msec\nrounds: 657"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2406904.6869765613,
            "unit": "iter/sec",
            "range": "stddev: 3.8610627288029356e-8",
            "extra": "mean: 415.47137508637866 nsec\nrounds: 189754"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 50860.826325414826,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015381566581972791",
            "extra": "mean: 19.66149731036333 usec\nrounds: 35320"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2056037.612439946,
            "unit": "iter/sec",
            "range": "stddev: 4.4166824766904694e-8",
            "extra": "mean: 486.37242526566195 nsec\nrounds: 186568"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 49447.30183923723,
            "unit": "iter/sec",
            "range": "stddev: 0.000001443759684176763",
            "extra": "mean: 20.223550382004543 usec\nrounds: 42912"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2364424.6295931907,
            "unit": "iter/sec",
            "range": "stddev: 4.013665770776548e-8",
            "extra": "mean: 422.9358751740247 nsec\nrounds: 197278"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 79121.41056766457,
            "unit": "iter/sec",
            "range": "stddev: 0.000001492981676856882",
            "extra": "mean: 12.63880399534587 usec\nrounds: 54514"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2241618.8345279843,
            "unit": "iter/sec",
            "range": "stddev: 3.336805648163156e-8",
            "extra": "mean: 446.106173180232 nsec\nrounds: 187618"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 57682.79442687633,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017128661214919578",
            "extra": "mean: 17.336192012467183 usec\nrounds: 55085"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2026580.183275844,
            "unit": "iter/sec",
            "range": "stddev: 3.794665750090587e-8",
            "extra": "mean: 493.44210915133533 nsec\nrounds: 186916"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 78391.59989524199,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012524133305684812",
            "extra": "mean: 12.756468822378192 usec\nrounds: 60861"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 2021593.1130765686,
            "unit": "iter/sec",
            "range": "stddev: 5.2828943450845986e-8",
            "extra": "mean: 494.65938201487995 nsec\nrounds: 182816"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 72784.01254389946,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012728342054845069",
            "extra": "mean: 13.739280991094754 usec\nrounds: 66632"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 333906.2441460384,
            "unit": "iter/sec",
            "range": "stddev: 2.490943213640352e-7",
            "extra": "mean: 2.99485264960375 usec\nrounds: 155232"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5191.479286603955,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032858698838598675",
            "extra": "mean: 192.6233246428221 usec\nrounds: 5178"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 117568.2733705866,
            "unit": "iter/sec",
            "range": "stddev: 8.012818513236314e-7",
            "extra": "mean: 8.505696063494128 usec\nrounds: 100011"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1486.4511516960397,
            "unit": "iter/sec",
            "range": "stddev: 0.000006774144781214886",
            "extra": "mean: 672.7432642902531 usec\nrounds: 1487"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 163108.6435538025,
            "unit": "iter/sec",
            "range": "stddev: 5.912892273545958e-7",
            "extra": "mean: 6.13088293919962 usec\nrounds: 113676"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 193586.65535314908,
            "unit": "iter/sec",
            "range": "stddev: 4.873094894343817e-7",
            "extra": "mean: 5.165645318763099 usec\nrounds: 151677"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "committer": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "distinct": true,
          "id": "d91e38eaa4d789d0cc3f8db4d166ed3cdec8dac9",
          "message": "Added python function reshape",
          "timestamp": "2024-06-07T12:21:08+02:00",
          "tree_id": "844c71edfa9683f80bb78231b20d4058990b2fa1",
          "url": "https://github.com/Hampuztt/apytypes/commit/d91e38eaa4d789d0cc3f8db4d166ed3cdec8dac9"
        },
        "date": 1717756313917,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 253569.5892704813,
            "unit": "iter/sec",
            "range": "stddev: 2.736788068518002e-7",
            "extra": "mean: 3.9436905777108215 usec\nrounds: 131857"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2387048.4474015916,
            "unit": "iter/sec",
            "range": "stddev: 3.365354735137204e-8",
            "extra": "mean: 418.92740010725703 nsec\nrounds: 198453"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 49173.406866336096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013577616703096363",
            "extra": "mean: 20.336195186113812 usec\nrounds: 43041"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 6040.961377673168,
            "unit": "iter/sec",
            "range": "stddev: 0.000003370799478260925",
            "extra": "mean: 165.53656570225846 usec\nrounds: 1971"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 651.3563541348851,
            "unit": "iter/sec",
            "range": "stddev: 0.00003612780227713494",
            "extra": "mean: 1.535257917807794 msec\nrounds: 657"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2406075.390487866,
            "unit": "iter/sec",
            "range": "stddev: 3.55373193865793e-8",
            "extra": "mean: 415.6145746526574 nsec\nrounds: 190513"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 50918.723623882004,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010293477233173456",
            "extra": "mean: 19.639141141609016 usec\nrounds: 44799"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2058271.953684566,
            "unit": "iter/sec",
            "range": "stddev: 4.1836305670272966e-8",
            "extra": "mean: 485.8444474307085 nsec\nrounds: 186220"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 50999.295967816586,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010247609116401836",
            "extra": "mean: 19.60811381849381 usec\nrounds: 43912"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2323837.441645542,
            "unit": "iter/sec",
            "range": "stddev: 5.014779757214424e-8",
            "extra": "mean: 430.3226990317696 nsec\nrounds: 194175"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 77239.91435133248,
            "unit": "iter/sec",
            "range": "stddev: 9.19373097678312e-7",
            "extra": "mean: 12.946674117884347 usec\nrounds: 65493"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2237047.9158261027,
            "unit": "iter/sec",
            "range": "stddev: 4.1835305851438675e-8",
            "extra": "mean: 447.0176936872919 nsec\nrounds: 198453"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 57212.060866024265,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012484602606461176",
            "extra": "mean: 17.478831995612595 usec\nrounds: 53320"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2060220.883828285,
            "unit": "iter/sec",
            "range": "stddev: 3.961621222797538e-8",
            "extra": "mean: 485.38484773624475 nsec\nrounds: 186568"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 78606.40727259353,
            "unit": "iter/sec",
            "range": "stddev: 0.000001171540187376163",
            "extra": "mean: 12.721609277118743 usec\nrounds: 65151"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 2052677.6974757763,
            "unit": "iter/sec",
            "range": "stddev: 4.664171932802158e-8",
            "extra": "mean: 487.16854147618346 nsec\nrounds: 195695"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 69096.90282065731,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011452378971143026",
            "extra": "mean: 14.472428707774707 usec\nrounds: 61767"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 340941.0225142415,
            "unit": "iter/sec",
            "range": "stddev: 2.23548435013952e-7",
            "extra": "mean: 2.9330586053434766 usec\nrounds: 159465"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5175.4487082488085,
            "unit": "iter/sec",
            "range": "stddev: 0.000003736742198223041",
            "extra": "mean: 193.21996147042586 usec\nrounds: 5139"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 117969.20774612967,
            "unit": "iter/sec",
            "range": "stddev: 6.448119392454639e-7",
            "extra": "mean: 8.476788300146975 usec\nrounds: 99523"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1479.8532892528349,
            "unit": "iter/sec",
            "range": "stddev: 0.00003735725226029469",
            "extra": "mean: 675.7426612910333 usec\nrounds: 1488"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 163140.5798336666,
            "unit": "iter/sec",
            "range": "stddev: 4.896481654103784e-7",
            "extra": "mean: 6.129682762066747 usec\nrounds: 112020"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 190310.80249091366,
            "unit": "iter/sec",
            "range": "stddev: 4.803892750049526e-7",
            "extra": "mean: 5.254562467875384 usec\nrounds: 153799"
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
      },
      {
        "commit": {
          "author": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "committer": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "distinct": true,
          "id": "f9d507de5acfdd293b087a31b7530b22d3ba2199",
          "message": "Added reshape for float with tests and improved docstrings",
          "timestamp": "2024-06-07T10:56:24+02:00",
          "tree_id": "92f9395695f89df010a57394667c737fa1c0c48f",
          "url": "https://github.com/Hampuztt/apytypes/commit/f9d507de5acfdd293b087a31b7530b22d3ba2199"
        },
        "date": 1717751079938,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 5570.736718712119,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053502348747605095",
            "extra": "mean: 179.50947073858245 usec\nrounds: 5092"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 183216.81904634731,
            "unit": "iter/sec",
            "range": "stddev: 4.1305080669674757e-7",
            "extra": "mean: 5.458014199815552 usec\nrounds: 89438"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 1059.2109739908567,
            "unit": "iter/sec",
            "range": "stddev: 0.00003216131627489984",
            "extra": "mean: 944.098979858787 usec\nrounds: 993"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 326334.3697556577,
            "unit": "iter/sec",
            "range": "stddev: 2.5396829629966215e-7",
            "extra": "mean: 3.064341646724948 usec\nrounds: 161787"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 2138.6563331755683,
            "unit": "iter/sec",
            "range": "stddev: 0.000017925056498685327",
            "extra": "mean: 467.58330662465863 usec\nrounds: 2234"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 239612.8793192696,
            "unit": "iter/sec",
            "range": "stddev: 4.210929822049229e-7",
            "extra": "mean: 4.173398370074927 usec\nrounds: 126503"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1551.746080244487,
            "unit": "iter/sec",
            "range": "stddev: 0.000027273706059154835",
            "extra": "mean: 644.4353317409017 usec\nrounds: 1465"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 252736.30476635706,
            "unit": "iter/sec",
            "range": "stddev: 3.743852800168336e-7",
            "extra": "mean: 3.956693126950848 usec\nrounds: 141583"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 2591.3985529060556,
            "unit": "iter/sec",
            "range": "stddev: 0.000018731450497319137",
            "extra": "mean: 385.89201143088405 usec\nrounds: 2712"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 251056.10099486637,
            "unit": "iter/sec",
            "range": "stddev: 3.432826310285527e-7",
            "extra": "mean: 3.983173466158658 usec\nrounds: 184843"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 3406.961082524783,
            "unit": "iter/sec",
            "range": "stddev: 0.000012222929292512913",
            "extra": "mean: 293.51670763991643 usec\nrounds: 3547"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 388399.0759577886,
            "unit": "iter/sec",
            "range": "stddev: 2.3612814004401537e-7",
            "extra": "mean: 2.574671418911101 usec\nrounds: 176057"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 10675.145581003668,
            "unit": "iter/sec",
            "range": "stddev: 0.0000065934995393601675",
            "extra": "mean: 93.67553748208283 usec\nrounds: 10365"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 251530.1838670574,
            "unit": "iter/sec",
            "range": "stddev: 3.3832482585026063e-7",
            "extra": "mean: 3.9756660001033333 usec\nrounds: 121271"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2822.8411751888216,
            "unit": "iter/sec",
            "range": "stddev: 0.000020753088919419604",
            "extra": "mean: 354.253016000133 usec\nrounds: 2750"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "committer": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "distinct": true,
          "id": "1a6cb6a0a282605281f7083bf3e4016da7c82ac5",
          "message": "Added reshape for float with tests and improved docstrings",
          "timestamp": "2024-06-07T11:17:44+02:00",
          "tree_id": "0762b006dbd273a0755f7f088ce18102b47933b2",
          "url": "https://github.com/Hampuztt/apytypes/commit/1a6cb6a0a282605281f7083bf3e4016da7c82ac5"
        },
        "date": 1717752248023,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 5487.41099325707,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035507544642754695",
            "extra": "mean: 182.23530208121824 usec\nrounds: 5045"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 187637.5877109635,
            "unit": "iter/sec",
            "range": "stddev: 3.886555486051615e-7",
            "extra": "mean: 5.32942259703529 usec\nrounds: 92251"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 1036.9871167102317,
            "unit": "iter/sec",
            "range": "stddev: 0.000006055311682998146",
            "extra": "mean: 964.3321347833416 usec\nrounds: 920"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 323673.30081580917,
            "unit": "iter/sec",
            "range": "stddev: 2.838098933735509e-7",
            "extra": "mean: 3.0895350264588672 usec\nrounds: 160721"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 2075.1318716337328,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057717212548869235",
            "extra": "mean: 481.8970850333039 usec\nrounds: 2058"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 237909.0317216915,
            "unit": "iter/sec",
            "range": "stddev: 3.8615718687510396e-7",
            "extra": "mean: 4.203287251279349 usec\nrounds: 125392"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1672.95838953731,
            "unit": "iter/sec",
            "range": "stddev: 0.000005613454668019224",
            "extra": "mean: 597.743498137195 usec\nrounds: 1610"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 251455.2505178997,
            "unit": "iter/sec",
            "range": "stddev: 3.8170144469731647e-7",
            "extra": "mean: 3.9768507435831633 usec\nrounds: 178572"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 2028.5470432863046,
            "unit": "iter/sec",
            "range": "stddev: 0.000004894462473754308",
            "extra": "mean: 492.96367235337624 usec\nrounds: 1993"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 242230.37054506355,
            "unit": "iter/sec",
            "range": "stddev: 3.6410119936506685e-7",
            "extra": "mean: 4.128301491467868 usec\nrounds: 191571"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 3262.2581032251937,
            "unit": "iter/sec",
            "range": "stddev: 0.000013825863841776169",
            "extra": "mean: 306.53613796264665 usec\nrounds: 3269"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 387997.165765171,
            "unit": "iter/sec",
            "range": "stddev: 2.6345024226363336e-7",
            "extra": "mean: 2.577338414387372 usec\nrounds: 190840"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 10470.599783867243,
            "unit": "iter/sec",
            "range": "stddev: 0.000005676259167537647",
            "extra": "mean: 95.50551263937786 usec\nrounds: 10364"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 248292.29863144012,
            "unit": "iter/sec",
            "range": "stddev: 2.6864418126608976e-7",
            "extra": "mean: 4.027511145178043 usec\nrounds: 122026"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2786.4890228749737,
            "unit": "iter/sec",
            "range": "stddev: 0.000014116543409961585",
            "extra": "mean: 358.8745520943216 usec\nrounds: 2793"
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
      },
      {
        "commit": {
          "author": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "committer": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "distinct": true,
          "id": "f9d507de5acfdd293b087a31b7530b22d3ba2199",
          "message": "Added reshape for float with tests and improved docstrings",
          "timestamp": "2024-06-07T10:56:24+02:00",
          "tree_id": "92f9395695f89df010a57394667c737fa1c0c48f",
          "url": "https://github.com/Hampuztt/apytypes/commit/f9d507de5acfdd293b087a31b7530b22d3ba2199"
        },
        "date": 1717751109863,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_short",
            "value": 5247083.692401843,
            "unit": "iter/sec",
            "range": "stddev: 1.1162907003006326e-8",
            "extra": "mean: 190.5820563617314 nsec\nrounds: 51878"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_long",
            "value": 2473532.644656218,
            "unit": "iter/sec",
            "range": "stddev: 3.5380983105641204e-8",
            "extra": "mean: 404.28008991935155 nsec\nrounds: 189036"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_mixed",
            "value": 2756052.603221174,
            "unit": "iter/sec",
            "range": "stddev: 3.491372709957764e-8",
            "extra": "mean: 362.8377770552012 nsec\nrounds: 191608"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_short",
            "value": 4939529.343919936,
            "unit": "iter/sec",
            "range": "stddev: 1.1461959759398317e-8",
            "extra": "mean: 202.44843797334843 nsec\nrounds: 51081"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_long",
            "value": 2285917.903505443,
            "unit": "iter/sec",
            "range": "stddev: 3.513038699469549e-8",
            "extra": "mean: 437.4610297537493 nsec\nrounds: 183824"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_mixed",
            "value": 2731094.2372251535,
            "unit": "iter/sec",
            "range": "stddev: 3.049855336953862e-8",
            "extra": "mean: 366.15360479689457 nsec\nrounds: 189430"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short",
            "value": 5643704.782603865,
            "unit": "iter/sec",
            "range": "stddev: 1.0646393999505667e-8",
            "extra": "mean: 177.18857355588068 nsec\nrounds: 54366"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short_different_wl",
            "value": 5551965.752641152,
            "unit": "iter/sec",
            "range": "stddev: 1.04715207237035e-8",
            "extra": "mean: 180.1163848181745 nsec\nrounds: 58921"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_long",
            "value": 3874528.977878712,
            "unit": "iter/sec",
            "range": "stddev: 2.5961750217713584e-8",
            "extra": "mean: 258.0958887414645 nsec\nrounds: 199204"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_mixed",
            "value": 3731728.6298664617,
            "unit": "iter/sec",
            "range": "stddev: 2.317925140883071e-8",
            "extra": "mean: 267.97232574648194 nsec\nrounds: 188680"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_short",
            "value": 4776678.538560981,
            "unit": "iter/sec",
            "range": "stddev: 1.5050511751417343e-8",
            "extra": "mean: 209.35049154493316 nsec\nrounds: 46018"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_long",
            "value": 3846099.6661645332,
            "unit": "iter/sec",
            "range": "stddev: 2.265543069743106e-8",
            "extra": "mean: 260.00366261887496 nsec\nrounds: 198808"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_to_float_short",
            "value": 10941610.952840375,
            "unit": "iter/sec",
            "range": "stddev: 5.093231709847047e-9",
            "extra": "mean: 91.3942201299566 nsec\nrounds: 54663"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_short",
            "value": 5682442.813516704,
            "unit": "iter/sec",
            "range": "stddev: 1.5219244722782873e-8",
            "extra": "mean: 175.9806535353486 nsec\nrounds: 58130"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_long",
            "value": 4142756.9780666423,
            "unit": "iter/sec",
            "range": "stddev: 1.1803738569164201e-8",
            "extra": "mean: 241.38514648444956 nsec\nrounds: 44067"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_short",
            "value": 7905472.390127093,
            "unit": "iter/sec",
            "range": "stddev: 9.271290474495475e-9",
            "extra": "mean: 126.49465467094036 nsec\nrounds: 83529"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_long",
            "value": 6155060.497720081,
            "unit": "iter/sec",
            "range": "stddev: 9.884601859990201e-9",
            "extra": "mean: 162.4679400585136 nsec\nrounds: 64730"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "committer": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "distinct": true,
          "id": "1a6cb6a0a282605281f7083bf3e4016da7c82ac5",
          "message": "Added reshape for float with tests and improved docstrings",
          "timestamp": "2024-06-07T11:17:44+02:00",
          "tree_id": "0762b006dbd273a0755f7f088ce18102b47933b2",
          "url": "https://github.com/Hampuztt/apytypes/commit/1a6cb6a0a282605281f7083bf3e4016da7c82ac5"
        },
        "date": 1717752279959,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_short",
            "value": 5262094.62271521,
            "unit": "iter/sec",
            "range": "stddev: 9.113366330683996e-9",
            "extra": "mean: 190.03839187599644 nsec\nrounds: 51986"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_long",
            "value": 2532332.657209225,
            "unit": "iter/sec",
            "range": "stddev: 3.261661733512916e-8",
            "extra": "mean: 394.89282624575355 nsec\nrounds: 193051"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_mixed",
            "value": 2818762.502069123,
            "unit": "iter/sec",
            "range": "stddev: 2.8986618911217975e-8",
            "extra": "mean: 354.7656105351096 nsec\nrounds: 198847"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_short",
            "value": 4659119.976221964,
            "unit": "iter/sec",
            "range": "stddev: 1.0054989463731531e-8",
            "extra": "mean: 214.63280729053247 nsec\nrounds: 47081"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_long",
            "value": 2178637.4603175907,
            "unit": "iter/sec",
            "range": "stddev: 3.837270989242506e-8",
            "extra": "mean: 459.00248123613534 nsec\nrounds: 197629"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_mixed",
            "value": 2632901.5470183752,
            "unit": "iter/sec",
            "range": "stddev: 3.031933437450688e-8",
            "extra": "mean: 379.8091125482586 nsec\nrounds: 188680"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short",
            "value": 5518921.418258725,
            "unit": "iter/sec",
            "range": "stddev: 9.296189193520177e-9",
            "extra": "mean: 181.1948248966255 nsec\nrounds: 54511"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short_different_wl",
            "value": 5547345.4009224735,
            "unit": "iter/sec",
            "range": "stddev: 8.255937091289295e-9",
            "extra": "mean: 180.26640270743752 nsec\nrounds: 54933"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_long",
            "value": 3906002.7028604066,
            "unit": "iter/sec",
            "range": "stddev: 2.1682138867429676e-8",
            "extra": "mean: 256.01620789142385 nsec\nrounds: 196503"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_mixed",
            "value": 3621376.030675593,
            "unit": "iter/sec",
            "range": "stddev: 2.17978146568473e-8",
            "extra": "mean: 276.1381285812724 nsec\nrounds: 194591"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_short",
            "value": 4673319.801618292,
            "unit": "iter/sec",
            "range": "stddev: 8.741833066627489e-9",
            "extra": "mean: 213.9806481152088 nsec\nrounds: 46211"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_long",
            "value": 3689015.7413224685,
            "unit": "iter/sec",
            "range": "stddev: 2.0983808020135114e-8",
            "extra": "mean: 271.07501570100334 nsec\nrounds: 197278"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_to_float_short",
            "value": 9688705.465725044,
            "unit": "iter/sec",
            "range": "stddev: 5.720111223292641e-9",
            "extra": "mean: 103.21296312891495 nsec\nrounds: 96442"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_short",
            "value": 5417612.008382975,
            "unit": "iter/sec",
            "range": "stddev: 8.459292400128647e-9",
            "extra": "mean: 184.58317030687365 nsec\nrounds: 53897"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_long",
            "value": 4035258.8770260075,
            "unit": "iter/sec",
            "range": "stddev: 2.0767325324225248e-8",
            "extra": "mean: 247.81557527651998 nsec\nrounds: 191571"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_short",
            "value": 8060381.653181109,
            "unit": "iter/sec",
            "range": "stddev: 8.859377355686801e-9",
            "extra": "mean: 124.06360430908686 nsec\nrounds: 78223"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_long",
            "value": 6053690.417354513,
            "unit": "iter/sec",
            "range": "stddev: 8.261206727834454e-9",
            "extra": "mean: 165.18849347388937 nsec\nrounds: 60530"
          }
        ]
      }
    ],
    "APyTypes Floating-Point Scalar Benchmarks": [
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
        "date": 1717750192094,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_short",
            "value": 4683354.316983551,
            "unit": "iter/sec",
            "range": "stddev: 1.2392426583945607e-8",
            "extra": "mean: 213.52217498758947 nsec\nrounds: 47306"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_long",
            "value": 2318555.699772182,
            "unit": "iter/sec",
            "range": "stddev: 3.7535167547496145e-8",
            "extra": "mean: 431.30298750134284 nsec\nrounds: 193088"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_mixed",
            "value": 2285405.2822490553,
            "unit": "iter/sec",
            "range": "stddev: 4.6979207998273065e-8",
            "extra": "mean: 437.5591531913759 nsec\nrounds: 193051"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_short",
            "value": 1948388.49962757,
            "unit": "iter/sec",
            "range": "stddev: 5.368300040373958e-8",
            "extra": "mean: 513.2446635725602 nsec\nrounds: 191205"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_long",
            "value": 1948106.6876553237,
            "unit": "iter/sec",
            "range": "stddev: 5.441832388432838e-8",
            "extra": "mean: 513.3189092448886 nsec\nrounds: 181160"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_mixed",
            "value": 1948300.2061122106,
            "unit": "iter/sec",
            "range": "stddev: 5.076975730742683e-8",
            "extra": "mean: 513.2679229118701 nsec\nrounds: 191205"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_short",
            "value": 4753213.569959333,
            "unit": "iter/sec",
            "range": "stddev: 1.0283143361917936e-8",
            "extra": "mean: 210.38398239043113 nsec\nrounds: 47017"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_long",
            "value": 2744780.6359968004,
            "unit": "iter/sec",
            "range": "stddev: 3.7950492193535505e-8",
            "extra": "mean: 364.327839859153 nsec\nrounds: 192345"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_mixed",
            "value": 2560956.8039523135,
            "unit": "iter/sec",
            "range": "stddev: 2.0859551293245971e-7",
            "extra": "mean: 390.4790578492824 nsec\nrounds: 199243"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_short",
            "value": 4783960.133268846,
            "unit": "iter/sec",
            "range": "stddev: 9.628594861724101e-9",
            "extra": "mean: 209.0318422693492 nsec\nrounds: 48196"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_long",
            "value": 4893154.460117055,
            "unit": "iter/sec",
            "range": "stddev: 9.513974775927099e-9",
            "extra": "mean: 204.36714355757874 nsec\nrounds: 48977"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_to_float_short",
            "value": 11653284.150445024,
            "unit": "iter/sec",
            "range": "stddev: 7.070995170427578e-9",
            "extra": "mean: 85.81271915201062 nsec\nrounds: 114065"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "committer": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "distinct": true,
          "id": "f9d507de5acfdd293b087a31b7530b22d3ba2199",
          "message": "Added reshape for float with tests and improved docstrings",
          "timestamp": "2024-06-07T10:56:24+02:00",
          "tree_id": "92f9395695f89df010a57394667c737fa1c0c48f",
          "url": "https://github.com/Hampuztt/apytypes/commit/f9d507de5acfdd293b087a31b7530b22d3ba2199"
        },
        "date": 1717751133912,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_short",
            "value": 4743361.144410182,
            "unit": "iter/sec",
            "range": "stddev: 1.249776144425049e-8",
            "extra": "mean: 210.8209705217802 nsec\nrounds: 51055"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_long",
            "value": 2347996.3499931786,
            "unit": "iter/sec",
            "range": "stddev: 3.9286556447181996e-8",
            "extra": "mean: 425.89504025545386 nsec\nrounds: 193051"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_mixed",
            "value": 2373337.1501755295,
            "unit": "iter/sec",
            "range": "stddev: 3.929850949432239e-8",
            "extra": "mean: 421.347636987034 nsec\nrounds: 193051"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_short",
            "value": 1938356.1235683055,
            "unit": "iter/sec",
            "range": "stddev: 4.3540700149175535e-8",
            "extra": "mean: 515.9010709337891 nsec\nrounds: 191608"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_long",
            "value": 1932629.9509574631,
            "unit": "iter/sec",
            "range": "stddev: 5.4739641944599596e-8",
            "extra": "mean: 517.4296297666986 nsec\nrounds: 189394"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_mixed",
            "value": 1930179.6719170008,
            "unit": "iter/sec",
            "range": "stddev: 4.855522864238123e-8",
            "extra": "mean: 518.0864841493477 nsec\nrounds: 191242"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_short",
            "value": 4781906.695260247,
            "unit": "iter/sec",
            "range": "stddev: 1.2618302215170184e-8",
            "extra": "mean: 209.1216043573395 nsec\nrounds: 44323"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_long",
            "value": 2709189.964436837,
            "unit": "iter/sec",
            "range": "stddev: 3.425003718877471e-8",
            "extra": "mean: 369.1140204735881 nsec\nrounds: 194970"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_mixed",
            "value": 2611562.985924524,
            "unit": "iter/sec",
            "range": "stddev: 3.2782126203304215e-8",
            "extra": "mean: 382.9124571720727 nsec\nrounds: 196890"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_short",
            "value": 4988138.848083136,
            "unit": "iter/sec",
            "range": "stddev: 1.115812124436774e-8",
            "extra": "mean: 200.4755742483409 nsec\nrounds: 48977"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_long",
            "value": 5031907.070497393,
            "unit": "iter/sec",
            "range": "stddev: 1.0729526610338028e-8",
            "extra": "mean: 198.73181002552013 nsec\nrounds: 49364"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_to_float_short",
            "value": 12080497.246407418,
            "unit": "iter/sec",
            "range": "stddev: 5.986202574654844e-9",
            "extra": "mean: 82.77804957882132 nsec\nrounds: 126183"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "committer": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "distinct": true,
          "id": "1a6cb6a0a282605281f7083bf3e4016da7c82ac5",
          "message": "Added reshape for float with tests and improved docstrings",
          "timestamp": "2024-06-07T11:17:44+02:00",
          "tree_id": "0762b006dbd273a0755f7f088ce18102b47933b2",
          "url": "https://github.com/Hampuztt/apytypes/commit/1a6cb6a0a282605281f7083bf3e4016da7c82ac5"
        },
        "date": 1717752303803,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_short",
            "value": 4701778.4541640505,
            "unit": "iter/sec",
            "range": "stddev: 1.164070731619006e-8",
            "extra": "mean: 212.68547843088825 nsec\nrounds: 46621"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_long",
            "value": 2307230.1172405975,
            "unit": "iter/sec",
            "range": "stddev: 3.253230043661737e-8",
            "extra": "mean: 433.42013981509393 nsec\nrounds: 191205"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_mixed",
            "value": 2287148.4562202925,
            "unit": "iter/sec",
            "range": "stddev: 3.918326037443027e-8",
            "extra": "mean: 437.22566293427064 nsec\nrounds: 188680"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_short",
            "value": 1928998.274724147,
            "unit": "iter/sec",
            "range": "stddev: 4.180597239629011e-8",
            "extra": "mean: 518.4037814356548 nsec\nrounds: 192308"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_long",
            "value": 1893552.343317307,
            "unit": "iter/sec",
            "range": "stddev: 4.038259221398356e-8",
            "extra": "mean: 528.1079255765966 nsec\nrounds: 186220"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_mixed",
            "value": 1860475.479693391,
            "unit": "iter/sec",
            "range": "stddev: 3.9230100176376526e-8",
            "extra": "mean: 537.4970059615084 nsec\nrounds: 181160"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_short",
            "value": 4845361.888955106,
            "unit": "iter/sec",
            "range": "stddev: 1.0322600417606242e-8",
            "extra": "mean: 206.38293339440298 nsec\nrounds: 48691"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_long",
            "value": 2720954.021142143,
            "unit": "iter/sec",
            "range": "stddev: 5.3172068572340285e-8",
            "extra": "mean: 367.518154378916 nsec\nrounds: 195734"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_mixed",
            "value": 2622402.846704622,
            "unit": "iter/sec",
            "range": "stddev: 3.260990281751265e-8",
            "extra": "mean: 381.32966537028915 nsec\nrounds: 186220"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_short",
            "value": 4799393.852764179,
            "unit": "iter/sec",
            "range": "stddev: 8.02218852567185e-9",
            "extra": "mean: 208.35964512986882 nsec\nrounds: 48384"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_long",
            "value": 4925019.731410405,
            "unit": "iter/sec",
            "range": "stddev: 8.238848376859602e-9",
            "extra": "mean: 203.04487180475425 nsec\nrounds: 49339"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_to_float_short",
            "value": 11498693.04695497,
            "unit": "iter/sec",
            "range": "stddev: 4.9533672564105325e-9",
            "extra": "mean: 86.96640530505825 nsec\nrounds: 115128"
          }
        ]
      }
    ]
  }
}