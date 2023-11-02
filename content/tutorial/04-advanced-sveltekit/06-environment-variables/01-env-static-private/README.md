---
title: $env/static/private
---

Biến môi trường - như khóa API và thông tin đăng nhập cơ sở dữ liệu - có thể được thêm vào tệp `.env`, và chúng sẽ được sử dụng trong ứng dụng của bạn.

> Bạn cũng có thể sử dụng các tệp `.env.local` hoặc `.env.[mode]` - xem [tài liệu Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) để biết thêm thông tin. Đảm bảo bạn thêm bất kỳ tệp nào chứa thông tin nhạy cảm vào tệp `.gitignore` của bạn!
>
> Biến môi trường trong `process.env` cũng có sẵn qua `$env/static/private`.

Trong bài tập này, bằng cách sử dụng biến môi trường, chúng ta muốn cho phép người dùng truy cập trang web nếu họ biết passphrase đúng.

Đầu tiên, trong `.env`, thêm một biến môi trường mới:

```env
/// file: .env
PASSPHRASE=+++"open sesame"+++
```

Mở `src/routes/+page.server.js`. Import `PASSPHRASE` từ `$env/static/private` và sử dụng nó bên trong [form action](/tutorial/the-form-element):

```js
/// file: src/routes/+page.server.js
import { redirect, fail } from '@sveltejs/kit';
+++import { PASSPHRASE } from '$env/static/private';+++

export function load({ cookies }) {
	if (cookies.get('allowed')) {
		throw redirect(307, '/welcome');
	}
}

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

		if (data.get('passphrase') === +++PASSPHRASE+++) {
			cookies.set('allowed', 'true', {
				path: '/'
			});

			throw redirect(303, '/welcome');
		}

		return fail(403, {
			incorrect: true
		});
	}
};
```

Trang web giờ có thể truy cập cho bất kỳ ai biết passphrase đúng.

## Giữ bí mật

Điều quan trọng là dữ liệu nhạy cảm không vô tình bị gửi tới trình duyệt, nơi nó có thể dễ dàng bị đánh cắp bởi hacker và những kẻ gian.

SvelteKit giúp bạn dễ dàng ngăn chặn điều này xảy ra. Lưu ý điều gì sẽ xảy ra nếu chúng ta thử import `PASSPHRASE` vào `src/routes/+page.svelte`:

```svelte
/// file: src/routes/+page.svelte
<script>
	+++import { PASSPHRASE } from '$env/static/private';+++
	export let form;
</script>
```

Một bảng lỗi xuất hiện, thông báo cho chúng ta rằng `$env/static/private` không thể được import vào mã chạy ở phía client. Nó chỉ có thể được import vào các mô-đun server:

- `+page.server.js`
- `+layout.server.js`
- `+server.js`
- bất kỳ mô-đun nào kết thúc bằng `.server.js`
- bất kỳ mô-đun nào trong `src/lib/server`

Lần lượt, những mô-đun này chỉ có thể được import bởi những mô-đun server _khác_.

## Tĩnh và động

Chữ `static` trong `$env/static/private` chỉ ra rằng những giá trị này được biết tại thời điểm build và có thể được _thay thế tĩnh_. Điều này giúp ích trong việc tối ưu hóa:

```js
/// no-file
import { FEATURE_FLAG_X } from '$env/static/private';

if (FEATURE_FLAG_X === 'enabled') {
	// mã ở đây sẽ bị xóa khỏi kết quả build
	// nếu FEATURE_FLAG_X không bằng enabled
}
```

Trong một số trường hợp, bạn có thể cần tham chiếu đến các biến môi trường là _động_ - nói cách khác, ta không biết cho đến khi chúng ta chạy ứng dụng. Chúng ta sẽ đề cập đến trường hợp này trong bài tập tiếp theo.
