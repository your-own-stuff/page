<script lang="ts">
	import Logo from '$lib/reusables/logo.svelte';

	export let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<nav class="absolute top-0 z-50 flex w-full flex-wrap items-center justify-between px-2 py-3">
	<div class="container mx-auto flex flex-wrap items-center justify-between px-4">
		<div class="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
			<a
				class="mr-4 inline-block whitespace-nowrap py-2 text-sm font-bold uppercase leading-relaxed text-white"
				href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
			>
				<Logo class="inline-block h-10 w-10"></Logo>
				<span class="inline-block">your-own-stuff</span></a
			><button
				class="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
				type="button"
				on:click={toggleNavbar}
			>
				<i class="fas fa-bars text-white"></i>
			</button>
		</div>
		<div
			class="flex-grow items-center bg-white lg:flex lg:bg-transparent lg:shadow-none"
			class:hidden={!showMenu}
			class:block={showMenu}
		>
			<ul class="mr-auto flex list-none flex-col lg:flex-row">
				<li class="flex items-center">
					<a
						class="flex items-center px-3 py-4 text-xs font-bold uppercase text-gray-800 lg:py-2 lg:text-white lg:hover:text-gray-300"
						href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing"
						><i class="far fa-file-alt leading-lg mr-2 text-lg text-gray-500 lg:text-gray-300"></i>
						Docs</a
					>
				</li>
			</ul>
			<ul class="flex list-none flex-col lg:ml-auto lg:flex-row">
				<li class="flex items-center">
					<a
						class="flex items-center px-3 py-4 text-xs font-bold uppercase text-gray-800 lg:py-2 lg:text-white lg:hover:text-gray-300"
						href="#pablo"
						><i class="fab fa-facebook leading-lg text-lg text-gray-500 lg:text-gray-300"></i><span
							class="ml-2 inline-block lg:hidden">Share</span
						></a
					>
				</li>
				<li class="flex items-center">
					<a
						class="flex items-center px-3 py-4 text-xs font-bold uppercase text-gray-800 lg:py-2 lg:text-white lg:hover:text-gray-300"
						href="#pablo"
						><i class="fab fa-twitter leading-lg text-lg text-gray-500 lg:text-gray-300"></i><span
							class="ml-2 inline-block lg:hidden">Tweet</span
						></a
					>
				</li>
				<li class="flex items-center">
					<a
						class="flex items-center px-3 py-4 text-xs font-bold uppercase text-gray-800 lg:py-2 lg:text-white lg:hover:text-gray-300"
						href="#pablo"
						><i class="fab fa-github leading-lg text-lg text-gray-500 lg:text-gray-300"></i><span
							class="ml-2 inline-block lg:hidden">Star</span
						></a
					>
				</li>
				<li class="flex items-center">
					<button
						class="mb-3 ml-3 rounded bg-white px-4 py-2 text-xs font-bold uppercase text-gray-800 shadow outline-none hover:shadow-md focus:outline-none active:bg-gray-100 lg:mb-0 lg:mr-1"
						type="button"
						style="transition: all 0.15s ease 0s;"
					>
						<i class="fas fa-arrow-alt-circle-down"></i> Download
					</button>
				</li>
			</ul>
		</div>
	</div>
</nav>
