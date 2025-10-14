<script>
	import { social_links } from '$lib/data';
	import IconInfo from '$lib/icons/icon-info.svelte';

	const cx = { sub: 'uppercase font-semibold text-xs text-2' };
</script>

<div class="max-w-52 border border-white/20 bg-black px-1.5">
	<div class="mb-3 flex justify-between gap-2 pt-1">
		<div class={cx.sub}>NAME</div>
		<div class="font-2 text-xl/6">JOSH POP</div>
	</div>

	<div class="relative">
		<img class="" src="/images/headshot.webp" alt="headshot" />
		<div class="absolute top-1.5 right-1.5 text-2xl"><IconInfo /></div>
	</div>

	<div class="mt-10 mb-5">
		{#each social_links as [label, title, href]}
			<a
				class="flex flex-wrap justify-between last:mt-0.5 hover:bg-white hover:text-black"
				{href}
				target="_blank"
			>
				<div class={cx.sub}>{label}</div>
				<div class="font-2 text-sm lg:-translate-y-0.5">{title}</div>
			</a>
		{/each}
	</div>
</div>
