---
title: Derived stores
---

Bạn có thể tạo ra một store mà giá trị của nó dựa trên giá trị của một hoặc nhiều store _khác_ bằng cách sử dụng `derived`. Theo ví dụ trước đó của chúng ta, chúng ta có thể tạo ra một store lấy thời gian trang đã mở:


```js
/// file: stores.js
export const elapsed = derived(
    time,
    ($time) => +++Math.round(($time - start) / 1000)+++
);
```

> Bạn có thể lấy một store từ nhiều store đầu vào và cũng có thể `set` một giá trị một cách tường minh thay vì trả về nó (điều này hữu ích khi lấy các giá trị một cách bất đồng bộ). Tham khảo [tài liệu API](https://svelte.dev/docs#run-time-svelte-store-derived) để biết thêm thông tin.
