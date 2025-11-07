<script lang="ts">
	import { onMount } from 'svelte';
	import { ctx } from './ctx.svelte';
	import JSZip from 'jszip';

	const { onloaded } = $props();

	const loader_progress_total = 7;
	let loader_progress = $state(0);

	let loaded_assets = 0;
	const total_assets = 18 * 6;

	function on_asset_load() {
		loaded_assets++;
		loader_progress = Math.round((loaded_assets / total_assets) * loader_progress_total);
	}

	function exit() {
		document.body.style.overflow = '';
		onloaded();
	}

	async function load() {
		const res = await fetch(`/videos/archive.zip`);
		const zip_blob = await res.arrayBuffer();
		const zip = await JSZip.loadAsync(zip_blob);

		const file_promises = Object.values(zip.files)
			.filter((zipEntry) => !zipEntry.dir)
			.map(async (zipEntry) => {
				const blob = await zipEntry.async('blob');
				on_asset_load();
				const blob_url = URL.createObjectURL(blob);
				return [zipEntry.name.replace('.mp4', ''), blob_url];
			});
		const url_pairs = await Promise.all(file_promises);
		ctx.blob_urls = new Map(url_pairs);

		exit();
	}

	onMount(() => {
		document.body.style.overflow = 'hidden';
		load();

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
