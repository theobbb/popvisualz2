<script lang="ts">
	import { onMount } from 'svelte';
	import Hls from 'hls.js';

	const autoplay = true;

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
			'transition duration-300 ease-in'
		]}
	>
	</video>
	<!-- <mux-player
		playback-id="yBbPMzMQNcsoGafylO01lGeXOOGwQB7CEpvRCVaaXCVY"
		metadata-video-title="PopVisualz - Reel"
	></mux-player> -->
</div>

<!-- <div class="relative -mx-1.5 mt-12 w-full" style="height: calc(100svh - 16rem);">
	<video
		autoplay
		muted
		loop
		playsinline
		preload="auto"
		class={[
			'absolute top-0 left-0 h-full w-full object-cover opacity-0',
			mounted && 'opacity-100',
			'transition duration-300 ease-in'
		]}
	>
		<source src="/videos/reel-small-2.mp4" type="video/mp4" />
	</video>
</div> -->

<!-- <div class="grid-8">
	<div class="col-span-5 mt-20 text-4xl">
		Director, Filmmaker, Editor <br />
		of many things
	</div>
	<Contact />
</div> -->

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
