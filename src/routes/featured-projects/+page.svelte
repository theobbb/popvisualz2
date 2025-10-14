<script lang="ts">
	import { projects } from '$lib/data';
	import type { Project } from '$lib/types';
	import { onMount } from 'svelte';
	import Video from './video.svelte';

	const str = [
		'FAN SERVICE',
		`BURNIN'`,
		`HOLDING ME DOWN `,
		`CHROME`,
		`UNDER THE RUG`,
		`CHASE LES STARS `
	];

	let videos: HTMLVideoElement[] = [];

	const text_col_span = [2, 2, 2, 2, 3, 2];
	const fillers = [3, 7, 0, 8, 0, 0];

	const paths = [
		'fan-service',
		'burnin',
		'holding-me-down',
		'chrome',
		'under-the-rug',
		'chase-les-stars'
	];

	function onmouseenter(ev: MouseEvent, project: Project) {
		const video = ev.currentTarget;
		if (!video) return;
		if (!(video instanceof HTMLVideoElement)) return;

		video.play();
		video.style.opacity = '1';
	}

	function onmouseleave(ev: MouseEvent, project: Project) {
		return;
		const video = ev.currentTarget;
		if (!video) return;
		if (!(video instanceof HTMLVideoElement)) return;
		video.pause();
		video.currentTime = 0;
	}

	function loop() {}

	onMount(() => {
		videos = Array.from(document.querySelectorAll('video'));

		loop();
	});
</script>

<svelte:head>
	<title>Featured Projects - PopVisualz - Videographer</title>
	<meta
		name="description"
		content="A showcase of my work. I conceive, direct, and execute precise visual projects—from concept to final frame. The selection of films and motion work by Josh Pop."
	/>
</svelte:head>

<div class="text-5xl font-light lg:text-6xl/20">
	<div class="grid-16">
		<div class="pointer-events-none opacity-0">*</div>
	</div>
	{#each projects as project, project_i}
		<a class="grid-16 uppercase" href="featured-projects/{project.slug}">
			{#each str[project_i].split('') as char, char_i}
				<div class="relative flex justify-start lg:items-center lg:justify-center">
					<span>{char}</span>
					<Video
						src="{paths[project_i]}_{char_i + 1}"
						onmouseenter={(ev: MouseEvent) => onmouseenter(ev, project)}
						onmouseleave={(ev: MouseEvent) => {
							onmouseleave(ev, project);
						}}
					/>
				</div>
			{/each}
			<div
				class="flex items-center text-base/5 font-medium"
				style="grid-column: span {text_col_span[project_i]} / span {text_col_span[project_i]};"
			>
				<div class="mt-5- lg:ml-4">
					<div>{project.artist}</div>
					<div class="text-2">{project.date}</div>
				</div>
			</div>
			{#each { length: fillers[project_i] } as filler, filler_i}
				<div class="relative flex h-full w-full items-center justify-center">
					<Video
						src="{paths[project_i]}_{16 - fillers[project_i] + filler_i + 1}"
						onmouseenter={(ev: MouseEvent) => onmouseenter(ev, project)}
						onmouseleave={(ev: MouseEvent) => {
							onmouseleave(ev, project);
						}}
					/>
				</div>
			{/each}
		</a>
	{/each}
	<div class="grid-16">
		<div class="pointer-events-none opacity-0">*</div>
	</div>
</div>

<style>
	.grid-16 {
		display: grid;
		grid-template-columns: repeat(16, minmax(0, 1fr));
		grid-auto-rows: 5.2rem;
		gap: 0.2rem;
		margin-bottom: 0.2rem;
	}

	@media (max-width: 64rem) {
		.grid-16 {
			grid-template-columns: repeat(8, minmax(0, 1fr));
			grid-auto-rows: 3rem;
		}
	}
</style>
