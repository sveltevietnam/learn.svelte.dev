---
title: Thiết lập các Header
---

Bên trong một hàm `load` (cũng như trong [form actions](the-form-element), [hooks](handle) và [đường dẫn API](get-handlers), chúng ta sẽ tìm hiểu sau) bạn có quyền truy cập vào một hàm `setHeaders`, hàm này có thể được sử dụng để thiết lập các header _(tiêu đề)_ trên phản hồi.

Phổ biến nhất, bạn sẽ sử dụng nó để tùy chỉnh caching với [`Cache-Control`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control), nhưng trong bài hướng dẫn này, chúng ta sẽ làm một số điều ít được khuyến khích và nhiều kịch tính hơn:

```js
/// file: src/routes/+page.server.js
export function load(+++{ setHeaders }+++) {
+++	setHeaders({
		'Content-Type': 'text/plain'
	});+++
}
```

(Bạn có thể cần tải lại iframe để thấy tác dụng.)
