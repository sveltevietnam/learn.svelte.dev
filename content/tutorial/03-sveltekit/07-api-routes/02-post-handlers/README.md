---
title: POST handlers
---

Bạn cũng có thể thêm các handler thay đổi dữ liệu, chẳng hạn như `POST`. Trong hầu hết các trường hợp, bạn nên sử dụng [form actions](the-form-element) — bạn sẽ viết ít mã hơn và ứng dụng sẽ hoạt động mà không cần JavaScript, làm cho nó mạnh mẽ hơn.

Bên trong event handler `keydown` của phần tử `<input>` 'thêm todo', chúng ta hãy gửi một số dữ liệu đến server:

```svelte
/// file: src/routes/+page.svelte
<input
	type="text"
	autocomplete="off"
	on:keydown={async (e) => {
		if (e.key === 'Enter') {
			const input = e.currentTarget;
			const description = input.value;

+++			const response = await fetch('/todo', {
				method: 'POST',
				body: JSON.stringify({ description }),
				headers: {
					'Content-Type': 'application/json'
				}
			});+++

			input.value = '';
		}
	}}
/>
```

Ở đây, chúng ta đang gửi một số JSON đến API route _(đường dẫn API)_ `/todo` — sử dụng một `userid` từ cookies của người dùng — và nhận `id` của todo mới được tạo ra trong response _(phản hồi)_.

Tạo đường dẫn /todo bằng cách thêm một tệp `src/routes/todo/+server.js` với một `POST` handler gọi `createTodo` trong `src/lib/server/database.js`:

```js
/// file: src/routes/todo/+server.js
import { json } from '@sveltejs/kit';
import * as database from '$lib/server/database.js';

export async function POST({ request, cookies }) {
	const { description } = await request.json();

	const userid = cookies.get('userid');
	const { id } = await database.createTodo({ userid, description });

	return json({ id }, { status: 201 });
}
```
Tương tự như với các hàm `load` và form actions, `request` là một đối tượng [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) tiêu chuẩn; `await request.json()` trả về dữ liệu mà chúng ta đã gửi từ event handler _(bộ xử lý sự kiện)_.

Chúng ta đang trả về một phản hồi với trạng thái [201 Created](https://httpstatusdogs.com/201-created) và `id` của todo mới được tạo trong cơ sở dữ liệu của chúng ta. Trong event handler, chúng ta có thể sử dụng nó để cập nhật trang:

```svelte
/// file: src/routes/+page.svelte
<input
	type="text"
	autocomplete="off"
	on:keydown={async (e) => {
		if (e.key === 'Enter') {
			const input = e.currentTarget;
			const description = input.value;

			const response = await fetch('/todo', {
				method: 'POST',
				body: JSON.stringify({ description }),
				headers: {
					'Content-Type': 'application/json'
				}
			});

+++			const { id } = await response.json();

			data.todos = [...data.todos, {
				id,
				description
			}];+++

			input.value = '';
		}
	}}
/>
```

> Bạn chỉ nên cập nhật `data` hiển thị trên trang nếu biết chắc rằng khi thực hiện tải lại trang kết quả nhận được sẽ như vậy.