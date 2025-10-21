<script lang="ts">
	import { projects } from '$lib/data';
	import { onMount } from 'svelte';
	import { chars } from './data';
	import { ctx } from './ctx.svelte';

	const { onloaded } = $props();

	const loader_progress_total = 7;
	let loader_progress = $state(0);

	let loaded_assets = 0;
	let total_assets = 0;

	function on_asset_load() {
		loaded_assets++;
		loader_progress = Math.round((loaded_assets / total_assets) * loader_progress_total);
	}

	function exit() {
		document.body.style.overflow = '';
		onloaded();
		console.log('end');
	}

	onMount(() => {
		document.body.style.overflow = 'hidden';

		const asset_urls: string[] = [];

		// 1. Collect all asset URLs
		projects.forEach((project, project_i) => {
			// Add the project thumbnail image
			asset_urls.push(`/images/thumbnails/${project.slug}.webp`);

			// Add all 18 videos for the project
			for (let i = 1; i <= chars[project_i].length; i++) {
				asset_urls.push(`/videos/snapshots/${project.slug}_${i}.mp4`);
			}
		});

		total_assets = asset_urls.length;

		// 2. Create a loading promise for a single asset
		const load_asset = (url: string) => {
			return new Promise<void>((resolve, reject) => {
				if (url.endsWith('.webp')) {
					const img = new Image();
					img.onload = () => {
						on_asset_load();
						resolve();
					};
					img.onerror = reject;
					img.src = url;
				} else if (url.endsWith('.mp4')) {
					const video = document.createElement('video');
					video.oncanplaythrough = () => {
						on_asset_load();
						resolve();
					};
					video.onerror = reject;
					video.src = url;
				}
			});
		};

		// 3. Load all assets concurrently
		Promise.all(asset_urls.map(load_asset))
			.then(() => {
				// All assets are loaded, update state and start the animation loop
				exit();
			})
			.catch((error) => {
				console.error('Failed to load assets:', error);
				// Handle error, maybe show a message
				exit();
			});

		return exit;
	});
</script>

<div
	class={[
		'pointer-events-none fixed inset-0 z-20 flex items-center justify-center',
		ctx.loaded && 'opacity-0',
		'transition duration-400 ease-in'
	]}
>
	<div class="relative uppercase">
		<div>Loading</div>
		<div class="absolute bottom-0 left-0 w-full">
			<div class="-mb-2 grid translate-y-full grid-cols-7 gap-0.5">
				{#each { length: 7 } as bar, i}
					<div class={['h-4 bg-current opacity-0', loader_progress >= i && 'opacity-100']}></div>
				{/each}
			</div>
		</div>
	</div>
</div>
