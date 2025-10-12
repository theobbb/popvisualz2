<script lang="ts">
	import Pictogram from '$lib/pictogram.svelte';
	import Contact from './contact.svelte';
	import Reel from './reel.svelte';
</script>

<Reel />

<div class="grid-8 pointer-events-none fixed inset-0 flex items-end mix-blend-difference">
	<div
		style="font-family: 'Orbitron';"
		class="bg-dot pointer-events-auto col-span-5 mt-20 mb-6 ml-8 text-6xl leading-18"
	>
		<div>
			<div class="text-7xl">VIDEO-<br /> GRAPHER</div>
			<Pictogram src="3" size={16} track_size={3} offset={[3.8, -7]} />
		</div>
		Director,
		<Pictogram src="1" size={16} track_size={3} offset={[-2.8, -7]} />
		Filmmaker, <Pictogram src="2" size={16} track_size={3} offset={[3.8, -7]} />

		<br />
		*of many things*
	</div>
	<div class="col-span-2 mb-24"><Contact /></div>
</div>
