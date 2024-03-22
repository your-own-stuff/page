<script>
	import { base } from '$app/paths';
</script>

<header
	class="relative flex content-center items-center justify-center pb-32 pt-16"
	style="min-height: 25vh;"
>
	<div class="header absolute top-0 h-full w-full bg-base-100 bg-cover bg-center">&nbsp;</div>
</header>
<section class="relative mt-24 bg-base-300 py-24">
	<div class="absolute bottom-auto left-0 right-0 top-0 -mt-20 w-full" style="height:80px">
		<svg
			class="absolute bottom-0 overflow-hidden"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="none"
			version="1.1"
			viewBox="0 0 2560 100"
			x="0"
			y="0"
			><polygon class="fill-current text-base-300" points="2560 0 2560 100 0 100"></polygon></svg
		>
	</div>
	<div class="container mx-auto">
		<div
			class="relative z-10 -mt-64 flex flex-wrap justify-center rounded-lg bg-white px-12 py-16 shadow-xl"
		>
			<div class="w-full text-center lg:w-8/12">
				<div class="mb-4 flex w-full items-center justify-center">
					<img src="{base}/img/people_waiting.webp" alt="People waiting" class="w-1/2 rounded-lg" />
				</div>
				<h3 class="text-3xl font-semibold text-secondary">The best is yet to come!</h3>
				<p class="mb-4 mt-4 text-lg leading-relaxed text-gray-600">
					We are hard at work bringing you all the information you'll ever need to get started with
					<span class="on-brand">your-own-stuff</span>
				</p>
				<p class="mb-4 mt-4 text-lg leading-relaxed text-gray-600">
					But it'll take a while, so hang in there!
				</p>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.on-brand {
		color: var(--fallback-a, oklch(var(--p)));
		font-weight: 600;
		text-wrap: nowrap;
	}
</style>
