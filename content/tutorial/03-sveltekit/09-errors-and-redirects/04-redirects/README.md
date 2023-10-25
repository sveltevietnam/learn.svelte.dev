---
title: Chuyển hướng
---

Chúng ta cũng có thể sử dụng cơ chế `throw` để chuyển hướng từ một trang đến trang khác.

Tạo một hàm `load` mới trong `src/routes/a/+page.server.js`:

```js
/// file: src/routes/a/+page.server.js
import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(307, '/b');
}
```

Việc chuyển đến `/a` sẽ đưa chúng ta thẳng đến `/b`.

Bạn có thể `throw redirect(...)` trong các hàm `load`, form actions, API routes và hook `handle` - chúng ta sẽ thảo luận vấn đề này trong một chương sau.

Các status codes phổ biến nhất mà bạn sẽ sử dụng:

303 — đối với form actions, sau khi submit thành công
307 — đối với chuyển hướng tạm thời
308 — đối với chuyển hướng vĩnh viễn