<script lang="ts">
	import { projects } from '$lib/data';
	import { onMount } from 'svelte';
	import Video from './video.svelte';
	import type { Attachment } from 'svelte/attachments';

	const dev_pause_loop = true;

	const chars = [
		'FAN______SERVICE__',
		`BURNIN’___________`,
		`HOLDING__ME_DOWN__`,
		`CHROME____________`,
		`UNDER THERUG______`,
		`CHASE LESSTARS___ `
	];

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
		if (!video.src) {
			video.src = '/videos/snapshots/' + video.id + '.mp4';
		}

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

<div class="relative my-32">
	{#each projects as project, project_i}
		<a
			class="grid-8 my-8"
			href="featured-projects/{project.slug}"
			aria-label="View project: {project.name} by {project.artist}"
		>
			<div
				class="col-span-4 flex gap-6 sm:col-span-2 sm:max-lg:justify-end lg:col-span-2 lg:ml-1.5"
			>
				<div>
					<div class="max-lg:text-white/50">{project.name}</div>
					<div class="sm:max-lg:hidden">by {project.artist}</div>
					<br />
					<div class="text-2 max-lg:hidden">{project.date}</div>
				</div>
			</div>
			<div class="col-span-3 hidden sm:block lg:hidden">
				<div>by {project.artist}</div>
			</div>
			<div class="col-span-3 text-right lg:hidden">
				<div class="text-2">{project.date}</div>
			</div>
			<div class="col-span-full grid grid-cols-4 gap-1 max-lg:-mt-6 max-lg:mb-6 lg:col-span-6">
				<div
					class="relative col-span-3 col-start-2 aspect-video w-full sm:col-span-1 sm:col-start-1"
				>
					<img
						class="absolute h-full w-full object-cover"
						alt="{project.name} by {project.artist}"
						src="/images/thumbnails/{project.slug}.webp"
					/>
				</div>

				<div
					class="col-span-full grid grid-cols-9 gap-1 text-5xl font-light sm:col-span-3 lg:text-7xl"
				>
					{#each chars[project_i].split('') as char, char_i}
						<div class="relative flex items-center justify-center">
							{#if char == '_'}
								<span class="pointer-events-none opacity-0" aria-hidden={true}>*</span>
							{:else}
								<span class="text-white/80">{char}</span>
							{/if}

							<Video src="{project.slug}_{char_i + 1}" {@attach video_handler} />
						</div>
					{/each}
				</div>
			</div>
		</a>
	{/each}
</div>
