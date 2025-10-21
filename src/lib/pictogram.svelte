<script lang="ts">
	import { onMount } from 'svelte';

	const { src }: { src: string } = $props();

	let touched = $state(false);

	const fade_duration = 3000;
	let timeout: ReturnType<typeof setTimeout> | null = null;

	function ontouchstart(ev: Event) {
		touched = true;
		timeout = setTimeout(hide, fade_duration);
	}

	function hide() {
		touched = false;
	}

	onMount(() => {
		return () => {
			if (timeout) {
				clearTimeout(timeout);
				timeout = null;
			}
		};
	});
</script>

<div class="pointer-events-auto absolute aspect-square w-full">
	<img
		{ontouchstart}
		alt=""
		role="presentation"
		class="peer absolute inset-0 h-full w-full grayscale"
		style=" image-rendering: pixelated;"
		src="/pictograms/{src}-pixel.webp"
		loading="eager"
	/>
	<img
		alt="picto"
		class={[
			'pointer-events-none absolute inset-0 opacity-0 transition duration-75 ease-in peer-hover:opacity-100',
			touched && 'opacity-100!'
		]}
		src="/pictograms/{src}.webp"
		loading="lazy"
	/>
</div>
