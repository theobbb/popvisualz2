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
			asset_urls.push(`/images/thumbnails/${project.slug}.webp`);
			for (let i = 1; i <= chars[project_i].length; i++) {
				asset_urls.push(`/videos/snapshots/${project.slug}_${i}.mp4`);
			}
		});

		total_assets = asset_urls.length;

		// 2. Create a loading promise for a single asset
		const load_asset = (url: string) => {
			return new Promise<void>((resolve) => {
				if (url.endsWith('.webp')) {
					const img = new Image();
					img.onload = () => {
						on_asset_load();
						resolve();
					};
					img.onerror = () => {
						console.error('Failed to load image:', url);
						on_asset_load();
						resolve();
					};

					img.src = url;
				} else if (url.endsWith('.mp4')) {
					const video = document.createElement('video');
					video.oncanplaythrough = () => {
						on_asset_load();
						resolve();
					};
					video.onerror = () => {
						console.error('Failed to load video:', url);
						on_asset_load();
						resolve();
					};
					video.src = url;
				}
			});
		};
		// 3. Load assets using a concurrency pool instead of Promise.all
		async function load_with_pool(urls: string[], pool_limit: number) {
			const executing: Promise<void>[] = [];
			for (const url of urls) {
				const p = load_asset(url).then(() => {
					// When a promise resolves, remove it from the executing array
					executing.splice(executing.indexOf(p), 1);
				});
				executing.push(p);

				// If the pool is full, wait for one of the promises to finish
				if (executing.length >= pool_limit) {
					await Promise.race(executing);
				}
			}
			// Wait for all remaining promises to complete
			await Promise.all(executing);
		}
		load_with_pool(asset_urls, 8).then(() => {
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
