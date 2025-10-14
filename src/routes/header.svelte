<script>
	import { afterNavigate, beforeNavigate, onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import PokemonJosh from './pokemon-josh.svelte';

	let pokemon_open = $state(page.route.id == '/');

	onNavigate((nav) => {
		pokemon_open = nav.to?.route.id == '/';
	});
</script>

<header class="mix-blend-difference- sticky top-0 z-20 pt-1.5">
	<nav>
		<ul class="grid-8">
			<div class="text-right opacity-50">Directed by</div>
			<li><a href="/">Pop Visualz</a></li>
			<div class="col-span-2"></div>

			<li>
				<a href="/featured-projects" class="">
					Featured <br /> Projects
				</a>
			</li>

			<li>
				<a href="/social-media-content" class="">
					Social Media <br /> Content
				</a>
			</li>

			<li>
				<a href="/the-writer" class="">
					The Writer <br /> (short film)
				</a>
			</li>

			<li>
				<div class="relative">
					<button class="cursor-pointer" onclick={() => (pokemon_open = !pokemon_open)}>
						Contact ({pokemon_open ? '-' : '+'})
					</button>
					<div
						class={[
							' absolute z-100 mt-1 w-full opacity-0',
							!pokemon_open && 'pointer-events-none',
							pokemon_open && 'opacity-100',
							'transition duration-75'
						]}
					>
						<PokemonJosh />
					</div>
				</div>
			</li>
		</ul>
	</nav>
</header>
