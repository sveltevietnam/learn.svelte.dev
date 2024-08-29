---
title: Other handlers
---

Tương tự, chúng ta cũng có thể thêm các handler cho các phương thức HTTP khác. Thêm một đường dẫn `/todo/[id]` bằng cách tạo một tệp `src/routes/todo/[id]/+server.js` với các handler `PUT` và `DELETE` để chuyển đổi và xóa các công việc, sử dụng các hàm `toggleTodo` và `deleteTodo` trong `src/lib/server/database.js`:

```js
/// file: src/routes/todo/[id]/+server.js
import * as database from '$lib/server/database.js';

export async function PUT({ params, request, cookies }) {
	const { done } = await request.json();
	const userid = cookies.get('userid');

	await database.toggleTodo({ userid, id: params.id, done });
	return new Response(null, { status: 204 });
}

export async function DELETE({ params, cookies }) {
	const userid = cookies.get('userid');

	await database.deleteTodo({ userid, id: params.id });
	return new Response(null, { status: 204 });
}
```

Vì không cần trả về dữ liệu gì cho trình duyệt, chúng ta sẽ trả về một [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) trống với trạng thái [204 No Content](https://http.dog/204).

Bây giờ, chúng ta có thể tương tác với endpoint này trong các event handlers:

```svelte
/// file: src/routes/+page.svelte
<label>
	<input
		type="checkbox"
		checked={todo.done}
		on:change={async (e) => {
			const done = e.currentTarget.checked;

+++			await fetch(`/todo/${todo.id}`, {
				method: 'PUT',
				body: JSON.stringify({ done }),
				headers: {
					'Content-Type': 'application/json'
				}
			});+++
		}}
	/>
	<span>{todo.description}</span>
	<button
		aria-label="Mark as complete"
		on:click={async (e) => {
+++			await fetch(`/todo/${todo.id}`, {
				method: 'DELETE'
			});

			data.todos = data.todos.filter((t) => t !== todo);+++
		}}
	></button>
</label>
```
