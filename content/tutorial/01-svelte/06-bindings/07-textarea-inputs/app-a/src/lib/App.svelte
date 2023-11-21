<script>
	import { marked } from 'marked';
	let value = `Một vài từ có chữ *nghiêng*, vài cái thì **đậm**\n\n- danh\n- sách\n- rất\n- tuyệt`;
</script>

<div class="grid">
	input
	<textarea {value}></textarea>

	output
	<div>{@html marked(value)}</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 5em 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 1em;
		height: 100%;
	}

	textarea {
		flex: 1;
		resize: none;
	}
</style>
