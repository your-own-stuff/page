<div class="gizmo h-24 w-fit">
	<div
		class="text-bold grid h-14 grid-cols-2 gap-0 overflow-hidden text-nowrap text-5xl leading-snug"
	>
		<p class="text-secondary">your-own-</p>

		<ul class="list">
			<li>memories</li>
			<li>pictures</li>
			<li>recipies</li>
			<li class="pl-2 text-left font-black text-primary">stuff</li>
		</ul>
	</div>
</div>

<style lang="postcss">
	.list {
		animation: change 10s infinite ease-in-out;
	}

	@keyframes change {
		0%,
		12.66%,
		100% {
			transform: translate3d(0, 0, 0);
		}
		16.66%,
		29.32% {
			transform: translate3d(0, -25%, 0);
		}
		33.32%,
		45.98% {
			transform: translate3d(0, -50%, 0);
		}
		49.98%,
		62.64% {
			transform: translate3d(0, -75%, 0);
		}
		66.64%,
		79.3% {
			transform: translate3d(0, -50%, 0);
		}
		83.3%,
		95.96% {
			transform: translate3d(0, -25%, 0);
		}
	}
</style>
