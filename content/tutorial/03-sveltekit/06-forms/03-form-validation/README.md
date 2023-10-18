---
title: Validation
---

Users are a mischievous bunch, who will submit all kinds of nonsensical data if given the chance. To prevent them from causing chaos, it's important to validate form data.

The first line of defense is the browser's [built-in form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation), which makes it easy to, for example, mark an `<input>` as required:
Người dùng rất tinh nghịch, họ sẽ gửi mọi loại dữ liệu vô nghĩa nếu có cơ hội. Để ngăn họ gây ra hỗn loạn, việc kiểm tra tính hợp lệ của dữ liệu biểu mẫu là rất quan trọng.

Lớp kiểm tra đầu tiên là [built-in form validation _(kiểm tra tích hợp trong form)_](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation) của trình duyệt, ví dụ đánh dấu một `<input>` là `required`:

```svelte
/// file: src/routes/+page.svelte
<form method="POST" action="?/create">
	<label>
		add a todo
		<input
			name="description"
			autocomplete="off"
			+++required+++
		/>
	</label>
</form>
```

Hãy thử nhấn Enter khi <input> trống.

This kind of validation is helpful, but insufficient. Some validation rules (e.g. uniqueness) can't be expressed using `<input>` attributes, and in any case, if the user is an elite hacker they might simply delete the attributes using the browser's devtools. To guard against these sorts of shenanigans, you should always use server-side validation.

In `src/lib/server/database.js`, validate that the description exists and is unique:
Loại kiểm tra này hữu ích, nhưng không đủ. Một số quy tắc kiểm tra (ví dụ: sự độc nhất) không thể được biểu diễn bằng cách sử dụng các thuộc tính <input>, và trong một vài trường hợp, nếu người dùng là một hacker giỏi, họ có thể đơn giản xóa các thuộc tính bằng cách sử dụng công cụ phát triển của trình duyệt. Để đề phòng những trò chơi này, bạn luôn nên sử dụng kiểm tra tính hợp lệ từ phía server _(server-side validation)_. 

Trong `src/lib/server/database.js`, hãy kiểm tra xem mô tả có tồn tại và là duy nhất không:

```js
/// file: src/lib/server/database.js
export function createTodo(userid, description) {
+++	if (description === '') {
		throw new Error('todo cần có mô tả');
	}+++

	const todos = db.get(userid);

+++	if (todos.find((todo) => todo.description === description)) {
		throw new Error('todo phải là duy nhất');
	}+++

	todos.push({
		id: crypto.randomUUID(),
		description,
		done: false
	});
}
```

Hãy thử gửi một todo trùng lặp. Ôi chết! SvelteKit đưa chúng ta đến một trang lỗi trông không thân thiện cho lắm. Trên server, chúng ta thấy một lỗi 'todo phải là duy nhất', nhưng SvelteKit giấu những thông báo lỗi không mong muốn khỏi người dùng vì chúng thường chứa dữ liệu nhạy cảm.

Sẽ tốt hơn nếu cung cấp một chỉ báo về điều gì đã sai để người dùng có thể sửa chữa trên cùng một trang. Để làm điều này, chúng ta có thể sử dụng hàm `fail` để trả về dữ liệu từ action cùng với một mã trạng thái HTTP phù hợp:

```js
/// file: src/routes/+page.server.js
+++import { fail } from '@sveltejs/kit';+++
import * as db from '$lib/server/database.js';

export function load({ cookies }) {...}

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();

+++		try {+++
			db.createTodo(cookies.get('userid'), data.get('description'));
+++		} catch (error) {
			return fail(422, {
				description: data.get('description'),
				error: error.message
			});
		}+++
	}
```

In `src/routes/+page.svelte`, we can access the returned value via the `form` prop, which is only ever populated after a form submission:
Trong `src/routes/+page.svelte`, chúng ta có thể truy cập giá trị được trả về qua prop `form`, chỉ được điền sau khi một form được gửi:

```svelte
/// file: src/routes/+page.svelte
<script>
	export let data;
	+++export let form;+++
</script>

<h1>todos</h1>

+++{#if form?.error}
	<p class="error">{form.error}</p>
{/if}+++

<form method="POST" action="?/create">
	<label>
		thêm a todo:
		<input
			name="description"
			+++value={form?.description ?? ''}+++
			autocomplete="off"
			required
		/>
	</label>
</form>
```

> Bạn cũng có thể trả về dữ liệu từ một action _mà không cần_ bao nó trong `fail` — ví dụ để hiển thị một thông báo 'thành công!' khi dữ liệu đã được lưu — và nó sẽ được truy cập qua prop `form`.
