---
title: Ô nhập Textarea
---

Thẻ `<textarea>` hoạt động khá giống với một ô nhập văn bản trong Svelte — dùng `bind:value`:

```svelte
/// file: App.svelte
<textarea +++bind:value=+++{value}></textarea>
```

Trong những trường hợp này, nếu tên thuộc tính giống nhau, ta có thể viết một các ngắn gọn hơn:

```svelte
/// file: App.svelte
<textarea +++bind:value+++></textarea>
```

Điều này áp dùng cho các binding khác, không chỉ cho các textarea.
