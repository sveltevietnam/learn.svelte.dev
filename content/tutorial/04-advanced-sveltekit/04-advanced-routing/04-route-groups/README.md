---
title: nhóm Route
---

Như chúng ta đã thấy trong [giới thiệu về routing](/tutorial/layouts), layouts là một cách để chia sẻ UI và logic tải dữ liệu giữa các route khác nhau.

Đôi khi thật tiện khi sử dụng layouts mà không ảnh hưởng đến route — ví dụ, bạn có thể cần phải xác thực trước khi truy cập các route `/app` và `/account`, trong khi trang `/about` của bạn thì không. Chúng ta có thể làm điều này với một _nhóm route_, đó là một thư mục trong dấu ngoặc đơn.

Tạo một nhóm `(authed)` bằng cách đổi tên `account` thành `(authed)/account` sau đó đổi tên `app` thành `(authed)/app`.

Bây giờ chúng ta có thể kiểm soát quyền truy cập vào các route này bằng cách tạo `src/routes/(authed)/+layout.server.js`:

```js
/// file: src/routes/(authed)/+layout.server.js
import { redirect } from '@sveltejs/kit';

export function load({ cookies, url }) {
	if (!cookies.get('logged_in')) {
		throw redirect(303, `/login?redirectTo=${url.pathname}`);
	}
}
```

Nếu bạn cố gắng truy cập các trang này, bạn sẽ được chuyển hướng đến route `/login`, có một form action trong `src/routes/login/+page.server.js` thiết lập cookie `logged_in`.

Chúng ta cũng có thể thêm một số UI vào hai route này bằng cách thêm tệp `src/routes/(authed)/+layout.svelte`:

```svelte
/// file: src/routes/(authed)/+layout.svelte
<slot></slot>

<form method="POST" action="/logout">
	<button>đăng xuất</button>
</form>
```
