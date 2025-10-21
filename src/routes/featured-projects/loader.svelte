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
					let timeoutId: number;

					// This cleanup function is important to prevent
					// late events from firing after we've already moved on.
					const cleanup = () => {
						clearTimeout(timeoutId);
						video.oncanplaythrough = null;
						video.onerror = null;
					};

					video.oncanplaythrough = () => {
						cleanup();
						on_asset_load();
						resolve();
					};

					video.onerror = () => {
						cleanup();
						console.error('Failed to load video:', url);
						on_asset_load();
						resolve();
					};

					// Start a 5-second timer.
					timeoutId = setTimeout(() => {
						cleanup();
						console.warn(`Video timed out (5s): ${url}. Skipping.`);
						// We MUST call on_asset_load() to advance the progress bar.
						on_asset_load();
						// And we MUST resolve() to unblock the worker.
						resolve();
					}, 5000); // 5 seconds

					video.src = url;
				}
			});
		};
		async function load_with_pool(urls: string[], pool_limit: number) {
			const queue = [...urls];

			const run_task = async () => {
				if (queue.length === 0) return; // Worker is done

				const url = queue.shift()!; // Get the next URL
				await load_asset(url); // Wait for it to load (or time out)
				await run_task(); // Process the next item in the queue
			};

			// Create and start a number of workers
			const workers = Array(pool_limit)
				.fill(null)
				.map(() => run_task());

			// Wait for all worker chains to complete
			await Promise.all(workers);
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
