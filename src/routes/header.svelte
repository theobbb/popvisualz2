<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import ChaosFooter from './chaos-footer.svelte';
	import PokemonJosh from './pokemon-josh.svelte';

	let pokemon_open = $state(page.route.id == '/');

	let menu_open = $state(false);
	let contact_open = $state(false);

	const links = [
		['Home (Reel)', '/'],
		['Featured Projects', '/featured-projects'],
		['The Writer (short film)', '/the-writer']
	];

	const current_link = $derived(links.find((link) => page.route.id == link[1]));

	$effect(() => {
		if (menu_open) {
			document.documentElement.style.overflow = 'hidden';
		} else {
			document.documentElement.style.overflow = 'auto';
		}
	});

	onNavigate((nav) => {
		pokemon_open = nav.to?.route.id == '/';
		menu_open = false;
	});
</script>

<header class="sticky top-0 z-40 pt-1.5 mix-blend-difference" style="line-height: 113%;">
	<nav class="max-lg:hidden">
		<ul class="grid-8">
			<div class="text-2 text-right">Directed by</div>
			<li class="max-lg:col-span-4">
				<a href="/"> Pop Visualz </a>
			</li>
			<div class="col-span-2"></div>

			{#each links as [link, href]}
				<li class="group max-w-32">
					<div
						class={[
							'absolute size-2.5 -translate-x-5 translate-y-1 rounded-full bg-white ',
							current_link?.[1] == href ? 'opacity-100' : 'opacity-0 group-hover:opacity-50',
							'transition duration-100'
						]}
					></div>

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

		<button
			onclick={() => (menu_open = !menu_open)}
			class="-mt-2 cursor-pointer text-right text-2xl"
		>
			Menu({menu_open ? '-' : '+'})
		</button>
	</nav>

	<div
		class={[
			' absolute z-100 flex w-full justify-between gap-6 text-2xl lg:hidden ',
			!menu_open && 'pointer-events-none opacity-0',
			menu_open && 'pointer-events-auto',
			'transition duration-75'
		]}
	>
		<div class="">
			<div class="w-fit opacity-0">*</div>
			<div class="w-fit opacity-0">*</div>
			<div class="origin-top-left scale-62">
				<div class="max-w-52 cursor-pointer" onclick={() => (contact_open = true)}>
					<div class="pointer-events-none"><PokemonJosh /></div>
				</div>
			</div>
		</div>
		<div class={['mr-1 text-right ']}>
			<div class="opacity-0" aria-hidden="true">*</div>

			{#each links as [link, href]}
				<div class="opacity-0" aria-hidden="true">*</div>
				<div
					class={[
						'absolute size-2.5 -translate-x-3 translate-y-2.5 rounded-full bg-white ',
						current_link?.[1] == href ? 'opacity-100' : 'opacity-0 group-hover:opacity-50',
						'transition duration-100'
					]}
				></div>
				<a class="block max-w-44" {href}>
					{link}
				</a>
			{/each}
			<div class="opacity-0" aria-hidden="true">*</div>
			<div class="relative">
				<button class="cursor-pointer" onclick={() => (contact_open = !contact_open)}>
					Contact ({pokemon_open ? '-' : '+'})
				</button>
			</div>
		</div>
	</div>
</header>
<div
	class={[
		'pointer-events-none fixed inset-0 z-20 bg-black/60 backdrop-blur-lg',
		!menu_open && 'opacity-0',
		'transition duration-75 lg:hidden'
	]}
></div>
<div
	class={[
		' fixed top-12 right-4 z-100 mt-1 opacity-0 max-lg:hidden',
		!pokemon_open && 'pointer-events-none',
		pokemon_open && 'opacity-100',
		'transition duration-75'
	]}
>
	<div class="max-w-52"><PokemonJosh /></div>
</div>

{#if contact_open}
	<div class="fixed inset-0 z-200"></div>
	<dialog
		{@attach (el) => el.showModal()}
		closedby="any"
		class={['m-auto']}
		onclose={() => (contact_open = false)}
		onclick={(e) => {
			const rect = e.currentTarget.getBoundingClientRect();
			const clickedOutside =
				e.clientX < rect.left ||
				e.clientX > rect.right ||
				e.clientY < rect.top ||
				e.clientY > rect.bottom;

			if (clickedOutside) {
				e.stopPropagation();
				contact_open = false;
			}
		}}
	>
		<div class="flex max-w-63 flex-col">
			<div class=""><PokemonJosh big /></div>
		</div>
	</dialog>
	<div class="fixed top-4 right-4 z-1000">Close</div>
	<!-- <div class="fixed inset-0 z-500 flex items-center justify-center bg-black/50 backdrop-blur-2xl">
		<div class=""><PokemonJosh /></div>
	</div> -->
{/if}

{#if page.route.id == '/' || menu_open}
	<div class={['chaos-footer-mobile container']}><ChaosFooter /></div>
{/if}

<style>
	dialog {
		color: inherit;
		font-family: inherit;
		border: none;
		box-shadow: none;
		outline: none;
	}
	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.5);
		/* backdrop-filter: brightness(0.5); */
		backdrop-filter: blur(5px);
	}
</style>
