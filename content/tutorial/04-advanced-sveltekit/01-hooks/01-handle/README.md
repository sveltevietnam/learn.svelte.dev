---
title: handle
---

SvelteKit cung cấp một vài _hooks_ — là cách để chặn và ghi đè lên hành vi mặc định của framework.

Hook cơ bản nhất là `handle`, nằm trong `src/hooks.server.js`. Nó nhận một đối tượng `event` cùng với một hàm `resolve`, và trả về một [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response).

`resolve` là nơi điều kỳ diệu xảy ra: SvelteKit so khớp URL yêu cầu đến với một route của ứng dụng, imports mã tương ứng (`+page.server.js` và các tệp `+page.svelte` vv), tải dữ liệu cần thiết bởi route và tạo ra response _(phản hồi)_.

`handle` hook mặc định trông như thế này:

```js
/// file: src/hooks.server.js
export async function handle({ event, resolve }) {
	return await resolve(event);
}
```

Đối với trang (trái ngược với [API routes](get-handlers)), bạn có thể sửa đổi HTML được tạo ra bằng `transformPageChunk`:

```js
/// file: src/hooks.server.js
export async function handle({ event, resolve }) {
	return await resolve(event, {
+++		transformPageChunk: ({ html }) => html.replace(
			'<body',
			'<body style="color: hotpink"'
		)+++
	});
}
```

Bạn cũng có thể tạo ra các route hoàn toàn mới:

```js
/// file: src/hooks.server.js
export async function handle({ event, resolve }) {
+++	if (event.url.pathname === '/ping') {
		return new Response('pong');
	}+++

	return await resolve(event, {
		transformPageChunk: ({ html }) => html.replace(
			'<body',
			'<body style="color: hotpink"'
		)
	});
}
```
