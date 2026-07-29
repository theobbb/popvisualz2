<script lang="ts">
	const { i, slug, ...props } = $props();
	//src="/videos/snapshots/{src}.mp4"

	const start_time = i * 3;
	const end_time = start_time + 3;
</script>

<div class="absolute inset-0 flex items-center justify-center">
	<video
		id="{slug}_{i}"
		data-index={i}
		src="/videos/{slug}.mp4#t={start_time},{end_time}"
		class={[
			' h-full max-h-36 w-full max-w-36 object-cover opacity-0 transition duration-75 ease-in'
		]}
		muted
		preload="none"
		playsinline
		{...props}
	></video>
</div>
