<script>
	import { onMount } from 'svelte';

	const list = [
		['universal', 'Universal'],
		['sony', 'Sony Music'],
		['converse', 'Converse'],
		['warmup', 'Warmup'],
		['montreality', 'Montreality'],

		['one-track', 'One Track']
	];

	let current = $state(0);

	const delay = 3000;

	let timeout;

	function manual_next() {
		if (timeout) {
			clearTimeout(timeout);
		}
		next();
		loop();
	}

	function next() {
		current = (current + 1) % list.length;
		console.log(current);
	}

	function loop() {
		timeout = setTimeout(() => {
			next();
			loop();
		}, delay);
	}

	onMount(() => {
		loop();

		return () => {
			if (timeout) clearTimeout(timeout);
		};
	});
</script>

<div class="fixed right-4 bottom-10 max-[1330px]:hidden [@media(max-height:815px)]:hidden">
	<div class="mb-2 flex w-52 justify-between gap-2 pl-5">
		<button class="cursor-pointer" onclick={manual_next}>Next (→)</button>
	</div>

	<div class="relative size-52">
		{#each list as [src, name], i}
			<img
				title={name}
				class={[
					'border- absolute top-0 left-0 aspect-square h-full w-full border-white/20 object-contain p-1',
					current != i && 'scale-0 opacity-0',
					'transition duration-200 ease-in-out'
				]}
				src="/images/trusted-by/{src}.webp"
			/>
		{/each}
	</div>
</div>

<!-- <div class="fixed right-4 bottom-20">
	<div class="mb-2 w-52">Trusted by</div>
	<div class="grid w-72 grid-cols-3 brightness-90">
		{#each list as [src, name]}
			<img
				title={name}
				class="border- aspect-square w-full border-white/20 object-contain p-1"
				src="/images/trusted-by/{src}.webp"
			/>
		{/each}
	</div>
</div> -->
