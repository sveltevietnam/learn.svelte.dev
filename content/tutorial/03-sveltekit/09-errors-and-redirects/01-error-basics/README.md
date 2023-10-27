---
title: Cơ bản
---

Trong SvelteKit, có hai loại lỗi — _expected_ errors và _unexpected_ errors.

Expected error là một lỗi được tạo ra bằng helper [`error`](https://kit.svelte.dev/docs/modules#sveltejs-kit-error) từ `@sveltejs/kit`, như trong `src/routes/expected/+page.server.js`:


```js
/// file: src/routes/expected/+page.server.js
import { error } from '@sveltejs/kit';

export function load() {
	throw error(420, 'Bình tĩnh');
}
```

Bất kỳ lỗi nào khác — như trong `src/routes/unexpected/+page.server.js` — được coi là lỗi unexpected:

```js
/// file: src/routes/unexpected/+page.server.js
export function load() {
	throw new Error('Kaboom!');
}
```

Khi bạn throw một lỗi expected, bạn đang bảo SvelteKit 'đừng lo, tôi biết tôi đang làm gì ở đây'. Ngược lại, một lỗi unexpected được giả định là một lỗi trong ứng dụng của bạn. Khi một lỗi unexpected xảy ra, message và stack trace của nó sẽ được ghi vào console.

> Trong chương sau, chúng ta sẽ tìm hiểu về cách thêm xử lý lỗi tùy chỉnh bằng cách sử dụng hook `handleError`.

Nếu bạn nhấp vào các liên kết trong ứng dụng này, bạn sẽ nhận thức được một thông báo khác biệt quan trọng: thông điệp expected error được hiển thị cho người dùng, trong khi thông điệp unexpected error bị biên tập lại và được thay thế bằng một thông điệp 'Internal Error' tổng quát và một status code 500. Do thông điệp lỗi có thể chứa dữ liệu nhạy cảm.