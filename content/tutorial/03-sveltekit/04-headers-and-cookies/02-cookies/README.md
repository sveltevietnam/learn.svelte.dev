---
title: Đọc và ghi cookies
---

Hàm [`setHeaders`](headers) không thể được dùng với header `Set-Cookie`. Thay vào đó, bạn nên sử dụng API `cookies`.

Trong các hàm `load` của bạn, bạn có thể đọc cookie bằng cách sử dụng `cookies.get(name, options)`:

```js
/// file: src/routes/+page.server.js
export function load(+++{ cookies }+++) {
	+++const visited = cookies.get('visited');+++

	return {
		visited
	};
}
```

Để đặt một cookie, sử dụng `cookies.set(name, value, options)`. Khuyến khích bạn nên cấu hình rõ `path` _(đường dẫn)_ khi đặt một cookie, vì hành vi mặc định của trình duyệt — hơi vô ích — là đặt cookie ở phần cha của đường dẫn hiện tại.

```js
/// file: src/routes/+page.server.js
export function load({ cookies }) {
	const visited = cookies.get('visited');

	+++cookies.set('visited', 'true', { path: '/' });+++

	return {
		visited
	};
}
```

Bây giờ, nếu bạn tải lại iframe, `Chào người lạ!` sẽ trở thành `Chào bạn!`.

`cookies.set(name, ...)` làm tiêu đề `Set-Cookie` sẽ được ghi, nhưng nó _cũng_ cập nhật bản đồ nội bộ của cookies, có nghĩa là sau đó nếu `cookies.get(name)` được gọi trong cùng một yêu cầu sẽ trả về giá trị đã được cập nhật. Tiến trình này như sau, API `cookies` sử dụng package `cookie` thường gặp — các tùy chọn được truyền vào `cookies.get` và `cookies.set` tương ứng với các tùy chọn cho `parse` và `serialize` từ [tài liệu](https://github.com/jshttp/cookie#api) của `cookie`. SvelteKit đặt các giá trị mặc định sau để làm cho cookie của bạn an toàn hơn:

```js
/// no-file
{
	httpOnly: true,
	secure: true,
	sameSite: 'lax'
}
```
