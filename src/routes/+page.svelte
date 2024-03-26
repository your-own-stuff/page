<script>
	import HeroGizmo from './HeroGizmo.svelte';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import {
		faAward,
		faRetweet,
		faFingerprint,
		faUserFriends,
		faRocket,
		faPaperPlane,
		faFaceLaughWink
	} from '@fortawesome/free-solid-svg-icons';
	import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
	import Logo from '$lib/reusables/logo.svelte';
	import { base } from '$app/paths';
</script>

<header
	class="relative flex content-center items-center justify-center pb-32 pt-16"
	style="min-height: 60vh;"
>
	<div class="header absolute top-0 h-full w-full bg-base-100 bg-cover bg-center">
		<span id="blackOverlay" class="absolute left-1/4 h-full w-1/2 bg-black opacity-70"></span>
	</div>
	<div class="container relative mx-auto">
		<div class="flex flex-wrap items-center">
			<div class="ml-auto mr-auto flex w-1/2 flex-col items-center justify-center px-4">
				<!-- <h1 class="text-5xl font-semibold text-white">Your story starts with us.</h1> -->
				<HeroGizmo></HeroGizmo>
				<p class="mt-4 text-center text-lg text-gray-300">
					Finally, your crap stays where you left it!<br />No more lost files, no more lost
					memories.
				</p>
			</div>
		</div>
	</div>
	<div
		class="pointer-events-none absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden"
		style="height: 70px;"
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
			<polygon class="fill-current text-base-100" points="2560 0 2560 100 0 100"></polygon>
		</svg>
	</div>
