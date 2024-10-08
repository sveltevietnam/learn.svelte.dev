---
title: This
---

Trong [bài tập trước](onmount), chúng ta đã học cách sử dụng hàm vòng đời `onMount` để vẽ lên một canvas.

Nhưng ví dụ đó có lỗi — nó đang sử dụng `document.querySelector('canvas')`. Đầu ra của hàm này luôn trả về `<canvas>` đầu tiên được tìm thấy trên trang mà chưa chắc là cái nằm trong component của chúng ta.


Thay vào đó, chúng ta có thể sử dụng phép bind chỉ đọc `this` để có một tham chiếu đến phần tử:

```js
/// file: App.svelte
+++let canvas;+++

onMount(() => {
	---const canvas = document.querySelector('canvas')---
	const context = canvas.getContext('2d');

	let frame = requestAnimationFrame(function loop(t) {
		frame = requestAnimationFrame(loop);
		paint(context, t);
	});

	return () => {
		cancelAnimationFrame(frame);
	};
});
```

```svelte
/// file: App.svelte
<canvas
	+++bind:this={canvas}+++
	width={32}
	height={32}
></canvas>
```

Lưu ý: giá trị của `canvas` sẽ là `undefined` cho đến khi component được thiết lập.
