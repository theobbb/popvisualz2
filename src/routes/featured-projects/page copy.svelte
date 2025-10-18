<script lang="ts">
	import { projects } from '$lib/data';
	import { onMount } from 'svelte';
	import Video from './video.svelte';
	import type { Attachment } from 'svelte/attachments';

	const dev_pause_loop = true;

	const chars = [
		'FAN SERVICE',
		`BURNIN'`,
		`HOLDING ME DOWN `,
		`CHROME`,
		`UNDER THE RUG`,
		`CHASE LES STARS `
	];
	const text_col_span = [2, 2, 2, 2, 3, 2];
	const fillers = [3, 7, 0, 8, 0, 0];

	let video_map = new Map<string, HTMLVideoElement>();

	let n_video_playing: number = 0;

	function onmouseenter(ev: MouseEvent) {
		const video = ev.currentTarget;
		if (!video) return;
		if (!(video instanceof HTMLVideoElement)) return;

		clear_loop();
		play_video(video);
	}

	function onended(ev: Event) {
		const video = ev.currentTarget;
		if (!video) return;
		if (!(video instanceof HTMLVideoElement)) return;

		video.style.opacity = '0';
		n_video_playing--;

		if (n_video_playing > 0) return;

		if (timeout_loop != null) return;
		console.log('restart loop');
		loop();
	}

	function play_video(video: HTMLVideoElement) {
		video.play();
		video.style.opacity = '1';
		n_video_playing++;
	}

	const delay = 3000;

	let cursor: number = 0;

	const char_map = [
		[2, 4, 6, 3, 5, 4],
		[3, 1, 1, 6, 5, 8],
		[4, 7, 5, 9, 5, 1]
	];

	let timeout_loop: ReturnType<typeof setTimeout> | null = null;
	function loop() {
		if (dev_pause_loop) return;
		const sequence = char_map[cursor];

		sequence.forEach((id, i) => {
			const video_id = projects[i].slug + '_' + id;
			const video = video_map.get(video_id);
			if (!video) return;
			play_video(video);
		});

		if (cursor == char_map.length - 1) cursor = 0;
		else cursor++;
		timeout_loop = setTimeout(loop, delay);
	}

	function clear_loop() {
		if (!timeout_loop) return;
		clearTimeout(timeout_loop);
		timeout_loop = null;
	}

	onMount(() => {
		loop();

		return () => {
			clear_loop();
		};
	});

	const video_handler: Attachment = (video) => {
		if (!(video instanceof HTMLVideoElement)) return;

		video_map.set(video.id, video);

		video.addEventListener('mouseenter', onmouseenter);
		video.addEventListener('ended', onended);

		return () => {
			video.removeEventListener('mouseenter', onmouseenter);
			video.removeEventListener('ended', onended);
		};
	};
</script>

<svelte:head>
	<title>Featured Projects - PopVisualz - Videographer</title>
	<meta
		name="description"
		content="A showcase of my work. I conceive, direct, and execute precise visual projects—from concept to final frame. The selection of films and motion work by Josh Pop."
	/>
</svelte:head>

<div class=" -lg:text-6xl/20 relative text-5xl font-semibold lg:text-9xl/20 2xl:w-[80vw]">
	<div class="grid-16">
		<div class="pointer-events-none opacity-0" aria-hidden="true">*</div>
	</div>
	{#each projects as project, project_i}
		<a
			class="grid-16 uppercase"
			href="featured-projects/{project.slug}"
			aria-label="View project: {project.name} by {project.artist}"
		>
			{#each chars[project_i].split('') as char, char_i}
				<div class="relative flex justify-start lg:items-center lg:justify-center">
					<span class="text-white/80">{char}</span>
					<Video src="{projects[project_i].slug}_{char_i + 1}" {@attach video_handler} />
				</div>
			{/each}
			<div
				class="col-span-2 flex items-center text-base/5 font-medium"
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
						src="{projects[project_i].slug}_{16 - fillers[project_i] + filler_i + 1}"
						{@attach video_handler}
					/>
				</div>
			{/each}
		</a>
	{/each}
	<div class="grid-16">
		<div class="pointer-events-none opacity-0" aria-hidden="true">*</div>
	</div>
</div>

<style>
	.grid-16 {
		display: grid;
		grid-template-columns: repeat(16, minmax(0, 1fr));
		/*grid-auto-rows: 5.2rem;*/
		grid-auto-rows: 6.2rem;
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
