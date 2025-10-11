<script>
	import { onMount } from 'svelte';

	let mounted = $state(false);
	onMount(() => {
		mounted = true;
	});
</script>

<div class="fixed inset-0 -z-1">
	<video
		autoplay
		muted
		loop
		playsinline
		preload="auto"
		class={[
			'absolute inset-0 h-full w-full object-cover opacity-0',
			mounted && 'opacity-100',
			'transition'
		]}
	>
		<source src="/videos/reel-small-2.mp4" type="video/mp4" />
	</video>
	<!-- <mux-player
		playback-id="qRls02Bvl9Piha6rp99a82jaRiJx015hZbqSpHF02vLkfU"
		autoplay
		muted
		loop
		playsinline
		stream-type="on-demand"
		max-resolution="1080p"
		style="position: fixed; top: 0; left: 0; min-width: 100vw; min-height: 100vh; object-fit: cover; z-index: -1;"
	></mux-player> -->
</div>
