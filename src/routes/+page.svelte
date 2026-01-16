<script lang="ts">
	import { goto } from '$app/navigation';
	import IconArrow from '$lib/icons/icon-arrow.svelte';
	import Reel from './reel.svelte';

	let mouse: { x: number; y: number } = $state({ x: -1000, y: -1000 });

	function onmousemove(event: MouseEvent) {
		mouse = { x: event.clientX, y: event.clientY };
	}

	$effect(() => {
		window.addEventListener('mousemove', onmousemove);
		return () => {
			window.removeEventListener('mousemove', onmousemove);
		};
	});
</script>

<svelte:head>
	<title>PopVisualz - Director</title>
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
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div onclick={() => goto('/featured-projects')} class="fixed inset-0 cursor-pointer"></div>

<div
	class="pointer-events-none fixed top-0 left-6 mix-blend-difference"
	style="transform: translate({mouse.x}px, {mouse.y}px);"
>
	<div class="flex gap-1">
		<div class="mt-0.5"><IconArrow /></div>
		<div>Featured<br /> Projects</div>
	</div>
</div>
<!-- <TrustedBy /> -->
