---
title: Ô nhập văn bản
---

Có một luật chung là dòng dữ liệu trong Svelte chạy _từ trên xuống_ — component cha có thể đặt thuộc tính vào component con, và một component có thể đặt thuộc tính vào một phần tử, nhưng ngược lại thì không.

Đôi khi phá luật sẽ có ích hơn. Trong trường hợp của phần tử `<input>` trong component này — ta _có thể_ thêm một hàm xử lý sự kiện `on:input` để thay đổi giá trị của `name` thành `event.target.value`, nhưng nó nhìn có vẻ... dài dòng. Ta sẽ thấy điều này sẽ trở nên tệ hơn cho những phần tử khác trong form.

Thay vào đó, ta có thể dùng chỉ thị `bind:value`:

```svelte
/// file: App.svelte
<input +++bind:+++value={name}>
```

Điều này có nghĩa là khi thay đổi giá trị của `name` sẽ làm thay đổi giá trị của ô nhập, mà thay đổi giá trị trong ô nhập cũng sẽ cập nhật `name`.
