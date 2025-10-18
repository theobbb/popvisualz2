<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import Header from './header.svelte';
	import { page } from '$app/state';
	import Footer from './footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="mx-1.5">
	<Header />
	{@render children?.()}
	<!-- {#if page.route.id != '/'}
		<Footer />
	{/if} -->
</div>
