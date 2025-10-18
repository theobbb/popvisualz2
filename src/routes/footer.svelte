<script>
	import { social_links } from '$lib/data';
	import IconEmail from '$lib/icons/icon-email.svelte';
	import IconInstagram from '$lib/icons/icon-instagram.svelte';
	import IconPhone from '$lib/icons/icon-phone.svelte';
	import IconYoutube from '$lib/icons/icon-youtube.svelte';
</script>

<div class="grid-8 pb-1">
	<div class="col-start-5 flex items-center gap-3">
		<a href={social_links[0][2]} target="_blank">
			<IconInstagram />
		</a>
		<a href={social_links[1][2]} target="_blank">
			<IconYoutube />
		</a>
	</div>
	<div class="flex items-center gap-3">
		<a href={social_links[2][2]} target="_blank">
			<IconEmail />
		</a>
		<a href={social_links[3][2]} target="_blank">
			<IconPhone />
		</a>
	</div>
	<div class="text-right">
		<span class="text-2">Website by</span>
	</div>
	<div class="text-2">
		<a href={social_links[3][2]}> tripledoubleve.ca </a>
	</div>
</div>
