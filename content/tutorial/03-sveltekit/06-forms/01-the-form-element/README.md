---
title: Phần tử <form>
---

Trong [chương về tải dữ liệu](page-data), chúng ta đã thấy cách lấy dữ liệu từ server tới trình duyệt. Đôi khi, bạn cần gửi dữ liệu theo hướng ngược lại, và đó là lúc `<form>` — cách mà nền tảng web gửi dữ liệu — xuất hiện.

Chúng ta hãy xây dựng một ứng dụng todo. Chúng ta đã có một cơ sở dữ liệu trong bộ nhớ được thiết lập trong `src/lib/server/database.js`, và hàm `load` trong `src/routes/+page.server.js` sử dụng API [`cookies`](https://kit.svelte.dev/docs/load#cookies) để chúng ta có thể có danh sách công việc cụ thể cho từng người dùng, nhưng chúng ta cần thêm một `<form>` để tạo todo mới:

```svelte
/// file: src/routes/+page.svelte
<h1>todos</h1>

+++<form method="POST">
	<label>
		Thêm todo:
		<input
			name="description"
			autocomplete="off"
		/>
	</label>
</form>+++

<ul class="todos">
```

Nếu chúng ta gõ gì đó vào <input> và nhấn Enter, trình duyệt sẽ tạo một yêu cầu POST (vì thuộc tính `method="POST"`) đến trang hiện tại. Nhưng điều đó dẫn đến một lỗi, vì chúng ta chưa tạo một _hành động_ ở phía server để xử lý yêu cầu POST. Hãy làm điều đó ngay bây giờ:

```js
/// file: src/routes/+page.server.js
import * as db from '$lib/server/database.js';

export function load({ cookies }) {
	// ...
}

+++export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		db.createTodo(cookies.get('userid'), data.get('description'));
	}
};+++
```

`request` là một đối tượng [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) tiêu chuẩn; `await request.formData()` trả về một [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) instance.

Khi chúng ta nhấn Enter, cơ sở dữ liệu được cập nhật và trang tải lại với dữ liệu mới.

Lưu ý: chúng ta không cần viết bất kỳ mã fetch nào hoặc những câu lệnh tương tự — cập nhật dữ liệu tự động xảy ra. Và vì chúng ta đang sử dụng phần tử <form>, ứng dụng này sẽ hoạt động ngay cả khi JavaScript bị tắt hoặc không khả dụng.
