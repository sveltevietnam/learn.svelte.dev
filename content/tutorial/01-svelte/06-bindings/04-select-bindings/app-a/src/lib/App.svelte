<script>
	let questions = [
		{
			id: 1,
			text: `Bạn học ở trường gì?`
		},
		{
			id: 2,
			text: `Tên của cha hoặc mẹ bạn?`
		},
		{
			id: 3,
			text: `Bạn có một sự thật nào mà những kẻ tấn công có thể dễ dàng tìm kiếm được trên mạng?`
		}
	];

	let selected;

	let answer = '';

	function handleSubmit() {
		alert(
			`Câu trả lời #${selected.id} (${selected.text}) là "${answer}"`
		);
	}
</script>

<h2>Câu hỏi không bảo mật</h2>

<form on:submit|preventDefault={handleSubmit}>
	<select
		value={selected}
		on:change={() => (answer = '')}
	>
		{#each questions as question}
			<option value={question}>
				{question.text}
			</option>
		{/each}
	</select>

	<input bind:value={answer} />

	<button disabled={!answer} type="submit">
		Submit
	</button>
</form>

<p>
	đã chọn câu hỏi #{selected
		? selected.id
		: '[waiting...]'}
</p>