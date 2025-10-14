<script>
	import { afterNavigate, beforeNavigate, onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import PokemonJosh from './pokemon-josh.svelte';

	let pokemon_open = $state(page.route.id == '/');

	let menu_open = $state(false);

	const links = [
		['Featured Projects', '/featured-projects'],
		['Social Media Content', '/social-media-content'],
		['The Writer (short film)', '/the-writer']
	];

	onNavigate((nav) => {
		pokemon_open = nav.to?.route.id == '/';
		menu_open = false;
	});
</script>

<header class="mix-blend-difference- sticky top-0 z-20 pt-1.5">
	<nav class="max-lg:hidden">
		<ul class="grid-8">
			<div class="text-2 text-right">Directed by</div>
			<li class="max-lg:col-span-4">
				<a href="/"> Pop Visualz </a>
			</li>
			<div class="col-span-1 2xl:col-span-2"></div>

			{#each links as [link, href]}
				<li class="max-w-32">
					<a {href}>
						{link}
					</a>
				</li>
			{/each}

			<li>
				<div class="relative">
					<button class="cursor-pointer" onclick={() => (pokemon_open = !pokemon_open)}>
						Contact ({pokemon_open ? '-' : '+'})
					</button>
				</div>
			</li>
		</ul>
	</nav>

	<nav class="grid grid-cols-2 gap-6 lg:hidden">
		<a href="/">
			<div class="text-2">Directed by</div>
			<div>Pop Visualz</div>
		</a>

		<button onclick={() => (menu_open = !menu_open)} class="-mt-2 text-right text-2xl"
			>Menu(+)</button
		>
	</nav>

	<div
		class={[
			' absolute z-100 flex w-full justify-between text-2xl ',
			!menu_open && 'pointer-events-none opacity-0',
			menu_open && 'pointer-events-auto',
			'transition duration-75'
		]}
	>
		<div>
			<div class="w-fit opacity-0">*</div>
			<div class="w-fit opacity-0">*</div>
			<div>
				<PokemonJosh />
			</div>
		</div>
		<div class={['mr-1 text-right ']}>
			<div class="opacity-0">*</div>
			<div class="opacity-0">*</div>

			<a href="/" class="block"> Home </a>
			{#each links as [link, href]}
				<div class="opacity-0">*</div>

				<a class="block max-w-44" {href}>
					{link}
				</a>
			{/each}
		</div>
	</div>
</header>
<div
	class={[
		'pointer-events-none fixed inset-0 z-10 bg-black/60 backdrop-blur-lg',
		!menu_open && 'opacity-0',
		'transition duration-75'
	]}
></div>
<div
	class={[
		' fixed top-6.5 right-4 z-100 mt-1 opacity-0 max-lg:hidden',
		!pokemon_open && 'pointer-events-none',
		pokemon_open && 'opacity-100',
		'transition duration-75'
	]}
>
	<PokemonJosh />
</div>
