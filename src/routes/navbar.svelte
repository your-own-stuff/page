<script lang="ts">
	import Logo from '$lib/reusables/logo.svelte';
	import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
	import { faArrowAltCircleDown, faBars, faFileAlt } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	export let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<nav class="absolute top-0 z-50 flex w-full flex-wrap items-center justify-between px-2 py-3">
	<div
		class="container mx-auto flex flex-wrap items-center justify-between bg-primary bg-opacity-50 px-4 text-primary-content"
	>
		<div class="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
			<a
				class="logobacking mr-4 inline-block whitespace-nowrap p-2 text-sm font-bold uppercase leading-relaxed"
				href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
			>
				<Logo class="inline-block h-10 w-10"></Logo>
				<span class="inline-block">your-own-stuff</span></a
			>
			<button
				class="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
				type="button"
				on:click={toggleNavbar}
			>
				<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
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
						class="flex items-center px-3 py-4 text-xs font-bold uppercase"
						href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing"
					>
						<FontAwesomeIcon icon={faFileAlt} class="leading-lg mr-2 text-lg"></FontAwesomeIcon>
						<span>Docs</span></a
					>
				</li>
			</ul>
			<ul class="flex list-none flex-col lg:ml-auto lg:flex-row">
				<li class="flex items-center">
					<a class="flex items-center px-3 py-4 text-xs font-bold uppercase" href="#pablo"
						><FontAwesomeIcon icon={faFacebook} class="leading-lg text-lg "></FontAwesomeIcon>
						<span class="ml-2 inline-block lg:hidden">Share</span></a
					>
				</li>
				<li class="flex items-center">
					<a class="flex items-center px-3 py-4 text-xs font-bold uppercase" href="#pablo"
						><FontAwesomeIcon icon={faTwitter} class="leading-lg text-lg"></FontAwesomeIcon>
						<span class="ml-2 inline-block lg:hidden">Tweet</span></a
					>
				</li>
				<li class="flex items-center">
					<a class="flex items-center px-3 py-4 text-xs font-bold uppercase" href="#pablo"
						><FontAwesomeIcon icon={faGithub} class="leading-lg text-lg"></FontAwesomeIcon>
						<span class="ml-2 inline-block lg:hidden">Star</span></a
					>
				</li>
				<li class="flex items-center">
					<button
						class="mb-3 ml-3 rounded bg-white px-4 py-2 text-xs font-bold uppercase shadow outline-none hover:shadow-md focus:outline-none lg:mb-0 lg:mr-1"
						type="button"
						style="transition: all 0.15s ease 0s;"
						><FontAwesomeIcon icon={faArrowAltCircleDown}></FontAwesomeIcon>
						<span> Download</span>
					</button>
				</li>
			</ul>
		</div>
	</div>
</nav>

<style>
	.logobacking {
		box-shadow: 1px 1px 108px -5px var(--tw-shadow-color);
		-webkit-box-shadow: 1px 1px 108px -5px var(--tw-shadow-color);
		-moz-box-shadow: 1px 1px 108px -5px var(--tw-shadow-color);
	}
</style>
