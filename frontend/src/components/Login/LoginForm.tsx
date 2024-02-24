import React from 'react'

const LoginForm = () => {
  return (
		<>
			<div className="flex min-h-full flex-1 flex-col  px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					{/* <img
						className="mx-auto h-10 w-auto"
						src="https://www.nationalgridus.com/"
						alt="Your Company"
					/> */}
					<svg
                        className='w-48 mx-auto '
						viewBox="0 0 700 145"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink">
						<path
							fill="#00148C"
							d="M173.647,44.8195 L173.647,52.0235 L159.439,52.0235 L159.439,99.3255 C159.439,99.3640298 159.439039,99.4024486 159.439119,99.4407561 C159.451039,104.930879 160.301729,108.146174 166.345,108.5572 C168.777,108.5572 171.216,108.4212 173.647,108.1432 L173.647,108.1505 L173.647,115.4925 C171.073,115.4925 168.639,115.7675 166.065,115.7675 C157.692889,115.7675 153.361931,113.696286 151.722183,107.803752 C151.714463,107.77583 151.706741,107.747868 151.699079,107.719821 C151.133298,105.641911 150.897311,103.093585 150.933,99.9995 L150.933,52.0235 L150.928,52.0235 L150.928,52.0092 L138.75,52.0092 L138.75,44.8195 L150.933,44.8195 L150.933,23.7485 L159.438988,23.7485 L159.25,44.8122 L159.439,44.8122 L159.439,44.8195 L173.647,44.8195 L173.647,44.8122 L159.439,44.8122 Z M436.683,17.903 L436.683,17.893 L445.204,17.893 L445.204,114.932 L445.188,114.932 L445.188,114.946 L436.683,114.946 L436.683,17.903 Z M289.0015,44.8195 L289.0015,44.8122 L297.5225,44.8122 L297.5225,44.8195 L297.5237,44.8195 L297.5237,56.9105 L297.7927,56.9105 C298.388162,55.3046788 299.208734,53.7973795 300.215417,52.4094116 C300.273854,52.3287954 300.332918,52.2485809 300.392601,52.1687724 C304.697192,46.4162758 312.224114,42.7765 320.1117,42.7765 C339.7227,42.7765 345.6717,53.1085 345.6717,69.8245 L345.6717,114.9455 L337.1547,114.9455 L337.1547,71.1805 C337.1547,67.4464616 336.78055,63.9969716 335.856424,61.0125431 C335.845456,60.9772194 335.834454,60.941953 335.823374,60.9067519 C333.737786,54.2897402 328.918166,49.9865 319.4267,49.9865 C305.8947,49.9865 297.7927,60.3125 297.5237,74.0365 L297.5237,114.9455 L297.5225,114.9455 L289.0015,114.9462 L288.9937,114.9455 L288.9937,44.8195 L289.0015,44.8195 Z M8.5215,44.8195 L8.5215,56.9105 L8.7915,56.9105 C10.014949,53.5920177 12.2070406,50.6942792 15.0177934,48.4009316 C15.0262215,48.3940474 15.0346552,48.3871686 15.0430945,48.3802953 C19.3630425,44.8658013 25.1380358,42.7765 31.1025,42.7765 C50.7135,42.7765 56.6645,53.1085 56.6645,69.8245 L56.6645,92.385 L56.6645,114.9462 L48.1415,114.9462 L48.1415,71.1805 C48.1415,59.0925 44.2195,49.9865 30.4325,49.9865 C16.9015,49.9865 8.7915,60.3125 8.5215,74.0365 L8.5215,114.9455 L0.0005,114.9462 L0.0005,44.8122 L8.5215,44.8122 L8.5215,44.8195 Z M608.3766,9.99999999e-05 L622.2906,13.9661 L608.3766,27.9401 L594.4816,13.9661 L608.3766,9.99999999e-05 Z M598.952,114.919 L598.952,42.149 L617.859,42.149 L617.859,114.919 L598.952,114.919 Z M493.0688,99.3264 C505.9228,99.3264 509.1638,88.3034 509.1638,78.3784 C509.1638,66.7044 503.4848,57.1874 492.9288,57.1874 C485.9008,57.1874 478.0508,62.3594 478.0508,79.2094 C478.0508,88.4464 481.8448,99.3264 493.0688,99.3264 Z M527.9628,42.6424 L527.9628,111.1424 C527.9628,123.6534 527.0088,144.4514 491.5838,144.4514 C476.7038,144.4514 461.0218,138.0604 460.2068,122.6994 L480.7578,122.6994 C481.5858,126.3694 483.0618,130.0284 494.0198,130.0284 C504.1588,130.0284 509.0218,125.1444 509.0218,113.4504 L509.0218,104.7594 L508.7588,104.4844 C505.6628,110.0634 500.9118,115.3544 489.5618,115.3544 C472.2548,115.3544 458.5828,103.2614 458.5828,77.9794 C458.5828,52.9704 472.6528,40.7364 488.4618,40.7364 C501.8618,40.7364 507.2668,48.6244 509.5688,53.3804 L509.8418,53.3804 L509.8418,42.6424 L527.9628,42.6424 Z M544.1919,42.6433 L562.3009,42.6433 L562.3009,55.1553 L562.5839,55.1553 C566.5059,47.8073 570.8289,40.7353 582.3299,40.7353 C583.5379,40.7353 584.7689,40.8733 585.9769,41.0073 L585.9769,60.3133 C584.3639,60.0423 582.3299,60.0423 580.5659,60.0423 C565.8339,60.0423 563.1179,69.2793 563.1179,77.3023 L563.1179,114.9493 L544.1919,114.9493 L544.1919,42.6433 Z M665.1157,101.2277 C677.1527,101.2277 681.8877,91.1637 681.8877,80.4327 C681.8877,68.8747 678.6377,57.1907 665.6587,57.1907 C653.6197,57.1907 649.5687,67.9267 649.5687,79.3397 C649.5687,87.9137 652.9347,101.2277 665.1157,101.2277 Z M700.0007,114.9467 L681.4817,114.9467 L681.4817,105.8447 L681.2037,105.8447 C676.6047,114.0087 668.2247,116.8527 660.3767,116.8527 C639.0297,116.8527 630.0877,97.8327 630.0877,77.9797 C630.0877,52.9687 644.1447,40.7397 659.9727,40.7397 C672.1477,40.7397 677.8247,47.4037 680.7977,52.0237 L681.0597,52.0237 L681.0597,17.3587 L700.0007,17.3587 L700.0007,114.9467 Z M117.3833,76.6203 L117.1203,76.6203 C116.0283,78.6693 112.2423,79.3373 109.9583,79.7473 C95.4743,82.3303 77.4873,82.1983 77.4873,95.9183 C77.4873,104.4863 85.0783,109.7813 93.0433,109.7813 C106.0203,109.7813 117.5203,101.4923 117.3833,87.7683 L117.3833,76.6203 Z M71.9513,66.2913 C72.7513,49.8513 84.2503,42.7753 100.2113,42.7753 C112.5193,42.7753 125.9043,46.5813 125.9043,65.3453 L125.9043,102.5773 C125.9043,105.8433 127.5193,107.7453 130.9133,107.7453 C131.8573,107.7453 132.9373,107.4763 133.6193,107.1963 L133.6193,114.4003 C131.7173,114.8133 130.3693,114.9453 128.0683,114.9453 C119.4203,114.9453 118.0683,110.0633 118.0683,102.7243 L117.7963,102.7243 C111.8363,111.8183 105.7583,116.9953 92.3723,116.9953 C79.5183,116.9953 68.9583,110.6013 68.9583,96.4683 C68.9583,76.7553 88.0443,76.0803 106.4293,73.9053 C113.4673,73.0923 117.3833,72.1353 117.3833,64.3923 C117.3833,52.8393 109.1283,49.9753 99.1253,49.9753 C88.5813,49.9753 80.7403,54.8763 80.4603,66.2913 L71.9513,66.2913 Z M189.067,31.637 L189.067,17.907 L197.593,17.907 L197.593,31.637 L189.067,31.637 Z M189.056,114.946 L189.056,44.812 L197.595,44.812 L197.595,114.946 L189.056,114.946 Z M218.9536,79.885 C218.9536,94.833 227.0676,109.784 243.4336,109.784 C259.7906,109.784 267.9076,94.833 267.9076,79.885 C267.9076,64.93 259.7906,49.974 243.4336,49.974 C227.0676,49.974 218.9536,64.93 218.9536,79.885 Z M276.4196,79.885 C276.4196,100.002 264.7966,116.994 243.4336,116.994 C222.0556,116.994 210.4316,100.002 210.4316,79.885 C210.4316,59.766 222.0556,42.773 243.4336,42.773 C264.7966,42.773 276.4196,59.766 276.4196,79.885 Z M406.3794,76.6203 L406.1134,76.6203 C405.0274,78.6693 401.2424,79.3373 398.9444,79.7473 C384.4714,82.3303 366.4954,82.1983 366.4954,95.9183 C366.4954,104.4863 374.0704,109.7813 382.0494,109.7813 C395.0254,109.7813 406.5214,101.4923 406.3794,87.7683 L406.3794,76.6203 Z M360.9414,66.2913 C361.7714,49.8513 373.2504,42.7753 389.2034,42.7753 C401.5164,42.7753 414.8984,46.5813 414.8984,65.3453 L414.8984,102.5773 C414.8984,105.8433 416.5234,107.7453 419.9054,107.7453 C420.8544,107.7453 421.9364,107.4763 422.6204,107.1963 L422.6204,114.4003 C420.7194,114.8133 419.3464,114.9453 417.0654,114.9453 C408.4014,114.9453 407.0554,110.0633 407.0554,102.7243 L406.7834,102.7243 C400.8364,111.8183 394.7564,116.9953 381.3614,116.9953 C368.5264,116.9953 357.9724,110.6013 357.9724,96.4683 C357.9724,76.7553 377.0344,76.0803 395.4294,73.9053 C402.4604,73.0923 406.3794,72.1353 406.3794,64.3923 C406.3794,52.8393 398.1234,49.9753 388.1144,49.9753 C377.5824,49.9753 369.7344,54.8763 369.4624,66.2913 L360.9414,66.2913 Z"></path>
					</svg>

					<h2 className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action="#" method="POST">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900">
								Empoloyee ID
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="text-left">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900">
									Password
								</label>
								
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
								Sign in
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						
						<a
							href="/MainDashboardPage"
							className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
							Forgot Password? Click Here
						</a>
					</p>
				</div>
			</div>
		</>
	);
}

export default LoginForm
