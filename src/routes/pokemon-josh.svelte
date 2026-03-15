<script lang="ts">
	import { social_links } from '$lib/data';
	import IconEmail from '$lib/icons/icon-email.svelte';
	import IconInfo from '$lib/icons/icon-info.svelte';
	import IconInstagram from '$lib/icons/icon-instagram.svelte';
	import IconPhone from '$lib/icons/icon-phone.svelte';
	import IconYoutube from '$lib/icons/icon-youtube.svelte';

	const { big = false }: { big?: boolean } = $props();

	const cx = {
		sub: big
			? 'uppercase tracking-wide font-medium text-sm text-2'
			: 'uppercase tracking-wide font-semibold text-xs text-2'
	};

	const Icons = [IconInstagram, IconYoutube, IconEmail, IconPhone];
</script>

<div class="border border-white/20 bg-black px-1.5">
	<div class="mb-3 flex justify-between gap-2 pt-1">
		<div class={cx.sub}>NAME</div>
		<div class={['font-2 ', big ? '-mt-1 text-lg' : 'text-base/4 md:text-xl/6']}>JOSH POP</div>
	</div>

	<div class="relative">
		<img class="" src="/images/headshot.webp" alt="headshot" />
		<div class="absolute top-1.5 right-1.5 text-2xl"><IconInfo /></div>
	</div>

	<div class="mt-4 mb-2 lg:mt-8 lg:mb-4">
		<div class="max-lg:space-y-1-">
			{#each social_links as [label, title, href]}
				<a
					class="flex flex-wrap justify-between border-t border-white/20 last:mt-0.5 hover:bg-white hover:text-black max-lg:pb-1.5"
					{href}
					target="_blank"
				>
					<div class={[cx.sub, '']}>{label}</div>
					<div class={['font-2 -translate-y-0.5 ', big ? '-mt-0.5 text-lg' : 'text-sm']}>
						{title}
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
