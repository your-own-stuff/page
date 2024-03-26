<script lang="ts">
	import { base } from '$app/paths';

	import Logo from '$lib/reusables/logo.svelte';
	import { faArrowAltCircleDown, faBars, faFileAlt } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	export let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}

	let buttonText = 'Get Started';

	function changeText(isMouseEnter: boolean) {
		return isMouseEnter ? 'Soon!' : 'Get Started';
	}
</script>

<nav class="absolute top-0 z-50 flex w-full flex-wrap items-center justify-between px-2 py-3">
	<div
		class="container mx-auto flex flex-wrap items-center justify-between bg-primary bg-opacity-70 px-4 text-primary-content"
	>
		<div
			class="relative flex w-full min-w-36 justify-between lg:static lg:block lg:w-auto lg:justify-start"
		>
			<a
				class="logobacking mr-4 inline-block whitespace-nowrap p-2 text-sm font-bold uppercase leading-relaxed"
				href="{base}/"
			>
				<Logo class="inline-block h-10 fill-white" withText={true}></Logo></a
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
			class="items-cente flex-grow lg:flex lg:bg-transparent lg:shadow-none"
			class:hidden={!showMenu}
			class:block={showMenu}
		>
			<ul class="flex w-full list-none flex-col justify-center lg:flex-row">
				<li class="flex items-center">
					<a class="flex items-center px-3 py-4 text-xs font-bold uppercase" href="{base}/docs">
						<FontAwesomeIcon icon={faFileAlt} class="leading-lg mr-2 text-lg"></FontAwesomeIcon>
						<span>Docs</span></a
					>
				</li>
			</ul>
			<ul class="flex min-w-36 list-none flex-col lg:ml-auto lg:flex-row">
				<li class="flex items-center">
					<button
						class="mb-3 ml-3 w-32 rounded bg-base-100 px-4 py-2 text-xs font-bold uppercase shadow outline-none hover:btn-outline hover:shadow-md focus:outline-none lg:mb-0 lg:mr-1"
						type="button"
						style="transition: all 0.5s ease 0s;"
						on:mouseenter={() => (buttonText = changeText(true))}
						on:mouseleave={() => (buttonText = changeText(false))}
						><FontAwesomeIcon icon={faArrowAltCircleDown}></FontAwesomeIcon>
						<span>{buttonText}</span>
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

	.on-brand {
		color: white;
		font-weight: bolder;
		text-wrap: nowrap;
	}
</style>
