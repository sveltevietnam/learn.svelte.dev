---
title: GET handlers
---

SvelteKit cho phép bạn tạo ra không chỉ các trang mà còn các _API route_ bằng cách thêm một tệp `+server.js` và xuất các hàm tương ứng với các phương thức HTTP: `GET`, `PUT`, `POST`, `PATCH` và `DELETE`.

Khi bạn nhấp vào nút thì ứng dụng này sẽ lấy dữ liệu từ một đường dẫn API `/roll` . Tạo đường dẫn đó bằng cách thêm một tệp `src/routes/roll/+server.js`:


```js
/// file: src/routes/roll/+server.js
export function GET() {
	const number = Math.floor(Math.random() * 6) + 1;

	return new Response(number, {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
```

 Bây giờ, khi bạn nhấp vào cái nút, nó sẽ hoạt động.

Request handlers _(Bộ xử lý yêu cầu)_ phải trả về một đối tượng [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response). Vì thường xuyên trả về JSON từ một API route _(đường dẫn API)_, nên SvelteKit đã cung cấp một hàm thuận tiện để tạo ra những phản hồi này:

```js
/// file: src/routes/roll/+server.js
+++import { json } from '@sveltejs/kit';+++

export function GET() {
	const number = Math.floor(Math.random() * 6) + 1;

---	return new Response(number, {
		headers: {
			'Content-Type': 'application/json'
		}
	});---
+++	return json(number);+++
}
```
