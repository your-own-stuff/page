<script lang="ts">
	import { base } from '$app/paths';
	import Logo from '$lib/reusables/logo.svelte';
	import { faBars, faFileAlt } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	export let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<nav class="sticky top-0 z-50">
	<div class="h-4 w-full bg-base-100" />
	<div
		class="container mx-auto grid grid-cols-[auto_1fr] rounded-md bg-primary bg-opacity-45 px-4 text-primary-content backdrop-blur-lg"
	>
		<a
			class="logobacking mr-4 inline-block whitespace-nowrap p-2 text-sm font-bold uppercase leading-relaxed"
			href="{base}/"
		>
			<Logo class="inline-block h-10 fill-base-content" withText={true}></Logo></a
		>
		<button
			class="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
			type="button"
			on:click={toggleNavbar}
		>
			<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
		</button>
		<div class="flex items-center justify-end gap-3">
			<a href="/docs" class="text-black">
				<FontAwesomeIcon icon={faFileAlt} class="leading-lg mr-2 text-lg"></FontAwesomeIcon>
				<span> Docs </span>
			</a>
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
