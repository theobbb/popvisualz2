<script>
	import { social_links } from '../social-links';
	import { MediaQuery } from 'svelte/reactivity';
	import { style } from '$lib/style';

	const text2 = 'text-black/50 text-xs';

	//box-shadow: inset 0 10px 10px -10px rgba(0,0,0,0.5)

	let current = $state(0);

	let lastPos = null;
	const stepSize = 100;
	function onmousemove(ev) {
		const x = ev.pageX;
		const y = ev.pageY;

		if (!lastPos) {
			lastPos = { x, y };
			return;
		}

		const dx = x - lastPos.x;
		const dy = y - lastPos.y;
		const distance = Math.sqrt(dx * dx + dy * dy);

		if (distance >= stepSize) {
			const steps = Math.floor(distance / stepSize);
			current = (current + steps) % 3;

			// move lastPos forward in the same direction, scaled to the step distance
			const angle = Math.atan2(dy, dx);
			lastPos.x += Math.cos(angle) * steps * stepSize;
			lastPos.y += Math.sin(angle) * steps * stepSize;
		}
	}

	function on_scroll(ev) {
		current = Math.floor(window.scrollY / 150) % 3;
	}

	function onmouseenter() {
		const video = document.getElementById('video-landing');
		video.pause();
	}
	function onmouseleave() {
		const video = document.getElementById('video-landing');
		video.play();
	}

	context.on_enter.about = () => {
		if (lg.current) return;
		window.addEventListener('scroll', on_scroll);
	};
	context.on_exit.about = () => {
		if (lg.current) return;
		window.removeEventListener('scroll', on_scroll);
	};

	const lg = new MediaQuery(style.breakpoints.lg);

	const mouse_listeners = $derived(lg.current ? { onmousemove, onmouseenter, onmouseleave } : {});
</script>

<svelte:window />
<div class={['w-fit', '']} {...mouse_listeners}>
	<div
		class="bg-blur font-2 min-w-64 rounded-md bg-white/80 text-black"
		style="transition: transform 0.1s ease; transform-style: preserve-3d;"
	>
		<div class=" p-3">
			<div class="rounded-md border border-black/20">
				<div class="flex justify-between gap-3">
					<div class="mb-1 px-2 py-0.5">
						<div class={text2}>name</div>
						<div class="text-xl">Josh Pop</div>
					</div>
					<div class="m-1 text-2xl">
						<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 22 22"
							><path
								fill="currentColor"
								d="M12 13h-2v-2h1v-1h1V8h-2v2H8V7h1V6h4v1h1v4h-1v1h-1m0 4h-2v-2h2m6 6H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1m-1-1v-1h1V5h-1V4H5v1H4v12h1v1Z"
							/></svg
						>
					</div>
				</div>

				<div class="relative">
					<div class={['sprite  grayscale']} style="background-position: 0 {50 * current}%;"></div>
					<div
						style="box-shadow: inset 0 20px 20px -10px rgba(0,0,0,0.2), inset 0 -20px 10px -10px rgba(0,0,0,0.5)"
						class="absolute inset-0"
					></div>
				</div>

				<div class="mt-2">
					<div class="mx-1.5 mb-1.5 flex justify-end text-2xl">
						<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 22 22"
							><path
								fill="currentColor"
								d="M9 12H7v-2h2m4 2h-2v-2h2m4 2h-2v-2h2M6 20H1v-2h1v-1h1v-1h1v-2H3V8h1V7h1V6h1V5h2V4h8v1h2v1h1v1h1v1h1v6h-1v1h-1v1h-1v1h-2v1H8v1H6m0-1v-1h1v-1h8v-1h2v-1h1v-1h1V9h-1V8h-1V7h-2V6H9v1H7v1H6v1H5v4h1v3H5v1H4v1Z"
							/></svg
						>
					</div>
					<div>
						{#each social_links as link}
							<a
								href={link[2]}
								class="block items-baseline justify-between gap-4 border-t border-black/20 px-2 py-0.5 first:border-t-0"
							>
								<div class={[text2]}>
									{link[0]}
								</div>
								<div class=" pb-2 text-sm">
									{link[1]}
								</div>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.sprite {
		aspect-ratio: 630 / 944;
		background-image: url('/headshot-spritesheet.png');
		background-repeat: no-repeat;
		background-size: 100% 300%;
	}
</style>
