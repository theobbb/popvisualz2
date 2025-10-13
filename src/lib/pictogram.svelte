<script lang="ts">
	const { src, size, offset }: { src: string; size: number; offset: [number, number] } = $props();
</script>

<div
	class="absolute"
	style="width: {size}em; height: {size}em; transform: translate({offset[0] -
		size / 2}em,{offset[1] - size / 2}em)"
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
