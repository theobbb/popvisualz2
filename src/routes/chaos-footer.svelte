<script>
	import { partners } from '$lib/data';
	import IconArrow from '$lib/icons/icon-arrow.svelte';
	import IconMtl from '$lib/icons/icon-mtl.svelte';
	import Pictogram from '$lib/pictogram.svelte';

	const cx = {
		picto: 'absolute top-0 left-0 size-[26vw] md:size-50'
	};
</script>

<div class="pointer-events-none fixed inset-0 z-20 flex items-end">
	<div class={['pointer-events-none ', 'mx-[2vw] space-y-[4vw]', 'md:mx-6 md:space-y-4']}>
		<div class="flex max-md:w-full max-md:justify-between md:gap-10">
			<div class={['font-2 relative font-bold', 'text-[10vw]/[8.5vw]', 'md:text-8xl/19.5']}>
				POP-
				<br />

				<div
					class={[
						cx.picto,
						'translate-x-[3vw] translate-y-[-5vw] md:translate-x-12 md:-translate-y-8'
					]}
				>
					<Pictogram src="3" />
				</div>

				VISUALZ
			</div>
			<div class="flex items-end justify-end gap-[1.5vw] max-md:text-right md:gap-4">
				<div class={['text-[9vw]/[9vw]', 'md:text-7xl']}><IconMtl /></div>
				<div class="max-md:translate-y-[3vw]">
					<div class="text-[4vw]/[4vw] md:text-3xl">montréal</div>
					<div class="text-2 text-[2.8vw]/[3vw] md:text-base/5 md:whitespace-nowrap">
						(available<br /> worlwide)
					</div>
				</div>
			</div>
		</div>

		<div
			class={[
				'font-2 flex flex-wrap font-light whitespace-pre uppercase',
				'gap-x-[6vw] text-[5.5vw]/[5.5vw]',
				'md:gap-x-12 md:text-5xl'
			]}
		>
			<div>Director,</div>

			<div class="relative z-100">
				<div
					class={[
						cx.picto,
						'translate-x-[-20vw] translate-y-[-14vw] md:size-50 md:-translate-x-38 md:-translate-y-30'
					]}
				>
					<Pictogram src="1" />
				</div>
			</div>

			<div>Filmmaker,</div>

			<div class="relative z-20">
				<div
					class={[
						cx.picto,
						' translate-x-[-40vw] translate-y-[-1vw] md:-translate-x-15 md:-translate-y-23'
					]}
				>
					<Pictogram src="2" />
				</div>
			</div>
			<div class="max-md:basis-full max-md:translate-x-[6vw]">Editor</div>
		</div>

		<div
			class={[
				'font-1 text-2 w-fit font-normal! lowercase',
				'-mt-[9vw] max-md:translate-x-[45vw] max-md:text-[3vw]/[3vw]! max-md:font-light',
				'md:-mt-7 md:translate-x-63 md:text-2xl md:max-[1118px]:-translate-y-10'
			]}
		>
			<span class="inline-block translate-y-0.5 md:translate-y-2 md:text-3xl"><IconArrow /></span>
			<span class="ml-[-1vw] md:-ml-2">of</span>
			<span class="ml-[-1vw] md:ml-16">many<br class="md:hidden" /> things</span>
		</div>
		<div class="pointer-events-none relative z-50 max-sm:text-[3vw]/[3.4vw]">
			<div class="relative -translate-y-1">
				<div class="text-balance">
					<div class="text-2 inline-block">Trusted by:</div>
					{#each partners as partner, i}
						<span class="inline-block">{partner}</span>
						<span class={['inline-block select-none', i == partners.length - 1 && '!hidden']}
							>*
						</span>
						<span class="inline-block select-none last:hidden"></span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
