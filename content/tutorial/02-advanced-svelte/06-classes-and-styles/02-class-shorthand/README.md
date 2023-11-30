---
title: Chỉ thị lớp viết tắt
---

Thường thì tên của lớp sẽ giống với tên của giá trị nó phụ thuộc:

```svelte
/// no-file
<button
	class="card"
	class:flipped={flipped}
	on:click={() => flipped = !flipped}
>
```

Trong những trường hợp đó, chúng ta có thể sử dụng một biểu thức rút gọn:

```svelte
/// file: App.svelte
<button
	class="card"
	+++class:flipped+++
	on:click={() => flipped = !flipped}
>
```
