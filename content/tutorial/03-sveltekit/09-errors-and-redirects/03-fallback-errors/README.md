---
title: Fallback errors
---

Nếu mọi thứ diễn ra _thực sự_ sai — như một lỗi xảy ra trong khi tải root layout data _(dữ liệu gốc của bố cục)_, hoặc trong khi render trang lỗi — SvelteKit sẽ chuyển sang một trang lỗi tĩnh.

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
- `%sveltekit.error.message%` — thông điệp lỗi
