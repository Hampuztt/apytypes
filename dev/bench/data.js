window.BENCHMARK_DATA = {
  "lastUpdate": 1721901983051,
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
          "id": "e39fb498744a7f3687c6b251aadc40f9f1f9f55f",
          "message": "Added python function reshape",
          "timestamp": "2024-06-07T12:46:10+02:00",
          "tree_id": "e10ed950d3c5d687a04479ffe482c76f1b6cfad4",
          "url": "https://github.com/Hampuztt/apytypes/commit/e39fb498744a7f3687c6b251aadc40f9f1f9f55f"
        },
        "date": 1717757774909,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 258947.74322881954,
            "unit": "iter/sec",
            "range": "stddev: 3.16770288896675e-7",
            "extra": "mean: 3.861783028231873 usec\nrounds: 131683"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2407316.3618754814,
            "unit": "iter/sec",
            "range": "stddev: 3.573084121650502e-8",
            "extra": "mean: 415.40032537349066 nsec\nrounds: 199204"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 59000.38535239615,
            "unit": "iter/sec",
            "range": "stddev: 0.000001607782215268716",
            "extra": "mean: 16.949041841459557 usec\nrounds: 43665"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 6126.924450622259,
            "unit": "iter/sec",
            "range": "stddev: 0.000004937789640826925",
            "extra": "mean: 163.21402492541563 usec\nrounds: 2006"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 649.5664398667814,
            "unit": "iter/sec",
            "range": "stddev: 0.00002378858535473009",
            "extra": "mean: 1.5394884012251135 msec\nrounds: 653"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2367243.3234778782,
            "unit": "iter/sec",
            "range": "stddev: 3.522055385622032e-8",
            "extra": "mean: 422.4322823438692 nsec\nrounds: 196117"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 58923.75702992755,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015436812346162114",
            "extra": "mean: 16.971083488313504 usec\nrounds: 43587"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2050777.6621506456,
            "unit": "iter/sec",
            "range": "stddev: 4.346163131794966e-8",
            "extra": "mean: 487.6199007119114 nsec\nrounds: 186568"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 59802.85980019986,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013463649838713604",
            "extra": "mean: 16.721608353529906 usec\nrounds: 44461"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2294869.9825853314,
            "unit": "iter/sec",
            "range": "stddev: 3.146747251877711e-8",
            "extra": "mean: 435.7545340644787 nsec\nrounds: 186220"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 81386.88243097819,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010757447603301909",
            "extra": "mean: 12.286992327640395 usec\nrounds: 56045"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2324462.031359426,
            "unit": "iter/sec",
            "range": "stddev: 3.4080157290283596e-8",
            "extra": "mean: 430.20707006995667 nsec\nrounds: 194932"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 58123.49962361279,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012456100248177302",
            "extra": "mean: 17.204745180101785 usec\nrounds: 53320"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2062195.7098782542,
            "unit": "iter/sec",
            "range": "stddev: 3.704559422098689e-8",
            "extra": "mean: 484.9200273329454 nsec\nrounds: 196117"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 79265.47708140526,
            "unit": "iter/sec",
            "range": "stddev: 0.000001212872455368721",
            "extra": "mean: 12.615832728452574 usec\nrounds: 66676"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 2034372.0431788103,
            "unit": "iter/sec",
            "range": "stddev: 3.809494780159394e-8",
            "extra": "mean: 491.55217372983356 nsec\nrounds: 198847"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 72182.20770270495,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012136099413175665",
            "extra": "mean: 13.853829521516921 usec\nrounds: 64231"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 338138.1132727075,
            "unit": "iter/sec",
            "range": "stddev: 2.06461829007775e-7",
            "extra": "mean: 2.957371443051445 usec\nrounds: 159439"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5181.317402886203,
            "unit": "iter/sec",
            "range": "stddev: 0.000003836360176728633",
            "extra": "mean: 193.0011080662535 usec\nrounds: 5182"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 118057.19174135184,
            "unit": "iter/sec",
            "range": "stddev: 6.618918956297541e-7",
            "extra": "mean: 8.470470839174896 usec\nrounds: 99414"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1486.5321093789878,
            "unit": "iter/sec",
            "range": "stddev: 0.000009058079982053468",
            "extra": "mean: 672.7066261742298 usec\nrounds: 1490"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 163461.99308919048,
            "unit": "iter/sec",
            "range": "stddev: 4.614730010703148e-7",
            "extra": "mean: 6.117630044155681 usec\nrounds: 114065"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 192608.8512380224,
            "unit": "iter/sec",
            "range": "stddev: 4.192144428045357e-7",
            "extra": "mean: 5.191869395265843 usec\nrounds: 154512"
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
          "id": "2fc5d4f27d35ab38ef3f608999740aff951f4163",
          "message": "Added python function reshape",
          "timestamp": "2024-06-07T13:04:18+02:00",
          "tree_id": "13f36411a0372e771946b3aed274f146a93d254a",
          "url": "https://github.com/Hampuztt/apytypes/commit/2fc5d4f27d35ab38ef3f608999740aff951f4163"
        },
        "date": 1717758771546,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 258912.3401843888,
            "unit": "iter/sec",
            "range": "stddev: 2.834338190118507e-7",
            "extra": "mean: 3.8623110790618678 usec\nrounds: 131338"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2314463.9369167676,
            "unit": "iter/sec",
            "range": "stddev: 4.0465858531727534e-8",
            "extra": "mean: 432.06549216409354 nsec\nrounds: 191939"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 59402.96462689005,
            "unit": "iter/sec",
            "range": "stddev: 0.000001442670013548352",
            "extra": "mean: 16.834176648943345 usec\nrounds: 43210"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 6138.4884577479,
            "unit": "iter/sec",
            "range": "stddev: 0.000003930627788332861",
            "extra": "mean: 162.90655376859368 usec\nrounds: 1990"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 656.0608802948758,
            "unit": "iter/sec",
            "range": "stddev: 0.00004161290676476842",
            "extra": "mean: 1.5242487854946265 msec\nrounds: 648"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2500444.395801486,
            "unit": "iter/sec",
            "range": "stddev: 4.15539542883853e-8",
            "extra": "mean: 399.92890930863337 nsec\nrounds: 191939"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 59711.53562029221,
            "unit": "iter/sec",
            "range": "stddev: 0.000001087111991323348",
            "extra": "mean: 16.747182761452255 usec\nrounds: 44145"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2025773.0228631378,
            "unit": "iter/sec",
            "range": "stddev: 4.1047185727417886e-8",
            "extra": "mean: 493.6387190045074 nsec\nrounds: 187618"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 59395.17218680004,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011441394974519594",
            "extra": "mean: 16.83638523439182 usec\nrounds: 39158"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2348088.382242337,
            "unit": "iter/sec",
            "range": "stddev: 3.7053391057416085e-8",
            "extra": "mean: 425.87834749434546 nsec\nrounds: 192308"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 81048.25785479553,
            "unit": "iter/sec",
            "range": "stddev: 9.80509384995583e-7",
            "extra": "mean: 12.338328132747534 usec\nrounds: 68134"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2240664.8535675933,
            "unit": "iter/sec",
            "range": "stddev: 4.478816194738904e-8",
            "extra": "mean: 446.29610644719645 nsec\nrounds: 188680"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 58032.2666581941,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013736447589227937",
            "extra": "mean: 17.231792890150725 usec\nrounds: 51422"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2024328.3422003947,
            "unit": "iter/sec",
            "range": "stddev: 4.749343414788326e-8",
            "extra": "mean: 493.99100884647027 nsec\nrounds: 182816"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 81720.83840097969,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013398728670876883",
            "extra": "mean: 12.236780967582582 usec\nrounds: 56745"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 2016426.5774957635,
            "unit": "iter/sec",
            "range": "stddev: 5.509213883589543e-8",
            "extra": "mean: 495.92680991230037 nsec\nrounds: 192716"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 73638.43379202389,
            "unit": "iter/sec",
            "range": "stddev: 0.00000100204909960586",
            "extra": "mean: 13.579865139775887 usec\nrounds: 65364"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 337458.39216326247,
            "unit": "iter/sec",
            "range": "stddev: 2.6229896956845904e-7",
            "extra": "mean: 2.9633282894212325 usec\nrounds: 156691"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5170.3393064619695,
            "unit": "iter/sec",
            "range": "stddev: 0.000003230556946771939",
            "extra": "mean: 193.41090414514665 usec\nrounds: 5091"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 118510.9611298042,
            "unit": "iter/sec",
            "range": "stddev: 6.760486978201998e-7",
            "extra": "mean: 8.438038055439508 usec\nrounds: 99513"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1480.8172010964138,
            "unit": "iter/sec",
            "range": "stddev: 0.00003729578223741991",
            "extra": "mean: 675.3027985220517 usec\nrounds: 1489"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 164811.97820906003,
            "unit": "iter/sec",
            "range": "stddev: 5.102458683833312e-7",
            "extra": "mean: 6.0675201576157525 usec\nrounds: 111149"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 193590.9921030185,
            "unit": "iter/sec",
            "range": "stddev: 4.997550192371288e-7",
            "extra": "mean: 5.165529599992209 usec\nrounds: 158429"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "distinct": true,
          "id": "e3cd5291d8ddcabad01184c59e4af5fb82c3b9e1",
          "message": "[pre-commit.ci] auto fixes from pre-commit.com hooks\n\nfor more information, see https://pre-commit.ci",
          "timestamp": "2024-06-07T11:18:19Z",
          "tree_id": "666f1336597adc8618da7c6e882c1290c4026d0b",
          "url": "https://github.com/Hampuztt/apytypes/commit/e3cd5291d8ddcabad01184c59e4af5fb82c3b9e1"
        },
        "date": 1717759366754,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 257631.92418646763,
            "unit": "iter/sec",
            "range": "stddev: 3.135543630979674e-7",
            "extra": "mean: 3.881506545268919 usec\nrounds: 129635"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2298863.9479268193,
            "unit": "iter/sec",
            "range": "stddev: 4.0386415655529483e-8",
            "extra": "mean: 434.99746946826605 nsec\nrounds: 184843"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 59509.12304636429,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015908366483663486",
            "extra": "mean: 16.804146134381575 usec\nrounds: 28857"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 6148.383553966641,
            "unit": "iter/sec",
            "range": "stddev: 0.000004818365754742122",
            "extra": "mean: 162.6443749357257 usec\nrounds: 1907"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 644.3065894243854,
            "unit": "iter/sec",
            "range": "stddev: 0.00004586996226488701",
            "extra": "mean: 1.5520561428579929 msec\nrounds: 630"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2484958.1458647344,
            "unit": "iter/sec",
            "range": "stddev: 4.447803815535381e-8",
            "extra": "mean: 402.42126478634606 nsec\nrounds: 188006"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 60641.425962243695,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011925219582792268",
            "extra": "mean: 16.490377396841158 usec\nrounds: 33172"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2084193.3490978559,
            "unit": "iter/sec",
            "range": "stddev: 4.274530481007565e-8",
            "extra": "mean: 479.80193413086 nsec\nrounds: 186186"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 60059.86681474076,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018728589352562356",
            "extra": "mean: 16.6500535721229 usec\nrounds: 32909"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2282974.835216298,
            "unit": "iter/sec",
            "range": "stddev: 5.079067138747984e-8",
            "extra": "mean: 438.0249771369043 nsec\nrounds: 190840"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 82533.80238076151,
            "unit": "iter/sec",
            "range": "stddev: 0.000001315270910461542",
            "extra": "mean: 12.11624778156469 usec\nrounds: 47106"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2325757.374668795,
            "unit": "iter/sec",
            "range": "stddev: 5.248537082850234e-8",
            "extra": "mean: 429.9674638857672 nsec\nrounds: 194553"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 56188.29930869876,
            "unit": "iter/sec",
            "range": "stddev: 0.000003045137560368752",
            "extra": "mean: 17.79729965674874 usec\nrounds: 41938"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2139075.7775430875,
            "unit": "iter/sec",
            "range": "stddev: 4.586213715545075e-8",
            "extra": "mean: 467.4916197445527 nsec\nrounds: 192679"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 79963.11670030271,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013810764795689234",
            "extra": "mean: 12.505765673791132 usec\nrounds: 47037"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 2017472.3884053172,
            "unit": "iter/sec",
            "range": "stddev: 4.610062033246106e-8",
            "extra": "mean: 495.669732952537 nsec\nrounds: 106872"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 72838.22467416953,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011405795097621999",
            "extra": "mean: 13.72905510085322 usec\nrounds: 49981"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 340327.3283130328,
            "unit": "iter/sec",
            "range": "stddev: 2.6039892574407863e-7",
            "extra": "mean: 2.938347634193516 usec\nrounds: 149187"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5115.918341187348,
            "unit": "iter/sec",
            "range": "stddev: 0.00000400699517647946",
            "extra": "mean: 195.46832715236636 usec\nrounds: 4692"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 118181.29507406603,
            "unit": "iter/sec",
            "range": "stddev: 8.307331262263205e-7",
            "extra": "mean: 8.46157591498117 usec\nrounds: 99315"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1482.5237642770778,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073519918111099475",
            "extra": "mean: 674.5254437709667 usec\nrounds: 1485"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 164903.59002048566,
            "unit": "iter/sec",
            "range": "stddev: 5.754154785543414e-7",
            "extra": "mean: 6.0641493607008305 usec\nrounds: 120701"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 191057.86084727113,
            "unit": "iter/sec",
            "range": "stddev: 4.247487239533086e-7",
            "extra": "mean: 5.234016520259198 usec\nrounds: 161499"
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
          "id": "a057ac4cd99529b0497ebacfc9b55e4cdfe8d62b",
          "message": "Fixed PR comments",
          "timestamp": "2024-06-11T09:36:43+02:00",
          "tree_id": "77d7ad42b50446bcad56d00f21cd2a592470cc3e",
          "url": "https://github.com/Hampuztt/apytypes/commit/a057ac4cd99529b0497ebacfc9b55e4cdfe8d62b"
        },
        "date": 1718091708911,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 257911.38319397907,
            "unit": "iter/sec",
            "range": "stddev: 3.058090068444371e-7",
            "extra": "mean: 3.8773007519714047 usec\nrounds: 129133"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2312841.378393973,
            "unit": "iter/sec",
            "range": "stddev: 4.0810332095605535e-8",
            "extra": "mean: 432.36860484327855 nsec\nrounds: 193799"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 59137.4914513535,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016397553475783667",
            "extra": "mean: 16.909746684514005 usec\nrounds: 44186"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 6171.632291499467,
            "unit": "iter/sec",
            "range": "stddev: 0.000004358776492388799",
            "extra": "mean: 162.0316883391377 usec\nrounds: 1938"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 649.5979781840338,
            "unit": "iter/sec",
            "range": "stddev: 0.00003528552194783399",
            "extra": "mean: 1.539413658268339 msec\nrounds: 635"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2405956.7966831527,
            "unit": "iter/sec",
            "range": "stddev: 4.534724355999369e-8",
            "extra": "mean: 415.63506101966067 nsec\nrounds: 192679"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 59755.82389492713,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012821212198288926",
            "extra": "mean: 16.73477051807319 usec\nrounds: 43511"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2046573.2718554793,
            "unit": "iter/sec",
            "range": "stddev: 4.6053812700848285e-8",
            "extra": "mean: 488.62164563185644 nsec\nrounds: 187618"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 60046.43628562671,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014376367286617551",
            "extra": "mean: 16.653777673719656 usec\nrounds: 42748"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2361459.27292906,
            "unit": "iter/sec",
            "range": "stddev: 4.171427232146301e-8",
            "extra": "mean: 423.4669686933153 nsec\nrounds: 196503"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 80040.13317446914,
            "unit": "iter/sec",
            "range": "stddev: 0.000001075988379693889",
            "extra": "mean: 12.493732335754979 usec\nrounds: 66632"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2322112.837752242,
            "unit": "iter/sec",
            "range": "stddev: 4.51316477288319e-8",
            "extra": "mean: 430.64229426852 nsec\nrounds: 188680"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 58038.275986033026,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014152845379382113",
            "extra": "mean: 17.230008697030406 usec\nrounds: 50361"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2017286.0776435407,
            "unit": "iter/sec",
            "range": "stddev: 4.738336773502555e-8",
            "extra": "mean: 495.7155115887907 nsec\nrounds: 193088"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 77535.37349944202,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012151955659398558",
            "extra": "mean: 12.897339044961154 usec\nrounds: 64313"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 2016429.0089150453,
            "unit": "iter/sec",
            "range": "stddev: 4.926360150551112e-8",
            "extra": "mean: 495.92621192146424 nsec\nrounds: 194175"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 70700.12885730057,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012412735460113969",
            "extra": "mean: 14.144245790815683 usec\nrounds: 59274"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 336529.7737156725,
            "unit": "iter/sec",
            "range": "stddev: 2.7102714830589974e-7",
            "extra": "mean: 2.9715052815650145 usec\nrounds: 151470"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5189.013475482804,
            "unit": "iter/sec",
            "range": "stddev: 0.000003482979219130852",
            "extra": "mean: 192.7148589466626 usec\nrounds: 5147"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 118150.48597054766,
            "unit": "iter/sec",
            "range": "stddev: 6.612215521510545e-7",
            "extra": "mean: 8.4637823686081 usec\nrounds: 98630"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1486.3516759215781,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074914139862641875",
            "extra": "mean: 672.788288397477 usec\nrounds: 1491"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 166215.61818781937,
            "unit": "iter/sec",
            "range": "stddev: 4.7180501791465753e-7",
            "extra": "mean: 6.016281808548373 usec\nrounds: 121139"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 193525.54628457088,
            "unit": "iter/sec",
            "range": "stddev: 4.844631659827124e-7",
            "extra": "mean: 5.167276461421499 usec\nrounds: 155982"
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
          "id": "a22640a9142febd686c0ebe7bda6f7f402899ead",
          "message": "Fixed PR comments",
          "timestamp": "2024-06-11T10:42:21+02:00",
          "tree_id": "7f5698a586451dcd2aa976302ba4959ab39e8a44",
          "url": "https://github.com/Hampuztt/apytypes/commit/a22640a9142febd686c0ebe7bda6f7f402899ead"
        },
        "date": 1718095621717,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 259003.56175964946,
            "unit": "iter/sec",
            "range": "stddev: 3.157620269923499e-7",
            "extra": "mean: 3.8609507653334183 usec\nrounds: 131320"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2334605.877524065,
            "unit": "iter/sec",
            "range": "stddev: 3.955862405773012e-8",
            "extra": "mean: 428.33782336764926 nsec\nrounds: 194932"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 58818.66773319039,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014674835361974556",
            "extra": "mean: 17.00140514124084 usec\nrounds: 42948"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 6139.483394021149,
            "unit": "iter/sec",
            "range": "stddev: 0.000004629605766367544",
            "extra": "mean: 162.8801538862107 usec\nrounds: 1930"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 649.746749626733,
            "unit": "iter/sec",
            "range": "stddev: 0.000025529138003364693",
            "extra": "mean: 1.5390611812594377 msec\nrounds: 651"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2448478.6605306566,
            "unit": "iter/sec",
            "range": "stddev: 3.197840892544784e-8",
            "extra": "mean: 408.41687375915035 nsec\nrounds: 191571"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 60442.331369552165,
            "unit": "iter/sec",
            "range": "stddev: 0.000001140443901693955",
            "extra": "mean: 16.54469603241926 usec\nrounds: 35109"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2078000.9905658476,
            "unit": "iter/sec",
            "range": "stddev: 3.941433675790779e-8",
            "extra": "mean: 481.2317244024362 nsec\nrounds: 187266"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 60723.823913058775,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011100818542940829",
            "extra": "mean: 16.468001116526327 usec\nrounds: 44779"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2395989.2680561286,
            "unit": "iter/sec",
            "range": "stddev: 3.266308500798753e-8",
            "extra": "mean: 417.3641398699983 nsec\nrounds: 198413"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 81482.55425236767,
            "unit": "iter/sec",
            "range": "stddev: 9.412212466576862e-7",
            "extra": "mean: 12.272565694281028 usec\nrounds: 60713"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2260611.5281421724,
            "unit": "iter/sec",
            "range": "stddev: 3.4100971616254674e-8",
            "extra": "mean: 442.35817943532135 nsec\nrounds: 187618"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 57804.70649160484,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012479115257427663",
            "extra": "mean: 17.29962940206665 usec\nrounds: 53894"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2038033.262679025,
            "unit": "iter/sec",
            "range": "stddev: 3.9422742967440936e-8",
            "extra": "mean: 490.6691261188897 nsec\nrounds: 191939"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 78861.62756918352,
            "unit": "iter/sec",
            "range": "stddev: 8.857116002614696e-7",
            "extra": "mean: 12.680438266668066 usec\nrounds: 56906"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 2034977.017458513,
            "unit": "iter/sec",
            "range": "stddev: 4.4780892523543535e-8",
            "extra": "mean: 491.4060411596723 nsec\nrounds: 190477"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 74806.76799323024,
            "unit": "iter/sec",
            "range": "stddev: 0.000001003414534024331",
            "extra": "mean: 13.36777442504262 usec\nrounds: 63132"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 338208.8394525049,
            "unit": "iter/sec",
            "range": "stddev: 2.6047304281567534e-7",
            "extra": "mean: 2.9567529979961726 usec\nrounds: 146349"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5183.357157252929,
            "unit": "iter/sec",
            "range": "stddev: 0.000003378370228154147",
            "extra": "mean: 192.92515828293398 usec\nrounds: 5149"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 117978.40722708394,
            "unit": "iter/sec",
            "range": "stddev: 6.371182966809936e-7",
            "extra": "mean: 8.476127314341579 usec\nrounds: 101544"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1485.7243018440008,
            "unit": "iter/sec",
            "range": "stddev: 0.00001965381462280895",
            "extra": "mean: 673.0723854747841 usec\nrounds: 716"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 166576.0091399818,
            "unit": "iter/sec",
            "range": "stddev: 5.358925152850536e-7",
            "extra": "mean: 6.003265447184847 usec\nrounds: 121139"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 196668.6587641594,
            "unit": "iter/sec",
            "range": "stddev: 4.268746012020652e-7",
            "extra": "mean: 5.084694258271103 usec\nrounds: 162549"
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
          "id": "cfe3a4ab807b24f666b92248276995422a5d8d2b",
          "message": "Fixed PR comments",
          "timestamp": "2024-06-11T11:03:43+02:00",
          "tree_id": "03fce3daccf65032a048b92a1e2304f581ee998a",
          "url": "https://github.com/Hampuztt/apytypes/commit/cfe3a4ab807b24f666b92248276995422a5d8d2b"
        },
        "date": 1718097127541,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 256008.91681727828,
            "unit": "iter/sec",
            "range": "stddev: 2.618426578504447e-7",
            "extra": "mean: 3.9061139449050195 usec\nrounds: 130822"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2277381.9462316227,
            "unit": "iter/sec",
            "range": "stddev: 4.205222626583426e-8",
            "extra": "mean: 439.1006970326992 nsec\nrounds: 188324"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 59053.58352892954,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016427816036645819",
            "extra": "mean: 16.933773367201564 usec\nrounds: 36376"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 6041.784779847933,
            "unit": "iter/sec",
            "range": "stddev: 0.000007209895082400613",
            "extra": "mean: 165.51400561891072 usec\nrounds: 1958"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 658.4082373797154,
            "unit": "iter/sec",
            "range": "stddev: 0.00002930230455421443",
            "extra": "mean: 1.5188145336390784 msec\nrounds: 654"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2462527.674024703,
            "unit": "iter/sec",
            "range": "stddev: 3.3671166476746854e-8",
            "extra": "mean: 406.086806880685 nsec\nrounds: 193837"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 59117.410652865605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012418466568772076",
            "extra": "mean: 16.91549052904141 usec\nrounds: 40281"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2065251.6354762916,
            "unit": "iter/sec",
            "range": "stddev: 4.2150077007987995e-8",
            "extra": "mean: 484.20249756609087 nsec\nrounds: 190840"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 60675.00048613018,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012972829438202533",
            "extra": "mean: 16.481252443147355 usec\nrounds: 35097"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2379387.5877939374,
            "unit": "iter/sec",
            "range": "stddev: 4.223449052334953e-8",
            "extra": "mean: 420.2762110427465 nsec\nrounds: 194591"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 81407.90960233005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010899456637333544",
            "extra": "mean: 12.283818671734792 usec\nrounds: 63658"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2260869.1847187798,
            "unit": "iter/sec",
            "range": "stddev: 3.1979038581128656e-8",
            "extra": "mean: 442.3077667469525 nsec\nrounds: 187970"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 58097.04146865655,
            "unit": "iter/sec",
            "range": "stddev: 0.00000168697800508424",
            "extra": "mean: 17.21258044679438 usec\nrounds: 53178"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2040724.086609904,
            "unit": "iter/sec",
            "range": "stddev: 3.9470103954583174e-8",
            "extra": "mean: 490.0221478061395 nsec\nrounds: 186220"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 79621.45588576794,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025637165183732227",
            "extra": "mean: 12.559428722763993 usec\nrounds: 49097"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 2039869.4035706094,
            "unit": "iter/sec",
            "range": "stddev: 5.0716502137725675e-8",
            "extra": "mean: 490.2274617431675 nsec\nrounds: 192679"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 74253.79457436396,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012247089365788938",
            "extra": "mean: 13.467325215259088 usec\nrounds: 46686"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 339198.9074195607,
            "unit": "iter/sec",
            "range": "stddev: 2.207059714625283e-7",
            "extra": "mean: 2.9481227036002315 usec\nrounds: 151218"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5178.301416956274,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034599174185370574",
            "extra": "mean: 193.11351724824559 usec\nrounds: 5160"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 117787.47863320529,
            "unit": "iter/sec",
            "range": "stddev: 6.113808953767043e-7",
            "extra": "mean: 8.48986676346166 usec\nrounds: 96340"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1452.9168756754655,
            "unit": "iter/sec",
            "range": "stddev: 0.00009363828075549439",
            "extra": "mean: 688.2706208055413 usec\nrounds: 1490"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 165007.78100600734,
            "unit": "iter/sec",
            "range": "stddev: 5.080188444860367e-7",
            "extra": "mean: 6.0603202703731505 usec\nrounds: 117151"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 194522.82692689775,
            "unit": "iter/sec",
            "range": "stddev: 4.3130406704546835e-7",
            "extra": "mean: 5.1407848415435735 usec\nrounds: 150331"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "distinct": true,
          "id": "70876b11c448a01bc3ef46340cbb325c971af061",
          "message": "Fixed issues after PR feedback",
          "timestamp": "2024-06-11T11:32:54+02:00",
          "tree_id": "03fce3daccf65032a048b92a1e2304f581ee998a",
          "url": "https://github.com/Hampuztt/apytypes/commit/70876b11c448a01bc3ef46340cbb325c971af061"
        },
        "date": 1718098765166,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 252361.6504070397,
            "unit": "iter/sec",
            "range": "stddev: 4.881391241589002e-7",
            "extra": "mean: 3.9625672061784263 usec\nrounds: 191939"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2408921.6268395167,
            "unit": "iter/sec",
            "range": "stddev: 3.93429737624008e-8",
            "extra": "mean: 415.1235095647376 nsec\nrounds: 199243"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 58814.31917941016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016732581944056503",
            "extra": "mean: 17.002662173977562 usec\nrounds: 29530"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 6143.187645976895,
            "unit": "iter/sec",
            "range": "stddev: 0.00000437760675496075",
            "extra": "mean: 162.78193954483694 usec\nrounds: 1803"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 647.9107298741299,
            "unit": "iter/sec",
            "range": "stddev: 0.000020430937332295544",
            "extra": "mean: 1.5434225023473076 msec\nrounds: 639"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2341540.4896347285,
            "unit": "iter/sec",
            "range": "stddev: 3.990860597682656e-8",
            "extra": "mean: 427.06927530259884 nsec\nrounds: 193051"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 60487.20018977998,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014604536605815807",
            "extra": "mean: 16.53242333687916 usec\nrounds: 29584"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2184008.0367670488,
            "unit": "iter/sec",
            "range": "stddev: 7.133004720996986e-8",
            "extra": "mean: 457.8737729740828 nsec\nrounds: 191242"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 58339.05059352528,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012295356118928743",
            "extra": "mean: 17.141177133091436 usec\nrounds: 34985"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2106311.768039998,
            "unit": "iter/sec",
            "range": "stddev: 4.500794211994507e-8",
            "extra": "mean: 474.76352512187634 nsec\nrounds: 191571"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 81080.77386388413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011772646918808392",
            "extra": "mean: 12.333380064659579 usec\nrounds: 44203"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2234585.646547314,
            "unit": "iter/sec",
            "range": "stddev: 4.40334272712547e-8",
            "extra": "mean: 447.5102583535609 nsec\nrounds: 188680"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 57300.625295352176,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015912988560051351",
            "extra": "mean: 17.45181653508261 usec\nrounds: 47148"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2032392.5760277808,
            "unit": "iter/sec",
            "range": "stddev: 5.070359538046066e-8",
            "extra": "mean: 492.0309254201967 nsec\nrounds: 196851"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 79781.85633535656,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011954952938228303",
            "extra": "mean: 12.534178144421473 usec\nrounds: 50925"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 2012571.1708402457,
            "unit": "iter/sec",
            "range": "stddev: 4.702302139949899e-8",
            "extra": "mean: 496.876838190292 nsec\nrounds: 194553"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 72218.18408768612,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011893941304250637",
            "extra": "mean: 13.846928064347567 usec\nrounds: 52533"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 338655.989728709,
            "unit": "iter/sec",
            "range": "stddev: 2.847690331071941e-7",
            "extra": "mean: 2.952848998185685 usec\nrounds: 149634"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5152.341323622058,
            "unit": "iter/sec",
            "range": "stddev: 0.000004435897279770437",
            "extra": "mean: 194.08652051355313 usec\nrounds: 5143"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 118467.88763703467,
            "unit": "iter/sec",
            "range": "stddev: 7.197036881634593e-7",
            "extra": "mean: 8.441106024139037 usec\nrounds: 97657"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1480.0427307874065,
            "unit": "iter/sec",
            "range": "stddev: 0.000021452924732980108",
            "extra": "mean: 675.6561680269757 usec\nrounds: 1470"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 165847.77951898926,
            "unit": "iter/sec",
            "range": "stddev: 5.61734037270479e-7",
            "extra": "mean: 6.0296254969485545 usec\nrounds: 116469"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 195023.53034937303,
            "unit": "iter/sec",
            "range": "stddev: 5.858584043135431e-7",
            "extra": "mean: 5.127586390260496 usec\nrounds: 157431"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "committer": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "distinct": true,
          "id": "f641ae2028e8826b716e091b0bd3b11b5f268c4a",
          "message": "Revert to windows-2019 runner",
          "timestamp": "2024-06-17T11:43:20+02:00",
          "tree_id": "fac6acd92ccb2a79e2d80b644995c79d0a226864",
          "url": "https://github.com/Hampuztt/apytypes/commit/f641ae2028e8826b716e091b0bd3b11b5f268c4a"
        },
        "date": 1719234816833,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 265955.9084372569,
            "unit": "iter/sec",
            "range": "stddev: 3.8329663172013635e-7",
            "extra": "mean: 3.7600217490032395 usec\nrounds: 199641"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2178684.6167366905,
            "unit": "iter/sec",
            "range": "stddev: 3.9927177294772585e-8",
            "extra": "mean: 458.9925463822111 nsec\nrounds: 195695"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 58051.66212172117,
            "unit": "iter/sec",
            "range": "stddev: 0.000001737751075678682",
            "extra": "mean: 17.226035628458437 usec\nrounds: 43701"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 6305.119785303718,
            "unit": "iter/sec",
            "range": "stddev: 0.000004784588271498165",
            "extra": "mean: 158.60126913541737 usec\nrounds: 1999"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 635.4032488254611,
            "unit": "iter/sec",
            "range": "stddev: 0.000041991207094598453",
            "extra": "mean: 1.57380372519104 msec\nrounds: 655"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2193080.2844393025,
            "unit": "iter/sec",
            "range": "stddev: 4.3722657519598366e-8",
            "extra": "mean: 455.9796588821606 nsec\nrounds: 190840"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 59544.72847190349,
            "unit": "iter/sec",
            "range": "stddev: 0.000001483055105521837",
            "extra": "mean: 16.79409791031049 usec\nrounds: 39189"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2047667.1332059165,
            "unit": "iter/sec",
            "range": "stddev: 4.312216145985854e-8",
            "extra": "mean: 488.36062452895436 nsec\nrounds: 183790"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 57961.89083904644,
            "unit": "iter/sec",
            "range": "stddev: 0.000001565906660262416",
            "extra": "mean: 17.252715284545943 usec\nrounds: 35762"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2241527.7493608603,
            "unit": "iter/sec",
            "range": "stddev: 4.260667331440778e-8",
            "extra": "mean: 446.12430084132313 nsec\nrounds: 190115"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 80970.86201747316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011402148285055947",
            "extra": "mean: 12.350121699139182 usec\nrounds: 51159"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2345799.337402659,
            "unit": "iter/sec",
            "range": "stddev: 3.940500958372131e-8",
            "extra": "mean: 426.29392209971235 nsec\nrounds: 190115"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 57528.313363397756,
            "unit": "iter/sec",
            "range": "stddev: 0.000001362691889477776",
            "extra": "mean: 17.382744974342447 usec\nrounds: 45368"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2140414.15591614,
            "unit": "iter/sec",
            "range": "stddev: 4.825459104336047e-8",
            "extra": "mean: 467.19930217065587 nsec\nrounds: 189394"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 79937.43279753353,
            "unit": "iter/sec",
            "range": "stddev: 0.000001139167182706764",
            "extra": "mean: 12.509783777179981 usec\nrounds: 56266"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 2006788.834943355,
            "unit": "iter/sec",
            "range": "stddev: 4.4235209853466946e-8",
            "extra": "mean: 498.3085328099692 nsec\nrounds: 190840"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 75720.98288367619,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013402408614644792",
            "extra": "mean: 13.206379023582096 usec\nrounds: 45327"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 333975.8228615937,
            "unit": "iter/sec",
            "range": "stddev: 2.735863013219287e-7",
            "extra": "mean: 2.994228718210001 usec\nrounds: 155473"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5119.557377062633,
            "unit": "iter/sec",
            "range": "stddev: 0.000006239096047030628",
            "extra": "mean: 195.32938618489592 usec\nrounds: 4705"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 115915.88199133461,
            "unit": "iter/sec",
            "range": "stddev: 8.67215569201159e-7",
            "extra": "mean: 8.626945529990065 usec\nrounds: 100716"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1458.6513720117637,
            "unit": "iter/sec",
            "range": "stddev: 0.000051505365455078935",
            "extra": "mean: 685.564775235364 usec\nrounds: 1486"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 156413.8679539731,
            "unit": "iter/sec",
            "range": "stddev: 4.904005267661714e-7",
            "extra": "mean: 6.393295000506372 usec\nrounds: 102271"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 188278.50830068017,
            "unit": "iter/sec",
            "range": "stddev: 5.471708611480913e-7",
            "extra": "mean: 5.31128066089733 usec\nrounds: 149433"
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
          "distinct": false,
          "id": "584a386e9a9f51906f5f1cd1e8b2f15fad2d5a98",
          "message": "Fixed array creation functions added",
          "timestamp": "2024-07-19T14:37:22+02:00",
          "tree_id": "126caef7a7ff5598216c2dc25fd9290e02087778",
          "url": "https://github.com/Hampuztt/apytypes/commit/584a386e9a9f51906f5f1cd1e8b2f15fad2d5a98"
        },
        "date": 1721393822117,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 267525.9654150433,
            "unit": "iter/sec",
            "range": "stddev: 2.5865569187984203e-7",
            "extra": "mean: 3.7379549250428346 usec\nrounds: 135796"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2212677.7430217895,
            "unit": "iter/sec",
            "range": "stddev: 3.8173435940002486e-8",
            "extra": "mean: 451.9410940674241 nsec\nrounds: 197239"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 49812.64004970189,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017504467622369272",
            "extra": "mean: 20.07522586641108 usec\nrounds: 44088"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 5998.403871447727,
            "unit": "iter/sec",
            "range": "stddev: 0.000004185373353608387",
            "extra": "mean: 166.71101536860138 usec\nrounds: 1952"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 649.9408739072028,
            "unit": "iter/sec",
            "range": "stddev: 0.000012676588292485305",
            "extra": "mean: 1.5386014946073048 msec\nrounds: 649"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2262193.732449237,
            "unit": "iter/sec",
            "range": "stddev: 3.9585587628628445e-8",
            "extra": "mean: 442.04878903864216 nsec\nrounds: 189754"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 49747.49449267115,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017199815725962065",
            "extra": "mean: 20.10151486417715 usec\nrounds: 44940"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2030088.6598661456,
            "unit": "iter/sec",
            "range": "stddev: 3.9735762465038356e-8",
            "extra": "mean: 492.5893236928671 nsec\nrounds: 197278"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 48638.28362405319,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015443771822038237",
            "extra": "mean: 20.559936031654455 usec\nrounds: 41161"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2062658.3042238578,
            "unit": "iter/sec",
            "range": "stddev: 4.366965713570913e-8",
            "extra": "mean: 484.8112738556962 nsec\nrounds: 188715"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 56222.91332315558,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016047471255755475",
            "extra": "mean: 17.786342629600927 usec\nrounds: 53749"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2362185.0610028133,
            "unit": "iter/sec",
            "range": "stddev: 3.435956344330506e-8",
            "extra": "mean: 423.33685726361597 nsec\nrounds: 191571"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 55497.298419547566,
            "unit": "iter/sec",
            "range": "stddev: 0.00000490428076462763",
            "extra": "mean: 18.01889512603328 usec\nrounds: 50718"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2091928.6064439819,
            "unit": "iter/sec",
            "range": "stddev: 5.3309502043123346e-8",
            "extra": "mean: 478.02778590037497 nsec\nrounds: 185529"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 75321.18511326295,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012294212394210826",
            "extra": "mean: 13.276477242043748 usec\nrounds: 64944"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 2044594.2860041568,
            "unit": "iter/sec",
            "range": "stddev: 3.723051400187103e-8",
            "extra": "mean: 489.09458802909086 nsec\nrounds: 198847"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 74283.95306461751,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021824810861104684",
            "extra": "mean: 13.461857625295307 usec\nrounds: 67765"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 336574.0970031979,
            "unit": "iter/sec",
            "range": "stddev: 2.212118637029343e-7",
            "extra": "mean: 2.9711139654056584 usec\nrounds: 130294"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5186.202186352603,
            "unit": "iter/sec",
            "range": "stddev: 0.000003667805197080461",
            "extra": "mean: 192.81932405787836 usec\nrounds: 5175"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 120049.61737582875,
            "unit": "iter/sec",
            "range": "stddev: 8.043158852324431e-7",
            "extra": "mean: 8.329889106346656 usec\nrounds: 97571"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1513.968347393512,
            "unit": "iter/sec",
            "range": "stddev: 0.000008437318611016431",
            "extra": "mean: 660.5157906515196 usec\nrounds: 1519"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 168678.2909725484,
            "unit": "iter/sec",
            "range": "stddev: 4.4857506422796595e-7",
            "extra": "mean: 5.9284451735567165 usec\nrounds: 120106"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 190966.90752931958,
            "unit": "iter/sec",
            "range": "stddev: 5.629092366300756e-7",
            "extra": "mean: 5.236509366663268 usec\nrounds: 154751"
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
          "distinct": false,
          "id": "6b6361b2208e1a7afac6d83b5912fea2b28b3e8d",
          "message": "Documentation, refactoring and small fixes for array creation",
          "timestamp": "2024-07-23T13:15:32+02:00",
          "tree_id": "4628b1dce0e75ee2d511d4b5dbb912daf5e1cfd7",
          "url": "https://github.com/Hampuztt/apytypes/commit/6b6361b2208e1a7afac6d83b5912fea2b28b3e8d"
        },
        "date": 1721895376730,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 258543.11867953025,
            "unit": "iter/sec",
            "range": "stddev: 3.2579355320798733e-7",
            "extra": "mean: 3.8678267869102387 usec\nrounds: 132031"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2173022.0655701873,
            "unit": "iter/sec",
            "range": "stddev: 4.8268761918244926e-8",
            "extra": "mean: 460.1886082264586 nsec\nrounds: 196464"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 59045.06048651146,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017244964461955323",
            "extra": "mean: 16.936217725248074 usec\nrounds: 35283"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 5451.4693599024085,
            "unit": "iter/sec",
            "range": "stddev: 0.000004788968166174964",
            "extra": "mean: 183.4367826324721 usec\nrounds: 1854"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 638.9061798419783,
            "unit": "iter/sec",
            "range": "stddev: 0.00007524187693499803",
            "extra": "mean: 1.5651750312500212 msec\nrounds: 640"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2175056.1221844447,
            "unit": "iter/sec",
            "range": "stddev: 3.900410419114002e-8",
            "extra": "mean: 459.75825166089004 nsec\nrounds: 197668"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 59708.28656150683,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016217404530153052",
            "extra": "mean: 16.748094068482068 usec\nrounds: 37579"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2102409.602766678,
            "unit": "iter/sec",
            "range": "stddev: 3.907699787737747e-8",
            "extra": "mean: 475.6447072370119 nsec\nrounds: 188680"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 60030.11527869372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014795817898596911",
            "extra": "mean: 16.658305508117632 usec\nrounds: 40395"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2369771.6664123433,
            "unit": "iter/sec",
            "range": "stddev: 4.131112315102969e-8",
            "extra": "mean: 421.98158336238237 nsec\nrounds: 196851"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 81404.26956026342,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010650218071289167",
            "extra": "mean: 12.28436795025477 usec\nrounds: 56812"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2206103.104037487,
            "unit": "iter/sec",
            "range": "stddev: 4.48855348405625e-8",
            "extra": "mean: 453.2879710698277 nsec\nrounds: 198847"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 52062.020697143256,
            "unit": "iter/sec",
            "range": "stddev: 0.000004826750748510545",
            "extra": "mean: 19.2078599064994 usec\nrounds: 31379"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2134811.6755689504,
            "unit": "iter/sec",
            "range": "stddev: 8.597271169103645e-8",
            "extra": "mean: 468.4253938856106 nsec\nrounds: 191976"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 81396.46634174774,
            "unit": "iter/sec",
            "range": "stddev: 0.000001153791160004046",
            "extra": "mean: 12.285545613263388 usec\nrounds: 59588"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 2005412.5297954604,
            "unit": "iter/sec",
            "range": "stddev: 4.855980445198219e-8",
            "extra": "mean: 498.65051960236997 nsec\nrounds: 194213"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 77051.4046283102,
            "unit": "iter/sec",
            "range": "stddev: 0.000001524054469930425",
            "extra": "mean: 12.978348737753969 usec\nrounds: 40053"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 335758.5567880457,
            "unit": "iter/sec",
            "range": "stddev: 2.4246736121091336e-7",
            "extra": "mean: 2.978330647969964 usec\nrounds: 146349"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5120.615505061163,
            "unit": "iter/sec",
            "range": "stddev: 0.000008900732205768662",
            "extra": "mean: 195.28902316754895 usec\nrounds: 4748"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 115637.27652195228,
            "unit": "iter/sec",
            "range": "stddev: 8.371052767360747e-7",
            "extra": "mean: 8.647730473055223 usec\nrounds: 98339"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1453.73719514196,
            "unit": "iter/sec",
            "range": "stddev: 0.000011736261362729486",
            "extra": "mean: 687.8822412618728 usec\nrounds: 1459"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 150880.99146388777,
            "unit": "iter/sec",
            "range": "stddev: 5.745332731445396e-7",
            "extra": "mean: 6.627740116881076 usec\nrounds: 113805"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 173434.83899047523,
            "unit": "iter/sec",
            "range": "stddev: 6.392864018058648e-7",
            "extra": "mean: 5.765854229869689 usec\nrounds: 146779"
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
          "id": "a0b2cb1dba92c32a9046a4124127f1303a475984",
          "message": "action test1",
          "timestamp": "2024-07-25T10:16:51+02:00",
          "tree_id": "6fd6ae51efd883baf1a3d196423eeeac5abc5c07",
          "url": "https://github.com/Hampuztt/apytypes/commit/a0b2cb1dba92c32a9046a4124127f1303a475984"
        },
        "date": 1721895793288,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 257692.65271594716,
            "unit": "iter/sec",
            "range": "stddev: 3.194159508123718e-7",
            "extra": "mean: 3.8805918192098914 usec\nrounds: 129450"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2190328.0675755865,
            "unit": "iter/sec",
            "range": "stddev: 4.371392886347206e-8",
            "extra": "mean: 456.55261182261467 nsec\nrounds: 123381"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 49081.191001222156,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017508984049646348",
            "extra": "mean: 20.37440370945968 usec\nrounds: 34183"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 5293.231063650768,
            "unit": "iter/sec",
            "range": "stddev: 0.000013664370979378586",
            "extra": "mean: 188.92052660748482 usec\nrounds: 1804"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 639.5328563160655,
            "unit": "iter/sec",
            "range": "stddev: 0.000014420758925405888",
            "extra": "mean: 1.5636413205731952 msec\nrounds: 627"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2206186.0742012537,
            "unit": "iter/sec",
            "range": "stddev: 4.928842723825094e-8",
            "extra": "mean: 453.27092383267086 nsec\nrounds: 186916"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 50179.98320860617,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013194600316146128",
            "extra": "mean: 19.92826493868762 usec\nrounds: 38039"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2095323.7906808155,
            "unit": "iter/sec",
            "range": "stddev: 4.505940344564104e-8",
            "extra": "mean: 477.25320757001407 nsec\nrounds: 186916"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 49648.29498778624,
            "unit": "iter/sec",
            "range": "stddev: 0.000001406276201919606",
            "extra": "mean: 20.141678586263748 usec\nrounds: 38228"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2232673.0955042276,
            "unit": "iter/sec",
            "range": "stddev: 1.6311349400984716e-7",
            "extra": "mean: 447.893604313883 nsec\nrounds: 190115"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 80503.34074899952,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012588671180291744",
            "extra": "mean: 12.421844742044794 usec\nrounds: 58683"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2326485.3358022063,
            "unit": "iter/sec",
            "range": "stddev: 3.508472978462399e-8",
            "extra": "mean: 429.8329263507389 nsec\nrounds: 193088"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 57589.010479956894,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012792149964503451",
            "extra": "mean: 17.364424074416714 usec\nrounds: 51241"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2135606.2962384685,
            "unit": "iter/sec",
            "range": "stddev: 4.6032490794874884e-8",
            "extra": "mean: 468.2511012265396 nsec\nrounds: 193799"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 79282.25916927969,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021899712515593676",
            "extra": "mean: 12.613162269567114 usec\nrounds: 63943"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 2075174.9138033376,
            "unit": "iter/sec",
            "range": "stddev: 4.556905107080063e-8",
            "extra": "mean: 481.8870897813744 nsec\nrounds: 189754"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 75220.50036368957,
            "unit": "iter/sec",
            "range": "stddev: 0.000001277769725289316",
            "extra": "mean: 13.294248179220036 usec\nrounds: 61649"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 334978.5964131682,
            "unit": "iter/sec",
            "range": "stddev: 2.392533186114234e-7",
            "extra": "mean: 2.9852653593621947 usec\nrounds: 162312"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5150.358968680952,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038011213319171557",
            "extra": "mean: 194.1612237284711 usec\nrounds: 5091"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 116787.59163566124,
            "unit": "iter/sec",
            "range": "stddev: 8.467165272553419e-7",
            "extra": "mean: 8.562553487014872 usec\nrounds: 97762"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1457.4616828306646,
            "unit": "iter/sec",
            "range": "stddev: 0.000010497871360520501",
            "extra": "mean: 686.1243844557285 usec\nrounds: 1441"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 153004.19984360223,
            "unit": "iter/sec",
            "range": "stddev: 5.341567359253475e-7",
            "extra": "mean: 6.535768305851602 usec\nrounds: 112778"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 183949.61022208762,
            "unit": "iter/sec",
            "range": "stddev: 4.876536218974531e-7",
            "extra": "mean: 5.436271372321318 usec\nrounds: 147211"
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
          "id": "6b6361b2208e1a7afac6d83b5912fea2b28b3e8d",
          "message": "Documentation, refactoring and small fixes for array creation",
          "timestamp": "2024-07-23T13:15:32+02:00",
          "tree_id": "4628b1dce0e75ee2d511d4b5dbb912daf5e1cfd7",
          "url": "https://github.com/Hampuztt/apytypes/commit/6b6361b2208e1a7afac6d83b5912fea2b28b3e8d"
        },
        "date": 1721896149076,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 257107.9638740409,
            "unit": "iter/sec",
            "range": "stddev: 3.124746671891048e-7",
            "extra": "mean: 3.889416667349548 usec\nrounds: 126985"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2190362.6269551297,
            "unit": "iter/sec",
            "range": "stddev: 4.8990504452893925e-8",
            "extra": "mean: 456.5454083693764 nsec\nrounds: 194932"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 58772.10071580704,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018157028556233111",
            "extra": "mean: 17.014875898949196 usec\nrounds: 32683"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 5422.7760138158455,
            "unit": "iter/sec",
            "range": "stddev: 0.000004695575320501424",
            "extra": "mean: 184.4073952994289 usec\nrounds: 1872"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 638.1854975535197,
            "unit": "iter/sec",
            "range": "stddev: 0.000017218139061125906",
            "extra": "mean: 1.566942532905392 msec\nrounds: 623"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2203174.3974803914,
            "unit": "iter/sec",
            "range": "stddev: 4.301521028895534e-8",
            "extra": "mean: 453.89053229006225 nsec\nrounds: 198413"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 58941.371053326,
            "unit": "iter/sec",
            "range": "stddev: 0.000001616738901797301",
            "extra": "mean: 16.966011854309773 usec\nrounds: 38214"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2091546.4843459146,
            "unit": "iter/sec",
            "range": "stddev: 4.880321055295222e-8",
            "extra": "mean: 478.1151207895887 nsec\nrounds: 192345"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 59874.22723719108,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017319383156570876",
            "extra": "mean: 16.70167693419259 usec\nrounds: 36231"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2333868.0197222824,
            "unit": "iter/sec",
            "range": "stddev: 4.599938387040826e-8",
            "extra": "mean: 428.4732433665982 nsec\nrounds: 194553"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 82260.06937425648,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012777896669224986",
            "extra": "mean: 12.156566455716519 usec\nrounds: 56105"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2255205.3744766223,
            "unit": "iter/sec",
            "range": "stddev: 4.1693928690481737e-8",
            "extra": "mean: 443.4185956266073 nsec\nrounds: 189394"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 57606.69550559011,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016048070432400327",
            "extra": "mean: 17.35909326552086 usec\nrounds: 52313"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2153407.1532226373,
            "unit": "iter/sec",
            "range": "stddev: 4.0339507560555884e-8",
            "extra": "mean: 464.38036508955383 nsec\nrounds: 192308"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 80688.48410864062,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012709719652154615",
            "extra": "mean: 12.393342260012961 usec\nrounds: 64562"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 2031986.0857039753,
            "unit": "iter/sec",
            "range": "stddev: 4.5183464727895286e-8",
            "extra": "mean: 492.12935415043717 nsec\nrounds: 199243"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 77140.4395529434,
            "unit": "iter/sec",
            "range": "stddev: 0.000001366449367120752",
            "extra": "mean: 12.963369223657006 usec\nrounds: 59877"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 335760.81797342695,
            "unit": "iter/sec",
            "range": "stddev: 2.667202440538307e-7",
            "extra": "mean: 2.9783105903653797 usec\nrounds: 151241"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5168.9426396080335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043193215429694",
            "extra": "mean: 193.46316446564998 usec\nrounds: 5150"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 116829.71416937499,
            "unit": "iter/sec",
            "range": "stddev: 7.509359340522513e-7",
            "extra": "mean: 8.559466289117514 usec\nrounds: 97476"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1458.154657512994,
            "unit": "iter/sec",
            "range": "stddev: 0.000010022701218908322",
            "extra": "mean: 685.7983101090144 usec\nrounds: 1464"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 162203.3223261057,
            "unit": "iter/sec",
            "range": "stddev: 5.212962423497254e-7",
            "extra": "mean: 6.165101834286261 usec\nrounds: 112791"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 179107.36554229146,
            "unit": "iter/sec",
            "range": "stddev: 5.038042825533089e-7",
            "extra": "mean: 5.583243307567251 usec\nrounds: 148302"
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
          "id": "4f1da16b6bcf8ecbce7ef24d76ddf8ab8faf193b",
          "message": "action_test",
          "timestamp": "2024-07-25T10:36:47+02:00",
          "tree_id": "b0fd6656c4074abf31a870b3e0f6a823416d4ee7",
          "url": "https://github.com/Hampuztt/apytypes/commit/4f1da16b6bcf8ecbce7ef24d76ddf8ab8faf193b"
        },
        "date": 1721896904880,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 259382.28659279493,
            "unit": "iter/sec",
            "range": "stddev: 2.950400557319419e-7",
            "extra": "mean: 3.8553133798604495 usec\nrounds: 132909"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2206997.109952888,
            "unit": "iter/sec",
            "range": "stddev: 3.700705342563449e-8",
            "extra": "mean: 453.10435409758264 nsec\nrounds: 199601"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 57528.97265322999,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058055734785062365",
            "extra": "mean: 17.382545765726523 usec\nrounds: 41505"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 5455.798440211011,
            "unit": "iter/sec",
            "range": "stddev: 0.000004377489602896509",
            "extra": "mean: 183.29122876491812 usec\nrounds: 1919"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 641.7005936068742,
            "unit": "iter/sec",
            "range": "stddev: 0.00003104213261176558",
            "extra": "mean: 1.5583591630782114 msec\nrounds: 650"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2239059.8012592467,
            "unit": "iter/sec",
            "range": "stddev: 4.418799476399719e-8",
            "extra": "mean: 446.61603028092344 nsec\nrounds: 186916"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 59039.97794293608,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030883943208614872",
            "extra": "mean: 16.93767570452906 usec\nrounds: 43152"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2094751.0001698646,
            "unit": "iter/sec",
            "range": "stddev: 3.956996803212532e-8",
            "extra": "mean: 477.3837080965563 nsec\nrounds: 186916"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 58442.741136828954,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010411547251341174",
            "extra": "mean: 17.110764836624483 usec\nrounds: 44922"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2340848.934529252,
            "unit": "iter/sec",
            "range": "stddev: 4.780336454991718e-8",
            "extra": "mean: 427.1954440328136 nsec\nrounds: 193051"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 82700.71862303825,
            "unit": "iter/sec",
            "range": "stddev: 8.929518557931956e-7",
            "extra": "mean: 12.091793356211857 usec\nrounds: 58821"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2264865.036103574,
            "unit": "iter/sec",
            "range": "stddev: 5.166492481851332e-8",
            "extra": "mean: 441.52741291834127 nsec\nrounds: 186220"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 57973.13658840724,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012571298904882628",
            "extra": "mean: 17.249368567026405 usec\nrounds: 44323"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2160604.2681886135,
            "unit": "iter/sec",
            "range": "stddev: 4.226890212590708e-8",
            "extra": "mean: 462.83348354132863 nsec\nrounds: 194175"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 80719.54809574594,
            "unit": "iter/sec",
            "range": "stddev: 9.245621955103009e-7",
            "extra": "mean: 12.388572825182871 usec\nrounds: 53807"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 2072214.9873398165,
            "unit": "iter/sec",
            "range": "stddev: 5.032615528959269e-8",
            "extra": "mean: 482.5754113880482 nsec\nrounds: 186602"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 76537.60889478111,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010205801788160217",
            "extra": "mean: 13.065472183416842 usec\nrounds: 63056"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 337053.0132993588,
            "unit": "iter/sec",
            "range": "stddev: 2.662517040845316e-7",
            "extra": "mean: 2.96689233011495 usec\nrounds: 162023"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5161.81297036272,
            "unit": "iter/sec",
            "range": "stddev: 0.000008953812384358739",
            "extra": "mean: 193.73038227879266 usec\nrounds: 5169"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 117234.39815749443,
            "unit": "iter/sec",
            "range": "stddev: 6.615712113219166e-7",
            "extra": "mean: 8.529919679858681 usec\nrounds: 100311"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1460.53881708633,
            "unit": "iter/sec",
            "range": "stddev: 0.0000070689464007401755",
            "extra": "mean: 684.6788242129218 usec\nrounds: 1462"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 159827.19904399733,
            "unit": "iter/sec",
            "range": "stddev: 6.972766628314742e-7",
            "extra": "mean: 6.256757335306361 usec\nrounds: 113935"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 182449.0458669943,
            "unit": "iter/sec",
            "range": "stddev: 4.6724542000926385e-7",
            "extra": "mean: 5.480982349060909 usec\nrounds: 144865"
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
          "id": "a0d073bc4f2cebd7d2de08b5be35c6ab01ffcef4",
          "message": "test2",
          "timestamp": "2024-07-25T10:59:40+02:00",
          "tree_id": "d4162afe90455c19c9b5d1c7be18ea0021cc6c4c",
          "url": "https://github.com/Hampuztt/apytypes/commit/a0d073bc4f2cebd7d2de08b5be35c6ab01ffcef4"
        },
        "date": 1721898249444,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 259735.35225593566,
            "unit": "iter/sec",
            "range": "stddev: 3.0436842115952215e-7",
            "extra": "mean: 3.8500727425607777 usec\nrounds: 128618"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2189807.381513726,
            "unit": "iter/sec",
            "range": "stddev: 3.9966780412415656e-8",
            "extra": "mean: 456.66116958130766 nsec\nrounds: 194213"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 49975.01508484416,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017658029424276428",
            "extra": "mean: 20.009998962526943 usec\nrounds: 32770"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 5335.78330859215,
            "unit": "iter/sec",
            "range": "stddev: 0.000004749371025234971",
            "extra": "mean: 187.4139076056015 usec\nrounds: 1775"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 638.25341562369,
            "unit": "iter/sec",
            "range": "stddev: 0.00003562115166148625",
            "extra": "mean: 1.566775790808448 msec\nrounds: 631"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2178133.4137348905,
            "unit": "iter/sec",
            "range": "stddev: 4.4663286227639475e-8",
            "extra": "mean: 459.1086999970354 nsec\nrounds: 196464"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 49315.65745072109,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016705631049345631",
            "extra": "mean: 20.277535608224525 usec\nrounds: 35371"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2101921.5237804367,
            "unit": "iter/sec",
            "range": "stddev: 4.477974723955387e-8",
            "extra": "mean: 475.7551548365165 nsec\nrounds: 186568"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 49529.58191686961,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017192152234246276",
            "extra": "mean: 20.18995439287977 usec\nrounds: 33986"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2310380.3802104346,
            "unit": "iter/sec",
            "range": "stddev: 4.0502353635770136e-8",
            "extra": "mean: 432.8291603259289 nsec\nrounds: 182482"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 82371.10834449648,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012710901101266622",
            "extra": "mean: 12.140179003270797 usec\nrounds: 63943"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2266700.5009449907,
            "unit": "iter/sec",
            "range": "stddev: 4.09665485743182e-8",
            "extra": "mean: 441.1698852947419 nsec\nrounds: 188006"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 57786.75090417037,
            "unit": "iter/sec",
            "range": "stddev: 0.000001440006487307465",
            "extra": "mean: 17.305004769316973 usec\nrounds: 54723"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2133618.9020958887,
            "unit": "iter/sec",
            "range": "stddev: 4.205003708871724e-8",
            "extra": "mean: 468.6872613555893 nsec\nrounds: 185186"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 80126.54616492902,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013019059411763531",
            "extra": "mean: 12.480258389543502 usec\nrounds: 68985"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 2044553.6918372181,
            "unit": "iter/sec",
            "range": "stddev: 4.593039990974132e-8",
            "extra": "mean: 489.1042988954903 nsec\nrounds: 194213"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 76395.93001081196,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013316515004581448",
            "extra": "mean: 13.08970255167356 usec\nrounds: 62078"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 337973.2467910318,
            "unit": "iter/sec",
            "range": "stddev: 2.5899848647707584e-7",
            "extra": "mean: 2.9588140762463904 usec\nrounds: 137118"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5179.748321530739,
            "unit": "iter/sec",
            "range": "stddev: 0.000003819797421347791",
            "extra": "mean: 193.0595731540246 usec\nrounds: 5133"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 116140.77641503685,
            "unit": "iter/sec",
            "range": "stddev: 8.207657106077168e-7",
            "extra": "mean: 8.610240355432387 usec\nrounds: 99020"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1458.7350532154026,
            "unit": "iter/sec",
            "range": "stddev: 0.000008376571716495652",
            "extra": "mean: 685.5254474044206 usec\nrounds: 1464"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 160738.06097916613,
            "unit": "iter/sec",
            "range": "stddev: 5.038719375311623e-7",
            "extra": "mean: 6.221301874044715 usec\nrounds: 112918"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 186587.0540625276,
            "unit": "iter/sec",
            "range": "stddev: 4.6637445653928457e-7",
            "extra": "mean: 5.359428632518566 usec\nrounds: 149858"
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
          "id": "f38485da80484f3dc95751737b9b5af8433c98e5",
          "message": "test abc",
          "timestamp": "2024-07-25T11:10:31+02:00",
          "tree_id": "c187e5c4c086a7d726999d44c6aaabe0ee8e8548",
          "url": "https://github.com/Hampuztt/apytypes/commit/f38485da80484f3dc95751737b9b5af8433c98e5"
        },
        "date": 1721898897681,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 261132.43727372368,
            "unit": "iter/sec",
            "range": "stddev: 2.9905790322416414e-7",
            "extra": "mean: 3.829474462997418 usec\nrounds: 130634"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2254373.631757942,
            "unit": "iter/sec",
            "range": "stddev: 6.173888252387662e-8",
            "extra": "mean: 443.58219325880873 nsec\nrounds: 189754"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 48259.88293808004,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017160306954802239",
            "extra": "mean: 20.721144336032733 usec\nrounds: 37967"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 6002.264412575688,
            "unit": "iter/sec",
            "range": "stddev: 0.00000432013560253334",
            "extra": "mean: 166.60379004711 usec\nrounds: 1929"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 643.0908871896344,
            "unit": "iter/sec",
            "range": "stddev: 0.0000186165211377418",
            "extra": "mean: 1.554990157565583 msec\nrounds: 641"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2329403.883318856,
            "unit": "iter/sec",
            "range": "stddev: 3.7185240563158414e-8",
            "extra": "mean: 429.2943817777185 nsec\nrounds: 193424"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 50477.265036062105,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016223643994418796",
            "extra": "mean: 19.81089901137824 usec\nrounds: 32974"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2066606.2262150128,
            "unit": "iter/sec",
            "range": "stddev: 3.959718090392062e-8",
            "extra": "mean: 483.885119146223 nsec\nrounds: 186568"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 50086.5885807952,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015754385407126273",
            "extra": "mean: 19.965424444647283 usec\nrounds: 40295"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2111517.9666692545,
            "unit": "iter/sec",
            "range": "stddev: 4.2150764880657345e-8",
            "extra": "mean: 473.5929391962256 nsec\nrounds: 190877"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 57195.22274071253,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013389928077627054",
            "extra": "mean: 17.483977718442958 usec\nrounds: 42008"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2280065.104715488,
            "unit": "iter/sec",
            "range": "stddev: 3.026702752730999e-8",
            "extra": "mean: 438.5839675945432 nsec\nrounds: 186568"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 57657.009499953616,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010899631342395505",
            "extra": "mean: 17.343944971700353 usec\nrounds: 36872"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2185832.435730094,
            "unit": "iter/sec",
            "range": "stddev: 3.400454121720949e-8",
            "extra": "mean: 457.4916099028455 nsec\nrounds: 194932"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 78958.63500230626,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010313583227984857",
            "extra": "mean: 12.664859264231096 usec\nrounds: 70842"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 2098092.6968674907,
            "unit": "iter/sec",
            "range": "stddev: 6.344841442819361e-8",
            "extra": "mean: 476.62336439806273 nsec\nrounds: 186220"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 74213.0734710764,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014012109058083867",
            "extra": "mean: 13.474714807354493 usec\nrounds: 57498"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 330190.6060472346,
            "unit": "iter/sec",
            "range": "stddev: 3.5898229522223785e-7",
            "extra": "mean: 3.0285537555751887 usec\nrounds: 152161"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5149.275526972566,
            "unit": "iter/sec",
            "range": "stddev: 0.00000546080292457309",
            "extra": "mean: 194.20207653715008 usec\nrounds: 5174"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 119543.29417500098,
            "unit": "iter/sec",
            "range": "stddev: 9.200023441315704e-7",
            "extra": "mean: 8.365170182913708 usec\nrounds: 101338"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1508.6400186556375,
            "unit": "iter/sec",
            "range": "stddev: 0.00003481574996117751",
            "extra": "mean: 662.8486501976189 usec\nrounds: 1518"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 161383.85056597524,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015113842757305734",
            "extra": "mean: 6.196406867806085 usec\nrounds: 110048"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 187186.67048938994,
            "unit": "iter/sec",
            "range": "stddev: 5.595294616427727e-7",
            "extra": "mean: 5.342260735689948 usec\nrounds: 150106"
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
          "id": "a0adff6ed7e6ec17ad26d5a4119ad9c4f0976e55",
          "message": "abc",
          "timestamp": "2024-07-25T11:26:55+02:00",
          "tree_id": "d8f780b8f5bf2940b961012634d20dd791e2d9fd",
          "url": "https://github.com/Hampuztt/apytypes/commit/a0adff6ed7e6ec17ad26d5a4119ad9c4f0976e55"
        },
        "date": 1721899891369,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 259570.73584558105,
            "unit": "iter/sec",
            "range": "stddev: 2.933637998899019e-7",
            "extra": "mean: 3.8525144090006402 usec\nrounds: 132556"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2295823.7555463356,
            "unit": "iter/sec",
            "range": "stddev: 3.5490840334249364e-8",
            "extra": "mean: 435.57350497142926 nsec\nrounds: 188324"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 51048.44483745951,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019334354965379654",
            "extra": "mean: 19.589235346621116 usec\nrounds: 40281"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 6086.803951725546,
            "unit": "iter/sec",
            "range": "stddev: 0.000006192073117076729",
            "extra": "mean: 164.2898322224606 usec\nrounds: 1949"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 649.7082497157769,
            "unit": "iter/sec",
            "range": "stddev: 0.00001427120776369033",
            "extra": "mean: 1.5391523817612947 msec\nrounds: 647"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2319022.5939304964,
            "unit": "iter/sec",
            "range": "stddev: 3.307209325870176e-8",
            "extra": "mean: 431.2161522778036 nsec\nrounds: 190840"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 49773.320330720024,
            "unit": "iter/sec",
            "range": "stddev: 0.000005365454440306604",
            "extra": "mean: 20.09108480920051 usec\nrounds: 44500"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2061951.2891644787,
            "unit": "iter/sec",
            "range": "stddev: 4.6347408938578676e-8",
            "extra": "mean: 484.97750904958514 nsec\nrounds: 186568"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 50560.35390814437,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014719092151933392",
            "extra": "mean: 19.778342568897997 usec\nrounds: 42987"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2031777.5135321848,
            "unit": "iter/sec",
            "range": "stddev: 6.356459328231663e-8",
            "extra": "mean: 492.1798737020898 nsec\nrounds: 189394"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 55779.03569078447,
            "unit": "iter/sec",
            "range": "stddev: 0.000003128800210533084",
            "extra": "mean: 17.92788253894491 usec\nrounds: 50953"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2364204.204825111,
            "unit": "iter/sec",
            "range": "stddev: 3.5270086667387144e-8",
            "extra": "mean: 422.97530727639577 nsec\nrounds: 196890"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 56334.27443131608,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014108627633407809",
            "extra": "mean: 17.751182740788128 usec\nrounds: 49562"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 1965608.5381772623,
            "unit": "iter/sec",
            "range": "stddev: 4.199972126420503e-8",
            "extra": "mean: 508.74829884863266 nsec\nrounds: 182150"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 74978.85944396928,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011747950739449677",
            "extra": "mean: 13.337092714077453 usec\nrounds: 62504"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 1882299.6950587183,
            "unit": "iter/sec",
            "range": "stddev: 4.967950043457197e-8",
            "extra": "mean: 531.265027893915 nsec\nrounds: 193051"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 71038.30023461499,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014539930768024812",
            "extra": "mean: 14.076913393160382 usec\nrounds: 59949"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 335336.50502601214,
            "unit": "iter/sec",
            "range": "stddev: 2.7834489539890277e-7",
            "extra": "mean: 2.982079150381882 usec\nrounds: 147864"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5151.072245903031,
            "unit": "iter/sec",
            "range": "stddev: 0.000011292711898852081",
            "extra": "mean: 194.13433791291945 usec\nrounds: 5167"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 119878.18374586856,
            "unit": "iter/sec",
            "range": "stddev: 6.527946863237292e-7",
            "extra": "mean: 8.341801391651995 usec\nrounds: 98727"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1498.1659350704667,
            "unit": "iter/sec",
            "range": "stddev: 0.00005549119821465011",
            "extra": "mean: 667.4828045352431 usec\nrounds: 1499"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 166364.4623043503,
            "unit": "iter/sec",
            "range": "stddev: 5.804290752363304e-7",
            "extra": "mean: 6.0108991196123425 usec\nrounds: 118695"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 188064.09352319277,
            "unit": "iter/sec",
            "range": "stddev: 4.866174970278587e-7",
            "extra": "mean: 5.31733613400623 usec\nrounds: 150083"
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
          "id": "1fc9bf78672bb2ae37efe57548f230fdaea03e58",
          "message": "testttt",
          "timestamp": "2024-07-25T11:55:24+02:00",
          "tree_id": "d5c9716223d353562e76771c3e68cc6104e59299",
          "url": "https://github.com/Hampuztt/apytypes/commit/1fc9bf78672bb2ae37efe57548f230fdaea03e58"
        },
        "date": 1721901607975,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 251130.3817072888,
            "unit": "iter/sec",
            "range": "stddev: 2.9509948738288037e-7",
            "extra": "mean: 3.9819953014110996 usec\nrounds: 123229"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2245894.195975786,
            "unit": "iter/sec",
            "range": "stddev: 4.352397052632648e-8",
            "extra": "mean: 445.2569501235941 nsec\nrounds: 196890"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 49203.96211766773,
            "unit": "iter/sec",
            "range": "stddev: 0.00000182959421492261",
            "extra": "mean: 20.323566578003863 usec\nrounds: 42912"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 5350.552886923176,
            "unit": "iter/sec",
            "range": "stddev: 0.000005955179454568996",
            "extra": "mean: 186.896573332452 usec\nrounds: 1800"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 637.1164910385484,
            "unit": "iter/sec",
            "range": "stddev: 0.00002344578954738083",
            "extra": "mean: 1.5695716781242375 msec\nrounds: 640"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2238686.0701124934,
            "unit": "iter/sec",
            "range": "stddev: 3.9359976803612485e-8",
            "extra": "mean: 446.69058933745646 nsec\nrounds: 199243"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 51790.75842096317,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014542895526391567",
            "extra": "mean: 19.308464106121942 usec\nrounds: 42932"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2072515.6744284732,
            "unit": "iter/sec",
            "range": "stddev: 3.856536826942494e-8",
            "extra": "mean: 482.5053978304934 nsec\nrounds: 184502"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 50151.95254961419,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014471773049295076",
            "extra": "mean: 19.939403137110617 usec\nrounds: 39143"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2328446.600589361,
            "unit": "iter/sec",
            "range": "stddev: 3.4705265375646745e-8",
            "extra": "mean: 429.47087545271137 nsec\nrounds: 189754"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 78185.45085224998,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012220739548990961",
            "extra": "mean: 12.790103390076217 usec\nrounds: 44540"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2358125.744089933,
            "unit": "iter/sec",
            "range": "stddev: 3.376516520187681e-8",
            "extra": "mean: 424.06559637722137 nsec\nrounds: 194932"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 57436.07435086998,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013104502539770822",
            "extra": "mean: 17.41066065711807 usec\nrounds: 43098"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2191084.1651117955,
            "unit": "iter/sec",
            "range": "stddev: 4.101230912786355e-8",
            "extra": "mean: 456.39506501977786 nsec\nrounds: 194553"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 77415.51237049626,
            "unit": "iter/sec",
            "range": "stddev: 0.000001090378364479764",
            "extra": "mean: 12.917307776950254 usec\nrounds: 60976"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 2101425.2293400164,
            "unit": "iter/sec",
            "range": "stddev: 3.745329973324736e-8",
            "extra": "mean: 475.8675141223364 nsec\nrounds: 183824"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 74037.84206468548,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012183440141778117",
            "extra": "mean: 13.506606515169885 usec\nrounds: 66676"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 334216.8919850573,
            "unit": "iter/sec",
            "range": "stddev: 2.666282054947979e-7",
            "extra": "mean: 2.9920689946596406 usec\nrounds: 155715"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5142.707367873446,
            "unit": "iter/sec",
            "range": "stddev: 0.000009504565566650245",
            "extra": "mean: 194.45010739810164 usec\nrounds: 5177"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 116436.32355750081,
            "unit": "iter/sec",
            "range": "stddev: 8.462530992622371e-7",
            "extra": "mean: 8.58838521731718 usec\nrounds: 99414"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1457.2822924006932,
            "unit": "iter/sec",
            "range": "stddev: 0.00000881202520513926",
            "extra": "mean: 686.208845887109 usec\nrounds: 1447"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 160949.21638884282,
            "unit": "iter/sec",
            "range": "stddev: 5.848686563784029e-7",
            "extra": "mean: 6.213139911064029 usec\nrounds: 115795"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 184432.09605035384,
            "unit": "iter/sec",
            "range": "stddev: 4.4246165647333914e-7",
            "extra": "mean: 5.422049748472082 usec\nrounds: 146135"
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
          "id": "5b378b957c0d3df0ad420da687be8a99e48a8e9d",
          "message": "???",
          "timestamp": "2024-07-25T12:00:41+02:00",
          "tree_id": "d8dffd44b18633439e731885e1b014e2021229ef",
          "url": "https://github.com/Hampuztt/apytypes/commit/5b378b957c0d3df0ad420da687be8a99e48a8e9d"
        },
        "date": 1721901929427,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_multiplication_20",
            "value": 267205.8778803492,
            "unit": "iter/sec",
            "range": "stddev: 3.170932508410086e-7",
            "extra": "mean: 3.7424326438200026 usec\nrounds: 142370"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20",
            "value": 2225190.143088907,
            "unit": "iter/sec",
            "range": "stddev: 4.275828347076478e-8",
            "extra": "mean: 449.39979763338897 nsec\nrounds: 194970"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200",
            "value": 60037.280975223126,
            "unit": "iter/sec",
            "range": "stddev: 0.000001825719218428978",
            "extra": "mean: 16.656317270808643 usec\nrounds: 44659"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_long_200",
            "value": 5656.724976570038,
            "unit": "iter/sec",
            "range": "stddev: 0.000009025765650376763",
            "extra": "mean: 176.780735167781 usec\nrounds: 1854"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_different_wl_long_200",
            "value": 651.5946594533073,
            "unit": "iter/sec",
            "range": "stddev: 0.000047987968464432035",
            "extra": "mean: 1.534696433575756 msec\nrounds: 685"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_20_different_wl",
            "value": 2247735.101714104,
            "unit": "iter/sec",
            "range": "stddev: 4.848526057312633e-8",
            "extra": "mean: 444.89228256362014 nsec\nrounds: 194553"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_addition_200_different_wl",
            "value": 59757.10057402325,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014273078833729098",
            "extra": "mean: 16.73441298848267 usec\nrounds: 43454"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_20",
            "value": 2054336.9913381932,
            "unit": "iter/sec",
            "range": "stddev: 4.838117399002589e-8",
            "extra": "mean: 486.7750540522333 nsec\nrounds: 187266"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_elementwise_multiplication_200",
            "value": 60963.87599087825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013281606091392486",
            "extra": "mean: 16.403156520914543 usec\nrounds: 39343"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_20",
            "value": 2389622.0177898863,
            "unit": "iter/sec",
            "range": "stddev: 3.374749084356193e-8",
            "extra": "mean: 418.47622450554263 nsec\nrounds: 193424"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_negation_200",
            "value": 81437.00611667732,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012980406272479757",
            "extra": "mean: 12.279429803291995 usec\nrounds: 47552"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_20",
            "value": 2264949.7100358293,
            "unit": "iter/sec",
            "range": "stddev: 3.990242711757016e-8",
            "extra": "mean: 441.5109066524005 nsec\nrounds: 185529"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_abs_200",
            "value": 57173.99652285453,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013132713493990007",
            "extra": "mean: 17.490468758822264 usec\nrounds: 49486"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_20",
            "value": 2186052.9182940875,
            "unit": "iter/sec",
            "range": "stddev: 4.794075504020646e-8",
            "extra": "mean: 457.4454678710923 nsec\nrounds: 191242"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_addition_200",
            "value": 80781.60459888807,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012370711748488293",
            "extra": "mean: 12.37905591211498 usec\nrounds: 51903"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_20",
            "value": 2113949.1931715044,
            "unit": "iter/sec",
            "range": "stddev: 4.980985463085231e-8",
            "extra": "mean: 473.0482658855836 nsec\nrounds: 185186"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_scalar_matrix_multiplication_200",
            "value": 70829.72983388432,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014419786006031622",
            "extra": "mean: 14.1183653014812 usec\nrounds: 34889"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_20",
            "value": 334997.0842278538,
            "unit": "iter/sec",
            "range": "stddev: 2.549214774557918e-7",
            "extra": "mean: 2.98510060857674 usec\nrounds: 142796"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_creation_200",
            "value": 5228.730135298389,
            "unit": "iter/sec",
            "range": "stddev: 0.000005181817856340907",
            "extra": "mean: 191.25102541612293 usec\nrounds: 5115"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_20",
            "value": 117983.93152996448,
            "unit": "iter/sec",
            "range": "stddev: 6.141596240625291e-7",
            "extra": "mean: 8.475730440852695 usec\nrounds: 97192"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_matrix_to_numpy_200",
            "value": 1464.8368013426823,
            "unit": "iter/sec",
            "range": "stddev: 0.00001220346946921186",
            "extra": "mean: 682.6699049910483 usec\nrounds: 1463"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_sum_20",
            "value": 158923.2126081994,
            "unit": "iter/sec",
            "range": "stddev: 5.574233494422735e-7",
            "extra": "mean: 6.292346999461591 usec\nrounds: 120395"
          },
          {
            "name": "benchmark/ci_fixed_array_benchmarks.py::test_fixed_vector_max_20",
            "value": 184057.81601288516,
            "unit": "iter/sec",
            "range": "stddev: 4.597939572640289e-7",
            "extra": "mean: 5.433075441523189 usec\nrounds: 144655"
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
        "date": 1717756336329,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 5591.129495014711,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040382664465105995",
            "extra": "mean: 178.8547378292065 usec\nrounds: 4745"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 183381.85605416298,
            "unit": "iter/sec",
            "range": "stddev: 4.573176697268785e-7",
            "extra": "mean: 5.453102185336394 usec\nrounds: 92851"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 1027.8836661021414,
            "unit": "iter/sec",
            "range": "stddev: 0.00002059989746734761",
            "extra": "mean: 972.8727413211267 usec\nrounds: 893"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 326560.9954633505,
            "unit": "iter/sec",
            "range": "stddev: 2.2799942073715953e-7",
            "extra": "mean: 3.0622150651553506 usec\nrounds: 160721"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 2086.9588814444032,
            "unit": "iter/sec",
            "range": "stddev: 0.000005808828136504077",
            "extra": "mean: 479.1661248773099 usec\nrounds: 2042"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 227941.15609447897,
            "unit": "iter/sec",
            "range": "stddev: 4.695142107190715e-7",
            "extra": "mean: 4.387097166364777 usec\nrounds: 119105"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1516.9258447833101,
            "unit": "iter/sec",
            "range": "stddev: 0.000005383983040065651",
            "extra": "mean: 659.2280060617254 usec\nrounds: 1485"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 250425.96940161823,
            "unit": "iter/sec",
            "range": "stddev: 3.3821438820881045e-7",
            "extra": "mean: 3.993196082616574 usec\nrounds: 166639"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 2617.057831153702,
            "unit": "iter/sec",
            "range": "stddev: 0.000014538321032042028",
            "extra": "mean: 382.1084838462132 usec\nrounds: 2600"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 241295.88944573968,
            "unit": "iter/sec",
            "range": "stddev: 3.697898802930955e-7",
            "extra": "mean: 4.144289412874024 usec\nrounds: 179180"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 3269.4319508779226,
            "unit": "iter/sec",
            "range": "stddev: 0.000012158135996013834",
            "extra": "mean: 305.8635307370369 usec\nrounds: 3107"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 383713.1517796632,
            "unit": "iter/sec",
            "range": "stddev: 2.463032551220835e-7",
            "extra": "mean: 2.6061134348979067 usec\nrounds: 187266"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 10471.00869948706,
            "unit": "iter/sec",
            "range": "stddev: 0.000002979294906499081",
            "extra": "mean: 95.50178294178923 usec\nrounds: 10329"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 252884.37046840234,
            "unit": "iter/sec",
            "range": "stddev: 2.5447230417458325e-7",
            "extra": "mean: 3.9543764533480683 usec\nrounds: 123686"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2791.105839816977,
            "unit": "iter/sec",
            "range": "stddev: 0.000005414398724156594",
            "extra": "mean: 358.28093142665404 usec\nrounds: 2727"
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
          "id": "2fc5d4f27d35ab38ef3f608999740aff951f4163",
          "message": "Added python function reshape",
          "timestamp": "2024-06-07T13:04:18+02:00",
          "tree_id": "13f36411a0372e771946b3aed274f146a93d254a",
          "url": "https://github.com/Hampuztt/apytypes/commit/2fc5d4f27d35ab38ef3f608999740aff951f4163"
        },
        "date": 1717758793670,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 5486.41456628152,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055551596914799485",
            "extra": "mean: 182.2683991373553 usec\nrounds: 5101"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 186301.18457031602,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013973780851936696",
            "extra": "mean: 5.367652397414403 usec\nrounds: 93371"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 1035.5645379974371,
            "unit": "iter/sec",
            "range": "stddev: 0.00000673689197417101",
            "extra": "mean: 965.6568599131336 usec\nrounds: 928"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 319368.269796431,
            "unit": "iter/sec",
            "range": "stddev: 2.5058110352614324e-7",
            "extra": "mean: 3.1311814434082996 usec\nrounds: 157184"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 2071.0006426598356,
            "unit": "iter/sec",
            "range": "stddev: 0.00001334567512896904",
            "extra": "mean: 482.8583726153151 usec\nrounds: 2045"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 228659.9208184714,
            "unit": "iter/sec",
            "range": "stddev: 3.68484088377913e-7",
            "extra": "mean: 4.3733068585897055 usec\nrounds: 121877"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1672.9445541217428,
            "unit": "iter/sec",
            "range": "stddev: 0.000015251542336580178",
            "extra": "mean: 597.7484415345593 usec\nrounds: 1642"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 241336.9693330346,
            "unit": "iter/sec",
            "range": "stddev: 0.000001855751626824612",
            "extra": "mean: 4.143583980372453 usec\nrounds: 173612"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 2743.462511269143,
            "unit": "iter/sec",
            "range": "stddev: 0.000015774337506417296",
            "extra": "mean: 364.50288490998685 usec\nrounds: 2737"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 244924.85280206497,
            "unit": "iter/sec",
            "range": "stddev: 3.75931007459856e-7",
            "extra": "mean: 4.082884968836323 usec\nrounds: 196851"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 3270.2658800633985,
            "unit": "iter/sec",
            "range": "stddev: 0.000011650402581621175",
            "extra": "mean: 305.78553447177626 usec\nrounds: 3278"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 387020.3360001355,
            "unit": "iter/sec",
            "range": "stddev: 5.390244355764438e-7",
            "extra": "mean: 2.5838435528608756 usec\nrounds: 188006"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 10454.80557761613,
            "unit": "iter/sec",
            "range": "stddev: 0.000006015501090725975",
            "extra": "mean: 95.64979401826587 usec\nrounds: 10365"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 252128.7948718649,
            "unit": "iter/sec",
            "range": "stddev: 2.8381168590133593e-7",
            "extra": "mean: 3.966226866345087 usec\nrounds: 123381"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2783.154511296659,
            "unit": "iter/sec",
            "range": "stddev: 0.00001442630595309663",
            "extra": "mean: 359.3045215208352 usec\nrounds: 2788"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "distinct": true,
          "id": "e3cd5291d8ddcabad01184c59e4af5fb82c3b9e1",
          "message": "[pre-commit.ci] auto fixes from pre-commit.com hooks\n\nfor more information, see https://pre-commit.ci",
          "timestamp": "2024-06-07T11:18:19Z",
          "tree_id": "666f1336597adc8618da7c6e882c1290c4026d0b",
          "url": "https://github.com/Hampuztt/apytypes/commit/e3cd5291d8ddcabad01184c59e4af5fb82c3b9e1"
        },
        "date": 1717759389578,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 5423.193919896252,
            "unit": "iter/sec",
            "range": "stddev: 0.000003329088233441476",
            "extra": "mean: 184.3931850438294 usec\nrounds: 4988"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 187769.82776670612,
            "unit": "iter/sec",
            "range": "stddev: 4.4737293254497836e-7",
            "extra": "mean: 5.32566926163689 usec\nrounds: 89920"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 1032.9469222935293,
            "unit": "iter/sec",
            "range": "stddev: 0.000010037593502842843",
            "extra": "mean: 968.1039542473541 usec\nrounds: 918"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 316107.69471207185,
            "unit": "iter/sec",
            "range": "stddev: 2.5332280482442336e-7",
            "extra": "mean: 3.163478829298523 usec\nrounds: 156962"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 2065.420914292866,
            "unit": "iter/sec",
            "range": "stddev: 0.000009518885229942047",
            "extra": "mean: 484.16281305177347 usec\nrounds: 2038"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 238832.10368123974,
            "unit": "iter/sec",
            "range": "stddev: 4.000389969192221e-7",
            "extra": "mean: 4.187041794576589 usec\nrounds: 131165"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1621.0746163910655,
            "unit": "iter/sec",
            "range": "stddev: 0.000025081301635539296",
            "extra": "mean: 616.8747507910898 usec\nrounds: 1581"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 246758.7827306933,
            "unit": "iter/sec",
            "range": "stddev: 3.4515908757777015e-7",
            "extra": "mean: 4.052540659075047 usec\nrounds: 151012"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 2070.46986146183,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072138502157995364",
            "extra": "mean: 482.9821571486012 usec\nrounds: 2049"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 243431.60666516257,
            "unit": "iter/sec",
            "range": "stddev: 4.304559105689633e-7",
            "extra": "mean: 4.107930000131366 usec\nrounds: 170329"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 3252.8539359915217,
            "unit": "iter/sec",
            "range": "stddev: 0.000012136061757806731",
            "extra": "mean: 307.42234962824546 usec\nrounds: 3232"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 387565.6691487945,
            "unit": "iter/sec",
            "range": "stddev: 2.3819436738733404e-7",
            "extra": "mean: 2.5802078966289432 usec\nrounds: 190840"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 10350.410887520688,
            "unit": "iter/sec",
            "range": "stddev: 0.000006132872033187663",
            "extra": "mean: 96.61452196121826 usec\nrounds: 10177"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 252048.8335199318,
            "unit": "iter/sec",
            "range": "stddev: 2.688758268057902e-7",
            "extra": "mean: 3.9674851338715715 usec\nrounds: 122325"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2771.088030522018,
            "unit": "iter/sec",
            "range": "stddev: 0.000006571695364709566",
            "extra": "mean: 360.8690842678209 usec\nrounds: 2765"
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
          "id": "a057ac4cd99529b0497ebacfc9b55e4cdfe8d62b",
          "message": "Fixed PR comments",
          "timestamp": "2024-06-11T09:36:43+02:00",
          "tree_id": "77d7ad42b50446bcad56d00f21cd2a592470cc3e",
          "url": "https://github.com/Hampuztt/apytypes/commit/a057ac4cd99529b0497ebacfc9b55e4cdfe8d62b"
        },
        "date": 1718091730561,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 5501.388838905837,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029732654374492793",
            "extra": "mean: 181.77228137883972 usec\nrounds: 5107"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 181270.60722212613,
            "unit": "iter/sec",
            "range": "stddev: 4.911520662413327e-7",
            "extra": "mean: 5.5166141677597835 usec\nrounds: 90910"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 1027.7533619134538,
            "unit": "iter/sec",
            "range": "stddev: 0.000007886567149699922",
            "extra": "mean: 972.9960874447706 usec\nrounds: 892"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 316795.2415158905,
            "unit": "iter/sec",
            "range": "stddev: 3.511701710630005e-7",
            "extra": "mean: 3.156613070369745 usec\nrounds: 132926"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 2053.441745471815,
            "unit": "iter/sec",
            "range": "stddev: 0.000012292063458211125",
            "extra": "mean: 486.9872750006999 usec\nrounds: 2040"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 238047.08452421485,
            "unit": "iter/sec",
            "range": "stddev: 3.9307661200877575e-7",
            "extra": "mean: 4.200849600820367 usec\nrounds: 144655"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1807.3977462950938,
            "unit": "iter/sec",
            "range": "stddev: 0.00001839091412373048",
            "extra": "mean: 553.2816459740843 usec\nrounds: 1788"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 246412.66345612044,
            "unit": "iter/sec",
            "range": "stddev: 3.7129271282641953e-7",
            "extra": "mean: 4.05823299003492 usec\nrounds: 163346"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 2397.038738358973,
            "unit": "iter/sec",
            "range": "stddev: 0.000014625691852302971",
            "extra": "mean: 417.18140971080254 usec\nrounds: 2348"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 242054.20310540748,
            "unit": "iter/sec",
            "range": "stddev: 3.444983634336436e-7",
            "extra": "mean: 4.131306075955762 usec\nrounds: 185186"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 3263.8101739038498,
            "unit": "iter/sec",
            "range": "stddev: 0.000004499362366360803",
            "extra": "mean: 306.3903679189461 usec\nrounds: 3248"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 387508.87498909107,
            "unit": "iter/sec",
            "range": "stddev: 2.626274035594452e-7",
            "extra": "mean: 2.580586057617781 usec\nrounds: 191976"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 10414.450415080677,
            "unit": "iter/sec",
            "range": "stddev: 0.000005947669488477029",
            "extra": "mean: 96.02042932116196 usec\nrounds: 10286"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 250631.048669562,
            "unit": "iter/sec",
            "range": "stddev: 2.6431133785637937e-7",
            "extra": "mean: 3.989928643351862 usec\nrounds: 123093"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2775.304618509029,
            "unit": "iter/sec",
            "range": "stddev: 0.000005149534694933502",
            "extra": "mean: 360.3208070677402 usec\nrounds: 2773"
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
          "id": "a22640a9142febd686c0ebe7bda6f7f402899ead",
          "message": "Fixed PR comments",
          "timestamp": "2024-06-11T10:42:21+02:00",
          "tree_id": "7f5698a586451dcd2aa976302ba4959ab39e8a44",
          "url": "https://github.com/Hampuztt/apytypes/commit/a22640a9142febd686c0ebe7bda6f7f402899ead"
        },
        "date": 1718095643741,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 5417.3686352201685,
            "unit": "iter/sec",
            "range": "stddev: 0.000005222363202397252",
            "extra": "mean: 184.59146263347444 usec\nrounds: 4991"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 187097.6021820251,
            "unit": "iter/sec",
            "range": "stddev: 4.1438369377572245e-7",
            "extra": "mean: 5.344803933014126 usec\nrounds: 88480"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 1039.3402359966317,
            "unit": "iter/sec",
            "range": "stddev: 0.000017242850450976432",
            "extra": "mean: 962.1488376624734 usec\nrounds: 924"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 321667.38807725254,
            "unit": "iter/sec",
            "range": "stddev: 2.2518759670024146e-7",
            "extra": "mean: 3.1088013179621345 usec\nrounds: 158429"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 2060.463174063732,
            "unit": "iter/sec",
            "range": "stddev: 0.000010037167215329061",
            "extra": "mean: 485.32777124463627 usec\nrounds: 2024"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 238540.44905257042,
            "unit": "iter/sec",
            "range": "stddev: 3.5867947517857803e-7",
            "extra": "mean: 4.192161136493946 usec\nrounds: 129803"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1831.1889217666767,
            "unit": "iter/sec",
            "range": "stddev: 0.000004953383970204441",
            "extra": "mean: 546.0932993386775 usec\nrounds: 1814"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 240202.71153390512,
            "unit": "iter/sec",
            "range": "stddev: 3.999520008212944e-7",
            "extra": "mean: 4.163150339203593 usec\nrounds: 149881"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 1847.3299210443563,
            "unit": "iter/sec",
            "range": "stddev: 0.000004821988147918573",
            "extra": "mean: 541.3218227065078 usec\nrounds: 1788"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 230797.28161237732,
            "unit": "iter/sec",
            "range": "stddev: 4.179317311492158e-7",
            "extra": "mean: 4.3328066648527255 usec\nrounds: 181819"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 3285.2596860878393,
            "unit": "iter/sec",
            "range": "stddev: 0.000004400021431566363",
            "extra": "mean: 304.38994038575447 usec\nrounds: 3271"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 388172.6021487703,
            "unit": "iter/sec",
            "range": "stddev: 2.5789400096345015e-7",
            "extra": "mean: 2.5761735744985472 usec\nrounds: 184163"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 10475.074755356232,
            "unit": "iter/sec",
            "range": "stddev: 0.000005851128769815607",
            "extra": "mean: 95.4647125061011 usec\nrounds: 10355"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 249148.4738483858,
            "unit": "iter/sec",
            "range": "stddev: 2.5679005806353267e-7",
            "extra": "mean: 4.013670983224764 usec\nrounds: 122474"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2781.987294400987,
            "unit": "iter/sec",
            "range": "stddev: 0.000014136479183837778",
            "extra": "mean: 359.4552721403849 usec\nrounds: 2789"
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
          "id": "cfe3a4ab807b24f666b92248276995422a5d8d2b",
          "message": "Fixed PR comments",
          "timestamp": "2024-06-11T11:03:43+02:00",
          "tree_id": "03fce3daccf65032a048b92a1e2304f581ee998a",
          "url": "https://github.com/Hampuztt/apytypes/commit/cfe3a4ab807b24f666b92248276995422a5d8d2b"
        },
        "date": 1718097150434,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 5404.017378307573,
            "unit": "iter/sec",
            "range": "stddev: 0.00000293049361170368",
            "extra": "mean: 185.047517429187 usec\nrounds: 4963"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 174309.9469525128,
            "unit": "iter/sec",
            "range": "stddev: 4.863994747643675e-7",
            "extra": "mean: 5.736907259070129 usec\nrounds: 91912"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 1031.3479512895208,
            "unit": "iter/sec",
            "range": "stddev: 0.000008047039019554888",
            "extra": "mean: 969.6048736507154 usec\nrounds: 926"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 322106.7753856536,
            "unit": "iter/sec",
            "range": "stddev: 2.3641766328626822e-7",
            "extra": "mean: 3.1045605880308327 usec\nrounds: 159949"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 2067.753947494007,
            "unit": "iter/sec",
            "range": "stddev: 0.000012526947117334313",
            "extra": "mean: 483.61653532904126 usec\nrounds: 2038"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 237855.13645987917,
            "unit": "iter/sec",
            "range": "stddev: 3.67216837292428e-7",
            "extra": "mean: 4.204239668243102 usec\nrounds: 145497"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1963.4405777588408,
            "unit": "iter/sec",
            "range": "stddev: 0.000018245469793178025",
            "extra": "mean: 509.3100404094963 usec\nrounds: 1955"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 249560.60654755082,
            "unit": "iter/sec",
            "range": "stddev: 3.3067557533065205e-7",
            "extra": "mean: 4.007042673257255 usec\nrounds: 156937"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 1867.3312800924666,
            "unit": "iter/sec",
            "range": "stddev: 0.00006925796737390564",
            "extra": "mean: 535.5236163293329 usec\nrounds: 1874"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 244066.3808379094,
            "unit": "iter/sec",
            "range": "stddev: 3.793073257244755e-7",
            "extra": "mean: 4.097245989254558 usec\nrounds: 187618"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 3277.8173987805276,
            "unit": "iter/sec",
            "range": "stddev: 0.000004391657178522896",
            "extra": "mean: 305.08105801501875 usec\nrounds: 3275"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 385572.9906520362,
            "unit": "iter/sec",
            "range": "stddev: 2.794599066884991e-7",
            "extra": "mean: 2.593542660519131 usec\nrounds: 188324"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 10473.365125262902,
            "unit": "iter/sec",
            "range": "stddev: 0.00000792608396615625",
            "extra": "mean: 95.48029578266974 usec\nrounds: 10386"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 251949.43874524123,
            "unit": "iter/sec",
            "range": "stddev: 5.110672643276596e-7",
            "extra": "mean: 3.96905031811224 usec\nrounds: 123534"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2788.491136296842,
            "unit": "iter/sec",
            "range": "stddev: 0.000015218809583661785",
            "extra": "mean: 358.6168831535233 usec\nrounds: 2790"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "distinct": true,
          "id": "70876b11c448a01bc3ef46340cbb325c971af061",
          "message": "Fixed issues after PR feedback",
          "timestamp": "2024-06-11T11:32:54+02:00",
          "tree_id": "03fce3daccf65032a048b92a1e2304f581ee998a",
          "url": "https://github.com/Hampuztt/apytypes/commit/70876b11c448a01bc3ef46340cbb325c971af061"
        },
        "date": 1718098786881,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 5608.456989226868,
            "unit": "iter/sec",
            "range": "stddev: 0.000003638010110457173",
            "extra": "mean: 178.30216081194396 usec\nrounds: 5124"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 187164.15933600612,
            "unit": "iter/sec",
            "range": "stddev: 4.5446605646031667e-7",
            "extra": "mean: 5.342903275646657 usec\nrounds: 92593"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 1032.302382309646,
            "unit": "iter/sec",
            "range": "stddev: 0.00002006704330089024",
            "extra": "mean: 968.7084105750356 usec\nrounds: 889"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 323323.8951658587,
            "unit": "iter/sec",
            "range": "stddev: 2.689935479224553e-7",
            "extra": "mean: 3.09287378678591 usec\nrounds: 159694"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 2058.297555184724,
            "unit": "iter/sec",
            "range": "stddev: 0.000006500489213748936",
            "extra": "mean: 485.83840440419414 usec\nrounds: 1998"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 237397.184238907,
            "unit": "iter/sec",
            "range": "stddev: 3.9927910174811965e-7",
            "extra": "mean: 4.212349877720707 usec\nrounds: 137288"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1571.96743774636,
            "unit": "iter/sec",
            "range": "stddev: 0.00000671337810656294",
            "extra": "mean: 636.1454925768965 usec\nrounds: 1482"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 243799.67341526278,
            "unit": "iter/sec",
            "range": "stddev: 4.026721731607642e-7",
            "extra": "mean: 4.101728218055095 usec\nrounds: 135410"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 2348.092345001457,
            "unit": "iter/sec",
            "range": "stddev: 0.00001241812652417747",
            "extra": "mean: 425.87762876054154 usec\nrounds: 2260"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 242770.45240646767,
            "unit": "iter/sec",
            "range": "stddev: 3.859750335449629e-7",
            "extra": "mean: 4.119117421776321 usec\nrounds: 175717"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 3250.3105041263766,
            "unit": "iter/sec",
            "range": "stddev: 0.000011920660358394324",
            "extra": "mean: 307.6629136602386 usec\nrounds: 3243"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 387317.632661261,
            "unit": "iter/sec",
            "range": "stddev: 2.5530806525367477e-7",
            "extra": "mean: 2.581860250278295 usec\nrounds: 192308"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 10390.095744640445,
            "unit": "iter/sec",
            "range": "stddev: 0.000006063473144962979",
            "extra": "mean: 96.24550385070638 usec\nrounds: 10259"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 246136.35382550117,
            "unit": "iter/sec",
            "range": "stddev: 2.9384617580509475e-7",
            "extra": "mean: 4.06278871226374 usec\nrounds: 119962"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2767.419263247976,
            "unit": "iter/sec",
            "range": "stddev: 0.000017563691726625335",
            "extra": "mean: 361.3474883550359 usec\nrounds: 2748"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "committer": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "distinct": true,
          "id": "f641ae2028e8826b716e091b0bd3b11b5f268c4a",
          "message": "Revert to windows-2019 runner",
          "timestamp": "2024-06-17T11:43:20+02:00",
          "tree_id": "fac6acd92ccb2a79e2d80b644995c79d0a226864",
          "url": "https://github.com/Hampuztt/apytypes/commit/f641ae2028e8826b716e091b0bd3b11b5f268c4a"
        },
        "date": 1719234838470,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 5425.976036521212,
            "unit": "iter/sec",
            "range": "stddev: 0.000007329393760520713",
            "extra": "mean: 184.29863922530996 usec\nrounds: 5114"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 176002.2270165461,
            "unit": "iter/sec",
            "range": "stddev: 6.133434388727259e-7",
            "extra": "mean: 5.681746287823899 usec\nrounds: 78660"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 1006.4861828684213,
            "unit": "iter/sec",
            "range": "stddev: 0.00003428055631547931",
            "extra": "mean: 993.555616580909 usec\nrounds: 965"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 314506.5068893875,
            "unit": "iter/sec",
            "range": "stddev: 2.464924484357475e-7",
            "extra": "mean: 3.1795844540402523 usec\nrounds: 156446"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 1948.7907518871855,
            "unit": "iter/sec",
            "range": "stddev: 0.000015284886692327436",
            "extra": "mean: 513.1387241198739 usec\nrounds: 1932"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 224435.72665687752,
            "unit": "iter/sec",
            "range": "stddev: 4.757313164551252e-7",
            "extra": "mean: 4.455618608033928 usec\nrounds: 140391"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1636.655999207098,
            "unit": "iter/sec",
            "range": "stddev: 0.000034810659121460774",
            "extra": "mean: 611.0019457262032 usec\nrounds: 1603"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 234242.8692544436,
            "unit": "iter/sec",
            "range": "stddev: 4.2609872588089046e-7",
            "extra": "mean: 4.269073390292883 usec\nrounds: 159694"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 2005.7641910425932,
            "unit": "iter/sec",
            "range": "stddev: 0.000023368936472723295",
            "extra": "mean: 498.56309354102166 usec\nrounds: 1796"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 238344.1247157453,
            "unit": "iter/sec",
            "range": "stddev: 4.215642670960351e-7",
            "extra": "mean: 4.195614224569718 usec\nrounds: 182150"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 3241.463503754045,
            "unit": "iter/sec",
            "range": "stddev: 0.000012073040882150575",
            "extra": "mean: 308.5026250771811 usec\nrounds: 3238"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 406387.5802467962,
            "unit": "iter/sec",
            "range": "stddev: 3.13563301748694e-7",
            "extra": "mean: 2.460705121432863 usec\nrounds: 196079"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 11779.340506774677,
            "unit": "iter/sec",
            "range": "stddev: 0.000007486795651143172",
            "extra": "mean: 84.8943962036642 usec\nrounds: 10906"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 236256.71542214774,
            "unit": "iter/sec",
            "range": "stddev: 3.9039397511916675e-7",
            "extra": "mean: 4.232683918479024 usec\nrounds: 117427"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2653.4048091323957,
            "unit": "iter/sec",
            "range": "stddev: 0.000015765898689348645",
            "extra": "mean: 376.874269828047 usec\nrounds: 2446"
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
          "distinct": false,
          "id": "584a386e9a9f51906f5f1cd1e8b2f15fad2d5a98",
          "message": "Fixed array creation functions added",
          "timestamp": "2024-07-19T14:37:22+02:00",
          "tree_id": "126caef7a7ff5598216c2dc25fd9290e02087778",
          "url": "https://github.com/Hampuztt/apytypes/commit/584a386e9a9f51906f5f1cd1e8b2f15fad2d5a98"
        },
        "date": 1721393844810,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 5491.696464451355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026435652404685656",
            "extra": "mean: 182.09309390516444 usec\nrounds: 5037"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 181514.7337051108,
            "unit": "iter/sec",
            "range": "stddev: 4.868444627540232e-7",
            "extra": "mean: 5.509194650967574 usec\nrounds: 90408"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 1030.008329221373,
            "unit": "iter/sec",
            "range": "stddev: 0.00001284920391555743",
            "extra": "mean: 970.8659353812627 usec\nrounds: 944"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 321547.27969193156,
            "unit": "iter/sec",
            "range": "stddev: 2.5797252833665503e-7",
            "extra": "mean: 3.109962556542482 usec\nrounds: 159694"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 2056.0533618007685,
            "unit": "iter/sec",
            "range": "stddev: 0.000005366466396409397",
            "extra": "mean: 486.368699654839 usec\nrounds: 2031"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 236549.0152952126,
            "unit": "iter/sec",
            "range": "stddev: 4.255201349648162e-7",
            "extra": "mean: 4.227453657974448 usec\nrounds: 152626"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1815.9066183249606,
            "unit": "iter/sec",
            "range": "stddev: 0.000005658410979918114",
            "extra": "mean: 550.6891102816872 usec\nrounds: 1741"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 244720.01626211984,
            "unit": "iter/sec",
            "range": "stddev: 3.5377305349251385e-7",
            "extra": "mean: 4.086302441762259 usec\nrounds: 176057"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 1947.4457264555663,
            "unit": "iter/sec",
            "range": "stddev: 0.000005161311728891902",
            "extra": "mean: 513.493129187247 usec\nrounds: 1881"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 240478.6401199637,
            "unit": "iter/sec",
            "range": "stddev: 4.2370265678807894e-7",
            "extra": "mean: 4.158373481741023 usec\nrounds: 194553"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 3228.295585959167,
            "unit": "iter/sec",
            "range": "stddev: 0.000013059079210850591",
            "extra": "mean: 309.7609786257808 usec\nrounds: 3041"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 401957.1616123388,
            "unit": "iter/sec",
            "range": "stddev: 2.5027184333133106e-7",
            "extra": "mean: 2.4878272997768702 usec\nrounds: 198060"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 11924.6786676559,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032004431274726695",
            "extra": "mean: 83.85970204064002 usec\nrounds: 11760"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 251753.7423232268,
            "unit": "iter/sec",
            "range": "stddev: 2.5158685472191635e-7",
            "extra": "mean: 3.972135590803252 usec\nrounds: 125392"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2791.554772096065,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045206363361773815",
            "extra": "mean: 358.22331340077585 usec\nrounds: 2776"
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
          "distinct": false,
          "id": "6b6361b2208e1a7afac6d83b5912fea2b28b3e8d",
          "message": "Documentation, refactoring and small fixes for array creation",
          "timestamp": "2024-07-23T13:15:32+02:00",
          "tree_id": "4628b1dce0e75ee2d511d4b5dbb912daf5e1cfd7",
          "url": "https://github.com/Hampuztt/apytypes/commit/6b6361b2208e1a7afac6d83b5912fea2b28b3e8d"
        },
        "date": 1721895399131,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 5321.199453555928,
            "unit": "iter/sec",
            "range": "stddev: 0.000006433029974131879",
            "extra": "mean: 187.92755444108437 usec\nrounds: 4886"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 176896.27855122805,
            "unit": "iter/sec",
            "range": "stddev: 5.511108854073125e-7",
            "extra": "mean: 5.653030172200069 usec\nrounds: 90580"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 1027.0772857060808,
            "unit": "iter/sec",
            "range": "stddev: 0.000013337343832836668",
            "extra": "mean: 973.6365645673236 usec\nrounds: 937"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 307677.7431902405,
            "unit": "iter/sec",
            "range": "stddev: 2.67446927573174e-7",
            "extra": "mean: 3.250153844835273 usec\nrounds: 148523"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 2023.528135467873,
            "unit": "iter/sec",
            "range": "stddev: 0.000006013153978159063",
            "extra": "mean: 494.1863582088437 usec\nrounds: 2010"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 238258.78269663977,
            "unit": "iter/sec",
            "range": "stddev: 3.821542635033335e-7",
            "extra": "mean: 4.197117053490693 usec\nrounds: 147864"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1769.563873570476,
            "unit": "iter/sec",
            "range": "stddev: 0.000006212492630703858",
            "extra": "mean: 565.1109942600065 usec\nrounds: 1742"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 248226.84011621136,
            "unit": "iter/sec",
            "range": "stddev: 4.621559333025043e-7",
            "extra": "mean: 4.028573217673939 usec\nrounds: 160979"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 1832.8668514668411,
            "unit": "iter/sec",
            "range": "stddev: 0.000006765412703658237",
            "extra": "mean: 545.5933687707327 usec\nrounds: 1806"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 235602.7708114194,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017192596568579978",
            "extra": "mean: 4.244432255851598 usec\nrounds: 187618"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 3171.9678288199966,
            "unit": "iter/sec",
            "range": "stddev: 0.00004806882276735826",
            "extra": "mean: 315.261709439219 usec\nrounds: 3125"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 420486.99505685264,
            "unit": "iter/sec",
            "range": "stddev: 2.155021370969727e-7",
            "extra": "mean: 2.3781948354069815 usec\nrounds: 122926"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 11928.241407781792,
            "unit": "iter/sec",
            "range": "stddev: 0.000005577984162708536",
            "extra": "mean: 83.834654733565 usec\nrounds: 10531"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 249967.74990234512,
            "unit": "iter/sec",
            "range": "stddev: 5.95295674846244e-7",
            "extra": "mean: 4.000516068135469 usec\nrounds: 123381"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2785.903949174291,
            "unit": "iter/sec",
            "range": "stddev: 0.000015536968829225787",
            "extra": "mean: 358.94992011350143 usec\nrounds: 2804"
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
          "id": "a0b2cb1dba92c32a9046a4124127f1303a475984",
          "message": "action test1",
          "timestamp": "2024-07-25T10:16:51+02:00",
          "tree_id": "6fd6ae51efd883baf1a3d196423eeeac5abc5c07",
          "url": "https://github.com/Hampuztt/apytypes/commit/a0b2cb1dba92c32a9046a4124127f1303a475984"
        },
        "date": 1721895815808,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 5460.678893021217,
            "unit": "iter/sec",
            "range": "stddev: 0.000002750518605532301",
            "extra": "mean: 183.12741320094952 usec\nrounds: 4954"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 186136.4085974945,
            "unit": "iter/sec",
            "range": "stddev: 4.407030085138008e-7",
            "extra": "mean: 5.372404074704279 usec\nrounds: 90654"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 1029.8228157135252,
            "unit": "iter/sec",
            "range": "stddev: 0.000008463958995872336",
            "extra": "mean: 971.0408283265097 usec\nrounds: 932"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 306925.86556025664,
            "unit": "iter/sec",
            "range": "stddev: 2.4571266148621085e-7",
            "extra": "mean: 3.258115760868244 usec\nrounds: 149433"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 2014.803037233213,
            "unit": "iter/sec",
            "range": "stddev: 0.000006545871783815494",
            "extra": "mean: 496.32643068338314 usec\nrounds: 1962"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 236943.71378613095,
            "unit": "iter/sec",
            "range": "stddev: 4.05792680259181e-7",
            "extra": "mean: 4.220411607554254 usec\nrounds: 140391"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1745.5539962442324,
            "unit": "iter/sec",
            "range": "stddev: 0.0000076195422577657414",
            "extra": "mean: 572.8840254449988 usec\nrounds: 1690"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 240218.91218410016,
            "unit": "iter/sec",
            "range": "stddev: 3.810220883507323e-7",
            "extra": "mean: 4.162869571375026 usec\nrounds: 199243"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 1815.1898675357725,
            "unit": "iter/sec",
            "range": "stddev: 0.000007214527886090195",
            "extra": "mean: 550.9065568758156 usec\nrounds: 1767"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 243001.2161083943,
            "unit": "iter/sec",
            "range": "stddev: 4.142796258188997e-7",
            "extra": "mean: 4.115205742649186 usec\nrounds: 177620"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 3254.416702929564,
            "unit": "iter/sec",
            "range": "stddev: 0.00000971573520826129",
            "extra": "mean: 307.2747257902834 usec\nrounds: 3191"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 405646.3922856033,
            "unit": "iter/sec",
            "range": "stddev: 2.54183128677062e-7",
            "extra": "mean: 2.465201266466411 usec\nrounds: 188715"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 11870.651087896835,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035812262424568098",
            "extra": "mean: 84.24137754495938 usec\nrounds: 11641"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 252097.3714697214,
            "unit": "iter/sec",
            "range": "stddev: 2.8429625782554097e-7",
            "extra": "mean: 3.9667212481035596 usec\nrounds: 123366"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2767.064621418042,
            "unit": "iter/sec",
            "range": "stddev: 0.000005895204495638997",
            "extra": "mean: 361.3938005855203 usec\nrounds: 2733"
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
          "id": "6b6361b2208e1a7afac6d83b5912fea2b28b3e8d",
          "message": "Documentation, refactoring and small fixes for array creation",
          "timestamp": "2024-07-23T13:15:32+02:00",
          "tree_id": "4628b1dce0e75ee2d511d4b5dbb912daf5e1cfd7",
          "url": "https://github.com/Hampuztt/apytypes/commit/6b6361b2208e1a7afac6d83b5912fea2b28b3e8d"
        },
        "date": 1721896170431,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 5480.719067185274,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030031928947858964",
            "extra": "mean: 182.4578103240692 usec\nrounds: 4998"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 181312.83001356095,
            "unit": "iter/sec",
            "range": "stddev: 5.974525794832175e-7",
            "extra": "mean: 5.515329499435903 usec\nrounds: 92422"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 1024.3884006047124,
            "unit": "iter/sec",
            "range": "stddev: 0.00001089172569450878",
            "extra": "mean: 976.1922327602347 usec\nrounds: 928"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 309380.21054193587,
            "unit": "iter/sec",
            "range": "stddev: 2.7838676355615215e-7",
            "extra": "mean: 3.2322687939487715 usec\nrounds: 149410"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 2024.697128654376,
            "unit": "iter/sec",
            "range": "stddev: 0.000006621064802057496",
            "extra": "mean: 493.901031343194 usec\nrounds: 2010"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 233828.5226377779,
            "unit": "iter/sec",
            "range": "stddev: 4.7395128075555325e-7",
            "extra": "mean: 4.276638233519068 usec\nrounds: 147211"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1647.1216963240702,
            "unit": "iter/sec",
            "range": "stddev: 0.000007702569863535402",
            "extra": "mean: 607.1196817039867 usec\nrounds: 1596"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 239272.85241425168,
            "unit": "iter/sec",
            "range": "stddev: 3.7704892287781726e-7",
            "extra": "mean: 4.179329121168773 usec\nrounds: 136743"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 1918.4205624303838,
            "unit": "iter/sec",
            "range": "stddev: 0.000013848616782943368",
            "extra": "mean: 521.2621359380828 usec\nrounds: 1817"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 243772.6155729193,
            "unit": "iter/sec",
            "range": "stddev: 3.9529801563048066e-7",
            "extra": "mean: 4.102183494441243 usec\nrounds: 191608"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 3258.033885289473,
            "unit": "iter/sec",
            "range": "stddev: 0.000012543232456733267",
            "extra": "mean: 306.93357871910257 usec\nrounds: 3233"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 415118.13799833175,
            "unit": "iter/sec",
            "range": "stddev: 2.1454081465324616e-7",
            "extra": "mean: 2.4089527979238015 usec\nrounds: 197629"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 11900.069619701118,
            "unit": "iter/sec",
            "range": "stddev: 0.000004163726480934687",
            "extra": "mean: 84.03312181841807 usec\nrounds: 11550"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 246704.29437094904,
            "unit": "iter/sec",
            "range": "stddev: 3.606757921750324e-7",
            "extra": "mean: 4.05343572372673 usec\nrounds: 117703"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2786.3335321913382,
            "unit": "iter/sec",
            "range": "stddev: 0.000012783341995201155",
            "extra": "mean: 358.89457900380665 usec\nrounds: 2791"
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
          "id": "4f1da16b6bcf8ecbce7ef24d76ddf8ab8faf193b",
          "message": "action_test",
          "timestamp": "2024-07-25T10:36:47+02:00",
          "tree_id": "b0fd6656c4074abf31a870b3e0f6a823416d4ee7",
          "url": "https://github.com/Hampuztt/apytypes/commit/4f1da16b6bcf8ecbce7ef24d76ddf8ab8faf193b"
        },
        "date": 1721896927392,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 5371.441917025511,
            "unit": "iter/sec",
            "range": "stddev: 0.000004905717089392028",
            "extra": "mean: 186.16975021741644 usec\nrounds: 4604"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 185845.85287874876,
            "unit": "iter/sec",
            "range": "stddev: 4.083062384732686e-7",
            "extra": "mean: 5.380803415895587 usec\nrounds: 90572"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 1033.132684744197,
            "unit": "iter/sec",
            "range": "stddev: 0.000009239054870237442",
            "extra": "mean: 967.9298842893538 usec\nrounds: 942"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 306814.52118623705,
            "unit": "iter/sec",
            "range": "stddev: 2.9433462429363785e-7",
            "extra": "mean: 3.259298145777781 usec\nrounds: 151218"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 2034.5443472368966,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048784367197820965",
            "extra": "mean: 491.51054453941714 usec\nrounds: 1987"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 236099.99104522014,
            "unit": "iter/sec",
            "range": "stddev: 3.6361120244640376e-7",
            "extra": "mean: 4.235493595628601 usec\nrounds: 137874"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1607.0310462480147,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072309979295602635",
            "extra": "mean: 622.2655139953463 usec\nrounds: 1572"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 248473.14190070238,
            "unit": "iter/sec",
            "range": "stddev: 3.560937873395483e-7",
            "extra": "mean: 4.0245798493570435 usec\nrounds: 151241"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 1700.3045324443901,
            "unit": "iter/sec",
            "range": "stddev: 0.000005757924048532877",
            "extra": "mean: 588.1299384424865 usec\nrounds: 1657"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 243053.03791999962,
            "unit": "iter/sec",
            "range": "stddev: 4.440476832605127e-7",
            "extra": "mean: 4.114328331617677 usec\nrounds: 173011"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 3267.242255196952,
            "unit": "iter/sec",
            "range": "stddev: 0.000005940664605257399",
            "extra": "mean: 306.06851953183957 usec\nrounds: 3251"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 417290.32916162576,
            "unit": "iter/sec",
            "range": "stddev: 1.80608109417902e-7",
            "extra": "mean: 2.3964130729055637 usec\nrounds: 139199"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 11979.249912825646,
            "unit": "iter/sec",
            "range": "stddev: 0.000003917912388718642",
            "extra": "mean: 83.47768076274498 usec\nrounds: 11800"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 249290.3563436726,
            "unit": "iter/sec",
            "range": "stddev: 2.6554436194259443e-7",
            "extra": "mean: 4.011386620272612 usec\nrounds: 122760"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2785.601685852288,
            "unit": "iter/sec",
            "range": "stddev: 0.00000772952276692076",
            "extra": "mean: 358.9888694707758 usec\nrounds: 2781"
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
          "id": "a0d073bc4f2cebd7d2de08b5be35c6ab01ffcef4",
          "message": "test2",
          "timestamp": "2024-07-25T10:59:40+02:00",
          "tree_id": "d4162afe90455c19c9b5d1c7be18ea0021cc6c4c",
          "url": "https://github.com/Hampuztt/apytypes/commit/a0d073bc4f2cebd7d2de08b5be35c6ab01ffcef4"
        },
        "date": 1721898271986,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 5434.331199005256,
            "unit": "iter/sec",
            "range": "stddev: 0.000004167193564630696",
            "extra": "mean: 184.01528419597392 usec\nrounds: 4986"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 180566.87537160827,
            "unit": "iter/sec",
            "range": "stddev: 6.22614247983315e-7",
            "extra": "mean: 5.538114329895729 usec\nrounds: 90580"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 1020.9268913574817,
            "unit": "iter/sec",
            "range": "stddev: 0.000019000192209141755",
            "extra": "mean: 979.5020666664425 usec\nrounds: 930"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 317602.75748734653,
            "unit": "iter/sec",
            "range": "stddev: 2.524862087613036e-7",
            "extra": "mean: 3.1485872727028843 usec\nrounds: 152161"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 2024.2420440162869,
            "unit": "iter/sec",
            "range": "stddev: 0.000020488340259673885",
            "extra": "mean: 494.01206884128635 usec\nrounds: 1932"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 233542.49716445938,
            "unit": "iter/sec",
            "range": "stddev: 5.747687882437808e-7",
            "extra": "mean: 4.281875941815443 usec\nrounds: 142796"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1813.6037288547973,
            "unit": "iter/sec",
            "range": "stddev: 0.000013969659291230904",
            "extra": "mean: 551.3883678610714 usec\nrounds: 1786"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 249688.97482835682,
            "unit": "iter/sec",
            "range": "stddev: 3.6642100121291047e-7",
            "extra": "mean: 4.004982601604368 usec\nrounds: 152370"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 2713.987772587397,
            "unit": "iter/sec",
            "range": "stddev: 0.000005698050046177045",
            "extra": "mean: 368.4614979111139 usec\nrounds: 2633"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 243587.38970886337,
            "unit": "iter/sec",
            "range": "stddev: 4.2405212413899145e-7",
            "extra": "mean: 4.105302828669432 usec\nrounds: 194932"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 3251.5694091749688,
            "unit": "iter/sec",
            "range": "stddev: 0.000012580998128727874",
            "extra": "mean: 307.5437962905836 usec\nrounds: 3235"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 405873.1085823787,
            "unit": "iter/sec",
            "range": "stddev: 2.3420973420495113e-7",
            "extra": "mean: 2.4638242318954555 usec\nrounds: 189036"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 11986.323596676462,
            "unit": "iter/sec",
            "range": "stddev: 0.000003089171799147971",
            "extra": "mean: 83.42841672297898 usec\nrounds: 11768"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 252230.32733476764,
            "unit": "iter/sec",
            "range": "stddev: 2.724583905437894e-7",
            "extra": "mean: 3.9646303066195925 usec\nrounds: 125550"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2766.292931919664,
            "unit": "iter/sec",
            "range": "stddev: 0.000015868765484847487",
            "extra": "mean: 361.49461557784184 usec\nrounds: 2773"
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
          "id": "f38485da80484f3dc95751737b9b5af8433c98e5",
          "message": "test abc",
          "timestamp": "2024-07-25T11:10:31+02:00",
          "tree_id": "c187e5c4c086a7d726999d44c6aaabe0ee8e8548",
          "url": "https://github.com/Hampuztt/apytypes/commit/f38485da80484f3dc95751737b9b5af8433c98e5"
        },
        "date": 1721898920899,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 5472.977252037363,
            "unit": "iter/sec",
            "range": "stddev: 0.000005598440803955454",
            "extra": "mean: 182.7159065256011 usec\nrounds: 4996"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 189076.1403147255,
            "unit": "iter/sec",
            "range": "stddev: 4.600535842117868e-7",
            "extra": "mean: 5.288874621279324 usec\nrounds: 93110"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 984.897554810924,
            "unit": "iter/sec",
            "range": "stddev: 0.00001541315551961555",
            "extra": "mean: 1.015334026483572 msec\nrounds: 944"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 323174.72815366095,
            "unit": "iter/sec",
            "range": "stddev: 2.777344609701586e-7",
            "extra": "mean: 3.0943013573899463 usec\nrounds: 148523"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 2053.4395230080977,
            "unit": "iter/sec",
            "range": "stddev: 0.000010703422215917136",
            "extra": "mean: 486.9878020732225 usec\nrounds: 2026"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 223398.34970312353,
            "unit": "iter/sec",
            "range": "stddev: 3.85874768328623e-7",
            "extra": "mean: 4.476308805901703 usec\nrounds: 128618"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1653.2315720656982,
            "unit": "iter/sec",
            "range": "stddev: 0.00003890347057530064",
            "extra": "mean: 604.875939279643 usec\nrounds: 1581"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 241351.60117135342,
            "unit": "iter/sec",
            "range": "stddev: 3.597080642834665e-7",
            "extra": "mean: 4.143332777353426 usec\nrounds: 199641"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 2348.35214685374,
            "unit": "iter/sec",
            "range": "stddev: 0.000004742798154566237",
            "extra": "mean: 425.8305132557626 usec\nrounds: 2301"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 242326.03305035832,
            "unit": "iter/sec",
            "range": "stddev: 3.2361047146669984e-7",
            "extra": "mean: 4.126671771134832 usec\nrounds: 186568"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 3219.9807125376333,
            "unit": "iter/sec",
            "range": "stddev: 0.00001034379085553337",
            "extra": "mean: 310.56086643820623 usec\nrounds: 3212"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 408188.7185422858,
            "unit": "iter/sec",
            "range": "stddev: 2.2121701806035872e-7",
            "extra": "mean: 2.449847226476952 usec\nrounds: 196464"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 11872.374927227002,
            "unit": "iter/sec",
            "range": "stddev: 0.000005160969355255146",
            "extra": "mean: 84.2291459063252 usec\nrounds: 11713"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 249890.87300554544,
            "unit": "iter/sec",
            "range": "stddev: 3.347379563302548e-7",
            "extra": "mean: 4.001746794400964 usec\nrounds: 123534"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2742.7454743829367,
            "unit": "iter/sec",
            "range": "stddev: 0.000031322270449084205",
            "extra": "mean: 364.59817702369196 usec\nrounds: 2768"
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
          "id": "a0adff6ed7e6ec17ad26d5a4119ad9c4f0976e55",
          "message": "abc",
          "timestamp": "2024-07-25T11:26:55+02:00",
          "tree_id": "d8f780b8f5bf2940b961012634d20dd791e2d9fd",
          "url": "https://github.com/Hampuztt/apytypes/commit/a0adff6ed7e6ec17ad26d5a4119ad9c4f0976e55"
        },
        "date": 1721899914157,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 5472.580733997666,
            "unit": "iter/sec",
            "range": "stddev: 0.000003666606118770354",
            "extra": "mean: 182.72914528014826 usec\nrounds: 5011"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 189117.71093334255,
            "unit": "iter/sec",
            "range": "stddev: 4.279794898888003e-7",
            "extra": "mean: 5.287712055442896 usec\nrounds: 86791"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 1037.9641988207954,
            "unit": "iter/sec",
            "range": "stddev: 0.000007229730805497096",
            "extra": "mean: 963.424365826947 usec\nrounds: 954"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 322080.44273348566,
            "unit": "iter/sec",
            "range": "stddev: 2.3649468253025233e-7",
            "extra": "mean: 3.104814410688939 usec\nrounds: 152859"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 2048.9732283352496,
            "unit": "iter/sec",
            "range": "stddev: 0.000012445374231931341",
            "extra": "mean: 488.0493244962895 usec\nrounds: 2037"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 237297.60232041008,
            "unit": "iter/sec",
            "range": "stddev: 3.892240280081547e-7",
            "extra": "mean: 4.214117589986241 usec\nrounds: 125708"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1514.781784838411,
            "unit": "iter/sec",
            "range": "stddev: 0.000016412633043908717",
            "extra": "mean: 660.161093834829 usec\nrounds: 1492"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 245204.64205884482,
            "unit": "iter/sec",
            "range": "stddev: 3.21590530334982e-7",
            "extra": "mean: 4.078226217919714 usec\nrounds: 187231"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 2342.3999059879875,
            "unit": "iter/sec",
            "range": "stddev: 0.000013728751787688173",
            "extra": "mean: 426.912585440109 usec\nrounds: 2294"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 240477.79414834882,
            "unit": "iter/sec",
            "range": "stddev: 3.6743594345865374e-7",
            "extra": "mean: 4.158388110392878 usec\nrounds: 191242"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 3230.6062016102483,
            "unit": "iter/sec",
            "range": "stddev: 0.000013001137960488634",
            "extra": "mean: 309.5394293187343 usec\nrounds: 3247"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 410990.0905969066,
            "unit": "iter/sec",
            "range": "stddev: 2.2006115565490627e-7",
            "extra": "mean: 2.433148688688911 usec\nrounds: 198808"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 11930.210845890131,
            "unit": "iter/sec",
            "range": "stddev: 0.000002909367281875826",
            "extra": "mean: 83.82081531647805 usec\nrounds: 11739"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 249845.3348381291,
            "unit": "iter/sec",
            "range": "stddev: 2.8501508273731343e-7",
            "extra": "mean: 4.002476174501655 usec\nrounds: 122474"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2772.2650943294857,
            "unit": "iter/sec",
            "range": "stddev: 0.000004396141754976574",
            "extra": "mean: 360.7158644551867 usec\nrounds: 2774"
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
          "id": "1fc9bf78672bb2ae37efe57548f230fdaea03e58",
          "message": "testttt",
          "timestamp": "2024-07-25T11:55:24+02:00",
          "tree_id": "d5c9716223d353562e76771c3e68cc6104e59299",
          "url": "https://github.com/Hampuztt/apytypes/commit/1fc9bf78672bb2ae37efe57548f230fdaea03e58"
        },
        "date": 1721901633102,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 5348.173980190118,
            "unit": "iter/sec",
            "range": "stddev: 0.000011131395723942327",
            "extra": "mean: 186.97970628929536 usec\nrounds: 4913"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 178856.67473564207,
            "unit": "iter/sec",
            "range": "stddev: 4.472488550417603e-7",
            "extra": "mean: 5.591068946563182 usec\nrounds: 89446"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 1021.3298362759633,
            "unit": "iter/sec",
            "range": "stddev: 0.000022539074289213143",
            "extra": "mean: 979.1156240439058 usec\nrounds: 915"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 307055.4061528273,
            "unit": "iter/sec",
            "range": "stddev: 3.3346239494077374e-7",
            "extra": "mean: 3.2567412263774993 usec\nrounds: 138256"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 2032.6231612192437,
            "unit": "iter/sec",
            "range": "stddev: 0.000012572731245995966",
            "extra": "mean: 491.97510836202537 usec\nrounds: 2021"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 238197.49765902557,
            "unit": "iter/sec",
            "range": "stddev: 3.487773287309998e-7",
            "extra": "mean: 4.198196915701767 usec\nrounds: 134880"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1687.6704328005405,
            "unit": "iter/sec",
            "range": "stddev: 0.000017202735403072842",
            "extra": "mean: 592.5327484351243 usec\nrounds: 1598"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 246020.07016020175,
            "unit": "iter/sec",
            "range": "stddev: 3.504879085068355e-7",
            "extra": "mean: 4.064709026986402 usec\nrounds: 194970"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 2193.8677195266655,
            "unit": "iter/sec",
            "range": "stddev: 0.000006809419869442317",
            "extra": "mean: 455.8159961511962 usec\nrounds: 2079"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 242412.90702468745,
            "unit": "iter/sec",
            "range": "stddev: 4.0576183510517427e-7",
            "extra": "mean: 4.1251928879272075 usec\nrounds: 177274"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 3255.747756670575,
            "unit": "iter/sec",
            "range": "stddev: 0.000012905189633757752",
            "extra": "mean: 307.1491020614662 usec\nrounds: 3106"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 407810.3114149081,
            "unit": "iter/sec",
            "range": "stddev: 2.5250826139338827e-7",
            "extra": "mean: 2.4521204393544513 usec\nrounds: 198847"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 11914.237779963692,
            "unit": "iter/sec",
            "range": "stddev: 0.00000339854285423168",
            "extra": "mean: 83.93319140245055 usec\nrounds: 11771"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 253307.96231220488,
            "unit": "iter/sec",
            "range": "stddev: 2.51274232175355e-7",
            "extra": "mean: 3.9477637847304967 usec\nrounds: 122926"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2788.550872553367,
            "unit": "iter/sec",
            "range": "stddev: 0.000005778614898685919",
            "extra": "mean: 358.609200872975 usec\nrounds: 2748"
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
          "id": "5b378b957c0d3df0ad420da687be8a99e48a8e9d",
          "message": "???",
          "timestamp": "2024-07-25T12:00:41+02:00",
          "tree_id": "d8dffd44b18633439e731885e1b014e2021229ef",
          "url": "https://github.com/Hampuztt/apytypes/commit/5b378b957c0d3df0ad420da687be8a99e48a8e9d"
        },
        "date": 1721901951936,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_multiplication_20",
            "value": 5432.610963930092,
            "unit": "iter/sec",
            "range": "stddev: 0.000005614502700392733",
            "extra": "mean: 184.07355259552284 usec\nrounds: 5067"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_20",
            "value": 185696.56031878208,
            "unit": "iter/sec",
            "range": "stddev: 4.221607914831762e-7",
            "extra": "mean: 5.385129365257586 usec\nrounds: 88254"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_addition_200",
            "value": 1033.3909218690305,
            "unit": "iter/sec",
            "range": "stddev: 0.000023691806300354372",
            "extra": "mean: 967.688005417506 usec\nrounds: 923"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_20",
            "value": 311968.5540510347,
            "unit": "iter/sec",
            "range": "stddev: 2.384399457863273e-7",
            "extra": "mean: 3.2054512771066372 usec\nrounds: 163106"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_elementwise_multiplication_200",
            "value": 2061.119009276854,
            "unit": "iter/sec",
            "range": "stddev: 0.000019941899707176427",
            "extra": "mean: 485.173342974917 usec\nrounds: 1936"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_20",
            "value": 241242.38025612873,
            "unit": "iter/sec",
            "range": "stddev: 4.0416156930680694e-7",
            "extra": "mean: 4.145208644261813 usec\nrounds: 153328"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_addition_200",
            "value": 1528.5156563681162,
            "unit": "iter/sec",
            "range": "stddev: 0.00001991097415050736",
            "extra": "mean: 654.2294780127313 usec\nrounds: 1410"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_20",
            "value": 250804.37621950364,
            "unit": "iter/sec",
            "range": "stddev: 4.396515864328927e-7",
            "extra": "mean: 3.987171257031023 usec\nrounds: 159719"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_scalar_matrix_multiplication_200",
            "value": 2349.5204582198458,
            "unit": "iter/sec",
            "range": "stddev: 0.000015621803871080933",
            "extra": "mean: 425.6187668004675 usec\nrounds: 2247"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_20",
            "value": 250276.19157214803,
            "unit": "iter/sec",
            "range": "stddev: 3.161398952265336e-7",
            "extra": "mean: 3.995585811492287 usec\nrounds: 122775"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_creation_200",
            "value": 3330.382983703423,
            "unit": "iter/sec",
            "range": "stddev: 0.00001003803791107448",
            "extra": "mean: 300.2657666980957 usec\nrounds: 3279"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_20",
            "value": 413354.61420083477,
            "unit": "iter/sec",
            "range": "stddev: 2.1004184561343684e-7",
            "extra": "mean: 2.419230282292471 usec\nrounds: 141383"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_to_numpy_200",
            "value": 11995.405524188996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041669182425155845",
            "extra": "mean: 83.36525163600999 usec\nrounds: 11767"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_20",
            "value": 249497.55717090494,
            "unit": "iter/sec",
            "range": "stddev: 3.7733680491519434e-7",
            "extra": "mean: 4.008055274525207 usec\nrounds: 121566"
          },
          {
            "name": "benchmark/ci_float_array_benchmarks.py::test_float_matrix_cast_200",
            "value": 2829.3017938196076,
            "unit": "iter/sec",
            "range": "stddev: 0.000018488046667288272",
            "extra": "mean: 353.4440907592195 usec\nrounds: 2424"
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
        "date": 1717756367133,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_short",
            "value": 5228815.037628385,
            "unit": "iter/sec",
            "range": "stddev: 1.1053376280539793e-8",
            "extra": "mean: 191.2479199978559 nsec\nrounds: 53548"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_long",
            "value": 2528623.064041165,
            "unit": "iter/sec",
            "range": "stddev: 3.466599071477339e-8",
            "extra": "mean: 395.47215012817713 nsec\nrounds: 195351"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_mixed",
            "value": 2803591.235796711,
            "unit": "iter/sec",
            "range": "stddev: 3.112742599973522e-8",
            "extra": "mean: 356.68537810784045 nsec\nrounds: 199641"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_short",
            "value": 4710333.355710303,
            "unit": "iter/sec",
            "range": "stddev: 1.2598974485849828e-8",
            "extra": "mean: 212.29919933112967 nsec\nrounds: 46686"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_long",
            "value": 2258852.15815387,
            "unit": "iter/sec",
            "range": "stddev: 3.499645894514356e-8",
            "extra": "mean: 442.7027224381317 nsec\nrounds: 188324"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_mixed",
            "value": 2698800.215824737,
            "unit": "iter/sec",
            "range": "stddev: 3.014099893673606e-8",
            "extra": "mean: 370.53502298404305 nsec\nrounds: 190477"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short",
            "value": 5506213.811445767,
            "unit": "iter/sec",
            "range": "stddev: 8.791206494465345e-9",
            "extra": "mean: 181.6129983767414 nsec\nrounds: 54873"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short_different_wl",
            "value": 5508029.344703804,
            "unit": "iter/sec",
            "range": "stddev: 9.711934713321904e-9",
            "extra": "mean: 181.55313587093545 nsec\nrounds: 54964"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_long",
            "value": 3863093.862329444,
            "unit": "iter/sec",
            "range": "stddev: 2.2129142556194376e-8",
            "extra": "mean: 258.8598764713572 nsec\nrounds: 193799"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_mixed",
            "value": 3668598.564296834,
            "unit": "iter/sec",
            "range": "stddev: 2.2981619812489654e-8",
            "extra": "mean: 272.5836535324813 nsec\nrounds: 191205"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_short",
            "value": 4593025.068004303,
            "unit": "iter/sec",
            "range": "stddev: 1.1946565371251081e-8",
            "extra": "mean: 217.72143308473935 nsec\nrounds: 45266"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_long",
            "value": 3731631.8382722917,
            "unit": "iter/sec",
            "range": "stddev: 2.206093718096856e-8",
            "extra": "mean: 267.9792764505312 nsec\nrounds: 195313"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_to_float_short",
            "value": 10018132.207954802,
            "unit": "iter/sec",
            "range": "stddev: 5.960676658321831e-9",
            "extra": "mean: 99.81900610238199 nsec\nrounds: 100624"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_short",
            "value": 5499086.223650844,
            "unit": "iter/sec",
            "range": "stddev: 1.180053477451913e-8",
            "extra": "mean: 181.84839432034968 nsec\nrounds: 54245"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_long",
            "value": 4108231.5253361044,
            "unit": "iter/sec",
            "range": "stddev: 1.88473040070484e-8",
            "extra": "mean: 243.4137399104989 nsec\nrounds: 193799"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_short",
            "value": 7756804.874642714,
            "unit": "iter/sec",
            "range": "stddev: 8.36389528398685e-9",
            "extra": "mean: 128.91906089700612 nsec\nrounds: 76424"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_long",
            "value": 6102645.168690095,
            "unit": "iter/sec",
            "range": "stddev: 1.0365024081772367e-8",
            "extra": "mean: 163.86336946652426 nsec\nrounds: 60238"
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
          "id": "2fc5d4f27d35ab38ef3f608999740aff951f4163",
          "message": "Added python function reshape",
          "timestamp": "2024-06-07T13:04:18+02:00",
          "tree_id": "13f36411a0372e771946b3aed274f146a93d254a",
          "url": "https://github.com/Hampuztt/apytypes/commit/2fc5d4f27d35ab38ef3f608999740aff951f4163"
        },
        "date": 1717758824279,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_short",
            "value": 5246115.240811502,
            "unit": "iter/sec",
            "range": "stddev: 1.1853665462358768e-8",
            "extra": "mean: 190.61723848923913 nsec\nrounds: 52149"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_long",
            "value": 2560894.8690286744,
            "unit": "iter/sec",
            "range": "stddev: 3.258315780722854e-8",
            "extra": "mean: 390.4885015366891 nsec\nrounds: 195695"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_mixed",
            "value": 2771193.147366843,
            "unit": "iter/sec",
            "range": "stddev: 3.441769856523015e-8",
            "extra": "mean: 360.8553957886925 nsec\nrounds: 199641"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_short",
            "value": 4825671.017564934,
            "unit": "iter/sec",
            "range": "stddev: 9.57541540394062e-9",
            "extra": "mean: 207.22506701353566 nsec\nrounds: 47529"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_long",
            "value": 2266682.1507974896,
            "unit": "iter/sec",
            "range": "stddev: 3.800430686971743e-8",
            "extra": "mean: 441.17345682903004 nsec\nrounds: 188324"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_mixed",
            "value": 2715797.434049072,
            "unit": "iter/sec",
            "range": "stddev: 3.117147271065554e-8",
            "extra": "mean: 368.21597497023805 nsec\nrounds: 194591"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short",
            "value": 5470407.598886672,
            "unit": "iter/sec",
            "range": "stddev: 1.1876358565553547e-8",
            "extra": "mean: 182.801734957277 nsec\nrounds: 55206"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short_different_wl",
            "value": 5533055.732293777,
            "unit": "iter/sec",
            "range": "stddev: 9.490487259514842e-9",
            "extra": "mean: 180.73195868308335 nsec\nrounds: 54843"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_long",
            "value": 3912387.7291034013,
            "unit": "iter/sec",
            "range": "stddev: 2.515455676485786e-8",
            "extra": "mean: 255.5983888204764 nsec\nrounds: 195695"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_mixed",
            "value": 3671376.300293297,
            "unit": "iter/sec",
            "range": "stddev: 2.56173947099779e-8",
            "extra": "mean: 272.37741876811026 nsec\nrounds: 197278"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_short",
            "value": 4643800.982659224,
            "unit": "iter/sec",
            "range": "stddev: 8.816248776062261e-9",
            "extra": "mean: 215.34083905275804 nsec\nrounds: 46338"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_long",
            "value": 3762753.7566617467,
            "unit": "iter/sec",
            "range": "stddev: 2.21023377981296e-8",
            "extra": "mean: 265.7628068882941 nsec\nrounds: 198453"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_to_float_short",
            "value": 9528392.237441767,
            "unit": "iter/sec",
            "range": "stddev: 5.658955255024335e-8",
            "extra": "mean: 104.94949988208027 nsec\nrounds: 102376"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_short",
            "value": 5586397.3714708015,
            "unit": "iter/sec",
            "range": "stddev: 9.345468028041523e-9",
            "extra": "mean: 179.006242038367 nsec\nrounds: 55115"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_long",
            "value": 4110382.756904201,
            "unit": "iter/sec",
            "range": "stddev: 2.1188062615183358e-8",
            "extra": "mean: 243.28634561354437 nsec\nrounds: 195734"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_short",
            "value": 7904056.668395165,
            "unit": "iter/sec",
            "range": "stddev: 8.462764288933368e-9",
            "extra": "mean: 126.51731154688947 nsec\nrounds: 79410"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_long",
            "value": 6061260.432926137,
            "unit": "iter/sec",
            "range": "stddev: 8.745551853639598e-9",
            "extra": "mean: 164.98218663698304 nsec\nrounds: 60824"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "distinct": true,
          "id": "e3cd5291d8ddcabad01184c59e4af5fb82c3b9e1",
          "message": "[pre-commit.ci] auto fixes from pre-commit.com hooks\n\nfor more information, see https://pre-commit.ci",
          "timestamp": "2024-06-07T11:18:19Z",
          "tree_id": "666f1336597adc8618da7c6e882c1290c4026d0b",
          "url": "https://github.com/Hampuztt/apytypes/commit/e3cd5291d8ddcabad01184c59e4af5fb82c3b9e1"
        },
        "date": 1717759420567,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_short",
            "value": 5231288.147874248,
            "unit": "iter/sec",
            "range": "stddev: 1.018654799735924e-8",
            "extra": "mean: 191.1575068573183 nsec\nrounds: 53234"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_long",
            "value": 2468370.9584487416,
            "unit": "iter/sec",
            "range": "stddev: 3.674180754208536e-8",
            "extra": "mean: 405.1254924131808 nsec\nrounds: 187266"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_mixed",
            "value": 2812277.5438819556,
            "unit": "iter/sec",
            "range": "stddev: 5.005547382092602e-8",
            "extra": "mean: 355.58368062768386 nsec\nrounds: 198060"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_short",
            "value": 4824624.271481889,
            "unit": "iter/sec",
            "range": "stddev: 1.4594853386646503e-8",
            "extra": "mean: 207.2700263751127 nsec\nrounds: 47394"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_long",
            "value": 2362886.094387668,
            "unit": "iter/sec",
            "range": "stddev: 3.4192565246352966e-8",
            "extra": "mean: 423.2112594742576 nsec\nrounds: 195351"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_mixed",
            "value": 2636770.856013188,
            "unit": "iter/sec",
            "range": "stddev: 3.2076842302258254e-8",
            "extra": "mean: 379.2517646042364 nsec\nrounds: 187618"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short",
            "value": 5409768.321907511,
            "unit": "iter/sec",
            "range": "stddev: 1.0003538084001629e-8",
            "extra": "mean: 184.85079960825252 nsec\nrounds: 53351"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short_different_wl",
            "value": 5475657.876923883,
            "unit": "iter/sec",
            "range": "stddev: 9.675835650503928e-9",
            "extra": "mean: 182.62645740055632 nsec\nrounds: 54189"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_long",
            "value": 3930680.34802802,
            "unit": "iter/sec",
            "range": "stddev: 2.8952822753769125e-8",
            "extra": "mean: 254.40888382123023 nsec\nrounds: 188680"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_mixed",
            "value": 3636476.485619053,
            "unit": "iter/sec",
            "range": "stddev: 2.4839069804992932e-8",
            "extra": "mean: 274.991466039921 nsec\nrounds: 198020"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_short",
            "value": 4672214.272935863,
            "unit": "iter/sec",
            "range": "stddev: 8.711133100611596e-9",
            "extra": "mean: 214.03127972802125 nsec\nrounds: 46252"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_long",
            "value": 3783002.8461256023,
            "unit": "iter/sec",
            "range": "stddev: 2.2871713574190753e-8",
            "extra": "mean: 264.3402716506543 nsec\nrounds: 199204"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_to_float_short",
            "value": 9942440.4190666,
            "unit": "iter/sec",
            "range": "stddev: 7.2135719371429234e-9",
            "extra": "mean: 100.57892809523099 nsec\nrounds: 98824"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_short",
            "value": 5536916.475635258,
            "unit": "iter/sec",
            "range": "stddev: 1.723816199785942e-8",
            "extra": "mean: 180.6059391360002 nsec\nrounds: 55237"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_long",
            "value": 4076520.3745400594,
            "unit": "iter/sec",
            "range": "stddev: 2.1344473615486146e-8",
            "extra": "mean: 245.30724935062315 nsec\nrounds: 194175"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_short",
            "value": 7922530.3275133455,
            "unit": "iter/sec",
            "range": "stddev: 7.649974803141817e-9",
            "extra": "mean: 126.22230003048612 nsec\nrounds: 77925"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_long",
            "value": 5943642.3289095145,
            "unit": "iter/sec",
            "range": "stddev: 1.269609645990091e-8",
            "extra": "mean: 168.24700152909566 nsec\nrounds: 58890"
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
          "id": "a057ac4cd99529b0497ebacfc9b55e4cdfe8d62b",
          "message": "Fixed PR comments",
          "timestamp": "2024-06-11T09:36:43+02:00",
          "tree_id": "77d7ad42b50446bcad56d00f21cd2a592470cc3e",
          "url": "https://github.com/Hampuztt/apytypes/commit/a057ac4cd99529b0497ebacfc9b55e4cdfe8d62b"
        },
        "date": 1718091761101,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_short",
            "value": 5188324.308044082,
            "unit": "iter/sec",
            "range": "stddev: 9.926168041500266e-9",
            "extra": "mean: 192.740457347571 nsec\nrounds: 51558"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_long",
            "value": 2578994.620365338,
            "unit": "iter/sec",
            "range": "stddev: 4.196457511420315e-8",
            "extra": "mean: 387.74799765124203 nsec\nrounds: 199641"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_mixed",
            "value": 2721758.136098877,
            "unit": "iter/sec",
            "range": "stddev: 3.482541347892557e-8",
            "extra": "mean: 367.40957498646435 nsec\nrounds: 192679"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_short",
            "value": 4706344.365834827,
            "unit": "iter/sec",
            "range": "stddev: 9.899209618099602e-9",
            "extra": "mean: 212.4791392783216 nsec\nrounds: 46949"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_long",
            "value": 2255465.873892739,
            "unit": "iter/sec",
            "range": "stddev: 3.521510026267693e-8",
            "extra": "mean: 443.3673821338215 nsec\nrounds: 186568"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_mixed",
            "value": 2626350.493675658,
            "unit": "iter/sec",
            "range": "stddev: 3.530328638104492e-8",
            "extra": "mean: 380.7564917203611 nsec\nrounds: 188680"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short",
            "value": 5531892.421833716,
            "unit": "iter/sec",
            "range": "stddev: 1.0422785939373132e-8",
            "extra": "mean: 180.76996509421448 nsec\nrounds: 54720"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short_different_wl",
            "value": 5411839.209806956,
            "unit": "iter/sec",
            "range": "stddev: 1.2607820577908504e-8",
            "extra": "mean: 184.7800648230467 nsec\nrounds: 54304"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_long",
            "value": 3899022.1486831047,
            "unit": "iter/sec",
            "range": "stddev: 2.1731727645185596e-8",
            "extra": "mean: 256.474562561206 nsec\nrounds: 193799"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_mixed",
            "value": 3692079.690720176,
            "unit": "iter/sec",
            "range": "stddev: 2.5327048310553233e-8",
            "extra": "mean: 270.8500584410714 nsec\nrounds: 194970"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_short",
            "value": 4690939.891673377,
            "unit": "iter/sec",
            "range": "stddev: 1.0352795709104029e-8",
            "extra": "mean: 213.17689484255726 nsec\nrounds: 47215"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_long",
            "value": 3580747.473385139,
            "unit": "iter/sec",
            "range": "stddev: 2.782927500037767e-8",
            "extra": "mean: 279.2712994794459 nsec\nrounds: 195313"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_to_float_short",
            "value": 10289407.274170652,
            "unit": "iter/sec",
            "range": "stddev: 6.75523567346794e-9",
            "extra": "mean: 97.18732803105885 nsec\nrounds: 103115"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_short",
            "value": 5532459.924237828,
            "unit": "iter/sec",
            "range": "stddev: 1.2576256818931968e-8",
            "extra": "mean: 180.7514222776167 nsec\nrounds: 55390"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_long",
            "value": 4031305.5758393006,
            "unit": "iter/sec",
            "range": "stddev: 2.142957739646516e-8",
            "extra": "mean: 248.05859570488806 nsec\nrounds: 194213"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_short",
            "value": 7740982.097488776,
            "unit": "iter/sec",
            "range": "stddev: 9.537237388920029e-9",
            "extra": "mean: 129.18257495056872 nsec\nrounds: 78285"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_long",
            "value": 6073572.067632557,
            "unit": "iter/sec",
            "range": "stddev: 9.393039791250346e-9",
            "extra": "mean: 164.64775405058492 nsec\nrounds: 57134"
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
          "id": "a22640a9142febd686c0ebe7bda6f7f402899ead",
          "message": "Fixed PR comments",
          "timestamp": "2024-06-11T10:42:21+02:00",
          "tree_id": "7f5698a586451dcd2aa976302ba4959ab39e8a44",
          "url": "https://github.com/Hampuztt/apytypes/commit/a22640a9142febd686c0ebe7bda6f7f402899ead"
        },
        "date": 1718095674070,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_short",
            "value": 5083175.37193823,
            "unit": "iter/sec",
            "range": "stddev: 1.2042170265714375e-8",
            "extra": "mean: 196.7274246567367 nsec\nrounds: 51531"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_long",
            "value": 2527474.2908712113,
            "unit": "iter/sec",
            "range": "stddev: 9.827526070945692e-8",
            "extra": "mean: 395.65189786962026 nsec\nrounds: 195695"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_mixed",
            "value": 2792231.5249178605,
            "unit": "iter/sec",
            "range": "stddev: 3.900094081972846e-8",
            "extra": "mean: 358.1364908590212 nsec\nrounds: 197278"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_short",
            "value": 4833973.378205742,
            "unit": "iter/sec",
            "range": "stddev: 1.0235984080278723e-8",
            "extra": "mean: 206.86915747377975 nsec\nrounds: 48034"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_long",
            "value": 2267943.55407228,
            "unit": "iter/sec",
            "range": "stddev: 4.301769674141594e-8",
            "extra": "mean: 440.92808139093694 nsec\nrounds: 188324"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_mixed",
            "value": 2636950.5190512044,
            "unit": "iter/sec",
            "range": "stddev: 3.3969539370049525e-8",
            "extra": "mean: 379.2259250885856 nsec\nrounds: 189394"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short",
            "value": 5523487.042490317,
            "unit": "iter/sec",
            "range": "stddev: 9.6479754644587e-9",
            "extra": "mean: 181.0450522120109 nsec\nrounds: 54873"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short_different_wl",
            "value": 5514354.4977868805,
            "unit": "iter/sec",
            "range": "stddev: 1.2204744474165141e-8",
            "extra": "mean: 181.34488821881158 nsec\nrounds: 55421"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_long",
            "value": 3845641.182837246,
            "unit": "iter/sec",
            "range": "stddev: 2.3221803490957288e-8",
            "extra": "mean: 260.0346606601898 nsec\nrounds: 193799"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_mixed",
            "value": 3680115.2816145993,
            "unit": "iter/sec",
            "range": "stddev: 4.277937660729361e-8",
            "extra": "mean: 271.73061805875363 nsec\nrounds: 192716"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_short",
            "value": 4591458.876166428,
            "unit": "iter/sec",
            "range": "stddev: 3.080109831785686e-8",
            "extra": "mean: 217.7957000096001 nsec\nrounds: 47128"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_long",
            "value": 3694385.3132634913,
            "unit": "iter/sec",
            "range": "stddev: 2.216643157882446e-8",
            "extra": "mean: 270.681024096199 nsec\nrounds: 193799"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_to_float_short",
            "value": 10141007.6480645,
            "unit": "iter/sec",
            "range": "stddev: 7.498544161154556e-9",
            "extra": "mean: 98.60953020685972 nsec\nrounds: 101534"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_short",
            "value": 5536625.090977578,
            "unit": "iter/sec",
            "range": "stddev: 2.087020765712357e-8",
            "extra": "mean: 180.61544416822633 nsec\nrounds: 54574"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_long",
            "value": 4084113.34337627,
            "unit": "iter/sec",
            "range": "stddev: 2.3947554044792396e-8",
            "extra": "mean: 244.85118700780677 nsec\nrounds: 193799"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_short",
            "value": 7591685.019177889,
            "unit": "iter/sec",
            "range": "stddev: 7.752786396139346e-9",
            "extra": "mean: 131.72306246558324 nsec\nrounds: 76249"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_long",
            "value": 6081698.555198733,
            "unit": "iter/sec",
            "range": "stddev: 9.245031106897686e-9",
            "extra": "mean: 164.4277484199392 nsec\nrounds: 60824"
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
          "id": "cfe3a4ab807b24f666b92248276995422a5d8d2b",
          "message": "Fixed PR comments",
          "timestamp": "2024-06-11T11:03:43+02:00",
          "tree_id": "03fce3daccf65032a048b92a1e2304f581ee998a",
          "url": "https://github.com/Hampuztt/apytypes/commit/cfe3a4ab807b24f666b92248276995422a5d8d2b"
        },
        "date": 1718097181148,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_short",
            "value": 5225219.64433707,
            "unit": "iter/sec",
            "range": "stddev: 1.2924650675270919e-8",
            "extra": "mean: 191.37951475087465 nsec\nrounds: 52097"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_long",
            "value": 2519490.5223531914,
            "unit": "iter/sec",
            "range": "stddev: 3.6572901186436575e-8",
            "extra": "mean: 396.90564069515375 nsec\nrounds: 191939"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_mixed",
            "value": 2811865.382280256,
            "unit": "iter/sec",
            "range": "stddev: 2.97112622860542e-8",
            "extra": "mean: 355.6358018779355 nsec\nrounds: 198413"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_short",
            "value": 4823889.137283904,
            "unit": "iter/sec",
            "range": "stddev: 1.3249556364417605e-8",
            "extra": "mean: 207.30161318821143 nsec\nrounds: 47713"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_long",
            "value": 2298237.0483523943,
            "unit": "iter/sec",
            "range": "stddev: 4.1084746932238095e-8",
            "extra": "mean: 435.11612551756224 nsec\nrounds: 189072"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_mixed",
            "value": 2665555.737763307,
            "unit": "iter/sec",
            "range": "stddev: 3.421024082982351e-8",
            "extra": "mean: 375.1562894869727 nsec\nrounds: 190840"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short",
            "value": 5564099.774975453,
            "unit": "iter/sec",
            "range": "stddev: 8.270429410837707e-9",
            "extra": "mean: 179.72359239444557 nsec\nrounds: 54813"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short_different_wl",
            "value": 5507970.305615019,
            "unit": "iter/sec",
            "range": "stddev: 8.732329568259843e-9",
            "extra": "mean: 181.55508191112395 nsec\nrounds: 54633"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_long",
            "value": 3900483.980903727,
            "unit": "iter/sec",
            "range": "stddev: 2.1687019186025793e-8",
            "extra": "mean: 256.37844044375805 nsec\nrounds: 190477"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_mixed",
            "value": 3708999.8888357887,
            "unit": "iter/sec",
            "range": "stddev: 2.3404475945300646e-8",
            "extra": "mean: 269.61445941535806 nsec\nrounds: 179824"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_short",
            "value": 4643353.626114222,
            "unit": "iter/sec",
            "range": "stddev: 1.3152714041056632e-8",
            "extra": "mean: 215.36158572461474 nsec\nrounds: 46124"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_long",
            "value": 3767453.2931379024,
            "unit": "iter/sec",
            "range": "stddev: 2.0324561610143154e-8",
            "extra": "mean: 265.4312932880625 nsec\nrounds: 187970"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_to_float_short",
            "value": 10134888.660319041,
            "unit": "iter/sec",
            "range": "stddev: 6.774869670916572e-9",
            "extra": "mean: 98.66906618472102 nsec\nrounds: 101637"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_short",
            "value": 5576011.432178254,
            "unit": "iter/sec",
            "range": "stddev: 7.998060317012426e-9",
            "extra": "mean: 179.3396610037009 nsec\nrounds: 54455"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_long",
            "value": 4057911.142645262,
            "unit": "iter/sec",
            "range": "stddev: 2.1499815618286195e-8",
            "extra": "mean: 246.43220732238441 nsec\nrounds: 193088"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_short",
            "value": 7684966.563851173,
            "unit": "iter/sec",
            "range": "stddev: 8.718257045818522e-9",
            "extra": "mean: 130.1241835851057 nsec\nrounds: 77436"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_long",
            "value": 5885651.562137023,
            "unit": "iter/sec",
            "range": "stddev: 1.1417239011929158e-8",
            "extra": "mean: 169.90472328215242 nsec\nrounds: 58959"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "distinct": true,
          "id": "70876b11c448a01bc3ef46340cbb325c971af061",
          "message": "Fixed issues after PR feedback",
          "timestamp": "2024-06-11T11:32:54+02:00",
          "tree_id": "03fce3daccf65032a048b92a1e2304f581ee998a",
          "url": "https://github.com/Hampuztt/apytypes/commit/70876b11c448a01bc3ef46340cbb325c971af061"
        },
        "date": 1718098816838,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_short",
            "value": 5228389.972418449,
            "unit": "iter/sec",
            "range": "stddev: 7.844027630793929e-9",
            "extra": "mean: 191.26346834783928 nsec\nrounds: 53377"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_long",
            "value": 2531057.7350510904,
            "unit": "iter/sec",
            "range": "stddev: 3.3649455621998636e-8",
            "extra": "mean: 395.0917381897739 nsec\nrounds: 193799"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_mixed",
            "value": 2786573.041584959,
            "unit": "iter/sec",
            "range": "stddev: 3.751347734214542e-8",
            "extra": "mean: 358.86373157162103 nsec\nrounds: 99711"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_short",
            "value": 4799595.878685942,
            "unit": "iter/sec",
            "range": "stddev: 1.0291161210272678e-8",
            "extra": "mean: 208.35087479781487 nsec\nrounds: 47531"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_long",
            "value": 2314643.347558182,
            "unit": "iter/sec",
            "range": "stddev: 3.884718832324151e-8",
            "extra": "mean: 432.0320022758326 nsec\nrounds: 192679"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_mixed",
            "value": 2601559.311130531,
            "unit": "iter/sec",
            "range": "stddev: 2.8889062542198463e-8",
            "extra": "mean: 384.3848555447564 nsec\nrounds: 187266"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short",
            "value": 5495066.406681238,
            "unit": "iter/sec",
            "range": "stddev: 8.207362363470715e-9",
            "extra": "mean: 181.98142224163877 nsec\nrounds: 54393"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short_different_wl",
            "value": 5411310.378317729,
            "unit": "iter/sec",
            "range": "stddev: 8.311654641339418e-9",
            "extra": "mean: 184.79812283673363 nsec\nrounds: 53405"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_long",
            "value": 3915652.650545379,
            "unit": "iter/sec",
            "range": "stddev: 2.3942485654517297e-8",
            "extra": "mean: 255.38526760302648 nsec\nrounds: 193424"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_mixed",
            "value": 3638373.42027363,
            "unit": "iter/sec",
            "range": "stddev: 2.348509161249301e-8",
            "extra": "mean: 274.84809404877353 nsec\nrounds: 197239"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_short",
            "value": 4527705.574925227,
            "unit": "iter/sec",
            "range": "stddev: 2.0197483269620875e-8",
            "extra": "mean: 220.8624177194659 nsec\nrounds: 190477"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_long",
            "value": 3790883.1231786907,
            "unit": "iter/sec",
            "range": "stddev: 2.019268610236229e-8",
            "extra": "mean: 263.79077579197445 nsec\nrounds: 196079"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_to_float_short",
            "value": 10052464.201935388,
            "unit": "iter/sec",
            "range": "stddev: 7.522486443591969e-9",
            "extra": "mean: 99.47809610777755 nsec\nrounds: 99118"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_short",
            "value": 5411025.880033641,
            "unit": "iter/sec",
            "range": "stddev: 9.993604327593074e-9",
            "extra": "mean: 184.80783906245392 nsec\nrounds: 53065"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_long",
            "value": 4065220.8762101475,
            "unit": "iter/sec",
            "range": "stddev: 2.184913816773915e-8",
            "extra": "mean: 245.98909393869533 nsec\nrounds: 191571"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_short",
            "value": 7766200.516283203,
            "unit": "iter/sec",
            "range": "stddev: 8.004295813905158e-9",
            "extra": "mean: 128.7630930856275 nsec\nrounds: 77670"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_long",
            "value": 6076700.967494355,
            "unit": "iter/sec",
            "range": "stddev: 1.114189423039698e-8",
            "extra": "mean: 164.56297674501627 nsec\nrounds: 59985"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "committer": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "distinct": true,
          "id": "f641ae2028e8826b716e091b0bd3b11b5f268c4a",
          "message": "Revert to windows-2019 runner",
          "timestamp": "2024-06-17T11:43:20+02:00",
          "tree_id": "fac6acd92ccb2a79e2d80b644995c79d0a226864",
          "url": "https://github.com/Hampuztt/apytypes/commit/f641ae2028e8826b716e091b0bd3b11b5f268c4a"
        },
        "date": 1719234868059,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_short",
            "value": 4791976.508657038,
            "unit": "iter/sec",
            "range": "stddev: 1.2454772027347024e-8",
            "extra": "mean: 208.68215822711488 nsec\nrounds: 45681"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_long",
            "value": 2480243.8769877893,
            "unit": "iter/sec",
            "range": "stddev: 3.821596753890101e-8",
            "extra": "mean: 403.1861581347282 nsec\nrounds: 190877"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_mixed",
            "value": 2771937.3436332066,
            "unit": "iter/sec",
            "range": "stddev: 3.357768921878144e-8",
            "extra": "mean: 360.7585150857755 nsec\nrounds: 195313"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_short",
            "value": 4862445.98893148,
            "unit": "iter/sec",
            "range": "stddev: 8.981098152506281e-9",
            "extra": "mean: 205.65781137237522 nsec\nrounds: 49049"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_long",
            "value": 2274035.9125191662,
            "unit": "iter/sec",
            "range": "stddev: 3.650001151340421e-8",
            "extra": "mean: 439.74679313321843 nsec\nrounds: 187618"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_mixed",
            "value": 2579085.685701796,
            "unit": "iter/sec",
            "range": "stddev: 3.1560320050293325e-8",
            "extra": "mean: 387.7343065970917 nsec\nrounds: 195734"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short",
            "value": 4889842.626804187,
            "unit": "iter/sec",
            "range": "stddev: 9.062731290206963e-9",
            "extra": "mean: 204.5055590375164 nsec\nrounds: 48807"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short_different_wl",
            "value": 4891044.804907217,
            "unit": "iter/sec",
            "range": "stddev: 1.6786117078428656e-8",
            "extra": "mean: 204.45529327329774 nsec\nrounds: 49510"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_long",
            "value": 3674829.599356751,
            "unit": "iter/sec",
            "range": "stddev: 2.3687194916266576e-8",
            "extra": "mean: 272.12146113502496 nsec\nrounds: 198808"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_mixed",
            "value": 3450702.5090057985,
            "unit": "iter/sec",
            "range": "stddev: 2.5572725425134616e-8",
            "extra": "mean: 289.79606250916515 nsec\nrounds: 199243"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_short",
            "value": 4672739.789000118,
            "unit": "iter/sec",
            "range": "stddev: 9.980054304670647e-9",
            "extra": "mean: 214.00720886574675 nsec\nrounds: 45125"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_long",
            "value": 3996411.270913478,
            "unit": "iter/sec",
            "range": "stddev: 2.204300492242712e-8",
            "extra": "mean: 250.22449698261394 nsec\nrounds: 198453"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_to_float_short",
            "value": 10312680.033727868,
            "unit": "iter/sec",
            "range": "stddev: 7.704859401563517e-9",
            "extra": "mean: 96.96800412014797 nsec\nrounds: 102902"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_short",
            "value": 5476373.236927034,
            "unit": "iter/sec",
            "range": "stddev: 9.18083713880072e-9",
            "extra": "mean: 182.60260152778827 nsec\nrounds: 55698"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_long",
            "value": 4514333.80574283,
            "unit": "iter/sec",
            "range": "stddev: 1.0459786527881989e-8",
            "extra": "mean: 221.51662748723837 nsec\nrounds: 45432"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_short",
            "value": 8067359.8704847945,
            "unit": "iter/sec",
            "range": "stddev: 7.862355003090218e-9",
            "extra": "mean: 123.95629004466969 nsec\nrounds: 80691"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_long",
            "value": 6198535.7397307325,
            "unit": "iter/sec",
            "range": "stddev: 8.490809752607483e-9",
            "extra": "mean: 161.3284236776259 nsec\nrounds: 62151"
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
          "distinct": false,
          "id": "584a386e9a9f51906f5f1cd1e8b2f15fad2d5a98",
          "message": "Fixed array creation functions added",
          "timestamp": "2024-07-19T14:37:22+02:00",
          "tree_id": "126caef7a7ff5598216c2dc25fd9290e02087778",
          "url": "https://github.com/Hampuztt/apytypes/commit/584a386e9a9f51906f5f1cd1e8b2f15fad2d5a98"
        },
        "date": 1721393874622,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_short",
            "value": 4812827.97680035,
            "unit": "iter/sec",
            "range": "stddev: 1.1576621095243412e-8",
            "extra": "mean: 207.77804750564692 nsec\nrounds: 48712"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_long",
            "value": 2524882.5603151047,
            "unit": "iter/sec",
            "range": "stddev: 1.4319037450895413e-7",
            "extra": "mean: 396.0580249226138 nsec\nrounds: 194553"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_mixed",
            "value": 2825435.1927349586,
            "unit": "iter/sec",
            "range": "stddev: 2.8271267267648463e-8",
            "extra": "mean: 353.9277781246834 nsec\nrounds: 198808"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_short",
            "value": 4831173.392937727,
            "unit": "iter/sec",
            "range": "stddev: 1.0264909272966602e-8",
            "extra": "mean: 206.98905186508725 nsec\nrounds: 49339"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_long",
            "value": 2295125.583278936,
            "unit": "iter/sec",
            "range": "stddev: 3.162959116113057e-8",
            "extra": "mean: 435.70600549507606 nsec\nrounds: 185186"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_mixed",
            "value": 2638387.485896043,
            "unit": "iter/sec",
            "range": "stddev: 5.5509498267342846e-8",
            "extra": "mean: 379.019384129799 nsec\nrounds: 190115"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short",
            "value": 4666125.609036629,
            "unit": "iter/sec",
            "range": "stddev: 9.307620901627694e-9",
            "extra": "mean: 214.31056164952778 nsec\nrounds: 46773"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short_different_wl",
            "value": 4505033.148730707,
            "unit": "iter/sec",
            "range": "stddev: 2.565818596308043e-8",
            "extra": "mean: 221.97394935524068 nsec\nrounds: 45891"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_long",
            "value": 3583557.2532699043,
            "unit": "iter/sec",
            "range": "stddev: 3.193385682886418e-8",
            "extra": "mean: 279.0523296617089 nsec\nrounds: 199204"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_mixed",
            "value": 3286583.425436921,
            "unit": "iter/sec",
            "range": "stddev: 2.2047137783909077e-8",
            "extra": "mean: 304.267341050745 nsec\nrounds: 192308"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_short",
            "value": 4556459.06520175,
            "unit": "iter/sec",
            "range": "stddev: 1.3380157132084847e-8",
            "extra": "mean: 219.4686675969317 nsec\nrounds: 45872"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_long",
            "value": 3895845.0195189836,
            "unit": "iter/sec",
            "range": "stddev: 2.3719662599666e-8",
            "extra": "mean: 256.6837220141459 nsec\nrounds: 194932"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_to_float_short",
            "value": 10053343.447525859,
            "unit": "iter/sec",
            "range": "stddev: 7.767445888064132e-9",
            "extra": "mean: 99.46939594967549 nsec\nrounds: 100422"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_short",
            "value": 5209366.040170892,
            "unit": "iter/sec",
            "range": "stddev: 8.588922724574671e-9",
            "extra": "mean: 191.96193784208714 nsec\nrounds: 52285"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_long",
            "value": 4240101.3514807755,
            "unit": "iter/sec",
            "range": "stddev: 1.4009574496302343e-8",
            "extra": "mean: 235.84341908494088 nsec\nrounds: 43304"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_short",
            "value": 7875326.978757896,
            "unit": "iter/sec",
            "range": "stddev: 1.362502138454085e-8",
            "extra": "mean: 126.97885468087469 nsec\nrounds: 78537"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_long",
            "value": 6158555.650628446,
            "unit": "iter/sec",
            "range": "stddev: 2.1656267594176342e-8",
            "extra": "mean: 162.37573494979338 nsec\nrounds: 62501"
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
          "id": "a0b2cb1dba92c32a9046a4124127f1303a475984",
          "message": "action test1",
          "timestamp": "2024-07-25T10:16:51+02:00",
          "tree_id": "6fd6ae51efd883baf1a3d196423eeeac5abc5c07",
          "url": "https://github.com/Hampuztt/apytypes/commit/a0b2cb1dba92c32a9046a4124127f1303a475984"
        },
        "date": 1721895846535,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_short",
            "value": 4603198.3862505555,
            "unit": "iter/sec",
            "range": "stddev: 1.3753536737176094e-8",
            "extra": "mean: 217.24025690202924 nsec\nrounds: 46710"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_long",
            "value": 2592625.962305537,
            "unit": "iter/sec",
            "range": "stddev: 1.191688809084436e-7",
            "extra": "mean: 385.7093211821972 nsec\nrounds: 199204"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_mixed",
            "value": 2938252.860969908,
            "unit": "iter/sec",
            "range": "stddev: 3.27765482875323e-8",
            "extra": "mean: 340.3383055568351 nsec\nrounds: 191571"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_short",
            "value": 4771881.426874193,
            "unit": "iter/sec",
            "range": "stddev: 1.1660451454181842e-8",
            "extra": "mean: 209.5609489305991 nsec\nrounds: 47464"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_long",
            "value": 2275290.5183346644,
            "unit": "iter/sec",
            "range": "stddev: 1.3967332834506471e-7",
            "extra": "mean: 439.50431469820876 nsec\nrounds: 190840"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_mixed",
            "value": 2820539.7046881034,
            "unit": "iter/sec",
            "range": "stddev: 3.8604649942663885e-8",
            "extra": "mean: 354.54207517019415 nsec\nrounds: 199641"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short",
            "value": 4787600.832583785,
            "unit": "iter/sec",
            "range": "stddev: 2.3458700643832786e-8",
            "extra": "mean: 208.87288539056516 nsec\nrounds: 48905"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short_different_wl",
            "value": 4765962.885761437,
            "unit": "iter/sec",
            "range": "stddev: 1.1238086079500711e-8",
            "extra": "mean: 209.82118912166868 nsec\nrounds: 47758"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_long",
            "value": 3723067.6661426066,
            "unit": "iter/sec",
            "range": "stddev: 2.9659985056854682e-8",
            "extra": "mean: 268.5957091495101 nsec\nrounds: 192716"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_mixed",
            "value": 3581098.452140299,
            "unit": "iter/sec",
            "range": "stddev: 4.559058922278756e-8",
            "extra": "mean: 279.24392846650267 nsec\nrounds: 198847"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_short",
            "value": 4639149.715947549,
            "unit": "iter/sec",
            "range": "stddev: 1.9177257889102082e-8",
            "extra": "mean: 215.5567423406022 nsec\nrounds: 46340"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_long",
            "value": 3919882.9095106185,
            "unit": "iter/sec",
            "range": "stddev: 2.6802392795880733e-8",
            "extra": "mean: 255.10966094775702 nsec\nrounds: 193837"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_to_float_short",
            "value": 9803207.448938185,
            "unit": "iter/sec",
            "range": "stddev: 8.688195743143131e-9",
            "extra": "mean: 102.00743024255668 nsec\nrounds: 98737"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_short",
            "value": 4649500.837957601,
            "unit": "iter/sec",
            "range": "stddev: 1.3748843881218981e-8",
            "extra": "mean: 215.07685122586378 nsec\nrounds: 46688"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_long",
            "value": 4098342.3015026995,
            "unit": "iter/sec",
            "range": "stddev: 2.660358894940565e-8",
            "extra": "mean: 244.0010927426174 nsec\nrounds: 198060"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_short",
            "value": 6968665.347074288,
            "unit": "iter/sec",
            "range": "stddev: 1.1385516037129793e-8",
            "extra": "mean: 143.4995010084477 nsec\nrounds: 69901"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_long",
            "value": 5993220.403828154,
            "unit": "iter/sec",
            "range": "stddev: 1.2089191210513563e-8",
            "extra": "mean: 166.85520181460697 nsec\nrounds: 60129"
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
          "id": "6b6361b2208e1a7afac6d83b5912fea2b28b3e8d",
          "message": "Documentation, refactoring and small fixes for array creation",
          "timestamp": "2024-07-23T13:15:32+02:00",
          "tree_id": "4628b1dce0e75ee2d511d4b5dbb912daf5e1cfd7",
          "url": "https://github.com/Hampuztt/apytypes/commit/6b6361b2208e1a7afac6d83b5912fea2b28b3e8d"
        },
        "date": 1721896200818,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_short",
            "value": 4721038.783029211,
            "unit": "iter/sec",
            "range": "stddev: 9.61589452640468e-9",
            "extra": "mean: 211.81778967689255 nsec\nrounds: 47622"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_long",
            "value": 2592810.0797397564,
            "unit": "iter/sec",
            "range": "stddev: 3.637830704477394e-8",
            "extra": "mean: 385.6819316670643 nsec\nrounds: 198060"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_mixed",
            "value": 2905365.8584397854,
            "unit": "iter/sec",
            "range": "stddev: 2.987467782644223e-8",
            "extra": "mean: 344.19073146848825 nsec\nrounds: 191242"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_short",
            "value": 4666511.254019944,
            "unit": "iter/sec",
            "range": "stddev: 1.3334811945459571e-8",
            "extra": "mean: 214.2928508184303 nsec\nrounds: 46534"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_long",
            "value": 2246978.375280808,
            "unit": "iter/sec",
            "range": "stddev: 3.673959656973103e-8",
            "extra": "mean: 445.04211121971014 nsec\nrounds: 187266"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_mixed",
            "value": 2792129.92935551,
            "unit": "iter/sec",
            "range": "stddev: 4.284160085619553e-8",
            "extra": "mean: 358.14952215738396 nsec\nrounds: 198060"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short",
            "value": 4724814.499756597,
            "unit": "iter/sec",
            "range": "stddev: 9.388781331636252e-9",
            "extra": "mean: 211.64852081528497 nsec\nrounds: 48128"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short_different_wl",
            "value": 4713697.510160089,
            "unit": "iter/sec",
            "range": "stddev: 1.240713820382809e-8",
            "extra": "mean: 212.14768190888188 nsec\nrounds: 48596"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_long",
            "value": 3743355.5328983255,
            "unit": "iter/sec",
            "range": "stddev: 2.1129784667782844e-8",
            "extra": "mean: 267.14000078560065 nsec\nrounds: 198847"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_mixed",
            "value": 3579252.0922352183,
            "unit": "iter/sec",
            "range": "stddev: 3.0821953857588345e-8",
            "extra": "mean: 279.38797665853616 nsec\nrounds: 188324"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_short",
            "value": 4704153.835455726,
            "unit": "iter/sec",
            "range": "stddev: 1.3818625300964866e-8",
            "extra": "mean: 212.5780820480376 nsec\nrounds: 47509"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_long",
            "value": 4000350.993540064,
            "unit": "iter/sec",
            "range": "stddev: 2.1715225491231145e-8",
            "extra": "mean: 249.97806482859218 nsec\nrounds: 198453"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_to_float_short",
            "value": 9655660.621227065,
            "unit": "iter/sec",
            "range": "stddev: 9.482569506302906e-9",
            "extra": "mean: 103.5661918152107 nsec\nrounds: 98824"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_short",
            "value": 4709869.140379347,
            "unit": "iter/sec",
            "range": "stddev: 1.3008342373106153e-8",
            "extra": "mean: 212.3201240193194 nsec\nrounds: 46929"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_long",
            "value": 4104351.088066471,
            "unit": "iter/sec",
            "range": "stddev: 2.78530726207957e-8",
            "extra": "mean: 243.64387415775073 nsec\nrounds: 195695"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_short",
            "value": 6822542.883795063,
            "unit": "iter/sec",
            "range": "stddev: 8.46308768471024e-9",
            "extra": "mean: 146.57291526528368 nsec\nrounds: 68649"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_long",
            "value": 5980048.453973836,
            "unit": "iter/sec",
            "range": "stddev: 7.870240454142995e-9",
            "extra": "mean: 167.22272531682927 nsec\nrounds: 59949"
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
          "id": "4f1da16b6bcf8ecbce7ef24d76ddf8ab8faf193b",
          "message": "action_test",
          "timestamp": "2024-07-25T10:36:47+02:00",
          "tree_id": "b0fd6656c4074abf31a870b3e0f6a823416d4ee7",
          "url": "https://github.com/Hampuztt/apytypes/commit/4f1da16b6bcf8ecbce7ef24d76ddf8ab8faf193b"
        },
        "date": 1721896958535,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_short",
            "value": 4727558.374341887,
            "unit": "iter/sec",
            "range": "stddev: 9.944091815931114e-9",
            "extra": "mean: 211.52568002700977 nsec\nrounds: 47329"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_long",
            "value": 2669312.573785868,
            "unit": "iter/sec",
            "range": "stddev: 3.2178751496200354e-8",
            "extra": "mean: 374.6282881295433 nsec\nrounds: 191571"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_mixed",
            "value": 2862423.9094492476,
            "unit": "iter/sec",
            "range": "stddev: 2.6173432321689505e-8",
            "extra": "mean: 349.3542646493057 nsec\nrounds: 190840"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_short",
            "value": 4655854.532961855,
            "unit": "iter/sec",
            "range": "stddev: 1.1079226049891646e-8",
            "extra": "mean: 214.78334276132495 nsec\nrounds: 48786"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_long",
            "value": 2242305.024655373,
            "unit": "iter/sec",
            "range": "stddev: 3.712804076306223e-8",
            "extra": "mean: 445.9696557802922 nsec\nrounds: 184843"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_mixed",
            "value": 2758269.734842172,
            "unit": "iter/sec",
            "range": "stddev: 3.396099476823005e-8",
            "extra": "mean: 362.54612352378933 nsec\nrounds: 195695"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short",
            "value": 4772032.016633974,
            "unit": "iter/sec",
            "range": "stddev: 1.1586839419814379e-8",
            "extra": "mean: 209.5543358708932 nsec\nrounds: 49388"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short_different_wl",
            "value": 4641006.9899355825,
            "unit": "iter/sec",
            "range": "stddev: 1.2367706911557465e-8",
            "extra": "mean: 215.47047918018316 nsec\nrounds: 48103"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_long",
            "value": 3765480.745774185,
            "unit": "iter/sec",
            "range": "stddev: 2.2362203825435262e-8",
            "extra": "mean: 265.5703394906066 nsec\nrounds: 196503"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_mixed",
            "value": 3592656.174391036,
            "unit": "iter/sec",
            "range": "stddev: 2.718843916279926e-8",
            "extra": "mean: 278.3455892964905 nsec\nrounds: 196503"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_short",
            "value": 4680075.846913494,
            "unit": "iter/sec",
            "range": "stddev: 9.10589077972618e-9",
            "extra": "mean: 213.67175078144197 nsec\nrounds: 47059"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_long",
            "value": 3984517.6123345927,
            "unit": "iter/sec",
            "range": "stddev: 2.3488941400831807e-8",
            "extra": "mean: 250.97140916248776 nsec\nrounds: 196890"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_to_float_short",
            "value": 10101283.211240534,
            "unit": "iter/sec",
            "range": "stddev: 5.747149563487805e-9",
            "extra": "mean: 98.99732331899028 nsec\nrounds: 100322"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_short",
            "value": 4671138.607381203,
            "unit": "iter/sec",
            "range": "stddev: 1.1977593545382299e-8",
            "extra": "mean: 214.0805666566495 nsec\nrounds: 46995"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_long",
            "value": 4086548.392000107,
            "unit": "iter/sec",
            "range": "stddev: 2.1213245433804187e-8",
            "extra": "mean: 244.70528770873446 nsec\nrounds: 194932"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_short",
            "value": 6810332.078163617,
            "unit": "iter/sec",
            "range": "stddev: 7.684608536348637e-9",
            "extra": "mean: 146.8357179243301 nsec\nrounds: 69123"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_long",
            "value": 5891800.4720974425,
            "unit": "iter/sec",
            "range": "stddev: 7.833657382788708e-9",
            "extra": "mean: 169.72740416713884 nsec\nrounds: 58956"
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
          "id": "a0d073bc4f2cebd7d2de08b5be35c6ab01ffcef4",
          "message": "test2",
          "timestamp": "2024-07-25T10:59:40+02:00",
          "tree_id": "d4162afe90455c19c9b5d1c7be18ea0021cc6c4c",
          "url": "https://github.com/Hampuztt/apytypes/commit/a0d073bc4f2cebd7d2de08b5be35c6ab01ffcef4"
        },
        "date": 1721898302906,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_short",
            "value": 4720635.080515351,
            "unit": "iter/sec",
            "range": "stddev: 1.416515851485933e-8",
            "extra": "mean: 211.83590405616832 nsec\nrounds: 47486"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_long",
            "value": 2585781.6094378717,
            "unit": "iter/sec",
            "range": "stddev: 3.4253405675562095e-8",
            "extra": "mean: 386.730262273692 nsec\nrounds: 198847"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_mixed",
            "value": 2936892.476699703,
            "unit": "iter/sec",
            "range": "stddev: 2.660155610781139e-8",
            "extra": "mean: 340.495952076323 nsec\nrounds: 195351"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_short",
            "value": 4687209.17207721,
            "unit": "iter/sec",
            "range": "stddev: 1.1875871322260023e-8",
            "extra": "mean: 213.34657005651462 nsec\nrounds: 46062"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_long",
            "value": 2301936.562843986,
            "unit": "iter/sec",
            "range": "stddev: 3.878355576935296e-8",
            "extra": "mean: 434.41683673703386 nsec\nrounds: 190115"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_mixed",
            "value": 2790785.1260035196,
            "unit": "iter/sec",
            "range": "stddev: 3.453850568485524e-8",
            "extra": "mean: 358.3221046587586 nsec\nrounds: 194553"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short",
            "value": 4719257.882644804,
            "unit": "iter/sec",
            "range": "stddev: 1.2875095645102154e-8",
            "extra": "mean: 211.89772308851514 nsec\nrounds: 48478"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short_different_wl",
            "value": 4709557.361493434,
            "unit": "iter/sec",
            "range": "stddev: 9.42013074788408e-9",
            "extra": "mean: 212.3341798905272 nsec\nrounds: 47896"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_long",
            "value": 3748312.412648477,
            "unit": "iter/sec",
            "range": "stddev: 2.57625770334064e-8",
            "extra": "mean: 266.7867269081175 nsec\nrounds: 198453"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_mixed",
            "value": 3538999.899619933,
            "unit": "iter/sec",
            "range": "stddev: 2.7572719133758455e-8",
            "extra": "mean: 282.56570453912616 nsec\nrounds: 190840"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_short",
            "value": 4820656.46174207,
            "unit": "iter/sec",
            "range": "stddev: 1.2527714634142404e-8",
            "extra": "mean: 207.44062721253025 nsec\nrounds: 48596"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_long",
            "value": 3953098.432383482,
            "unit": "iter/sec",
            "range": "stddev: 2.134190377732829e-8",
            "extra": "mean: 252.9661269771436 nsec\nrounds: 196503"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_to_float_short",
            "value": 10140663.742461806,
            "unit": "iter/sec",
            "range": "stddev: 7.719897637919611e-9",
            "extra": "mean: 98.61287440311922 nsec\nrounds: 98824"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_short",
            "value": 4749811.119777827,
            "unit": "iter/sec",
            "range": "stddev: 9.002302314512118e-9",
            "extra": "mean: 210.53468754500327 nsec\nrounds: 47735"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_long",
            "value": 4149678.442089572,
            "unit": "iter/sec",
            "range": "stddev: 2.5515288213649515e-8",
            "extra": "mean: 240.9825276719056 nsec\nrounds: 199243"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_short",
            "value": 6984828.682503402,
            "unit": "iter/sec",
            "range": "stddev: 1.0145869303576754e-8",
            "extra": "mean: 143.16743408537894 nsec\nrounds: 69028"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_long",
            "value": 5873521.5537515,
            "unit": "iter/sec",
            "range": "stddev: 2.0833256493279094e-8",
            "extra": "mean: 170.2556108543809 nsec\nrounds: 59556"
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
          "id": "f38485da80484f3dc95751737b9b5af8433c98e5",
          "message": "test abc",
          "timestamp": "2024-07-25T11:10:31+02:00",
          "tree_id": "c187e5c4c086a7d726999d44c6aaabe0ee8e8548",
          "url": "https://github.com/Hampuztt/apytypes/commit/f38485da80484f3dc95751737b9b5af8433c98e5"
        },
        "date": 1721898951153,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_short",
            "value": 5237881.883552437,
            "unit": "iter/sec",
            "range": "stddev: 1.4596964419588587e-8",
            "extra": "mean: 190.91686720545184 nsec\nrounds: 51478"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_long",
            "value": 2586473.5758285346,
            "unit": "iter/sec",
            "range": "stddev: 3.907270670501834e-8",
            "extra": "mean: 386.62679926273296 nsec\nrounds: 198847"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_mixed",
            "value": 2889377.6691704323,
            "unit": "iter/sec",
            "range": "stddev: 2.778658344797663e-8",
            "extra": "mean: 346.095289193241 nsec\nrounds: 190477"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_short",
            "value": 5120845.338886894,
            "unit": "iter/sec",
            "range": "stddev: 1.0082794544965057e-8",
            "extra": "mean: 195.28025820385633 nsec\nrounds: 52013"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_long",
            "value": 2237255.1451264503,
            "unit": "iter/sec",
            "range": "stddev: 3.5944286405753285e-8",
            "extra": "mean: 446.97628796540977 nsec\nrounds: 198020"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_mixed",
            "value": 2586302.6469014925,
            "unit": "iter/sec",
            "range": "stddev: 3.0671660800632544e-8",
            "extra": "mean: 386.6523514555274 nsec\nrounds: 199243"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short",
            "value": 5164632.753365061,
            "unit": "iter/sec",
            "range": "stddev: 8.392854066065341e-9",
            "extra": "mean: 193.62460948427497 nsec\nrounds: 49806"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short_different_wl",
            "value": 4929255.657123143,
            "unit": "iter/sec",
            "range": "stddev: 8.682025564173024e-9",
            "extra": "mean: 202.8703864354948 nsec\nrounds: 48857"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_long",
            "value": 3783305.888482758,
            "unit": "iter/sec",
            "range": "stddev: 2.1845120928790096e-8",
            "extra": "mean: 264.31909802618674 nsec\nrounds: 196890"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_mixed",
            "value": 3441378.9312588624,
            "unit": "iter/sec",
            "range": "stddev: 2.753321429529478e-8",
            "extra": "mean: 290.5811943336187 nsec\nrounds: 199204"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_short",
            "value": 4670810.075723771,
            "unit": "iter/sec",
            "range": "stddev: 8.903418620473716e-9",
            "extra": "mean: 214.0956244822172 nsec\nrounds: 47039"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_long",
            "value": 3906910.704774635,
            "unit": "iter/sec",
            "range": "stddev: 2.2625282974501162e-8",
            "extra": "mean: 255.9567073743941 nsec\nrounds: 195695"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_to_float_short",
            "value": 10246974.21638709,
            "unit": "iter/sec",
            "range": "stddev: 6.939094006923341e-9",
            "extra": "mean: 97.58978395794821 nsec\nrounds: 102156"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_short",
            "value": 5717632.248573094,
            "unit": "iter/sec",
            "range": "stddev: 1.1724083568816904e-8",
            "extra": "mean: 174.89757237354817 nsec\nrounds: 57134"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_long",
            "value": 4412882.484079956,
            "unit": "iter/sec",
            "range": "stddev: 2.611777574056905e-8",
            "extra": "mean: 226.60925225349675 nsec\nrounds: 45577"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_short",
            "value": 7903276.7359234635,
            "unit": "iter/sec",
            "range": "stddev: 7.926084640789702e-9",
            "extra": "mean: 126.52979686952054 nsec\nrounds: 78964"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_long",
            "value": 5803307.688141827,
            "unit": "iter/sec",
            "range": "stddev: 1.1492685307023135e-8",
            "extra": "mean: 172.3155231012905 nsec\nrounds: 58679"
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
          "id": "a0adff6ed7e6ec17ad26d5a4119ad9c4f0976e55",
          "message": "abc",
          "timestamp": "2024-07-25T11:26:55+02:00",
          "tree_id": "d8f780b8f5bf2940b961012634d20dd791e2d9fd",
          "url": "https://github.com/Hampuztt/apytypes/commit/a0adff6ed7e6ec17ad26d5a4119ad9c4f0976e55"
        },
        "date": 1721899944308,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_short",
            "value": 5238486.269659698,
            "unit": "iter/sec",
            "range": "stddev: 1.1883369141464704e-8",
            "extra": "mean: 190.89484032667374 nsec\nrounds: 51637"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_long",
            "value": 2559521.6692702943,
            "unit": "iter/sec",
            "range": "stddev: 1.5026640960355328e-7",
            "extra": "mean: 390.69800111710305 nsec\nrounds: 195313"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_mixed",
            "value": 2789580.807518078,
            "unit": "iter/sec",
            "range": "stddev: 3.1706336553269514e-8",
            "extra": "mean: 358.47679956245724 nsec\nrounds: 196117"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_short",
            "value": 5085201.597041731,
            "unit": "iter/sec",
            "range": "stddev: 1.771563152706256e-8",
            "extra": "mean: 196.64903758819756 nsec\nrounds: 51267"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_long",
            "value": 2259295.936176495,
            "unit": "iter/sec",
            "range": "stddev: 8.711708797406756e-8",
            "extra": "mean: 442.6157653752601 nsec\nrounds: 187970"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_mixed",
            "value": 2633549.5382244103,
            "unit": "iter/sec",
            "range": "stddev: 5.207131980601335e-8",
            "extra": "mean: 379.71565960148547 nsec\nrounds: 189036"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short",
            "value": 5158892.684590438,
            "unit": "iter/sec",
            "range": "stddev: 9.341342359119514e-9",
            "extra": "mean: 193.84004691296195 nsec\nrounds: 50307"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short_different_wl",
            "value": 5034041.157373898,
            "unit": "iter/sec",
            "range": "stddev: 5.578687552896202e-8",
            "extra": "mean: 198.64756141995312 nsec\nrounds: 49291"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_long",
            "value": 3777237.4914514003,
            "unit": "iter/sec",
            "range": "stddev: 2.3260227740035604e-8",
            "extra": "mean: 264.74374520082023 nsec\nrounds: 195351"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_mixed",
            "value": 3463415.97315526,
            "unit": "iter/sec",
            "range": "stddev: 3.5430888819243046e-8",
            "extra": "mean: 288.732282737954 nsec\nrounds: 194175"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_short",
            "value": 4694294.318345421,
            "unit": "iter/sec",
            "range": "stddev: 2.800588836676015e-8",
            "extra": "mean: 213.02456390349687 nsec\nrounds: 47306"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_long",
            "value": 3758142.1322754673,
            "unit": "iter/sec",
            "range": "stddev: 3.053737714461175e-8",
            "extra": "mean: 266.0889250069879 nsec\nrounds: 197278"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_to_float_short",
            "value": 10026270.641630808,
            "unit": "iter/sec",
            "range": "stddev: 7.839503766996e-9",
            "extra": "mean: 99.73798192199845 nsec\nrounds: 100011"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_short",
            "value": 5863260.781002905,
            "unit": "iter/sec",
            "range": "stddev: 8.569561761508213e-9",
            "extra": "mean: 170.5535601008658 nsec\nrounds: 58959"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_long",
            "value": 4469786.416902145,
            "unit": "iter/sec",
            "range": "stddev: 1.3860647228889019e-8",
            "extra": "mean: 223.72433640643277 nsec\nrounds: 44244"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_short",
            "value": 7262488.018694278,
            "unit": "iter/sec",
            "range": "stddev: 9.055459264066343e-9",
            "extra": "mean: 137.69385882988627 nsec\nrounds: 74761"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_long",
            "value": 5856602.473928407,
            "unit": "iter/sec",
            "range": "stddev: 1.1895444341373195e-8",
            "extra": "mean: 170.74746057146555 nsec\nrounds: 58714"
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
          "id": "5b378b957c0d3df0ad420da687be8a99e48a8e9d",
          "message": "???",
          "timestamp": "2024-07-25T12:00:41+02:00",
          "tree_id": "d8dffd44b18633439e731885e1b014e2021229ef",
          "url": "https://github.com/Hampuztt/apytypes/commit/5b378b957c0d3df0ad420da687be8a99e48a8e9d"
        },
        "date": 1721901982386,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_short",
            "value": 4687578.447536396,
            "unit": "iter/sec",
            "range": "stddev: 1.2678235302459443e-8",
            "extra": "mean: 213.32976315853122 nsec\nrounds: 46318"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_long",
            "value": 2537813.4959502514,
            "unit": "iter/sec",
            "range": "stddev: 3.520396476827853e-8",
            "extra": "mean: 394.03998820084405 nsec\nrounds: 196079"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_multiplication_mixed",
            "value": 2873905.954105604,
            "unit": "iter/sec",
            "range": "stddev: 3.594263240974872e-8",
            "extra": "mean: 347.95849828403396 nsec\nrounds: 181819"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_short",
            "value": 4548437.082130994,
            "unit": "iter/sec",
            "range": "stddev: 1.192408962378072e-8",
            "extra": "mean: 219.85573988230823 nsec\nrounds: 45041"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_long",
            "value": 2228861.6156527773,
            "unit": "iter/sec",
            "range": "stddev: 3.938892455584776e-8",
            "extra": "mean: 448.65952779532785 nsec\nrounds: 197629"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_division_mixed",
            "value": 2748638.700587525,
            "unit": "iter/sec",
            "range": "stddev: 3.2542372070956884e-8",
            "extra": "mean: 363.81645932088685 nsec\nrounds: 191571"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short",
            "value": 4618432.078962138,
            "unit": "iter/sec",
            "range": "stddev: 1.3183612333901509e-8",
            "extra": "mean: 216.52369958085046 nsec\nrounds: 52560"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_short_different_wl",
            "value": 4565761.271158467,
            "unit": "iter/sec",
            "range": "stddev: 1.033206324481944e-8",
            "extra": "mean: 219.02152578950566 nsec\nrounds: 46861"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_long",
            "value": 3636311.740568793,
            "unit": "iter/sec",
            "range": "stddev: 2.519434174845247e-8",
            "extra": "mean: 275.0039246755232 nsec\nrounds: 191608"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_addition_mixed",
            "value": 3445804.1029157806,
            "unit": "iter/sec",
            "range": "stddev: 2.6615161304274595e-8",
            "extra": "mean: 290.2080240585385 nsec\nrounds: 187266"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_short",
            "value": 4654595.561140534,
            "unit": "iter/sec",
            "range": "stddev: 1.0901741594052845e-8",
            "extra": "mean: 214.84143721280086 nsec\nrounds: 46124"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_creation_long",
            "value": 4100265.546622383,
            "unit": "iter/sec",
            "range": "stddev: 2.4244665308031213e-8",
            "extra": "mean: 243.8866431037731 nsec\nrounds: 193088"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_to_float_short",
            "value": 9541686.53119187,
            "unit": "iter/sec",
            "range": "stddev: 6.946449448583217e-9",
            "extra": "mean: 104.8032752627931 nsec\nrounds: 95058"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_short",
            "value": 4666669.036734947,
            "unit": "iter/sec",
            "range": "stddev: 1.3046650151837308e-8",
            "extra": "mean: 214.28560545609653 nsec\nrounds: 45891"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_negation_long",
            "value": 4115406.9639354297,
            "unit": "iter/sec",
            "range": "stddev: 2.0261993228033105e-8",
            "extra": "mean: 242.9893346547102 nsec\nrounds: 194591"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_short",
            "value": 6841234.664822003,
            "unit": "iter/sec",
            "range": "stddev: 1.3210185601781114e-8",
            "extra": "mean: 146.17244532512296 nsec\nrounds: 65799"
          },
          {
            "name": "benchmark/ci_fixed_scalar_benchmarks.py::test_fixed_scalar_abs_long",
            "value": 5861824.27983727,
            "unit": "iter/sec",
            "range": "stddev: 1.046303689074708e-8",
            "extra": "mean: 170.5953560292926 nsec\nrounds: 56456"
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
        "date": 1717756390945,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_short",
            "value": 4682600.61556464,
            "unit": "iter/sec",
            "range": "stddev: 1.1049301099775644e-8",
            "extra": "mean: 213.5565430619836 nsec\nrounds: 47464"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_long",
            "value": 2327883.050031486,
            "unit": "iter/sec",
            "range": "stddev: 3.36334306642361e-8",
            "extra": "mean: 429.5748448301421 nsec\nrounds: 195313"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_mixed",
            "value": 2356885.384618954,
            "unit": "iter/sec",
            "range": "stddev: 3.7328655399258054e-8",
            "extra": "mean: 424.2887696304749 nsec\nrounds: 194970"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_short",
            "value": 1975916.430100592,
            "unit": "iter/sec",
            "range": "stddev: 5.131412986447075e-8",
            "extra": "mean: 506.09427846560067 nsec\nrounds: 195734"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_long",
            "value": 1958081.1462955945,
            "unit": "iter/sec",
            "range": "stddev: 3.8651141020063486e-8",
            "extra": "mean: 510.70406448264566 nsec\nrounds: 181819"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_mixed",
            "value": 1980488.7901105287,
            "unit": "iter/sec",
            "range": "stddev: 3.8978112714791744e-8",
            "extra": "mean: 504.92585718913284 nsec\nrounds: 193424"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_short",
            "value": 4801517.9185221065,
            "unit": "iter/sec",
            "range": "stddev: 9.196077448712613e-9",
            "extra": "mean: 208.26747228051568 nsec\nrounds: 49242"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_long",
            "value": 2747240.009998914,
            "unit": "iter/sec",
            "range": "stddev: 3.159041930192465e-8",
            "extra": "mean: 364.0016876430068 nsec\nrounds: 196851"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_mixed",
            "value": 2673684.1783194337,
            "unit": "iter/sec",
            "range": "stddev: 2.9382864515597063e-8",
            "extra": "mean: 374.01575253682637 nsec\nrounds: 190840"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_short",
            "value": 4757358.746946156,
            "unit": "iter/sec",
            "range": "stddev: 1.4847822929341974e-8",
            "extra": "mean: 210.2006708327708 nsec\nrounds: 48149"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_long",
            "value": 4915496.850652696,
            "unit": "iter/sec",
            "range": "stddev: 8.585729355631577e-9",
            "extra": "mean: 203.43823429921943 nsec\nrounds: 47896"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_to_float_short",
            "value": 12053176.014981283,
            "unit": "iter/sec",
            "range": "stddev: 6.090456335269443e-9",
            "extra": "mean: 82.96568462593295 nsec\nrounds: 120555"
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
          "id": "2fc5d4f27d35ab38ef3f608999740aff951f4163",
          "message": "Added python function reshape",
          "timestamp": "2024-06-07T13:04:18+02:00",
          "tree_id": "13f36411a0372e771946b3aed274f146a93d254a",
          "url": "https://github.com/Hampuztt/apytypes/commit/2fc5d4f27d35ab38ef3f608999740aff951f4163"
        },
        "date": 1717758847752,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_short",
            "value": 4473685.718413408,
            "unit": "iter/sec",
            "range": "stddev: 9.271729570105823e-9",
            "extra": "mean: 223.5293364225936 nsec\nrounds: 47259"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_long",
            "value": 2360000.414338766,
            "unit": "iter/sec",
            "range": "stddev: 4.353577451244187e-8",
            "extra": "mean: 423.7287391664316 nsec\nrounds: 190840"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_mixed",
            "value": 2382711.0364373126,
            "unit": "iter/sec",
            "range": "stddev: 4.3981864451546024e-8",
            "extra": "mean: 419.69000214780533 nsec\nrounds: 197239"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_short",
            "value": 1861418.2297375975,
            "unit": "iter/sec",
            "range": "stddev: 9.930142589202603e-8",
            "extra": "mean: 537.2247805593373 nsec\nrounds: 192308"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_long",
            "value": 1922724.5212080393,
            "unit": "iter/sec",
            "range": "stddev: 4.53155144445821e-8",
            "extra": "mean: 520.095306930213 nsec\nrounds: 193051"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_mixed",
            "value": 1929060.4311345585,
            "unit": "iter/sec",
            "range": "stddev: 4.3573531506026545e-8",
            "extra": "mean: 518.3870779059973 nsec\nrounds: 192345"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_short",
            "value": 4560492.453736433,
            "unit": "iter/sec",
            "range": "stddev: 1.0935466023065876e-8",
            "extra": "mean: 219.27456522388692 nsec\nrounds: 45805"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_long",
            "value": 2751188.286623242,
            "unit": "iter/sec",
            "range": "stddev: 3.232308456903235e-8",
            "extra": "mean: 363.4793026933417 nsec\nrounds: 193424"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_mixed",
            "value": 2637311.533192968,
            "unit": "iter/sec",
            "range": "stddev: 2.9927997641116734e-8",
            "extra": "mean: 379.17401392062527 nsec\nrounds: 186568"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_short",
            "value": 4636443.6697132,
            "unit": "iter/sec",
            "range": "stddev: 1.1938313994078338e-8",
            "extra": "mean: 215.68255137709767 nsec\nrounds: 46861"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_long",
            "value": 4869500.069546712,
            "unit": "iter/sec",
            "range": "stddev: 9.04228362584881e-9",
            "extra": "mean: 205.35989027988913 nsec\nrounds: 47394"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_to_float_short",
            "value": 11898367.467059672,
            "unit": "iter/sec",
            "range": "stddev: 5.4975948170802206e-9",
            "extra": "mean: 84.0451434003756 nsec\nrounds: 117014"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "distinct": true,
          "id": "e3cd5291d8ddcabad01184c59e4af5fb82c3b9e1",
          "message": "[pre-commit.ci] auto fixes from pre-commit.com hooks\n\nfor more information, see https://pre-commit.ci",
          "timestamp": "2024-06-07T11:18:19Z",
          "tree_id": "666f1336597adc8618da7c6e882c1290c4026d0b",
          "url": "https://github.com/Hampuztt/apytypes/commit/e3cd5291d8ddcabad01184c59e4af5fb82c3b9e1"
        },
        "date": 1717759444480,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_short",
            "value": 4697393.682670524,
            "unit": "iter/sec",
            "range": "stddev: 2.925354130885944e-8",
            "extra": "mean: 212.8840092090203 nsec\nrounds: 47351"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_long",
            "value": 2324338.7976465984,
            "unit": "iter/sec",
            "range": "stddev: 4.404721739440565e-8",
            "extra": "mean: 430.22987914347664 nsec\nrounds: 190151"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_mixed",
            "value": 2352945.002422683,
            "unit": "iter/sec",
            "range": "stddev: 4.9445031497678023e-8",
            "extra": "mean: 424.99930893853 nsec\nrounds: 191976"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_short",
            "value": 1953937.8726699688,
            "unit": "iter/sec",
            "range": "stddev: 4.8044662709561706e-8",
            "extra": "mean: 511.7869989558798 nsec\nrounds: 189754"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_long",
            "value": 1898884.3991874796,
            "unit": "iter/sec",
            "range": "stddev: 4.815683826900923e-8",
            "extra": "mean: 526.6250017261281 nsec\nrounds: 188715"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_mixed",
            "value": 1917932.1740733653,
            "unit": "iter/sec",
            "range": "stddev: 1.1599215589677647e-7",
            "extra": "mean: 521.3948717884587 nsec\nrounds: 189754"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_short",
            "value": 4802824.744102365,
            "unit": "iter/sec",
            "range": "stddev: 1.5612412373719738e-8",
            "extra": "mean: 208.21080370007002 nsec\nrounds: 47916"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_long",
            "value": 2770239.7916219668,
            "unit": "iter/sec",
            "range": "stddev: 3.7996888786858334e-8",
            "extra": "mean: 360.9795812710502 nsec\nrounds: 193051"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_mixed",
            "value": 2474080.760773932,
            "unit": "iter/sec",
            "range": "stddev: 3.811516972382966e-8",
            "extra": "mean: 404.190524357484 nsec\nrounds: 190115"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_short",
            "value": 4782196.315818955,
            "unit": "iter/sec",
            "range": "stddev: 1.4299752279615104e-8",
            "extra": "mean: 209.10893948294827 nsec\nrounds: 48665"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_long",
            "value": 4823401.276153216,
            "unit": "iter/sec",
            "range": "stddev: 1.18554683635009e-8",
            "extra": "mean: 207.32258063287907 nsec\nrounds: 48833"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_to_float_short",
            "value": 11457346.831690356,
            "unit": "iter/sec",
            "range": "stddev: 9.42888843439589e-9",
            "extra": "mean: 87.28024163797382 nsec\nrounds: 114469"
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
          "id": "a057ac4cd99529b0497ebacfc9b55e4cdfe8d62b",
          "message": "Fixed PR comments",
          "timestamp": "2024-06-11T09:36:43+02:00",
          "tree_id": "77d7ad42b50446bcad56d00f21cd2a592470cc3e",
          "url": "https://github.com/Hampuztt/apytypes/commit/a057ac4cd99529b0497ebacfc9b55e4cdfe8d62b"
        },
        "date": 1718091785387,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_short",
            "value": 4344897.580149193,
            "unit": "iter/sec",
            "range": "stddev: 1.880645495907929e-8",
            "extra": "mean: 230.15502242629202 nsec\nrounds: 199204"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_long",
            "value": 2325224.748943032,
            "unit": "iter/sec",
            "range": "stddev: 4.360875648336339e-8",
            "extra": "mean: 430.0659540350117 nsec\nrounds: 193837"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_mixed",
            "value": 2301616.055861927,
            "unit": "iter/sec",
            "range": "stddev: 4.323645616451209e-8",
            "extra": "mean: 434.4773305926134 nsec\nrounds: 190477"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_short",
            "value": 1937056.8093222857,
            "unit": "iter/sec",
            "range": "stddev: 4.180150697153533e-8",
            "extra": "mean: 516.2471204703187 nsec\nrounds: 193799"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_long",
            "value": 1945914.6835755403,
            "unit": "iter/sec",
            "range": "stddev: 4.164596060012203e-8",
            "extra": "mean: 513.8971448442654 nsec\nrounds: 194175"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_mixed",
            "value": 1913618.4929172387,
            "unit": "iter/sec",
            "range": "stddev: 4.203438371366931e-8",
            "extra": "mean: 522.570200748609 nsec\nrounds: 189790"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_short",
            "value": 4897040.763212411,
            "unit": "iter/sec",
            "range": "stddev: 1.0149189574278225e-8",
            "extra": "mean: 204.20495731059557 nsec\nrounds: 49194"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_long",
            "value": 2713106.450541383,
            "unit": "iter/sec",
            "range": "stddev: 7.912839779044736e-8",
            "extra": "mean: 368.5811884750948 nsec\nrounds: 194213"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_mixed",
            "value": 2424052.1983798924,
            "unit": "iter/sec",
            "range": "stddev: 9.556488630100938e-8",
            "extra": "mean: 412.53237065946036 nsec\nrounds: 187266"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_short",
            "value": 4791479.221323176,
            "unit": "iter/sec",
            "range": "stddev: 1.0739705294845097e-8",
            "extra": "mean: 208.7038164644475 nsec\nrounds: 48786"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_long",
            "value": 4898286.789579509,
            "unit": "iter/sec",
            "range": "stddev: 1.2488524353926479e-8",
            "extra": "mean: 204.15301164633178 nsec\nrounds: 48857"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_to_float_short",
            "value": 11794303.754172862,
            "unit": "iter/sec",
            "range": "stddev: 5.428416881674424e-9",
            "extra": "mean: 84.7866920203764 nsec\nrounds: 117014"
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
          "id": "a22640a9142febd686c0ebe7bda6f7f402899ead",
          "message": "Fixed PR comments",
          "timestamp": "2024-06-11T10:42:21+02:00",
          "tree_id": "7f5698a586451dcd2aa976302ba4959ab39e8a44",
          "url": "https://github.com/Hampuztt/apytypes/commit/a22640a9142febd686c0ebe7bda6f7f402899ead"
        },
        "date": 1718095697022,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_short",
            "value": 4715174.741844258,
            "unit": "iter/sec",
            "range": "stddev: 9.166075443124249e-9",
            "extra": "mean: 212.0812175051813 nsec\nrounds: 47351"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_long",
            "value": 2332274.714122126,
            "unit": "iter/sec",
            "range": "stddev: 3.284119134647715e-8",
            "extra": "mean: 428.7659570911156 nsec\nrounds: 191571"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_mixed",
            "value": 2330346.8574823975,
            "unit": "iter/sec",
            "range": "stddev: 3.5856707409498076e-8",
            "extra": "mean: 429.1206679336681 nsec\nrounds: 173612"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_short",
            "value": 1951042.7815435436,
            "unit": "iter/sec",
            "range": "stddev: 4.376405267612986e-8",
            "extra": "mean: 512.5464236150098 nsec\nrounds: 191939"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_long",
            "value": 1886031.6269328669,
            "unit": "iter/sec",
            "range": "stddev: 4.8669860647176165e-8",
            "extra": "mean: 530.2138022076244 nsec\nrounds: 187231"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_mixed",
            "value": 1888371.1670967992,
            "unit": "iter/sec",
            "range": "stddev: 4.621014691831539e-8",
            "extra": "mean: 529.5569099041978 nsec\nrounds: 181819"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_short",
            "value": 4903679.20397522,
            "unit": "iter/sec",
            "range": "stddev: 1.3306144045206903e-8",
            "extra": "mean: 203.928511308285 nsec\nrounds: 48855"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_long",
            "value": 2757344.781554285,
            "unit": "iter/sec",
            "range": "stddev: 2.835632516335527e-8",
            "extra": "mean: 362.66773988137373 nsec\nrounds: 196117"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_mixed",
            "value": 2590162.69675733,
            "unit": "iter/sec",
            "range": "stddev: 3.2955503238845e-8",
            "extra": "mean: 386.07613384750545 nsec\nrounds: 185840"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_short",
            "value": 4801517.380828529,
            "unit": "iter/sec",
            "range": "stddev: 9.162432838526114e-9",
            "extra": "mean: 208.26749560315662 nsec\nrounds: 48335"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_long",
            "value": 4919023.576617101,
            "unit": "iter/sec",
            "range": "stddev: 1.1980523743924995e-8",
            "extra": "mean: 203.2923779332217 nsec\nrounds: 49051"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_to_float_short",
            "value": 11648506.082026256,
            "unit": "iter/sec",
            "range": "stddev: 5.1607472024058676e-9",
            "extra": "mean: 85.84791843332711 nsec\nrounds: 114851"
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
          "id": "cfe3a4ab807b24f666b92248276995422a5d8d2b",
          "message": "Fixed PR comments",
          "timestamp": "2024-06-11T11:03:43+02:00",
          "tree_id": "03fce3daccf65032a048b92a1e2304f581ee998a",
          "url": "https://github.com/Hampuztt/apytypes/commit/cfe3a4ab807b24f666b92248276995422a5d8d2b"
        },
        "date": 1718097205190,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_short",
            "value": 4673855.719577292,
            "unit": "iter/sec",
            "range": "stddev: 1.0640357019561403e-8",
            "extra": "mean: 213.956112468603 nsec\nrounds: 47017"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_long",
            "value": 2338246.187850952,
            "unit": "iter/sec",
            "range": "stddev: 4.046630199294997e-8",
            "extra": "mean: 427.67096347500825 nsec\nrounds: 194175"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_mixed",
            "value": 2354102.7618093654,
            "unit": "iter/sec",
            "range": "stddev: 3.5901318457909036e-8",
            "extra": "mean: 424.7902921754286 nsec\nrounds: 192345"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_short",
            "value": 1971131.5062137,
            "unit": "iter/sec",
            "range": "stddev: 1.0223914967094072e-7",
            "extra": "mean: 507.32282287996406 nsec\nrounds: 191939"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_long",
            "value": 1919523.617174719,
            "unit": "iter/sec",
            "range": "stddev: 4.816325373232159e-8",
            "extra": "mean: 520.9625925164557 nsec\nrounds: 189430"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_mixed",
            "value": 1942003.722632886,
            "unit": "iter/sec",
            "range": "stddev: 4.1327225945608483e-8",
            "extra": "mean: 514.932071625631 nsec\nrounds: 186916"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_short",
            "value": 4832781.026605822,
            "unit": "iter/sec",
            "range": "stddev: 1.3017003599366836e-8",
            "extra": "mean: 206.92019656895195 nsec\nrounds: 48736"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_long",
            "value": 2745934.5959047116,
            "unit": "iter/sec",
            "range": "stddev: 3.371563746259027e-8",
            "extra": "mean: 364.17473361944553 nsec\nrounds: 193051"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_mixed",
            "value": 2641491.919756028,
            "unit": "iter/sec",
            "range": "stddev: 3.3583490617891187e-8",
            "extra": "mean: 378.57393865976695 nsec\nrounds: 186220"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_short",
            "value": 4726093.8765920345,
            "unit": "iter/sec",
            "range": "stddev: 1.6713264300868545e-8",
            "extra": "mean: 211.59122652072804 nsec\nrounds: 48128"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_long",
            "value": 4876323.734306226,
            "unit": "iter/sec",
            "range": "stddev: 4.17834280442685e-8",
            "extra": "mean: 205.07252071158703 nsec\nrounds: 49609"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_to_float_short",
            "value": 11611455.86475012,
            "unit": "iter/sec",
            "range": "stddev: 4.953823589470027e-9",
            "extra": "mean: 86.12184480980399 nsec\nrounds: 115394"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "Hampuz.Togeretz@outlook.com",
            "name": "Hampuz Togeretz",
            "username": "Hampuztt"
          },
          "distinct": true,
          "id": "70876b11c448a01bc3ef46340cbb325c971af061",
          "message": "Fixed issues after PR feedback",
          "timestamp": "2024-06-11T11:32:54+02:00",
          "tree_id": "03fce3daccf65032a048b92a1e2304f581ee998a",
          "url": "https://github.com/Hampuztt/apytypes/commit/70876b11c448a01bc3ef46340cbb325c971af061"
        },
        "date": 1718098840459,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_short",
            "value": 4684891.545540115,
            "unit": "iter/sec",
            "range": "stddev: 1.2270305956029878e-8",
            "extra": "mean: 213.45211309144568 nsec\nrounds: 47873"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_long",
            "value": 2345224.513129855,
            "unit": "iter/sec",
            "range": "stddev: 3.765435336725294e-8",
            "extra": "mean: 426.3984085111882 nsec\nrounds: 195351"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_mixed",
            "value": 2374337.434056232,
            "unit": "iter/sec",
            "range": "stddev: 4.499891350649082e-8",
            "extra": "mean: 421.1701275718117 nsec\nrounds: 196890"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_short",
            "value": 1944547.386686137,
            "unit": "iter/sec",
            "range": "stddev: 5.057637227270343e-8",
            "extra": "mean: 514.2584885545615 nsec\nrounds: 195351"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_long",
            "value": 1894056.2185041397,
            "unit": "iter/sec",
            "range": "stddev: 5.1013292768027996e-8",
            "extra": "mean: 527.9674331892994 nsec\nrounds: 189036"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_mixed",
            "value": 1932974.7699844327,
            "unit": "iter/sec",
            "range": "stddev: 5.07854640010521e-8",
            "extra": "mean: 517.3373266574018 nsec\nrounds: 188715"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_short",
            "value": 4815437.264851148,
            "unit": "iter/sec",
            "range": "stddev: 9.773912878047807e-9",
            "extra": "mean: 207.66546109933088 nsec\nrounds: 48265"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_long",
            "value": 2608555.53241245,
            "unit": "iter/sec",
            "range": "stddev: 3.737718284114658e-8",
            "extra": "mean: 383.35392425979705 nsec\nrounds: 188680"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_mixed",
            "value": 2661893.940014004,
            "unit": "iter/sec",
            "range": "stddev: 3.4120113878356216e-8",
            "extra": "mean: 375.6723680713456 nsec\nrounds: 198453"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_short",
            "value": 4833295.595513731,
            "unit": "iter/sec",
            "range": "stddev: 1.4107603092301548e-8",
            "extra": "mean: 206.89816714877816 nsec\nrounds: 48149"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_long",
            "value": 4927946.063872453,
            "unit": "iter/sec",
            "range": "stddev: 1.559632832599834e-8",
            "extra": "mean: 202.92429889426583 nsec\nrounds: 49315"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_to_float_short",
            "value": 11506784.398864826,
            "unit": "iter/sec",
            "range": "stddev: 7.499937875082866e-9",
            "extra": "mean: 86.90525218312814 nsec\nrounds: 116483"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "committer": {
            "email": "oscar.gustafsson@gmail.com",
            "name": "Oscar Gustafsson",
            "username": "oscargus"
          },
          "distinct": true,
          "id": "f641ae2028e8826b716e091b0bd3b11b5f268c4a",
          "message": "Revert to windows-2019 runner",
          "timestamp": "2024-06-17T11:43:20+02:00",
          "tree_id": "fac6acd92ccb2a79e2d80b644995c79d0a226864",
          "url": "https://github.com/Hampuztt/apytypes/commit/f641ae2028e8826b716e091b0bd3b11b5f268c4a"
        },
        "date": 1719234891241,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_short",
            "value": 4596355.884502537,
            "unit": "iter/sec",
            "range": "stddev: 9.591330333803104e-9",
            "extra": "mean: 217.5636580647502 nsec\nrounds: 45494"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_long",
            "value": 2353878.4940785416,
            "unit": "iter/sec",
            "range": "stddev: 4.1498602511195526e-8",
            "extra": "mean: 424.8307644237429 nsec\nrounds: 194213"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_mixed",
            "value": 2385080.2765636784,
            "unit": "iter/sec",
            "range": "stddev: 3.939101714827375e-8",
            "extra": "mean: 419.27309945338544 nsec\nrounds: 195351"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_short",
            "value": 1828012.8199308773,
            "unit": "iter/sec",
            "range": "stddev: 8.345933145471876e-8",
            "extra": "mean: 547.0421154036735 nsec\nrounds: 184163"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_long",
            "value": 1806771.0013043385,
            "unit": "iter/sec",
            "range": "stddev: 5.077787838739961e-8",
            "extra": "mean: 553.473572067578 nsec\nrounds: 180506"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_mixed",
            "value": 1807240.0953239715,
            "unit": "iter/sec",
            "range": "stddev: 4.7944758539304004e-8",
            "extra": "mean: 553.329910390673 nsec\nrounds: 179212"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_short",
            "value": 4985133.286523819,
            "unit": "iter/sec",
            "range": "stddev: 1.0192115307433609e-8",
            "extra": "mean: 200.59644196534802 nsec\nrounds: 47574"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_long",
            "value": 2550248.298852386,
            "unit": "iter/sec",
            "range": "stddev: 3.3965062913277786e-8",
            "extra": "mean: 392.11868132597533 nsec\nrounds: 191205"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_mixed",
            "value": 2613665.763420705,
            "unit": "iter/sec",
            "range": "stddev: 3.742444796146272e-8",
            "extra": "mean: 382.6043918833779 nsec\nrounds: 198453"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_short",
            "value": 4725752.737360874,
            "unit": "iter/sec",
            "range": "stddev: 1.0357801794345677e-8",
            "extra": "mean: 211.60650071558115 nsec\nrounds: 47464"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_long",
            "value": 4721843.996678083,
            "unit": "iter/sec",
            "range": "stddev: 1.0121627125387007e-8",
            "extra": "mean: 211.7816684972168 nsec\nrounds: 47282"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_to_float_short",
            "value": 11861713.411378546,
            "unit": "iter/sec",
            "range": "stddev: 5.522954521731889e-9",
            "extra": "mean: 84.30485253845805 nsec\nrounds: 118540"
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
          "distinct": false,
          "id": "584a386e9a9f51906f5f1cd1e8b2f15fad2d5a98",
          "message": "Fixed array creation functions added",
          "timestamp": "2024-07-19T14:37:22+02:00",
          "tree_id": "126caef7a7ff5598216c2dc25fd9290e02087778",
          "url": "https://github.com/Hampuztt/apytypes/commit/584a386e9a9f51906f5f1cd1e8b2f15fad2d5a98"
        },
        "date": 1721393899149,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_short",
            "value": 4014041.465019907,
            "unit": "iter/sec",
            "range": "stddev: 2.1726544015447747e-8",
            "extra": "mean: 249.1254783276402 nsec\nrounds: 199601"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_long",
            "value": 2338943.4076354373,
            "unit": "iter/sec",
            "range": "stddev: 5.005426666947629e-8",
            "extra": "mean: 427.543478279761 nsec\nrounds: 194553"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_mixed",
            "value": 2384334.9314448144,
            "unit": "iter/sec",
            "range": "stddev: 3.820669921570462e-8",
            "extra": "mean: 419.4041645793502 nsec\nrounds: 195734"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_short",
            "value": 1887013.4621877158,
            "unit": "iter/sec",
            "range": "stddev: 4.1996686352235694e-8",
            "extra": "mean: 529.9379257425311 nsec\nrounds: 187970"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_long",
            "value": 1860940.3483441265,
            "unit": "iter/sec",
            "range": "stddev: 4.402821047609175e-8",
            "extra": "mean: 537.3627375481353 nsec\nrounds: 189754"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_mixed",
            "value": 1865441.496431542,
            "unit": "iter/sec",
            "range": "stddev: 4.9756295572875776e-8",
            "extra": "mean: 536.0661279986209 nsec\nrounds: 184843"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_short",
            "value": 4468875.248569544,
            "unit": "iter/sec",
            "range": "stddev: 1.3236043397134409e-8",
            "extra": "mean: 223.76995202989687 nsec\nrounds: 44821"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_long",
            "value": 2758881.664084451,
            "unit": "iter/sec",
            "range": "stddev: 2.990405216149273e-8",
            "extra": "mean: 362.4657095728997 nsec\nrounds: 191205"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_mixed",
            "value": 2582117.1140880794,
            "unit": "iter/sec",
            "range": "stddev: 3.296235231251336e-8",
            "extra": "mean: 387.27910308333367 nsec\nrounds: 198060"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_short",
            "value": 5074652.847971925,
            "unit": "iter/sec",
            "range": "stddev: 8.548773961801483e-9",
            "extra": "mean: 197.05781458519425 nsec\nrounds: 52013"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_long",
            "value": 5205355.494037005,
            "unit": "iter/sec",
            "range": "stddev: 8.505627026997936e-9",
            "extra": "mean: 192.1098378670791 nsec\nrounds: 51932"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_to_float_short",
            "value": 11785088.930600943,
            "unit": "iter/sec",
            "range": "stddev: 5.450532003344301e-9",
            "extra": "mean: 84.85298718483949 nsec\nrounds: 114469"
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
          "id": "a0b2cb1dba92c32a9046a4124127f1303a475984",
          "message": "action test1",
          "timestamp": "2024-07-25T10:16:51+02:00",
          "tree_id": "6fd6ae51efd883baf1a3d196423eeeac5abc5c07",
          "url": "https://github.com/Hampuztt/apytypes/commit/a0b2cb1dba92c32a9046a4124127f1303a475984"
        },
        "date": 1721895870320,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_short",
            "value": 4207245.6076528365,
            "unit": "iter/sec",
            "range": "stddev: 1.4280075953387195e-8",
            "extra": "mean: 237.68519674274773 nsec\nrounds: 43229"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_long",
            "value": 2330226.1202302957,
            "unit": "iter/sec",
            "range": "stddev: 3.919611449376372e-8",
            "extra": "mean: 429.14290219233266 nsec\nrounds: 191571"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_mixed",
            "value": 2341550.2677627695,
            "unit": "iter/sec",
            "range": "stddev: 3.7745094786738484e-8",
            "extra": "mean: 427.0674918952027 nsec\nrounds: 197278"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_short",
            "value": 1989868.4985903455,
            "unit": "iter/sec",
            "range": "stddev: 4.4795052920285146e-8",
            "extra": "mean: 502.5457715966199 nsec\nrounds: 194175"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_long",
            "value": 1941348.2588392724,
            "unit": "iter/sec",
            "range": "stddev: 4.6215382876906426e-8",
            "extra": "mean: 515.1059298335216 nsec\nrounds: 195351"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_mixed",
            "value": 1954487.557670055,
            "unit": "iter/sec",
            "range": "stddev: 5.837090798105974e-8",
            "extra": "mean: 511.6430626920644 nsec\nrounds: 194175"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_short",
            "value": 4678807.517263461,
            "unit": "iter/sec",
            "range": "stddev: 1.1776656655407557e-8",
            "extra": "mean: 213.72967285155534 nsec\nrounds: 47104"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_long",
            "value": 2824462.261312019,
            "unit": "iter/sec",
            "range": "stddev: 3.305443215952172e-8",
            "extra": "mean: 354.04969423652636 nsec\nrounds: 189036"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_mixed",
            "value": 2643330.0050259093,
            "unit": "iter/sec",
            "range": "stddev: 1.1038960046048156e-7",
            "extra": "mean: 378.31069071915084 nsec\nrounds: 189430"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_short",
            "value": 5011814.326659655,
            "unit": "iter/sec",
            "range": "stddev: 1.0185509515063603e-8",
            "extra": "mean: 199.5285409278685 nsec\nrounds: 49415"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_long",
            "value": 5023271.855997639,
            "unit": "iter/sec",
            "range": "stddev: 1.4009747254979813e-8",
            "extra": "mean: 199.0734383220795 nsec\nrounds: 50641"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_to_float_short",
            "value": 12048874.918612463,
            "unit": "iter/sec",
            "range": "stddev: 6.205959234829286e-9",
            "extra": "mean: 82.99530095174795 nsec\nrounds: 121714"
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
          "id": "6b6361b2208e1a7afac6d83b5912fea2b28b3e8d",
          "message": "Documentation, refactoring and small fixes for array creation",
          "timestamp": "2024-07-23T13:15:32+02:00",
          "tree_id": "4628b1dce0e75ee2d511d4b5dbb912daf5e1cfd7",
          "url": "https://github.com/Hampuztt/apytypes/commit/6b6361b2208e1a7afac6d83b5912fea2b28b3e8d"
        },
        "date": 1721896223554,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_short",
            "value": 4220933.001623721,
            "unit": "iter/sec",
            "range": "stddev: 2.7854776943787974e-8",
            "extra": "mean: 236.9144451274785 nsec\nrounds: 43893"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_long",
            "value": 2358875.8396773357,
            "unit": "iter/sec",
            "range": "stddev: 5.840447132675319e-8",
            "extra": "mean: 423.93074835886085 nsec\nrounds: 152161"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_mixed",
            "value": 2359643.2687690975,
            "unit": "iter/sec",
            "range": "stddev: 3.7800283831640197e-8",
            "extra": "mean: 423.79287294627284 nsec\nrounds: 198060"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_short",
            "value": 1747649.5079160284,
            "unit": "iter/sec",
            "range": "stddev: 5.115294674658699e-8",
            "extra": "mean: 572.1971113031996 nsec\nrounds: 177589"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_long",
            "value": 1838027.0113059273,
            "unit": "iter/sec",
            "range": "stddev: 4.535895039973554e-8",
            "extra": "mean: 544.0616453669504 nsec\nrounds: 176057"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_mixed",
            "value": 1700620.3260770633,
            "unit": "iter/sec",
            "range": "stddev: 8.464831880169264e-8",
            "extra": "mean: 588.0207267113833 nsec\nrounds: 168039"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_short",
            "value": 4712221.307067634,
            "unit": "iter/sec",
            "range": "stddev: 9.830939651712504e-9",
            "extra": "mean: 212.21414166186153 nsec\nrounds: 46124"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_long",
            "value": 2837996.7377600176,
            "unit": "iter/sec",
            "range": "stddev: 2.9599933638211505e-8",
            "extra": "mean: 352.36122251128836 nsec\nrounds: 188680"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_mixed",
            "value": 2707637.419234982,
            "unit": "iter/sec",
            "range": "stddev: 3.513995763666416e-8",
            "extra": "mean: 369.32566853154793 nsec\nrounds: 196464"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_short",
            "value": 4881617.730510528,
            "unit": "iter/sec",
            "range": "stddev: 1.3702562889501336e-8",
            "extra": "mean: 204.85012452938216 nsec\nrounds: 50590"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_long",
            "value": 4936740.015196218,
            "unit": "iter/sec",
            "range": "stddev: 1.3522387570128428e-8",
            "extra": "mean: 202.56282423660195 nsec\nrounds: 50927"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_to_float_short",
            "value": 11751958.205304055,
            "unit": "iter/sec",
            "range": "stddev: 6.126394210256661e-9",
            "extra": "mean: 85.09220187223903 nsec\nrounds: 115261"
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
          "id": "4f1da16b6bcf8ecbce7ef24d76ddf8ab8faf193b",
          "message": "action_test",
          "timestamp": "2024-07-25T10:36:47+02:00",
          "tree_id": "b0fd6656c4074abf31a870b3e0f6a823416d4ee7",
          "url": "https://github.com/Hampuztt/apytypes/commit/4f1da16b6bcf8ecbce7ef24d76ddf8ab8faf193b"
        },
        "date": 1721896982661,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_short",
            "value": 4325928.137076969,
            "unit": "iter/sec",
            "range": "stddev: 9.549933880459777e-9",
            "extra": "mean: 231.1642654045583 nsec\nrounds: 43895"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_long",
            "value": 2343835.63328657,
            "unit": "iter/sec",
            "range": "stddev: 3.6970152591119804e-8",
            "extra": "mean: 426.65107817213595 nsec\nrounds: 198020"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_mixed",
            "value": 2364013.4222107134,
            "unit": "iter/sec",
            "range": "stddev: 3.9391604553878966e-8",
            "extra": "mean: 423.00944258804213 nsec\nrounds: 199204"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_short",
            "value": 1999817.7130185578,
            "unit": "iter/sec",
            "range": "stddev: 5.4187849877240574e-8",
            "extra": "mean: 500.0455758994424 nsec\nrounds: 194175"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_long",
            "value": 1950850.8439817247,
            "unit": "iter/sec",
            "range": "stddev: 4.599786267674821e-8",
            "extra": "mean: 512.5968513097471 nsec\nrounds: 194175"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_mixed",
            "value": 1988692.1566762358,
            "unit": "iter/sec",
            "range": "stddev: 4.593856720762854e-8",
            "extra": "mean: 502.84303512880336 nsec\nrounds: 193837"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_short",
            "value": 4557861.107337309,
            "unit": "iter/sec",
            "range": "stddev: 1.7373748660611252e-8",
            "extra": "mean: 219.40115691330266 nsec\nrounds: 46166"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_long",
            "value": 2567039.2537173554,
            "unit": "iter/sec",
            "range": "stddev: 3.1600468043544814e-8",
            "extra": "mean: 389.5538405000523 nsec\nrounds: 198808"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_mixed",
            "value": 2731758.19862761,
            "unit": "iter/sec",
            "range": "stddev: 3.194914095849348e-8",
            "extra": "mean: 366.0646101482986 nsec\nrounds: 188680"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_short",
            "value": 4873441.649873631,
            "unit": "iter/sec",
            "range": "stddev: 7.88388459940267e-9",
            "extra": "mean: 205.193797698566 nsec\nrounds: 50133"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_long",
            "value": 4918760.056540835,
            "unit": "iter/sec",
            "range": "stddev: 8.52317647833324e-9",
            "extra": "mean: 203.30326921931697 nsec\nrounds: 51055"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_to_float_short",
            "value": 11901545.451512154,
            "unit": "iter/sec",
            "range": "stddev: 5.517227910619878e-9",
            "extra": "mean: 84.02270142761924 nsec\nrounds: 118963"
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
          "id": "a0d073bc4f2cebd7d2de08b5be35c6ab01ffcef4",
          "message": "test2",
          "timestamp": "2024-07-25T10:59:40+02:00",
          "tree_id": "d4162afe90455c19c9b5d1c7be18ea0021cc6c4c",
          "url": "https://github.com/Hampuztt/apytypes/commit/a0d073bc4f2cebd7d2de08b5be35c6ab01ffcef4"
        },
        "date": 1721898327194,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_short",
            "value": 4297416.194085714,
            "unit": "iter/sec",
            "range": "stddev: 1.2263393645646159e-8",
            "extra": "mean: 232.69796427361527 nsec\nrounds: 43665"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_long",
            "value": 2344954.8161585117,
            "unit": "iter/sec",
            "range": "stddev: 5.475272983234974e-8",
            "extra": "mean: 426.44744926821113 nsec\nrounds: 198413"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_mixed",
            "value": 2367984.145289885,
            "unit": "iter/sec",
            "range": "stddev: 3.59935803437543e-8",
            "extra": "mean: 422.3001247660702 nsec\nrounds: 196503"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_short",
            "value": 1986144.957106001,
            "unit": "iter/sec",
            "range": "stddev: 4.714088077492862e-8",
            "extra": "mean: 503.4879233873679 nsec\nrounds: 194591"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_long",
            "value": 1989602.6145767886,
            "unit": "iter/sec",
            "range": "stddev: 4.328063157728397e-8",
            "extra": "mean: 502.61293017677554 nsec\nrounds: 193462"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_mixed",
            "value": 1984134.0157494452,
            "unit": "iter/sec",
            "range": "stddev: 4.7292684075882655e-8",
            "extra": "mean: 503.99821386172044 nsec\nrounds: 194553"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_short",
            "value": 4737036.260983816,
            "unit": "iter/sec",
            "range": "stddev: 1.3901336182959672e-8",
            "extra": "mean: 211.10245835282615 nsec\nrounds: 47239"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_long",
            "value": 2871101.5513155987,
            "unit": "iter/sec",
            "range": "stddev: 3.379986512057487e-8",
            "extra": "mean: 348.2983733339991 nsec\nrounds: 198847"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_mixed",
            "value": 2436829.7470305255,
            "unit": "iter/sec",
            "range": "stddev: 3.667663981359163e-8",
            "extra": "mean: 410.3692517782907 nsec\nrounds: 199243"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_short",
            "value": 5040397.227166231,
            "unit": "iter/sec",
            "range": "stddev: 1.356913195101782e-8",
            "extra": "mean: 198.39706176536686 nsec\nrounds: 50772"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_long",
            "value": 5098520.948918756,
            "unit": "iter/sec",
            "range": "stddev: 1.0020903656332093e-8",
            "extra": "mean: 196.1353125776766 nsec\nrounds: 51267"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_to_float_short",
            "value": 11903215.87479299,
            "unit": "iter/sec",
            "range": "stddev: 1.0957456183915397e-8",
            "extra": "mean: 84.01091020434083 nsec\nrounds: 119962"
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
          "id": "f38485da80484f3dc95751737b9b5af8433c98e5",
          "message": "test abc",
          "timestamp": "2024-07-25T11:10:31+02:00",
          "tree_id": "c187e5c4c086a7d726999d44c6aaabe0ee8e8548",
          "url": "https://github.com/Hampuztt/apytypes/commit/f38485da80484f3dc95751737b9b5af8433c98e5"
        },
        "date": 1721898975098,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_short",
            "value": 4470473.723842517,
            "unit": "iter/sec",
            "range": "stddev: 1.712630681190908e-8",
            "extra": "mean: 223.68994021072447 nsec\nrounds: 45494"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_long",
            "value": 2388620.1437782655,
            "unit": "iter/sec",
            "range": "stddev: 4.954808786442468e-8",
            "extra": "mean: 418.6517486276504 nsec\nrounds: 198060"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_mixed",
            "value": 2375309.239330142,
            "unit": "iter/sec",
            "range": "stddev: 3.724787130757877e-8",
            "extra": "mean: 420.9978151232266 nsec\nrounds: 196464"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_short",
            "value": 1911136.451631724,
            "unit": "iter/sec",
            "range": "stddev: 9.849033196117318e-8",
            "extra": "mean: 523.2488758958535 nsec\nrounds: 193799"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_long",
            "value": 1902789.4105219254,
            "unit": "iter/sec",
            "range": "stddev: 5.0274506062149236e-8",
            "extra": "mean: 525.5442323097421 nsec\nrounds: 189036"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_mixed",
            "value": 1969462.5619197884,
            "unit": "iter/sec",
            "range": "stddev: 3.8995855874687955e-8",
            "extra": "mean: 507.7527338348017 nsec\nrounds: 196464"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_short",
            "value": 4551699.871206194,
            "unit": "iter/sec",
            "range": "stddev: 1.3501847244503708e-8",
            "extra": "mean: 219.69814097935435 nsec\nrounds: 47084"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_long",
            "value": 2918137.7337958906,
            "unit": "iter/sec",
            "range": "stddev: 3.012031343606226e-8",
            "extra": "mean: 342.6843045887063 nsec\nrounds: 189754"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_mixed",
            "value": 2740032.1434040163,
            "unit": "iter/sec",
            "range": "stddev: 2.73046241520565e-8",
            "extra": "mean: 364.9592222511902 nsec\nrounds: 188324"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_short",
            "value": 4845160.434164815,
            "unit": "iter/sec",
            "range": "stddev: 1.1965981090521005e-8",
            "extra": "mean: 206.39151449944146 nsec\nrounds: 48478"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_long",
            "value": 4892134.402119455,
            "unit": "iter/sec",
            "range": "stddev: 1.2861074275319618e-8",
            "extra": "mean: 204.40975611110784 nsec\nrounds: 49121"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_to_float_short",
            "value": 12179160.159290142,
            "unit": "iter/sec",
            "range": "stddev: 5.857704696063717e-9",
            "extra": "mean: 82.10746774994652 nsec\nrounds: 120541"
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
          "id": "a0adff6ed7e6ec17ad26d5a4119ad9c4f0976e55",
          "message": "abc",
          "timestamp": "2024-07-25T11:26:55+02:00",
          "tree_id": "d8f780b8f5bf2940b961012634d20dd791e2d9fd",
          "url": "https://github.com/Hampuztt/apytypes/commit/a0adff6ed7e6ec17ad26d5a4119ad9c4f0976e55"
        },
        "date": 1721899968203,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_short",
            "value": 4522481.604031531,
            "unit": "iter/sec",
            "range": "stddev: 8.746644767752334e-9",
            "extra": "mean: 221.117538456873 nsec\nrounds: 44659"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_long",
            "value": 2381140.728930092,
            "unit": "iter/sec",
            "range": "stddev: 3.459359479071879e-8",
            "extra": "mean: 419.9667780447801 nsec\nrounds: 195734"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_multiplication_mixed",
            "value": 2409931.7267582514,
            "unit": "iter/sec",
            "range": "stddev: 3.416049995323937e-8",
            "extra": "mean: 414.94951450146056 nsec\nrounds: 198453"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_short",
            "value": 1936806.342399319,
            "unit": "iter/sec",
            "range": "stddev: 4.665601227503262e-8",
            "extra": "mean: 516.3138813152732 nsec\nrounds: 193051"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_long",
            "value": 1923904.5331617713,
            "unit": "iter/sec",
            "range": "stddev: 4.320669619125269e-8",
            "extra": "mean: 519.7763104994411 nsec\nrounds: 189430"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_division_mixed",
            "value": 1932989.3675340526,
            "unit": "iter/sec",
            "range": "stddev: 4.2425951227276515e-8",
            "extra": "mean: 517.3334198293315 nsec\nrounds: 192308"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_short",
            "value": 4864232.375495872,
            "unit": "iter/sec",
            "range": "stddev: 2.1083382686501093e-8",
            "extra": "mean: 205.58228365847523 nsec\nrounds: 48361"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_long",
            "value": 2900000.8994104397,
            "unit": "iter/sec",
            "range": "stddev: 3.404343185123815e-8",
            "extra": "mean: 344.8274792616065 nsec\nrounds: 187266"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_addition_mixed",
            "value": 2664651.8981840666,
            "unit": "iter/sec",
            "range": "stddev: 2.9022486893530162e-8",
            "extra": "mean: 375.28354104396703 nsec\nrounds: 193424"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_short",
            "value": 4829754.0930215195,
            "unit": "iter/sec",
            "range": "stddev: 1.2846721058626839e-8",
            "extra": "mean: 207.0498788840731 nsec\nrounds: 48384"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_creation_long",
            "value": 4879942.000856978,
            "unit": "iter/sec",
            "range": "stddev: 1.2675096039428249e-8",
            "extra": "mean: 204.9204682810547 nsec\nrounds: 48667"
          },
          {
            "name": "benchmark/ci_float_scalar_benchmarks.py::test_float_scalar_to_float_short",
            "value": 11806081.786552444,
            "unit": "iter/sec",
            "range": "stddev: 4.816922368632406e-9",
            "extra": "mean: 84.7021067682424 nsec\nrounds: 117151"
          }
        ]
      }
    ]
  }
}