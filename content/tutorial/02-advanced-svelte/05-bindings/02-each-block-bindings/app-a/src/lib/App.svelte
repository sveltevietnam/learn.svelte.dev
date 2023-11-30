<script>
	let todos = [
		{ done: false, text: 'hoàn thành hướng dẫn svelte' },
		{ done: false, text: 'xây dựng ứng dụng' },
		{ done: false, text: 'thống trị thế giới' }
	];

	function add() {
		todos = todos.concat({
			done: false,
			text: ''
		});
	}

	function clear() {
		todos = todos.filter((t) => !t.done);
	}

	$: remaining = todos.filter((t) => !t.done).length;
</script>

<div class="centered">
	<h1>todos</h1>

	<ul class="todos">
		{#each todos as todo}
			<li class:done={todo.done}>
				<input
					type="checkbox"
					checked={todo.done}
				/>

				<input
					type="text"
					placeholder="Việc cần hoàn thành?"
					value={todo.text}
				/>
			</li>
		{/each}
	</ul>

	<p>{remaining} cò lại</p>

	<button on:click={add}>
		Thêm mới
	</button>

	<button on:click={clear}>
		Xóa việc đã hoàn thành
	</button>
</div>

<style>
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}

	.done {
		opacity: 0.4;
	}

	li {
		display: flex;
	}

	input[type="text"] {
		flex: 1;
		padding: 0.5em;
		margin: -0.2em 0;
		border: none;
	}
</style>
