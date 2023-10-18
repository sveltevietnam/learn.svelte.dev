---
title: form actions được đặt tên
---

Một trang chỉ có một hành động duy nhất thì thực tế là khá hiếm. Hầu hết trường hợp, bạn sẽ cần có nhiều hành động trên một trang. Trong ứng dụng này, việc tạo một todo mới là không đủ — chúng ta muốn xóa chúng sau khi chúng đã hoàn thành.

Bắt đầu bằng cách thay thế hành động `default` của chúng ta bằng các hành động có tên `create` và `delete`:

```js
/// file: src/routes/+page.server.js
export const actions = {
	+++create+++: async ({ cookies, request }) => {
		const data = await request.formData();
		db.createTodo(cookies.get('userid'), data.get('description'));
	}+++,+++

+++	delete: async ({ cookies, request }) => {
		const data = await request.formData();
		db.deleteTodo(cookies.get('userid'), data.get('id'));
	}+++
};
```

> Default actions _(Hành động mặc định)_ không thể tồn tại cùng với các hành động có tên.

Phần tử <form> có một thuộc tính tùy chọn là `action`, tương tự như thuộc tính `href` của phần tử <a>. Chúng ta hãy cập nhật form hiện tại để nó trỏ đến hành động `create` mới:

```svelte
/// file: src/routes/+page.svelte
<form method="POST" +++action="?/create"+++>
	<label>
		thêm todo:
		<input
			name="description"
			autocomplete="off"
		/>
	</label>
</form>
```

> Thuộc tính `action` có thể là bất kỳ URL nào — nếu hành động được xác định trên một trang khác, ví dụ như `/todos?/create`. Vì hành động ở trang này, nên chúng ta có thể bỏ qua toàn bộ đường dẫn và chỉ cần thêm ký tự `?` ở trước.

Tiếp theo, chúng ta muốn tạo một form cho mỗi todo, kèm theo một `<input>` ẩn duy nhất để xác định nó:

```svelte
/// file: src/routes/+page.svelte
<ul class="todos">
	{#each data.todos as todo (todo.id)}
		<li>
+++			<form method="POST" action="?/delete">
				<input type="hidden" name="id" value={todo.id} />
				<span>{todo.description}</span>
				<button aria-label="Mark as complete" />
			</form>+++
		</li>
	{/each}
</ul>
```
