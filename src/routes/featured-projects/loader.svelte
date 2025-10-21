<script lang="ts">
	import { projects } from '$lib/data';
	import { onMount } from 'svelte';
	import { chars } from './data';
	import { state } from './state.svelte';

	const { onloaded } = $props();

	let isLoading = true;
	let loaded_assets = 0;
	let total_assets = 0;

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
						loaded_assets++;
						resolve();
					};
					img.onerror = reject;
					img.src = url;
				} else if (url.endsWith('.mp4')) {
					const video = document.createElement('video');
					video.oncanplaythrough = () => {
						loaded_assets++;
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
				document.body.style.overflow = '';
				onloaded();
			})
			.catch((error) => {
				console.error('Failed to load assets:', error);
				// Handle error, maybe show a message
				isLoading = false;
			});
	});
</script>
