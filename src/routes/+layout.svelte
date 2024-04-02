<script lang="ts">
	import '../app.css';
	import Footerbar from './footerbar.svelte';
	import Navbar from './navbar.svelte';
</script>

<svelte:head>
	<title>your-own-stuff</title>
</svelte:head>

<div class="grid h-full grid-rows-[auto_1fr_auto]">
	<Navbar />
	<main class="p-3">
		<slot />
	</main>
	<Footerbar />
</div>
