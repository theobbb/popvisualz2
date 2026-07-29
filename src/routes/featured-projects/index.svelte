<script lang="ts">
	import { onMount } from 'svelte';
	import Video from './video.svelte';
	import type { Attachment } from 'svelte/attachments';
	import { char_map, chars, projects } from './data';

	const dev_pause_loop = false;
	let video_map = new Map<string, HTMLVideoElement>();
	let user_interacted: boolean = false;

	// Track which projects are currently near or inside the viewport
	let visible_projects = new Set<string>();

	// Svelte action to observe viewport intersections
	function viewport_observer(node: HTMLElement, slug: string) {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						visible_projects.add(slug);
					} else {
						visible_projects.delete(slug);
					}
				}
			},
			{ rootMargin: '400px 0px' } // Trigger 400px before scrolling into view
		);

		observer.observe(node);

		return {
			destroy() {
				observer.disconnect();
			}
		};
	}

	function onmouseenter(ev: MouseEvent) {
		const video = ev.target as HTMLVideoElement;
		if (!video) return;

		if (!user_interacted) user_interacted = true;
		clear_loop();

		if (!video.paused && video.style.opacity === '1') {
			return;
		}

		play_video(video);
	}

	function onended(ev: Event) {
		const video = ev.target as HTMLVideoElement;
		if (!video) return;

		video.style.opacity = '0';

		if (timeout_loop != null) return;
		loop();
	}

	function play_video(video: HTMLVideoElement) {
		const index = Number(video.dataset.index);
		video.currentTime = index * 3;
		video.play();
		video.style.opacity = '1';
	}

	const delay = 2000;
	let cursor: number = 0;
	let timeout_loop: ReturnType<typeof setTimeout> | null = null;

	function loop() {
		if (dev_pause_loop) return;
		if (user_interacted) return;
		const sequence = char_map[cursor];

		sequence.forEach((id, i) => {
			const project_slug = projects[i].slug;

			// SKIP entirely if the project container is not in the viewport
			if (!visible_projects.has(project_slug)) return;

			const video_id = project_slug + '_' + id;
			const video = video_map.get(video_id);
			if (!video) return;

			if (!video.paused && video.style.opacity === '1') return;

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

	const video_handler: Attachment = (video) => {
		if (!(video instanceof HTMLVideoElement)) return;

		video_map.set(video.id, video);

		const index = Number(video.dataset.index);
		const end_time = index * 3 + 2.95;

		const on_timeupdate = () => {
			if (video.currentTime >= end_time && video.style.opacity === '1') {
				video.pause();
				video.style.opacity = '0';
				video.dispatchEvent(new Event('slice_ended'));
			}
		};

		const on_pause = () => {
			if (video.style.opacity === '1') {
				video.style.opacity = '0';
				video.dispatchEvent(new Event('slice_ended'));
			}
		};

		video.addEventListener('mouseenter', onmouseenter);
		video.addEventListener('slice_ended', onended);
		video.addEventListener('timeupdate', on_timeupdate);
		video.addEventListener('pause', on_pause);

		return () => {
			video.removeEventListener('mouseenter', onmouseenter);
			video.removeEventListener('slice_ended', onended);
			video.removeEventListener('timeupdate', on_timeupdate);
			video.removeEventListener('pause', on_pause);
		};
	};

	function fade_in(node: HTMLImageElement) {
		// If the browser already has it cached and ready, reveal it instantly
		if (node.complete) {
			node.style.opacity = '1';
		} else {
			// Otherwise, wait for the network to finish fetching it
			node.addEventListener('load', () => (node.style.opacity = '1'));
		}
	}

	onMount(() => {
		loop();

		return () => {
			document.body.style.overflow = '';
			clear_loop();
		};
	});
</script>

<svelte:head>
	<title>Featured Projects - PopVisualz - Videographer</title>
	<meta
		name="description"
		content="A showcase of my work. I conceive, direct, and execute precise visual projects—from concept to final frame. The selection of films and motion work by Josh Pop."
	/>
</svelte:head>

<div class={['relative my-32']}>
	{#each projects as project, project_i}
		<a
			use:viewport_observer={project.slug}
			class="grid-8 my-8 block"
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
						use:fade_in
						class="peer absolute h-full w-full object-cover opacity-0 transition-opacity duration-100 ease-in"
						alt="{project.name} by {project.artist}"
						src="/images/thumbnails/{project.slug}.webp"
					/>

					<div
						class={[
							'pointer-events-none absolute top-0 left-0 size-2.5 -translate-x-6 translate-y-1 rounded-full bg-white max-lg:hidden',
							'opacity-0 peer-hover:opacity-100',
							'transition duration-100'
						]}
					></div>
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

							<Video i={char_i} slug={project.slug} {@attach video_handler} />
						</div>
					{/each}
				</div>
			</div>
		</a>
	{/each}
</div>
