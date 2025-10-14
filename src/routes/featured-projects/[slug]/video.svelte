<script lang="ts">
	import { onMount } from 'svelte';
	import Hls from 'hls.js';
	import type { Project } from '$lib/types';

	const { project }: { project: Project } = $props();

	const src = $derived(`https://stream.mux.com/${project.video_playback_id}.m3u8`);

	let hls: Hls | null = null;

	let video: HTMLVideoElement | null = $state(null);

	let mounted = $state(false);

	onMount(() => {
		console.log('mount');
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

<video
	bind:this={video}
	id="video"
	controls
	playsinline
	preload="auto"
	class={[
		'absolute top-0 left-0 h-full w-full object-contain opacity-0',
		mounted && 'opacity-100',
		'transition duration-300 ease-in'
	]}
>
</video>
