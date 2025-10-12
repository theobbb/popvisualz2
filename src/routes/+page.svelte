<script>
	import { onMount } from 'svelte';
	import Contact from './contact.svelte';

	let mounted = $state(false);
	onMount(() => {
		mounted = true;
	});
</script>

<div class="pointer-events-none fixed inset-0 -z-1">
	<video
		autoplay
		muted
		loop
		playsinline
		preload="auto"
		class={[
			'absolute top-0 left-0 h-full w-full object-cover opacity-0',
			mounted && 'opacity-20',
			'transition duration-300 ease-in'
		]}
	>
		<source
			src="https://watch.cloudflarestream.com/70df67665622329fa0bb13143a547da3"
			type="video/mp4"
		/>
	</video>
</div>

<div class="grid-8 pointer-events-none fixed inset-0 flex items-end mix-blend-difference">
	<div class="bg-dot pointer-events-auto col-span-5 mt-20 mb-6 ml-8 text-6xl">
		Director, Filmmaker, Editor <br />
		*of many things*
	</div>
	<div class="col-span-2 mb-24"><Contact /></div>
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
