---
title: The RequestEvent object
---

Đối tượng `event` (một instance của [`RequestEvent`](https://kit.svelte.dev/docs/types#public-types-requestevent)) được truyền vào `handle` cũng chính là `event` trong [API routes](get-handlers) ở `+server.js`, [form actions](the-form-element) ở `+page.server.js`, và các hàm `load` trong `+page.server.js` và `+layout.server.js`.

Nó chứa một số thuộc tính hữu ích và phương thức, một số trong số đó chúng ta đã gặp:

* `cookies` — [API cookies](cookies)
* `fetch` — [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) tiêu chuẩn, với các tính năng bổ sung
* `getClientAddress()` — một hàm để lấy địa chỉ IP của client
* `isDataRequest` — `true` nếu trình duyệt đang yêu cầu dữ liệu cho một trang trong quá trình điều hướng ở phía client, `false` nếu một trang/route đang được yêu cầu trực tiếp
* `locals` — nơi để đặt dữ liệu tùy ý
* `params` — các tham số route
* `request` — [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) object
* `route` — một object với một thuộc tính `id` đại diện cho tuyến đường đã được khớp
* `setHeaders(...)` — một hàm để [setting HTTP headers](headers) cho response
* `url` — một [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) object đại diện cho request hiện tại

Để thuận tiện, ta có thể thêm dữ liệu vào `event.locals` trong `handle` để truy cập được trong các hàm `load` tiếp theo:


```js
/// file: src/hooks.server.js
export async function handle({ event, resolve }) {
	+++event.locals.answer = 42;+++
	return await resolve(event);
}
```

```js
/// file: src/routes/+page.server.js
export function load(+++event+++) {
	return {
		message: `Câu trả lời là ${+++event.locals.answer+++}`
	};
}
```

