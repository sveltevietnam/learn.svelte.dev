<script>
	let selection = '';

	const handleSelectionChange = (e) => selection = document.getSelection();
</script>

<svelte:document on:selectionchange={handleSelectionChange} />

<h1>Chọn văn bản để kích hoạt sự kiện</h1>
<p>Lựa chọn: {selection}</p>
