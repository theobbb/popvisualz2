<script lang="ts">
	const { src, i, slug, ...props } = $props();
	//src="/videos/snapshots/{src}.mp4"
</script>

<div class="absolute inset-0 flex items-center justify-center">
	<video
		id="{slug}_{i}"
		{src}
		class={[
			' h-full max-h-36 w-full max-w-36 object-cover opacity-0 transition duration-75 ease-in'
		]}
		muted
		preload="metadata"
		playsinline
		{...props}
	></video>
</div>
