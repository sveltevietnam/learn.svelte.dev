<script>
	import { createTodoStore } from './todos.js';
	import TodoList from './TodoList.svelte';

	const todos = createTodoStore([
		{ done: false, description: 'viết một vài hướng dẫn' },
		{ done: false, description: 'bắt đầu viết blog' },
		{ done: true, description: 'mua một ít sửa' },
		{ done: false, description: 'cắt cỏ' },
		{ done: false, description: 'cho rùa ăn' },
		{ done: false, description: 'sửa một vài lỗi' }
	]);
</script>

<div class="board">
	<input
		placeholder="việc gì cần được hoàn thành?"
		on:keydown={(e) => {
			if (e.key === 'Enter') {
				todos.add(e.currentTarget.value);
				e.currentTarget.value = '';
			}
		}}
	/>

	<div class="todo">
		<h2>todo</h2>
		<TodoList store={todos} done={false} />
	</div>

	<div class="done">
		<h2>xong</h2>
		<TodoList store={todos} done={true} />
	</div>
</div>

<style>
	.board {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 1em;
		max-width: 36em;
		margin: 0 auto;
	}

	.board > input {
		font-size: 1.4em;
		grid-column: 1/3;
		padding: 0.5em;
		margin: 0 0 1rem 0;
	}

	h2 {
		font-size: 2em;
		font-weight: 200;
	}
</style>
