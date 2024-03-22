<script lang="ts">
	import '../app.css';

	import Footerbar from './FooterBar.svelte';
	import Navbar from './NavBar.svelte';
</script>

<div>
	<Navbar></Navbar>
	<main>
		<slot />
	</main>
	<Footerbar></Footerbar>
</div>
