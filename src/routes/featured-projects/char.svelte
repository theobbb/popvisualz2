<script>
	const { src, children } = $props();
</script>

<div class="relative text-center">
	<div>{@render children?.()}</div>
	<div class="absolute inset-0 flex items-center justify-center">
		<video
			onclick={() => alert(src)}
			onmouseenter={(ev) => ev.currentTarget.play()}
			onmouseleave={(ev) => {
				ev.currentTarget.pause();
				ev.currentTarget.currentTime = 0;
			}}
			class=" h-36 w-36 opacity-0 hover:opacity-100"
			src="/videos/snapshots/{src}.mp4"
			muted
			preload="metadata"
			playsinline
			loop
		></video>
	</div>
</div>
