---
title: csr
---

Client-side rendering làm cho trang có thể tương tác - chẳng hạn như tăng giảm số lần khi bạn nhấp vào nút trong ứng dụng này - và cho phép SvelteKit cập nhật trang sau mỗi lần điều hướng mà không cần tải lại trang.

Tương tự như `ssr`, bạn có thể tắt việc render trên phía client hoàn toàn:

```js
/// file: src/routes/+page.server.js
export const csr = false;
```

Điều này có nghĩa là không có mã JavaScript nào được phục vụ cho client, nhưng cũng có nghĩa là các thành phần của bạn không còn tương tác. Điều này có thể là một cách hữu ích để kiểm tra xem ứng dụng của bạn có thể sử dụng được cho những người không thể sử dụng JavaScript vì bất kỳ lý do nào.
