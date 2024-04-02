<script>
	import { faQuestionCircle, faStar } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<div class="container mx-auto grid h-full items-center gap-20 lg:grid-cols-2">
	<div class="space-y-5">
		<h2 class="text-6xl font-bold">Your Own Stuff</h2>
		<p class="text-xl text-base-content/70">The private-cloud solution you finally love</p>
	</div>
	<img class="rounded-md" src="https://via.placeholder.com/500" alt="placeholder" />
	<div class="col-span-full space-y-5">
		<FontAwesomeIcon icon={faQuestionCircle} class="text-6xl"></FontAwesomeIcon>
		<h2 class="text-3xl font-bold">What is it?</h2>
		<p>
			Your Own Stuff is a private-cloud solution that allows you to store your files in a secure and
			private way. You can access your files from anywhere in the world, and you can share them with
			anyone you want.
		</p>
	</div>
	<div class="col-span-full space-y-5">
		<FontAwesomeIcon icon={faStar} class="text-6xl"></FontAwesomeIcon>
		<h2 class="text-3xl font-bold">Features</h2>
		<p>
			Your Own Stuff is a private-cloud solution that allows you to store your files in a secure and
			private way. You can access your files from anywhere in the world, and you can share them with
			anyone you want.
		</p>
	</div>
</div>
