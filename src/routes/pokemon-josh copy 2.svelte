<script lang="ts">
	import { social_links } from '$lib/data';
	import IconEmail from '$lib/icons/icon-email.svelte';
	import IconInfo from '$lib/icons/icon-info.svelte';
	import IconInstagram from '$lib/icons/icon-instagram.svelte';
	import IconPhone from '$lib/icons/icon-phone.svelte';
	import IconYoutube from '$lib/icons/icon-youtube.svelte';

	const cx = { sub: 'uppercase font-semibold text-xs text-2' };

	const Icons = [IconInstagram, IconYoutube, IconEmail, IconPhone];
</script>

<div class="max-w-38 border border-white/20 bg-black px-1.5">
	<div class="mb-2 pt-1">
		<div class={cx.sub}>NAME</div>
		<div class="font-2 text-base/4 md:text-xl/6">JOSH POP</div>
	</div>

	<div class="relative">
		<img class="" src="/images/headshot.webp" alt="headshot" />
		<div class="absolute top-1.5 right-1.5 text-2xl"><IconInfo /></div>
	</div>

	<div class="lg:mb-4- lg:mt-8- mt-4- mb-2-">
		<div class="max-lg:space-y-1">
			{#each social_links as [label, title, href], i}
				<a
					class="flex justify-between border-b border-white/10 pt-0.5 pb-1 last:mt-0.5 last:border-b-0 hover:bg-white hover:text-black"
					{href}
					target="_blank"
				>
					<div>
						<div class={[cx.sub, 'pt-2']}>{label}</div>
						<div
							class={[
								'font-2  relative max-w-35 -translate-y-0.5 overflow-hidden text-sm text-ellipsis whitespace-nowrap',
								i == 2 && ''
							]}
						>
							{title}
						</div>
					</div>
					<!-- <div class=" origin-top-right scale-75">
						<svelte:component this={Icons[i]} />
					</div> -->
				</a>
			{/each}
		</div>
	</div>
</div>
