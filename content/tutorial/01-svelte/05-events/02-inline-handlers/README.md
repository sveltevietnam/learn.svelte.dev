---
title: Hàm xử lý cùng dòng _(inline handlers)_
---

Bạn cũng có thể khai báo hàm xử lý sự kiện cùng dòng:

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

> Trong một số framework thường hay có đề xuất nên tránh hàm xử lý cùng dòng để có hiệu năng tốt nhất, đặc biệt là trong các vòng lặp. Lời khuyên đó không áp dụng cho Svelte - bất kể bạn chọn cách nào, trình dịch sẽ luôn làm điều đúng đắn nhất.