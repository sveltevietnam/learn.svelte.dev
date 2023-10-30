---
title: Fallback errors
---

Khi có lỗi xảy ra trong quá trình tải dữ liệu ở root layout hoăc trong khi render trang lỗi - SvelteKit sẽ chuyển sang một trang lỗi tĩnh.

Thêm một tệp mới `src/routes/+layout.server.js` để thấy điều này diễn ra:

```js
/// file: src/routes/+layout.server.js
export function load() {
	throw new Error('yikes');
}
```

Bạn có thể tùy chỉnh trang fallback error. Tạo một tệp `src/error.html`:

```html
/// file: src/error.html
<h1>Kết thúc</h1>
<p>Code %sveltekit.status%</p>
<p>%sveltekit.error.message%</p>
```

Tệp này có thể bao gồm:

- `%sveltekit.status%` — mã trạng thái HTTP
- `%sveltekit.error.message%` — thông báo lỗi
