<script lang="ts">
	import '../app.css';

	import { blur } from 'svelte/transition';

	import Footerbar from './FooterBar.svelte';
	import Navbar from './NavBar.svelte';

	export let data;
</script>

<svelte:head>
	<title>your-own-stuff</title>
</svelte:head>

<div>
	<Navbar></Navbar>
	{#key data.pathname}
		<main transition:blur>
			<slot />
		</main>
	{/key}
	<Footerbar></Footerbar>
</div>
