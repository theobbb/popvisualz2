<script lang="ts">
	import { partners } from '$lib/data';
	import IconArrow from '$lib/icons/icon-arrow.svelte';
	import IconMtl from '$lib/icons/icon-mtl.svelte';
	import Pictogram from '$lib/pictogram.svelte';
	import PokemonJosh from './pokemon-josh.svelte';
	import Reel from './reel.svelte';
</script>

<Reel />

<div class="pointer-events-none fixed inset-0">
	<div
		class="absolute top-0 left-0 h-24 w-full bg-gradient-to-t from-transparent to-black/40"
	></div>
	<div
		class="absolute bottom-0 left-0 h-96 w-full rotate-12 bg-gradient-to-b from-transparent to-black/90"
	></div>
</div>

<div class="mix-blend-difference- pointer-events-none fixed inset-0 flex items-end">
	<div class="pointer-events-auto mx-6 space-y-6">
		<div class="flex gap-10">
			<div class="font-2 relative text-8xl/19 font-bold">
				VIDEO-
				<br />
				<div class="absolute inset-0">
					<Pictogram src="3" size={2.4} offset={[2.1, 0.8]} />
				</div>
				GRAPHER
			</div>
			<div class="flex items-end gap-4">
				<div class="text-7xl"><IconMtl /></div>
				<div>
					<div class="text-3xl">montréal</div>
					<div class="text-2 lg:whitespace-nowrap">(available worlwide)</div>
				</div>
			</div>
		</div>

		<div class="font-2 flex gap-12 text-5xl font-light whitespace-pre uppercase">
			<div>Director,</div>

			<div><Pictogram src="1" size={4.8} offset={[-1.2, -0.8]} /></div>

			<div>Filmmaker,</div>
			<div><Pictogram src="2" size={4.8} offset={[0.8, 0.15]} /></div>
			<div>Editor</div>

			<!-- <br />
			*of many things* -->
		</div>

		<div class="font-1 text-2 -mt-7 w-fit translate-x-63 text-2xl font-normal! lowercase">
			<span class="inline-block translate-y-2 text-3xl"><IconArrow /></span>
			<span class="-ml-2">of</span>
			<span class="ml-16">many things</span>
		</div>
		<div>
			<div class="flex -translate-y-0.5 gap-4">
				<div>Companies I've worked with:</div>
				{#each partners as partner}
					<span>{partner}</span>
					<div class="translate-y-0.5 select-none last:hidden">*</div>
				{/each}
			</div>
		</div>

		<!-- Director,
		<Pictogram src="1" size={2} track_size={3} offset={[-2.8, -7]} />
		Filmmaker, <Pictogram src="2" size={2} track_size={3} offset={[3.8, -7]} />

		<br />
		*of many things* -->
	</div>
</div>

<div class="fixed top-0 right-6 bottom-0 flex items-center">
	<PokemonJosh />
</div>
<!-- <div class="col-span-2 mb-24"><Contact /></div> -->
