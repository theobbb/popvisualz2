<script lang="ts">
	import { onMount } from 'svelte';
	import Hls from 'hls.js';

	const autoplay = false;

	const src = 'https://stream.mux.com/yBbPMzMQNcsoGafylO01lGeXOOGwQB7CEpvRCVaaXCVY.m3u8';

	let hls: Hls | null = null;

	let video: HTMLVideoElement | null = null;

	let mounted = $state(false);
	onMount(() => {
		mounted = true;
		if (!autoplay) return;

		if (!video) return;

		if (Hls.isSupported()) {
			hls = new Hls();
			hls.loadSource(src);
			hls.attachMedia(video);

			hls.on(Hls.Events.MANIFEST_PARSED, () => {
				if (!video) return;
				video.play();
			});
		} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
			// Native HLS support (e.g., Safari/iOS)
			video.src = src;

			video.play();
		} else {
			console.error('HLS is not supported in this browser.');
		}

		return () => {
			// Cleanup on component destruction
			if (hls) {
				hls.destroy();
			}
		};
	});
</script>

<div class="pointer-events-none fixed inset-0 -z-1">
	<video
		bind:this={video}
		id="video"
		autoplay
		muted
		loop
		playsinline
		preload="auto"
		class={[
			'absolute top-0 left-0 h-full w-full object-cover opacity-0',
			mounted && 'opacity-100',
			'transition duration-500 ease-in'
		]}
	>
	</video>
</div>
