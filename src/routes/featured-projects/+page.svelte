<script>
	import Char from './char.svelte';
</script>

<div
	class="my-12 grid text-8xl font-light"
	style="grid-template-columns: repeat(16, minmax(0, 1fr));"
>
	<!-- <div></div>
	<div class="col-span-4 flex items-end">
		<div>
			<div class="text-4xl">Burnin</div>
			<div>Bonza</div>
			<div>25-10-2024</div>
		</div>
	</div> -->
	{#each `BONZA-  `.split('') as char, i}
		<Char src="burnin_{i + 1}">{char}</Char>
	{/each}
	{#each `BURNIN' `.split('') as char, i}
		<Char src="burnin_{i + 9}">{char}</Char>
	{/each}
</div>
