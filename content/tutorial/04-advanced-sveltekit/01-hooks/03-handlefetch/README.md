---
title: handleFetch
---

Đối tượng `event` chứa phương thức `fetch` hoạt động giống như [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) tiêu chuẩn, nhưng với những tính năng đặc biệt:

- có thể thực hiện các yêu cầu có chứng thực trên server, vì nó kế thừa các header `cookie` và `authorization` từ yêu cầu đầu vào.
- có thể thực hiện các yêu cầu với đường dẫn tương đối (relative requests) trên server (thông thường, `fetch` chỉ nhận URL có gốc (origin) khi sử dụng trong bối cảnh server).
- internal requests _(Các yêu cầu nội bộ)_ (ví dụ: đối với route `+server.js`) được chuyển trực tiếp đến hàm handler khi chạy trên server, mà không phải cấu hình gọi HTTP.

Hành vi của nó có thể được sửa đổi bằng `handleFetch` hook, mặc định nó trông như thế này:


```js
/// file: src/hooks.server.js
export async function handleFetch({ event, request, fetch }) {
	return await fetch(request);
}
```

Ví dụ, thay vì phản hồi các yêu cầu đến `src/routes/a/+server.js` chúng ta có thể sử dụng phản hồi từ `src/routes/b/+server.js`:

```js
/// file: src/hooks.server.js
export async function handleFetch({ event, request, fetch }) {
+++	const url = new URL(request.url);
	if (url.pathname === '/a') {
		return await fetch('/b');
	}+++

	return await fetch(request);
}
```

Sau này, khi chúng ta đề cập đến [universal `load` functions](universal-load-functions), chúng ta sẽ thấy rằng `event.fetch` cũng có thể được gọi từ trình duyệt. Trong tình huống đó, `handleFetch` sẽ hữu ích nếu bạn có các yêu cầu đến một URL công cộng như `https://api.yourapp.com` từ trình duyệt, các yêu cầu này nên được chuyển hướng đến một URL nội bộ (bypass qua bất kỳ proxy và load balancer nào đứng giữa server API và internet công cộng) khi chạy trên server.