</header>
<section class="base-100 -mt-24 pb-20">
	<div class="container mx-auto px-4">
		<div class="flex flex-wrap">
			<div class="w-full px-4 pt-6 text-center md:w-4/12 lg:pt-12">
				<div
					class="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg rounded-tr-3xl bg-white shadow-lg"
				>
					<div class="flex-auto px-4 py-5">
						<div
							class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-400 p-3 text-center text-white shadow-lg"
						>
							<FontAwesomeIcon icon={faAward} />
						</div>
						<h6 class="text-xl font-semibold text-primary">Super Cozy</h6>
						<p class="mb-4 mt-2 text-gray-600">
							Ever felt lost in the sea of cloud services, where everything feels a bit too
							corporate and cold? That's exactly why we create <span class="on-brand"
								>your-own-stuff</span
							>.
						</p>
						<p class="mb-2 mt-2 text-gray-600">
							Think of it as your personal corner on the internet - a place where all your precious
							moments and important files aren't just stored, but are <span class="text-secondary"
								>treasured</span
							>.
						</p>
					</div>
				</div>
			</div>
			<div class="w-full px-4 text-center md:w-4/12">
				<div
					class="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg rounded-tr-3xl bg-white shadow-lg"
				>
					<div class="flex-auto px-4 py-5">
						<div
							class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-400 p-3 text-center text-white shadow-lg"
						>
							<FontAwesomeIcon icon={faRetweet} />
						</div>
						<h6 class="text-xl font-semibold text-primary">Stupid Simple</h6>
						<p class="mb-4 mt-2 text-gray-600">Here, you call the shots.</p>
						<p class="mb-2 mt-2 text-gray-600">
							It's like having the muscle of those big cloud giants but with the heart and soul
							tailored just for you.
						</p>
						<p class="mb-2 mt-2 text-gray-600">
							Photos, documents, that secret recipe collection? They all have a <span
								class="text-secondary">home</span
							> here. And the best part? You don't need to be a tech whiz to get around.
						</p>
					</div>
				</div>
			</div>
			<div class="w-full px-4 pt-6 text-center md:w-4/12">
				<div
					class="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg rounded-tr-3xl bg-white shadow-lg"
				>
					<div class="flex-auto px-4 py-5">
						<div
							class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-400 p-3 text-center text-white shadow-lg"
						>
							<FontAwesomeIcon icon={faFingerprint} />
						</div>
						<h6 class="text-xl font-semibold text-primary">No Takesies</h6>
						<p class="mb-4 mt-2 text-gray-600">
							We're all about keeping things secure, simple, and oh-so-private.
						</p>
						<p class="mb-2 mt-2 text-gray-600">
							With <span class="on-brand">your-own-stuff</span>, it's not just about saving bits and
							bytes; it's about creating a space on the web that's truly yours.
						</p>
						<p class="mb-2 mt-2 text-gray-600">
							So, let's kickstart this adventure, shall we? Your personal cloud, <span
								class="text-secondary">your way</span
							>, starts now.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-32 flex flex-wrap items-center">
			<div class="ml-auto mr-auto w-full px-4 md:w-5/12">
				<div
					class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 p-3 text-center text-gray-600 shadow-lg"
				>
					<FontAwesomeIcon icon={faUserFriends} class="text-xl" />
				</div>
				<h3 class="mb-2 text-3xl font-semibold leading-normal">Free like Beer, Fair like Use</h3>
				<p class="base-content mb-4 mt-4 text-lg font-light leading-relaxed">
					Host it on your own? Sure, thing! We're all about giving you the freedom to choose where
					to keep <span class="on-brand">your-own-stuff</span>.
				</p>
				<p class="base-content mb-4 mt-4 text-lg font-light leading-relaxed">
					It won't cost you a dime, and neither an arm or a leg.<br />
					<em>What would we even do with them...?</em>
				</p>
				<p class="base-content mb-4 mt-0 text-lg font-light leading-relaxed">
					But when it get's complicated with all the ip's and ups and DNS-this DNS-that, we are
					here.<br />With <span class="on-brand">our-cloud</span>, our companion service, you can
					access your-own-staff from wherever you are!
				</p>
			</div>
			<div class="ml-auto mr-auto w-full px-4 md:w-4/12">
				<div class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-l">
					<div class="mockup-phone border-primary">
						<div class="camera"></div>
						<div class="display">
							<div class="artboard artboard-demo phone-1">
								<Logo class="mb-10 h-40 fill-primary"></Logo>
								<FontAwesomeIcon icon={faFaceLaughWink} size="6x" class="text-primary"
								></FontAwesomeIcon>
								<br /><span class="text-3xl font-black">Hi.</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="relative bg-base-300 py-20">
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
			<polygon class="fill-current text-base-300" points="2560 0 2560 100 0 100"></polygon>
		</svg>
	</div>
	<div class="container mx-auto px-4">
		<div class="flex flex-wrap items-center">
			<div class="ml-auto mr-auto w-full px-4 md:w-4/12">
				<img
					alt="a person proudly selling their bagels"
					class="max-w-full rounded-lg shadow-lg"
					src="{base}/img/bagle_man.webp"
				/>
			</div>
			<div class="ml-auto mr-auto w-full px-4 md:w-5/12">
				<div class="md:pr-12">
					<div
						class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-pink-300 p-3 text-center text-pink-600 shadow-lg"
					>
						<FontAwesomeIcon icon={faRocket} class="text-xl" />
					</div>
					<h3 class="text-3xl font-semibold">A growing project</h3>
					<p class="text-content mt-4 text-lg leading-relaxed">
						Might as well join while you are here!
					</p>
					<ul class="mt-6 list-none">
						<li class="py-2">
							<div class="flex items-center">
								<div>
									<span
										class="mr-3 inline-block rounded-full bg-pink-200 px-2 py-1 text-xs font-semibold uppercase text-pink-600"
									>
										<FontAwesomeIcon icon={faFingerprint}></FontAwesomeIcon>
									</span>
								</div>
								<div>
									<h4 class="text-content">Carefully crafted stuff</h4>
								</div>
							</div>
						</li>
						<li class="py-2">
							<div class="flex items-center">
								<div>
									<span
										class="mr-3 inline-block rounded-full bg-pink-200 px-2 py-1 text-xs font-semibold uppercase text-pink-600"
										><FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
										<i class="fab fa-html5"></i>
									</span>
								</div>
								<div>
									<h4 class="text-content">Amazing cozy look</h4>
								</div>
							</div>
						</li>
						<li class="py-2">
							<div class="flex items-center">
								<div>
									<span
										class="mr-3 inline-block rounded-full bg-pink-200 px-2 py-1 text-xs font-semibold uppercase text-pink-600"
										><FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
									</span>
								</div>
								<div>
									<h4 class="text-content">Fail Forward</h4>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- <section class="bg-base-300 pb-48 pt-20">
	<div class="container mx-auto px-4">
		<div class="mb-24 flex flex-wrap justify-center text-center">
			<div class="w-full px-4 lg:w-6/12">
				<h2 class="text-4xl font-semibold">Here are our heroes</h2>
				<p class="m-4 text-lg leading-relaxed text-gray-600">
					According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead
					scentist, puts the potentially record maximum.
				</p>
			</div>
		</div>
		<div class="flex flex-wrap">
			<div class="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
				<div class="px-6">
					<img
						alt="..."
						src="/img/ryan.webp"
						class="mx-auto max-w-full rounded-full shadow-lg"
						style="max-width: 120px;"
					/>
					<div class="pt-6 text-center">
						<h5 class="text-xl font-bold">Ryan Tompson</h5>
						<p class="mt-1 text-sm font-semibold uppercase text-gray-500">Web Developer</p>
						<div class="mt-6">
							<button
								class="mb-1 mr-1 h-8 w-8 rounded-full bg-blue-400 text-white outline-none focus:outline-none"
								type="button"
							>
								<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
							</button><button
								class="mb-1 mr-1 h-8 w-8 rounded-full bg-blue-600 text-white outline-none focus:outline-none"
								type="button"
								><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
							</button><button
								class="mb-1 mr-1 h-8 w-8 rounded-full bg-pink-500 text-white outline-none focus:outline-none"
								type="button"
								><FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
				<div class="px-6">
					<img
						alt="..."
						src="/img/romina.webp"
						class="mx-auto max-w-full rounded-full shadow-lg"
						style="max-width: 120px;"
					/>
					<div class="pt-6 text-center">
						<h5 class="text-xl font-bold">Romina Hadid</h5>
						<p class="mt-1 text-sm font-semibold uppercase text-gray-500">Marketing Specialist</p>
						<div class="mt-6">
							<button
								class="mb-1 mr-1 h-8 w-8 rounded-full bg-red-600 text-white outline-none focus:outline-none"
								type="button"
								><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
							</button><button
								class="mb-1 mr-1 h-8 w-8 rounded-full bg-blue-600 text-white outline-none focus:outline-none"
								type="button"
								><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
				<div class="px-6">
					<img
						alt="..."
						src="/img/alexa.webp"
						class="mx-auto max-w-full rounded-full shadow-lg"
						style="max-width: 120px;"
					/>
					<div class="pt-6 text-center">
						<h5 class="text-xl font-bold">Alexa Smith</h5>
						<p class="mt-1 text-sm font-semibold uppercase text-gray-500">UI/UX Designer</p>
						<div class="mt-6">
							<button
								class="mb-1 mr-1 h-8 w-8 rounded-full bg-red-600 text-white outline-none focus:outline-none"
								type="button"
								><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
							</button><button
								class="mb-1 mr-1 h-8 w-8 rounded-full bg-blue-400 text-white outline-none focus:outline-none"
								type="button"
								><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
							</button><button
								class="mb-1 mr-1 h-8 w-8 rounded-full bg-gray-800 text-white outline-none focus:outline-none"
								type="button"
								><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
				<div class="px-6">
					<img
						alt="..."
						src="/img/jenna.webp"
						class="mx-auto max-w-full rounded-full shadow-lg"
						style="max-width: 120px;"
					/>
					<div class="pt-6 text-center">
						<h5 class="text-xl font-bold">Jenna Kardi</h5>
						<p class="mt-1 text-sm font-semibold uppercase text-gray-500">Founder and CEO</p>
						<div class="mt-6">
							<button
								class="mb-1 mr-1 h-8 w-8 rounded-full bg-pink-500 text-white outline-none focus:outline-none"
								type="button"
								><FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon>
							</button><button
								class="mb-1 mr-1 h-8 w-8 rounded-full bg-red-600 text-white outline-none focus:outline-none"
								type="button"
								><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
							</button><button
								class="mb-1 mr-1 h-8 w-8 rounded-full bg-blue-400 text-white outline-none focus:outline-none"
								type="button"
								><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
							</button><button
								class="mb-1 mr-1 h-8 w-8 rounded-full bg-gray-800 text-white outline-none focus:outline-none"
								type="button"
								><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section> -->
