<script>
	const social_links = [
		['instagram', '@popvisualz', 'https://www.youtube.com/@popvisualz'],
		['youtube', '@popvisualz', 'https://www.youtube.com/@popvisualz'],
		['email', 'popvisualz@gmail.com', 'https://www.youtube.com/@popvisualz'],
		['phone', '514 466 6970', 'https://www.youtube.com/@popvisualz']
	];
</script>

<div class="leading-6">
	{#each social_links as [label, title, href]}
		<a {href} class="grid grid-cols-2" style="gap: 1.5rem;">
			<div class="text-right opacity-50">{label}</div>
			<div>{title}</div>
		</a>
	{/each}
</div>
