<script>
	let y = 0;
</script>

<svelte:window />

<span>độ sâu: {y}px</span>

<style>
	:global(body) {
		height: 400vw;
		background: url(./deepsea.webp);
		background-size: cover;
	}

	span {
		position: fixed;
		font-size: 2em;
		color: white;
		font-variant: tabular-nums;
	}
</style>