<script lang="ts">
	import { partners } from '$lib/data';
	import IconArrow from '$lib/icons/icon-arrow.svelte';
	import IconMtl from '$lib/icons/icon-mtl.svelte';
	import Pictogram from '$lib/pictogram.svelte';
	import ChaosFooter from './chaos-footer.svelte';
	import Reel from './reel.svelte';

	const cx = {
		picto: 'absolute top-0 left-0 size-[26vw] md:size-50'
	};
</script>

<svelte:head>
	<title>PopVisualz - Videographer</title>
	<meta
		name="description"
		content="I'm Josh Pop (PopVisualz), a Montréal-based video director, filmmaker, editor. I handle the entire visual process—from shooting and directing to the final edit. Check out the latest work."
	/>
</svelte:head>

<Reel />

<div class="pointer-events-none fixed inset-0">
	<div
		class="absolute top-0 left-0 h-24 w-full bg-gradient-to-t from-transparent to-black/40"
	></div>
	<div
		class="rotate-12- absolute bottom-0 left-0 h-96 w-full bg-gradient-to-b from-transparent to-black/90"
	></div>
</div>
