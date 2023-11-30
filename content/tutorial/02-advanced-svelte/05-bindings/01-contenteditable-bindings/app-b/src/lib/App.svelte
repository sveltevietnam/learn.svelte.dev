<script>
	let html = '<p>Viết vài từ!</p>';
</script>

<div bind:innerHTML={html} contenteditable />

<pre>{html}</pre>

<style>
	[contenteditable] {
		padding: 0.5em;
		border: 1px solid #eee;
		border-radius: 4px;
	}
</style>
