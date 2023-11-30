---
title: Thẻ @debug
---

Đôi khi, việc kiểm tra một dữ liệu khi nó chạy qua ứng dụng của bạn rất hữu ích.

Một cách tiếp cận là sử dụng `console.log(...)` bên trong đánh dấu của bạn. Tuy nhiên, nếu bạn muốn tạm dừng thực thi, bạn có thể sử dụng thẻ `{@debug ...}` với danh sách các giá trị bạn muốn kiểm tra được phân tách bằng dấu phẩy:


```svelte
/// file: App.svelte
{@debug user}

<h1>Chào {user.firstname}!</h1>
```

Nếu bạn mở công cụ phát triển của mình và bắt đầu tương tác với các phần tử `<input>`, bạn sẽ kích hoạt trình gỡ lỗi khi giá trị của `user` thay đổi. (Lưu ý rằng ngăn xếp cuộc gọi _(call stack)_ và các biến cục bộ sẽ bị ẩn trong bài hướng dẫn này do các ràng buộc an ninh iframe.)