<!-- <section class="relative block bg-gray-900 pb-20">
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
	<div class="container mx-auto px-4 lg:pb-64 lg:pt-24">
		<div class="flex flex-wrap justify-center text-center">
			<div class="w-full px-4 lg:w-6/12">
				<h2 class="text-4xl font-semibold text-white">Build something</h2>
				<p class="mb-4 mt-4 text-lg leading-relaxed text-gray-500">
					Put the potentially record low maximum sea ice extent tihs year down to low ice. According
					to the National Oceanic and Atmospheric Administration, Ted, Scambos.
				</p>
			</div>
		</div>
		<div class="mt-12 flex flex-wrap justify-center">
			<div class="w-full px-4 text-center lg:w-3/12">
				<div
					class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-gray-900 shadow-lg"
				>
					<FontAwesomeIcon icon={faAward} class="text-xl"></FontAwesomeIcon>
				</div>
				<h6 class="mt-5 text-xl font-semibold text-white">Excelent Services</h6>
				<p class="mb-4 mt-2 text-gray-500">
					Some quick example text to build on the card title and make up the bulk of the card's
					content.
				</p>
			</div>
			<div class="w-full px-4 text-center lg:w-3/12">
				<div
					class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-gray-900 shadow-lg"
				>
					<FontAwesomeIcon icon={faPoll} class="text-xl"></FontAwesomeIcon>
				</div>
				<h5 class="mt-5 text-xl font-semibold text-white">Grow your market</h5>
				<p class="mb-4 mt-2 text-gray-500">
					Some quick example text to build on the card title and make up the bulk of the card's
					content.
				</p>
			</div>
			<div class="w-full px-4 text-center lg:w-3/12">
				<div
					class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-gray-900 shadow-lg"
				>
					<FontAwesomeIcon icon={faLightbulb} class="text-xl"></FontAwesomeIcon>
				</div>
				<h5 class="mt-5 text-xl font-semibold text-white">Launch time</h5>
				<p class="mb-4 mt-2 text-gray-500">
					Some quick example text to build on the card title and make up the bulk of the card's
					content.
				</p>
			</div>
		</div>
	</div>
</section>
<section class="relative block bg-gray-900 py-24 lg:pt-0">
	<div class="container mx-auto px-4">
		<div class="-mt-48 flex flex-wrap justify-center lg:-mt-64">
			<div class="w-full px-4 lg:w-6/12">
				{#if formEnabled}
					<InfoForm></InfoForm>
				{/if}
			</div>
		</div>
	</div>
</section> -->

<style lang="postcss">
	.header {
		background-image: url('/img/landscape_people.webp');
	}

	.on-brand {
		color: var(--fallback-a, oklch(var(--p)));
		font-weight: 600;
		text-wrap: nowrap;
	}
</style>
