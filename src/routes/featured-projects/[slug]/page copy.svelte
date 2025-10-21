<script lang="ts">
	import { dev } from '$app/environment';
	import { projects } from '$lib/data.js';
	import type { Project } from '$lib/types.js';
	import Video from '$lib/video.svelte';

	const { data } = $props();

	const project = $derived(data.project);

	const index = $derived(projects.findIndex((p: Project) => p.slug == project.slug));
	const previous: Project | null = $derived(projects[index - 1]);
	const next: Project | null = $derived(projects[index + 1]);

	const cx = {
		a: 'max-md:text-lg'
	};
</script>

<svelte:head>
	<title>{project.name} by {project.artist} - Featured Projects - PopVisualz - Videographer</title>
	<meta
		name="description"
		content="A showcase of my work. I conceive, direct, and execute precise visual projects—from concept to final frame. The selection of films and motion work by Josh Pop."
	/>
</svelte:head>

<div class=" fixed inset-0 z-200 bg-black px-1.5">
	<div class="grid h-svh grid-rows-[1fr_auto_1fr] gap-6 py-1 lg:grid-rows-[auto_1fr_auto]">
		<div class="grid-8">
			<div class="text-2 text-right max-md:col-span-2">
				<div class="justify-between xl:flex">
					<div class="max-xl:hidden">
						({index + 1}/{projects.length})
					</div>
					<div>Project</div>
				</div>
				<div>Artist</div>
			</div>

			<div class="max-md:col-span-4">
				<div>{project.name}</div>
				<div>{project.artist}</div>
			</div>
			<div class="col-span-2 max-md:col-span-6 max-md:col-start-3 max-md:mb-16">{project.date}</div>

			<div class={[cx.a, ' relative text-right max-md:col-span-3 max-md:col-start-4']}>
				{#if previous}
					<a class="peer block" href="/featured-projects/{previous.slug}"
						>Previous <br /> ({index}/{projects.length})</a
					>
					<div
						class={[
							'pointer-events-none absolute top-0 right-0 size-2.5 -translate-x-21 translate-y-1 rounded-full bg-white ',
							'opacity-0 peer-hover:opacity-100',
							'transition duration-100'
						]}
					></div>
				{:else}
					<div class="text-2 cursor-not-allowed">Previous</div>
				{/if}
			</div>

			<div class={[cx.a, 'relative max-md:col-span-2']}>
				{#if next}
					<a class="peer block" href="/featured-projects/{next.slug}"
						>Next<br /> ({index + 2}/{projects.length})
					</a>
					<div
						class={[
							'pointer-events-none absolute top-0 left-0 size-2.5 translate-x-12 translate-y-1 rounded-full bg-white ',
							'opacity-0 peer-hover:opacity-100',
							'transition duration-100'
						]}
					></div>
				{:else}
					<div class="text-2 cursor-not-allowed">Next</div>
				{/if}
			</div>
			<div
				class={[
					cx.a,
					'relative col-span-2 max-md:col-span-3 max-md:col-start-7 max-md:row-start-1 md:text-right'
				]}
			>
				<a href="/featured-projects" class="peer"> Close(x) </a>
				<div
					class={[
						'pointer-events-none absolute top-0 right-0 size-2.5 -translate-x-21 translate-y-1 rounded-full bg-white ',
						'opacity-0 peer-hover:opacity-100',
						'transition duration-100'
					]}
				></div>
			</div>
		</div>
		<div
			class="grid-8 md:aspect-auto!- relative aspect-video max-md:w-full"
			style="aspect-ratio: {project.aspect_ratio};"
		>
			<div
				class="relative col-span-full flex h-full w-full items-center justify-center xl:col-span-6 xl:col-start-2"
			>
				{#key project.slug}
					<Video autoplay={!dev} playback_id={project.video_playback_id} />
				{/key}
			</div>
		</div>
		<!-- <div
			class="grid-8 md:aspect-auto!- relative aspect-video max-md:w-full"
			style="aspect-ratio: {project.aspect_ratio};"
		>
			<div
				class="relative col-span-full flex h-full w-full items-center justify-center xl:col-span-6 xl:col-start-2"
			>
				{#key project.slug}
					<Video autoplay={!dev} playback_id={project.video_playback_id} />
				{/key}
			</div>
		</div> -->
		<div class="text-right">
			<a href={project.youtube_url} target="_blank">Watch on<br /> Youtube(+)</a>
		</div>
	</div>
</div>
