<script>
	import Todo from './Todo.svelte';

	let todos = [
		{ id: 1, done: true, text: 'rửa xe' },
		{ id: 2, done: false, text: 'dẫn chó đi dạo' },
		{ id: 3, done: false, text: 'cắt cỏ' }
	];

	function toggle(toggled) {
		todos = todos.map((todo) => {
			if (todo === toggled) {
				// return a new object
				return {
					id: todo.id,
					text: todo.text,
					done: !todo.done
				};
			}

			// return the same object
			return todo;
		});
	}
</script>

<div class="centered">
	<h1>todos</h1>

	<ul class="todos">
		{#each todos as todo (todo.id)}
			<Todo {todo} on:change={() => toggle(todo)} />
		{/each}
	</ul>
</div>

<style>
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}
</style>