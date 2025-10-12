<script lang="ts">
	const {
		src,
		size,
		offset,
		track_size
	}: { src: string; size: number; offset: [number, number]; track_size: number } = $props();
</script>

<div
	class="relative inline-block"
	style="width: {track_size}rem; transform: translate({offset[0]}rem,{offset[1]}rem)"
>
	<div
		class="absolute -translate-x-1/2 -translate-y-1/2"
		style="width: {size}rem; height: {size}rem;"
	>
		<img
			alt="pixel-picto"
			class="peer opacity-90- absolute inset-0 inline-block h-full w-full grayscale"
			style=" image-rendering: pixelated;"
			src="pictograms/{src}-pixel.webp"
		/>
		<img
			alt="picto"
			class="pointer-events-none absolute inset-0 opacity-0 transition duration-75 ease-in peer-hover:opacity-100"
			src="pictograms/{src}.webp"
		/>
	</div>
</div>
