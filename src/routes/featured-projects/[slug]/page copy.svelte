<script lang="ts">
	import { projects } from '$lib/data.js';
	import type { Project } from '$lib/types.js';
	import Video from '../../../lib/video.svelte';

	const { data } = $props();

	const project = $derived(data.project);

	const index = $derived(projects.findIndex((p: Project) => p.slug == project.slug));
	const previous: Project | null = $derived(projects[index - 1]);
	const next: Project | null = $derived(projects[index + 1]);
</script>

<div class=" fixed inset-0 z-100 mx-3 bg-black">
	<div class="grid h-full grid-rows-[auto_1fr_auto] gap-6 py-1.5">
		<div class="grid-8">
			<div class="col-span-4 text-4xl">
				<a href="/featured-projects">CLOSE (X)</a>
			</div>
			<div class="text-right">
				({index + 1}/{projects.length})
			</div>
			<div class="text-2 text-right">
				<div>Project</div>
				<div>Artist</div>
			</div>
			<div>
				<div>{project.name}</div>
				<div>{project.artist}</div>
			</div>
			<div>
				<div>
					{#if previous}
						<a href="/featured-projects/{previous.slug}">Previous ({index}/{projects.length})</a>
					{:else}
						<div class="text-2">Previous</div>
					{/if}
				</div>

				<div>
					{#if next}
						<a href="/featured-projects/{next.slug}">Next ({index + 2}/{projects.length})</a>
					{:else}
						<div class="text-2">Next</div>
					{/if}
				</div>
			</div>
		</div>
		<div class="grid-8 relative col-span-full h-full">
			<div class="relative col-span-6 col-start-2 flex h-full items-center justify-center">
				{#key project.slug}
					<Video autoplayy playback_id={project.video_playback_id} />
				{/key}
			</div>
		</div>
		<div class="mt-3 text-right">
			<a href={project.youtube_url} target="_blank">Watch on Youtube (+)</a>
		</div>
	</div>
</div>
