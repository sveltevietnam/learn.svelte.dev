---
title: <svelte:window>
---

Tương tự như việc bạn có thể thêm các trình nghe sự kiện cho bất kỳ phần tử DOM nào, bạn cũng có thể thêm các trình nghe sự kiện cho đối tượng `window` bằng cách sử dụng `<svelte:window>`.

Chúng ta đã có một hàm `handleKeydown` được khai báo — giờ đây tất cả những gì chúng ta cần làm là thêm một trình nghe sự kiện `keydown`:

```svelte
/// file: App.svelte
<svelte:window +++on:keydown={handleKeydown}+++ />
```

> Như với các phần tử DOM, bạn có thể thêm [các hàm xử lý sự kiện](/tutorial/event-modifiers) như `preventDefault`.
