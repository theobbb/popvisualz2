<script>
	const { src, ...props } = $props();

	function onended(ev) {
		ev.currentTarget.style.opacity = '0';
	}
</script>

<div class="absolute inset-0 flex items-center justify-center">
	<video
		id={src}
		onclick={() => {
			//alert(src)
		}}
		class={[
			' h-full max-h-36 w-full max-w-36 object-cover opacity-0 transition duration-75 ease-in'
		]}
		src="/videos/snapshots/{src}.mp4"
		muted
		preload="metadata"
		playsinline
		{onended}
		{...props}
	></video>
</div>
