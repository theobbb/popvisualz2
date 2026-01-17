<script module>
	declare global {
		interface Window {
			goatcounter?: {
				count: (options: {
					path?: string;
					title?: string;
					referrer?: string;
					event?: boolean;
					endpoint?: string;
				}) => void;
				get_query: (name: string) => string | null;
			};
		}
	}
</script>

<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	const DOMAIN = 'popvisualz.com';
	let isScriptReady = $state(false);

	onMount(() => {
		if (!browser) return;

		const script = document.createElement('script');
		script.async = true;
		script.src = `https://stats.${DOMAIN}/count.js`;
		script.dataset.goatcounter = `https://stats.${DOMAIN}/count`;
		script.dataset.goatcounterSettings = '{"no_onload": true}';

		script.onload = () => {
			console.log('✅ GoatCounter script loaded');
			isScriptReady = true;
		};

		script.onerror = () =>
			console.error('❌ GoatCounter script failed to load (Check Adblock/CORS)');

		document.head.appendChild(script);
	});

	$effect(() => {
		const path = page.url.pathname;

		if (isScriptReady && window.goatcounter?.count) {
			console.log(`📊 Sending hit for: ${path}`);
			window.goatcounter.count({ path });
		}
	});
</script>

<!-- <script lang="ts">
	import { page } from '$app/state'; // Svelte 5 way to access page state
	import { onMount } from 'svelte';
	import { browser, dev } from '$app/environment';

	const DOMAIN = 'popvisualz.com';

	const goatcounter_url = `https://stats.${DOMAIN}/count`;
	onMount(() => {
		if (!browser) return;

		const script = document.createElement('script');
		script.async = true;
		script.src = `//stats.${DOMAIN}/count.js`;
		script.dataset.goatcounter = goatcounter_url;
		// Prevent auto-tracking on load so our $effect handles everything
		script.dataset.goatcounterSettings = '{"no_onload": true}';

		document.head.appendChild(script);
	});

	// We use a $derived or $effect to react to path changes
	$effect(() => {
		if (!browser) return;
		const path = page.url.pathname;

		const send_hit = () => {
			if (window.goatcounter?.count) {
				window.goatcounter.count({
					path
				});
			}
		};

		if (window.goatcounter?.count) {
			send_hit();
		} else {
			// If the script isn't loaded yet, wait for it before sending the first hit
			document.addEventListener('goatcounter-load', send_hit, { once: true });
		}
	});
</script> -->
