window.BENCHMARK_DATA = {
  "lastUpdate": 1718098765511,
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
      }
    ]
  }
}