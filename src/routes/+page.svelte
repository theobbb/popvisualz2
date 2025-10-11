<script>
	import { onMount } from 'svelte';

	let mounted = $state(false);
	onMount(() => {
		mounted = true;
	});
</script>

<div class="fixed inset-0">
	<mux-player
		playback-id="qRls02Bvl9Piha6rp99a82jaRiJx015hZbqSpHF02vLkfU"
		autoplay
		muted
		loop
		playsinline
		stream-type="on-demand"
		max-resolution="1080p"
		style="position: fixed; top: 0; left: 0; min-width: 100vw; min-height: 100vh; object-fit: cover; z-index: -1;"
	></mux-player>
</div>
