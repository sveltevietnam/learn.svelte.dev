---
title: Nhóm các ô nhập
---

<!-- FIXME -->
Nếu bạn có nhiều ô `type="radio"` hoặc `type="checkbox"` mà liên quan đến cùng một giá trị, bạn có thể dùng `bind:group` cùng với thuộc tính `value`. Các ô đánh dấu _(radio input)_ trong cùng một nhóm đều có sự độc nhất với nhau; ô lựa chọn _(checkbox input)_ trong cùng một nhóm sẽ phân thành một mảng nhiều giá trị.

Hãy thêm `bind:group={scoops}` vào các ô đánh dấu...

```svelte
/// file: App.svelte
<input
	type="radio"
	name="scoops"
	value={number}
	+++bind:group={scoops}+++
/>
```

...và thêm `bind:group={flavours}` vào các ô lựa chọn:

```svelte
/// file: App.svelte
<input
	type="checkbox"
	name="flavours"
	value={flavour}
	+++bind:group={flavours}+++
/>
```
