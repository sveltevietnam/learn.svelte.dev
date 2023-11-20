---
title: Bind select
---

Ta cũng có thể dùng `bind:value` cho phần tử `<select>`:

```svelte
/// file: App.svelte
<select
    +++bind:+++value={selected}
    on:change={() => answer = ''}
>
```

Để ý rằng giá trị của `<option>` là đối tượng thay vì là dải kí tự. Svelte không quan tâm đâu.

> Bời vì ta chưa đặt giá trị đầu cho `selected`, phép bind sẽ tự đặt nó thành giá trị mặc định (giá trị đầu tiên trong danh sách). Nhưng bạn phải cẩn trọng — cho đến khi phép bind được khởi chạy, `selected` sẽ vẫn là _undefined_, nên ta không thể lấy giá trị một cách mù quáng, v.d dùng `selected.id` trong template.