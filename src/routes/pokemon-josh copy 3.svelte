<script>
	import { social_links } from '$lib/data';
	import IconEmail from '$lib/icons/icon-email.svelte';
	import IconInfo from '$lib/icons/icon-info.svelte';
	import IconInstagram from '$lib/icons/icon-instagram.svelte';
	import IconPhone from '$lib/icons/icon-phone.svelte';
	import IconYoutube from '$lib/icons/icon-youtube.svelte';

	const cx = { sub: 'uppercase font-semibold text-[7cqw]/[7cqw] text-2' };

	const Icons = [IconInstagram, IconYoutube, IconEmail, IconPhone];
</script>

<div
	class="sm: @container w-[clamp(8rem,40vw,12rem)] border border-white/20 bg-black px-1.5 lg:w-[calc(12.5vw-2rem)]"
>
	<div class="mb-[5cqw] flex items-center justify-between gap-[3cqw] pt-[3cqw]">
		<div class={cx.sub}>NAME</div>
		<div class="font-2 text-[12cqw]/[9cqw]">JOSH POP</div>
	</div>

	<div class="relative">
		<img class="" src="/images/headshot.webp" alt="headshot" />
		<div class="absolute top-[3cqw] right-[3cqw] text-2xl"><IconInfo /></div>
	</div>

	<div class="mt-[20cqw] mb-[10cqw]">
		{#each social_links as [label, title, href]}
			<a
				class="mb-[5cqw] flex flex-wrap justify-between last:mt-[6cqw] hover:bg-white hover:text-black"
				{href}
				target="_blank"
			>
				<div class={cx.sub}>{label}</div>
				<div class="font-2 -translate-y-0.5- text-[8cqw]/[5cqw]">{title}</div>
			</a>
		{/each}
	</div>
</div>
