---
title: Sử dụng dữ liệu từ trang cha
---

Như chúng ta đã thấy trong phần giới thiệu về [dữ liệu bố cục](/tutorial/layout-data), các thành phần `+page.svelte` và `+layout.svelte` có quyền truy cập vào tất cả mọi thứ được trả về từ các hàm `load` cha.

Đôi khi, việc cho các hàm `load` tự thân có quyền truy cập dữ liệu từ cha là hữu ích. Điều này có thể được thực hiện bằng cách sử dụng `await parent()`.

Để thấy cách nó hoạt động, chúng ta sẽ cộng hai số được trả về từ hai hàm `load` khác nhau. Trước hết, hãy trả về một số dữ liệu từ `src/routes/+layout.server.js`:

```js
/// file: src/routes/+layout.server.js
export function load() {
	return { +++a: 1+++ };
}
```

Sau đó, lấy dữ liệu đó trong `src/routes/sum/+layout.js`:

```js
/// file: src/routes/sum/+layout.js
export async function load(+++{ parent }+++) {
	+++const { a } = await parent();+++
	return { +++b: a + 1+++ };
}
```

> Lưu ý rằng một hàm `load` [phổ rộng](/tutorial/universal-load-functions) có thể lấy dữ liệu từ một hàm `load` _server_ cha. Ngược lại thì không được — một hàm `load` server chỉ có thể lấy dữ liệu cha từ một hàm `load` khác trên server.

Cuối cùng, trong `src/routes/sum/+page.js`, lấy dữ liệu phần tử cha từ cả hai hàm `load`:

```js
/// file: src/routes/sum/+page.js
export async function load(+++{ parent }+++) {
	+++const { a, b } = await parent();+++
	return { +++c: a + b+++ };
}
```

> Cẩn thận để không tạo ra thác nước (waterfalls) khi sử dụng `await parent()`. Nếu bạn có thể `fetch` dữ liệu khác không phụ thuộc vào dữ liệu cha, hãy thực hiện điều đó trước.
