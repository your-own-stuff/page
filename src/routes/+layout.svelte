<script lang="ts">
	import '../app.css';

	import Footerbar from './footerbar.svelte';
	import Navbar from './navbar.svelte';
</script>

<div>
	<Navbar></Navbar>
	<main>
		<slot />
	</main>
	<Footerbar></Footerbar>
</div>
