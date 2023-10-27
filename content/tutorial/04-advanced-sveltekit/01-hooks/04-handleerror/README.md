---
title: handleError
---

Hook `handleError` giúp bạn chặn các lỗi không mong muốn _(unexpected errors)_ và kích hoạt một số hành vi, như gửi ping tới một kênh Slack hoặc gửi dữ liệu đến một dịch vụ theo dõi lỗi.

Như bạn nhớ từ [bài tập trước đó](error-basics), một lỗi là _unexpected_  nếu nó không được tạo ra với helper `error` từ `@sveltejs/kit`. Thông thường, điều này có nghĩa là có điều gì đó trong ứng dụng của bạn cần sửa. Hành vi mặc định là ghi lại lỗi:


```js
/// file: src/hooks.server.js
export function handleError({ event, error }) {
	console.error(error.stack);
}
```

Nếu bạn chuyển đến `/the-bad-place`, bạn sẽ thấy điều này diễn ra - trang lỗi được hiển thị, và nếu bạn mở terminal (sử dụng nút ở bên phải của thanh URL), bạn sẽ thấy thông báo từ `src/routes/the-bad-place/+page.server.js`.

Lưu ý rằng chúng ta không hiển thị thông báo lỗi cho người dùng. Điều này là do thông báo lỗi có thể bao gồm thông tin nhạy cảm có thể gây hiểu lầm cho người dùng của bạn ở mức tốt nhất, và ở tình huống xấu nhất có thể mang lại lợi ích cho kẻ xấu. Thay vào đó, error object có sẵn cho ứng dụng của bạn - nằm tại `$page.error` trong các trang `+error.svelte` của bạn, hoặc `%sveltekit.error%` trong tệp `src/error.html` dự phòng của bạn - chỉ là như thế này:

```js
/// no-file
{
	message: 'Internal Error' // hoặc 'Not Found' cho 404
}
```

Trong một số tình huống, bạn có thể muốn tùy chỉnh object này. Để làm điều này, bạn có thể trả về một object từ `handleError`:

```js
/// file: src/hooks.server.js
export function handleError({ event, error }) {
	console.error(error.stack);

	return {
		message: 'mọi thứ đều ổn',
		code: 'JEREMYBEARIMY'
	};
}
```

Bây giờ bạn có thể tìm hiểu các thuộc tính khác ngoài `message` trong trang lỗi tùy chỉnh. Tạo `src/routes/+error.svelte`:

```svelte
/// file: src/routes/+error.svelte
<script>
	import { page } from '$app/stores';
</script>

<h1>{$page.status}</h1>
<p>{$page.error.message}</p>
<p>error code: {$page.error.code}</p>
```
