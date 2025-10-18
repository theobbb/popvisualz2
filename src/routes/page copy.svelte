<script lang="ts">
	import { partners } from '$lib/data';
	import IconArrow from '$lib/icons/icon-arrow.svelte';
	import IconMtl from '$lib/icons/icon-mtl.svelte';
	import Pictogram from '$lib/pictogram.svelte';
	import Reel from './reel.svelte';
</script>

<svelte:head>
	<title>PopVisualz - Videographer</title>
	<meta
		name="description"
		content="I'm Josh Pop (PopVisualz), a Montréal-based video director, filmmaker, editor. I handle the entire visual process—from shooting and directing to the final edit. Check out the latest work."
	/>
</svelte:head>

<Reel />

<div class="pointer-events-none fixed inset-0">
	<div
		class="absolute top-0 left-0 h-24 w-full bg-gradient-to-t from-transparent to-black/40"
	></div>
	<div
		class="rotate-12- absolute bottom-0 left-0 h-96 w-full bg-gradient-to-b from-transparent to-black/90"
	></div>
</div>

<div class="mix-blend-difference- pointer-events-none fixed inset-0 flex items-end">
	<div class={['pointer-events-auto  ', 'mx-[2vw] space-y-[6vw]', 'lg:mx-6 lg:space-y-6']}>
		<div class="flex max-lg:w-full max-lg:justify-between lg:gap-10">
			<div class={['font-2 relative font-bold', 'text-[10vw] leading-[9.5vw]', 'lg:text-8xl/19']}>
				VIDEO-
				<br />
				<div class="max-lg:text-[11vw]- absolute inset-0 size-44">
					<Pictogram src="3" size={2.4} offset={[2.1, 0.8]} />
				</div>
				GRAPHER
			</div>
			<div class="flex items-end justify-end gap-[1.5vw] max-lg:text-right lg:gap-4">
				<div class={['text-[10vw]', 'lg:text-7xl']}><IconMtl /></div>
				<div class="max-lg:translate-y-[4.8vw]">
					<div class="text-[4vw] lg:text-3xl">montréal</div>
					<div class="text-2 text-[3vw]/[3vw] lg:text-base/5 lg:whitespace-nowrap">
						(available<br /> worlwide)
					</div>
				</div>
			</div>
		</div>

		<div
			class={[
				'font-2 flex flex-wrap font-light whitespace-pre uppercase',
				'gap-x-[6vw] text-[5.5vw] max-lg:leading-[6.2vw]',
				'lg:gap-12 lg:text-5xl'
			]}
		>
			<div>Director,</div>

			<div class="max-lg:text-[7vw]- absolute size-44">
				<Pictogram src="1" size={4.8} offset={[-1.2, -0.8]} />
			</div>

			<div>Filmmaker,</div>

			<div
				class={[
					'max-lg:translate-x-[-28vw]- max-lg:translate-y-[14vw]- max-lg:text-[7vw]-',
					'absolute size-44'
				]}
			>
				<Pictogram src="2" size={4.8} offset={[0.8, 0.15]} />
			</div>
			<div class="max-lg:basis-full max-lg:translate-x-[6vw]">Editor</div>
		</div>

		<div
			class={[
				'font-1 text-2 w-fit font-normal! lowercase',
				'-mt-[12vw] text-[3vw]/[3vw] max-lg:translate-x-[45vw] max-lg:font-light',
				'lg:-mt-7 lg:translate-x-63 lg:text-2xl'
			]}
		>
			<span class="inline-block translate-y-0.5 lg:translate-y-2 lg:text-3xl"><IconArrow /></span>
			<span class="ml-[-1vw] lg:-ml-2">of</span>
			<span class="ml-[-1vw] lg:ml-16">many<br class="lg:hidden" /> things</span>
		</div>
		<div class="pointer-events-none max-lg:text-[3vw]">
			<div class="relative -translate-y-1">
				<div class="text-2 inline-block max-lg:opacity-0">Companies I've worked with:</div>
				<div class="absolute top-0 left-0 flex gap-[1vw] whitespace-nowrap lg:left-65 lg:gap-4">
					{#each partners as partner}
						<span>{partner}</span><span class="translate-y-0.5- select-none last:hidden">*</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
