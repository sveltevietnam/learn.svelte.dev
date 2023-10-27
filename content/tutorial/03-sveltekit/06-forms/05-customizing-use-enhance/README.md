---
title: Tùy chỉnh use:enhance
---

Với `use:enhance`, chúng ta có thể đi xa hơn việc chỉ mô phỏng hành vi tự nhiên của trình duyệt. Bằng cách cung cấp một callback _(hàm gọi lại)_, chúng ta có thể thêm các thứ như **pending states** và **optimistic UI**. Hãy mô phỏng việc mạng chậm bằng cách thêm độ trễ vào hai action của chúng ta:

```js
/// file: src/routes/+page.server.js
export const actions = {
	create: async ({ cookies, request }) => {
		+++await new Promise((fulfil) => setTimeout(fulfil, 1000));+++
		...
	},

	delete: async ({ cookies, request }) => {
		+++await new Promise((fulfil) => setTimeout(fulfil, 1000));+++
		...
	}
};
```

Khi chúng ta tạo hoặc xóa mục, giờ đây nó mất hết một giây trước khi giao diện người dùng cập nhật, khiến người dùng tự hỏi liệu họ đã làm sai điều gì đó hay không. Để giải quyết vấn đề đó, chúng ta sẽ thêm một số local state _(trạng thái cục bộ)_...

```svelte
/// file: src/routes/+page.svelte
<script>
	import { fly, slide } from 'svelte/transition';
	import { enhance } from '$app/forms';

	export let data;
	export let form;

+++	let creating = false;
	let deleting = [];+++
</script>
```

...và chuyển đổi `creating` bên trong `use:enhance` đầu tiên:

```svelte
/// file: src/routes/+page.svelte
<form
	method="POST"
	action="?/create"
+++	use:enhance={() => {
		creating = true;

		return async ({ update }) => {
			await update();
			creating = false;
		};
	}}+++
>
	<label>
		thêm todo:
		<input
			+++disabled={creating}+++
			name="description"
			value={form?.description ?? ''}
			autocomplete="off"
			required
		/>
	</label>
</form>
```

Sau đó chúng ta có thể hiển thị một thông báo trong khi chúng ta đang lưu dữ liệu:

```svelte
/// file: src/routes/+page.svelte
<ul class="todos">
	<!-- ... -->
</ul>

+++{#if creating}
	<span class="saving">Đang lưu...</span>
{/if}+++
```

Trong trường hợp xóa, thực sự không cần phải đợi máy chủ xác minh bất cứ thứ gì — chúng ta có thể cập nhật giao diện người dùng ngay lập tức:

```svelte
/// file: src/routes/+page.svelte
<ul class="todos">
	{#each +++data.todos.filter((todo) => !deleting.includes(todo.id))+++ as todo (todo.id)}
		<li in:fly={{ y: 20 }} out:slide>
			<form
				method="POST"
				action="?/delete"
				+++use:enhance={() => {
					deleting = [...deleting, todo.id];
					return async ({ update }) => {
						await update();
						deleting = deleting.filter((id) => id !== todo.id);
					};
				}}+++
			>
				<input type="hidden" name="id" value={todo.id} />
				<button aria-label="Mark as complete">✔</button>

				{todo.description}
			</form>
		</li>
	{/each}
</ul>
```

> `use:enhance` có thể tùy chỉnh rất nhiều — bạn có thể `cancel()` đơn gởi, xử lý chuyển hướng, kiểm soát xem form có được đặt lại hay không, vân vân... [Xem tài liệu](https://kit.svelte.dev/docs/modules#$app-forms-enhance) để biết chi tiết đầy đủ.
