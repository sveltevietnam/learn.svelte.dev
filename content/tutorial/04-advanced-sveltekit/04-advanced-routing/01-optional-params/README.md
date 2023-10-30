---
title: Tham số tùy chọn
---

Trong chương đầu tiên về [định tuyến](/tutorial/pages), chúng ta đã học cách tạo các đường dẫn với [tham số động](/tutorial/params).

Đôi khi việc làm cho một tham số có thể tùy chọn rất hữu ích. Một ví dụ điển hình là khi bạn sử dụng đường dẫn để xác định ngôn ngữ - `/fr/...`, `/de/...` v.v... - nhưng bạn cũng muốn có một ngôn ngữ mặc định.

Để làm điều đó, chúng ta sử dụng cặp dấu ngoặc kép. Đổi tên thư mục `[lang]` thành `[[lang]]`.

Ứng dụng sẽ không build thành công ngay bây giờ vì `src/routes/+page.svelte` và `src/routes/[[lang]]/+page.svelte` đều sẽ phù hợp với `/`. Hãy xóa `src/routes/+page.svelte`. (Bạn cần tải lại ứng dụng để khắc phục trang bị lỗi).

Cuối cùng, chỉnh sửa `src/routes/[[lang]]/+page.server.js` để chỉ định ngôn ngữ mặc định:


```js
/// file: src/routes/[[lang]]/+page.server.js
const greetings = {
	en: 'hello!',
	de: 'hallo!',
	fr: 'bonjour!'
	vn: 'xin chào'
};

export function load({ params }) {
	return {
		greeting: greetings[params.lang +++?? 'vn'+++]
	};
}
```
