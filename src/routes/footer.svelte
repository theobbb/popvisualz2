<script>
	import { social_links } from '$lib/data';
	import IconEmail from '$lib/icons/icon-email.svelte';
	import IconInstagram from '$lib/icons/icon-instagram.svelte';
	import IconPhone from '$lib/icons/icon-phone.svelte';
	import IconYoutube from '$lib/icons/icon-youtube.svelte';
</script>

<div class="grid-8 pb-1">
	<a href={social_links[0][2]} target="_blank" class="col-span-2 md:col-span-1">
		<IconInstagram />
	</a>

	<a href={social_links[1][2]} target="_blank" class="col-span-2 md:col-span-1">
		<IconYoutube />
	</a>
	<a href={social_links[2][2]} target="_blank" class="col-span-2 md:col-span-1">
		<IconEmail />
	</a>

	<a href={social_links[3][2]} target="_blank" class="col-span-2 md:col-span-1">
		<IconPhone />
	</a>

	<div
		class="col-span-4 translate-y-0.5 max-md:-mt-4 md:col-span-2 md:col-start-5 xl:col-span-1 xl:col-start-7"
	>
		Pop Visualz ©
	</div>
	<div
		class="text-2 col-span-4 translate-y-0.5 pr-1.5 text-right max-md:-mt-4 md:col-span-2 xl:col-span-1"
	>
		<a href="https://3xw.ca" target="_blank">Website by 3xw </a>
	</div>
</div>
