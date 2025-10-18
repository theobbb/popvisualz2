<script lang="ts">
	const { src, ...props } = $props();
</script>

<div class="absolute inset-0 flex items-center justify-center">
	<video
		id={src}
		class={[
			' h-full max-h-36 w-full max-w-36 object-cover opacity-0 transition duration-75 ease-in'
		]}
		muted
		preload="none"
		playsinline
		{...props}
	></video>
</div>
