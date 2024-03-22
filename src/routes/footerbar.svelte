<script lang="ts">
	let date = new Date().getFullYear();

	import { faDribbble, faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<footer class="relative bg-gray-900 pb-6 pt-8">
	<div
		class="pointer-events-none absolute bottom-auto left-0 right-0 top-0 -mt-20 w-full overflow-hidden"
		style="height: 80px;"
	>
		<svg
			class="absolute bottom-0 overflow-hidden"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="none"
			version="1.1"
			viewBox="0 0 2560 100"
			x="0"
			y="0"
		>
			<polygon class="fill-current text-gray-900" points="2560 0 2560 100 0 100"></polygon>
		</svg>
	</div>
	<div class="container mx-auto px-4">
		<div class="flex flex-wrap">
			<div class="w-full px-4 lg:w-6/12">
				<!-- <h4 class="text-3xl font-semibold">Let's keep in touch!</h4>
				<h5 class="mb-2 mt-0 text-lg text-gray-700">
					Find us on any of these platforms, we respond 1-2 business days.
				</h5>
				<div class="mt-6">
					<button
						class="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white p-3 font-normal text-blue-400 shadow-lg outline-none focus:outline-none"
						type="button"
						><FontAwesomeIcon icon={faTwitter} class="flex"></FontAwesomeIcon>
					</button><button
						class="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white p-3 font-normal text-blue-600 shadow-lg outline-none focus:outline-none"
						type="button"
						><FontAwesomeIcon icon={faFacebook} class="flex"></FontAwesomeIcon>
						<i class="fab fa-facebook-square flex"></i></button
					><button
						class="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white p-3 font-normal text-pink-400 shadow-lg outline-none focus:outline-none"
						type="button"
						><FontAwesomeIcon icon={faDribbble} class="flex"></FontAwesomeIcon>
					</button><button
						class="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white p-3 font-normal text-gray-900 shadow-lg outline-none focus:outline-none"
						type="button"
						><FontAwesomeIcon icon={faGithub} class="flex"></FontAwesomeIcon>
					</button>
				</div> -->
			</div>
			<div class="w-full px-4 lg:w-6/12">
				<div class="items-top mb-6 flex flex-wrap">
					<div class="ml-auto w-full px-4 lg:w-4/12">
						<span class="mb-2 block text-sm font-semibold uppercase text-gray-600"
							>Useful Links</span
						>
						<ul class="list-unstyled">
							<li>
								<a
									class="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
									href="https://www.creative-tim.com/presentation">About Us</a
								>
							</li>
							<li>
								<a
									class="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
									href="https://blog.creative-tim.com">Blog</a
								>
							</li>
							<li>
								<a
									class="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
									href="https://www.github.com/creativetimofficial">Github</a
								>
							</li>
							<li>
								<a
									class="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
									href="https://www.creative-tim.com/bootstrap-themes/free">Free Products</a
								>
							</li>
						</ul>
					</div>
					<div class="w-full px-4 lg:w-4/12">
						<span class="mb-2 block text-sm font-semibold uppercase text-gray-600"
							>Other Resources</span
						>
						<ul class="list-unstyled">
							<li>
								<a
									class="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-300"
									href="https://github.com/your-own-stuff/yos-server/blob/main/LICENSE"
									>AGPL-3.0 license</a
								>
							</li>
							<!-- <li>
								<a
									class="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-300"
									href="https://creative-tim.com/terms">Terms &amp; Conditions</a
								>
							</li>
							<li>
								<a
									class="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-300"
									href="https://creative-tim.com/privacy">Privacy Policy</a
								>
							</li>
							<li>
								<a
									class="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-300"
									href="https://creative-tim.com/contact-us">Contact Us</a
								>
							</li> -->
						</ul>
					</div>
				</div>
			</div>
		</div>
		<hr class="my-6 border-gray-400" />
		<div class="flex flex-wrap items-center justify-center md:justify-between">
			<div class="mx-auto w-full px-4 text-center md:w-4/12">
				<div class="py-1 text-sm font-semibold text-gray-600">
					Copyright © {date} your-own-stuff<br />
					Base Page Template by
					<a href="https://www.creative-tim.com" class="text-gray-600 hover:text-gray-300"
						>Creative Tim</a
					>.
				</div>
			</div>
		</div>
	</div>
</footer>
