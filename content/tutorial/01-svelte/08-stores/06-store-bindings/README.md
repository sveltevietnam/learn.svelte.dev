---
title: Store bindings
---

Nếu một store có thể ghi - tức là nó có một phương thức `set` - bạn có thể bind giá trị của nó, giống như bạn có thể bind với trạng thái cục bộ của component.

Trong ví dụ này, chúng ta xuất một writable store `name` và một derived store `greeting` từ `stores.js`. Cập nhật phần tử `<input>` trong `App.svelte`:


```svelte
/// file: App.svelte
<input +++bind:+++value={$name}>
```

Việc thay đổi giá trị đầu vào sẽ cập nhật `name` và tất cả các phần phụ thuộc của nó.

Chúng ta cũng có thể gán trực tiếp giá trị vào store trong một component. Thêm một xử lý sự kiện `on:click` để cập nhật `name`:

```svelte
/// file: App.svelte
<button +++on:click={() => $name += '!'}+++>
	Thêm dấu chấm than!
</button>
```

`$name += '!'` thì tương đương với `name.set($name + '!')`.
