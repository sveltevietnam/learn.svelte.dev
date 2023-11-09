---
title: Inline handlers
---

Bạn cũng có thể khai báo event handler trong cùng một dòng _(inline event handlers)_:

```svelte
/// file: App.svelte
<script>
	let m = { x: 0, y: 0 };

	---function handleMove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}---
</script>

<div
	on:pointermove={+++(e) => {
		m = { x: e.clientX, y: e.clientY };
	}+++}
>
	Con trỏ chuột đang ở {m.x} x {m.y}
</div>
```

> Trong một số framework thường hay có đề xuất nên tránh inline event handler để có hiệu năng tốt nhất, thường là trong các vòng lặp. Lời khuyên đó thì lại không áp dụng cho Svelte - bất kể bạn chọn cách nào, trình dịch sẽ luôn làm điều đúng đắn nhất.