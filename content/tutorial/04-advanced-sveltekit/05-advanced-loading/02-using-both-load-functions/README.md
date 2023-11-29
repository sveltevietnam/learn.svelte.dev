---
title: Sử dụng cả hai hàm tải
---

Đôi khi, bạn có thể cần sử dụng một hàm tải server và một hàm tải phổ rộng cùng một lúc. Ví dụ, bạn có thể cần trả về dữ liệu từ server, nhưng cũng trả về một giá trị không thể serialized như dữ liệu server.

Trong ví dụ này, chúng ta muốn trả về một component khác nhau từ `load` tùy thuộc vào việc dữ liệu chúng ta nhận được từ `src/routes/+page.server.js` có phải là `cool` hay không.

Chúng ta có thể truy cập dữ liệu server trong `src/routes/+page.js` thông qua thuộc tính `data`:

```js
/// file: src/routes/+page.js
export async function load(+++{ data }+++) {
	const module = +++data.cool+++
		? await import('./CoolComponent.svelte')
		: await import('./BoringComponent.svelte');

	return {
		component: module.default,
		message: +++data.message+++
	};
}
```

> Lưu ý rằng dữ liệu không được hợp nhất (merge) — chúng ta phải trả về `message` một cách rõ ràng từ hàm tải phổ rộng.
