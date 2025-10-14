<script lang="ts">
	import Hls from 'hls.js';
	import { onMount } from 'svelte';

	const { data } = $props();

	const project = $derived(data.project);
	const src = $derived(`https://stream.mux.com/${project.video_playback_id}.m3u8`);

	let hls: Hls | null = null;

	let video: HTMLVideoElement | null = null;

	let mounted = $state(false);
	onMount(() => {
		mounted = true;

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

<div class="h- fixed inset-0 z-100 mx-4 grid h-svh grid-rows-[auto_1fr_auto] bg-black">
	<div class="grid-8">
		<a href="/featured-projects">CLOSE</a>
		<div>{project.name}</div>
	</div>
	<div class="relative h-full">
		<video
			bind:this={video}
			id="video"
			autoplay
			controls
			muted
			loop
			playsinline
			preload="auto"
			class={[
				'absolute top-0 left-0 h-full w-full object-contain opacity-0',
				mounted && 'opacity-100',
				'transition duration-300 ease-in'
			]}
		>
		</video>
	</div>
	<div>as</div>
</div>
