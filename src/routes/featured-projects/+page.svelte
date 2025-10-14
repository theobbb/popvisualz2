<script lang="ts">
	import { projects } from '$lib/data';
	import Char from './char.svelte';
	import Info from './info.svelte';

	const str = [
		'SHY SMITH-   FANSERVICE',
		`  BONZA-BURNIN'`,
		`      MATT OX-  HOLDING ME  DOWN`,
		`SERANE- CHROME`,
		`MIKE SHABB X PAYDRO 66-UNDER THE RUG`,
		`ETERNL KURU- CHASE LES STARS`
	];

	const paths = ['burnin', 'burnin', 'burnin', 'burnin', 'burnin', 'burnin'];

	function onmouseenter(ev: MouseEvent, project) {
		ev.currentTarget.play();
	}

	function onmouseleave(ev: MouseEvent, project) {
		ev.currentTarget.pause();
		ev.currentTarget.currentTime = 0;
	}
</script>

<div class="my-12 text-6xl/18 font-light">
	<!-- <div></div>
	<div class="col-span-4 flex items-end">
		<div>
			<div class="text-4xl">Burnin</div>
			<div>Bonza</div>
			<div>25-10-2024</div>
		</div>
	</div> -->
	{#each projects as project, project_i}
		<a class="grid-16 uppercase" href="featured-projects/{project.slug}">
			<div class="col-span-2 text-base/5 font-medium">{project.artist}</div>
			{#each project.name.split('') as char, char_i}
				<div class="relative text-center">
					{char}

					<div class=" absolute inset-0 z-10 flex items-center justify-center">
						<video
							onclick={() => {
								//alert(src)
							}}
							onmouseenter={(ev) => onmouseenter(ev, project)}
							onmouseleave={(ev) => {
								onmouseleave(ev, project);
							}}
							class=" h-36 w-36 opacity-0 transition duration-75 ease-in hover:opacity-100"
							src="/videos/snapshots/{paths[project_i]}_{char_i + 1}.mp4"
							muted
							preload="metadata"
							playsinline
							loop
						></video>
					</div>
				</div>
			{/each}

			<br />
		</a>
		<!-- <div class="grid-8 mt-4 mb-12 text-base/5 font-medium">
			<div
				class={[project_i == 0 && 'hidden']}
				style="grid-column: span {project_i} / span {project_i};"
			></div>
			<div>{projects[project_i].artist} - <br />{projects[project_i].name}</div>
			<div>{projects[project_i].date}</div>
			<div>
				<div><a>Watch Video +</a></div>
				<div><a>Watch on Youtube +</a></div>
			</div>
		</div> -->
	{/each}
</div>

<style>
	.grid-16 {
		display: grid;
		grid-template-columns: repeat(16, minmax(0, 1fr));
	}
</style>
