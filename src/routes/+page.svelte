<script lang="ts">
	import Reel from './reel.svelte';
	import TrustedBy from './trusted-by.svelte';
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

<!-- <TrustedBy /> -->
