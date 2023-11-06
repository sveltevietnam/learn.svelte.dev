---
title: Khớp tham số
path: /colors/ff3e00
---

Để ngăn router khớp sai đầu vào, bạn có thể xác định một _matcher_ _(so khớp)_. Ví dụ, bạn có thể muốn một route như `/colors/[value]` khớp với giá trị hex như `/colors/ff3e00` nhưng không khớp với màu có tên như `/colors/octarine` hoặc bất kỳ đầu vào tùy ý nào khác.

Đầu tiên, tạo một tệp mới gọi là `src/params/hex.js` và xuất một hàm `match` từ nó:

```js
/// file: src/params/hex.js
export function match(value) {
	return /^[0-9a-f]{6}$/.test(value);
}
```

Sau đó, để sử dụng bộ so khớp mới, đổi tên `src/routes/colors/[color]` thành `src/routes/colors/[color=hex]`.

Bây giờ, khi điều hướng đến route đó, SvelteKit sẽ xác minh xem `color` có phải là giá trị `hex` hợp lệ hay không. Nếu không, SvelteKit sẽ thử khớp với các route khác, trước khi trả về một trang 404.

> Bộ so khớp chạy cả trên máy chủ và trong trình duyệt.
