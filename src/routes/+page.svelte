<script lang="ts">
	import { partners } from '$lib/data';
	import IconArrow from '$lib/icons/icon-arrow.svelte';
	import IconMtl from '$lib/icons/icon-mtl.svelte';
	import Pictogram from '$lib/pictogram.svelte';
	import Reel from './reel.svelte';
</script>

<Reel />

<div class=" pointer-events-none fixed inset-0 flex items-end mix-blend-difference">
	<div class="pointer-events-auto mx-6 mb-1.5 space-y-6">
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
			<div class="flex flex-col items-end">
				<div>Director,</div>
				<div class="font-1 text-2 flex items-center gap-1 text-2xl lowercase">
					<IconArrow />of
				</div>
			</div>

			<div><Pictogram src="1" size={4.8} offset={[-1.2, -0.8]} /></div>

			<div>Filmmaker,</div>
			<div><Pictogram src="2" size={4.8} offset={[0.8, 0]} /></div>
			<div>Editor</div>
			<!-- <br />
			*of many things* -->
		</div>

		<div>
			<!-- <div>Companies I've worked with:</div> -->
			<div class="flex gap-4">
				{#each partners as partner}
					<span>{partner}</span>
					<div class="last:hidden">*</div>
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

<!-- <div class="col-span-2 mb-24"><Contact /></div> -->
