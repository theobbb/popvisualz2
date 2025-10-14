<script>
	import { projects } from '$lib/data';

	const { index } = $props();

	const project = projects[index];
</script>

<div class="grid-8 mb-12 text-base/5 font-medium">
	<div>{project.artist} - <br />{project.name}</div>
	<div>{project.date}</div>
	<div>
		<div><a>Watch Video +</a></div>
		<div><a>Watch on Youtube +</a></div>
	</div>
</div>
