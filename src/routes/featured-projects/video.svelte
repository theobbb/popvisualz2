<script lang="ts">
	const { src, ...props } = $props();
</script>

<div class="absolute inset-0 flex items-center justify-center">
	<video
		id={src}
		src="/videos/snapshots/{src}.mp4"
		class={[
			' h-full max-h-36 w-full max-w-36 object-cover opacity-0 transition duration-75 ease-in'
		]}
		muted
		preload="metadata"
		playsinline
		{...props}
	></video>
</div>
