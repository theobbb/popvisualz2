<script>
	import IconArrowCorner from '$lib/icons/icon-arrow-corner.svelte';
	import Pictogram from '$lib/pictogram.svelte';
	import Video from '$lib/video.svelte';

	const cx = {
		caption: 'mt-2 max-md:ml-3'
	};
</script>

<div class="mt-12 grid grid-cols-8 gap-2 md:gap-6">
	<div class="relative col-span-full aspect-video md:col-span-4 md:col-start-3">
		<Video autoplay playback_id="ChFfjFYbsfrjDFkkc1yY9CtTV6XX4g8Y534SPDcHhW8" />
	</div>
	<div class="col-span-full flex items-end justify-end md:col-span-1 md:justify-start md:text-left">
		(trailer)
	</div>
</div>

<div class="mt-12 mb-24 grid grid-cols-8 gap-x-3 max-md:gap-x-2 md:gap-x-6 md:gap-y-12">
	<div
		class="sticky top-12 z-10 h-full w-full max-md:col-span-2 max-md:col-start-7 max-md:row-2 max-md:-mt-4 max-md:hidden"
	>
		<div class="absolute aspect-square w-full">
			<Pictogram src="film-headshot-2" />
		</div>
	</div>
	<div class="col-span-full md:col-span-6">
		<div>
			<span class="text-5xl font-light tracking-tight lg:text-7xl">THE WRITER</span>
			<span class="max-[500px]:hidden">(short film)</span>
		</div>
		<div class="mt-1 ml-3 text-2xl/7.5 font-thin tracking-tighter md:ml-4 lg:text-4xl">
			<span class=" inline-block translate-y-0.5"><IconArrowCorner /></span>Fantasia film festival
			selection
		</div>
	</div>
	<div
		class="pointer-events-none col-span-full -mt-16 -mb-12 flex translate-y-16 justify-end md:hidden"
	>
		<div class="pointer-events-auto relative size-24">
			<Pictogram src="film-headshot-2" />
		</div>
	</div>
	<div class="sticky top-12 z-10 h-full w-full max-md:hidden">
		<Pictogram src="film-headshot-1" />
	</div>

	<div
		class="col-span-6 col-start-1 max-md:mt-12 sm:col-span-4 md:col-span-3 md:col-start-3 lg:col-span-2 lg:col-start-3 lg:mb-16"
	>
		<div class="text-balance">
			The Writer follows a young kid who sneaks out at night to paint graffiti - a quiet, visual
			story about expression, rebellion, and finding voice through art while navigating a
			Gotham-like city at night.
		</div>
	</div>
	<div class="pointer-events-none col-span-full -mt-11 -mb-15 flex justify-end md:hidden">
		<div class="pointer-events-auto relative size-32">
			<Pictogram src="film-headshot-1" />
		</div>
	</div>
	<div
		class="col-span-full max-md:mt-16 max-md:mb-16 sm:col-span-6 md:col-span-4 md:col-start-3 lg:col-span-3"
	>
		<div class="text-balance">
			The Writer, the debut short film by Josh Pop, has been officially selected for the 2025
			Fantasia Festival. This milestone marks Pop’s first step into narrative filmmaking and
			introduces his unique vision to audiences worldwide. Frank Apache, owner of the Cabane à Sang
			Film Festival, praised the work, stating: “This film is not TOY.”
		</div>
	</div>
	<div class="col-span-full sm:col-span-4 md:col-span-3 md:col-start-2">
		<div class="relative aspect-video w-full">
			<Video playback_id="tqo92y19ctKUIposJr9DWM5k2Wtni1jt4CjpNBEZ7RU" />
		</div>
		<div class={cx.caption}>(behind the scenes 1)</div>
	</div>
	<div class="col-span-full max-md:mb-24 max-sm:mt-6 sm:col-span-4 md:col-span-3">
		<div class="relative aspect-video w-full">
			<Video playback_id="WNH5OJWIhOfy6BZwNUwD02Ue3b5D0100xEuUsKmws1V3rE" />
		</div>
		<div class={cx.caption}>(behind the scenes 2)</div>
	</div>
	<div class="relative col-span-4 w-full gap-6 md:col-span-3 md:col-start-2">
		<img
			class="h-auto w-full object-contain"
			src="images/film/poster-1.webp"
			alt="film poster 1"
			loading="lazy"
		/>
		<div class={cx.caption}>(poster 1)</div>
	</div>
	<div class="relative col-span-4 md:col-span-3">
		<img src="images/film/poster-2.webp" alt="film poster 2" loading="lazy" />
		<div class={cx.caption}>(poster 2)</div>
	</div>
</div>
