---
title: tick
---

Hàm `tick` khác biệt so với các hàm vòng đời khác vì bạn có thể gọi nó bất cứ lúc nào, không chỉ khi component được khởi tạo ban đầu. Nó trả về một promise giải quyết ngay lập tức khi mọi thay đổi trạng thái đang chờ được áp dụng vào DOM (hoặc ngay lập tức nếu không có thay đổi trạng thái đang chờ).

Khi bạn cập nhật trạng thái component trong Svelte, nó không cập nhật DOM ngay lập tức. Thay vào đó, nó đợi đến _microtask_ tiếp theo để kiểm tra xem có bất kỳ thay đổi nào khác cần được áp dụng, bao gồm trong các component khác. Hành vi này giúp tránh tác vụ không cần thiết và cho phép trình duyệt nhóm các tác vụ hiệu quả hơn.

Bạn có thể thấy hành vi đó trong ví dụ này. Hãy chọn một đoạn văn bản và nhấn phím tab. Bởi vì giá trị của `<textarea>` thay đổi, vùng chọn hiện tại sẽ bị xóa và con trỏ nhảy sẽ nhảy về cuối. Chúng ta có thể sửa điều này bằng cách nhập hàm `tick`...


```js
/// file: App.svelte
+++import { tick } from 'svelte';+++

let text = `Chọn một số văn bản và nhấn phím tab để chuyển đổi sang chữ hoa`;
```

...và chạy nó ngay trước khi chúng ta đặt `this.selectionStart` và `this.selectionEnd` ở cuối hàm `handleKeydown`:

```js
/// file: App.svelte
+++await tick();+++
this.selectionStart = selectionStart;
this.selectionEnd = selectionEnd;
```
