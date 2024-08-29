---
title: onMount
---

Mỗi component đều có một _vòng đời_ bắt đầu khi nó được tạo ra và kết thúc khi nó bị hủy. Có một số hàm cho phép bạn chạy mã tại những thời điểm quan trọng trong vòng đời đó. Hàm mà bạn sẽ sử dụng thường xuyên nhất là `onMount`, chạy sau khi component lần đầu tiên hiển thị trên DOM.

Trong bài tập này, chúng ta muốn tạo hiệu ứng chuyển động cho một `<canvas>` bằng cách sử dụng hàm `paint` trong `gradient.js`. Hãy bắt đầu bằng cách import hàm `onMount` từ `svelte`:

```svelte
/// file: App.svelte
<script>
	+++import { onMount } from 'svelte';+++
	import { paint } from './gradient.js';
</script>
```

Sau đó, thêm một hàm chạy khi component được gắn vào:

```svelte
/// file: App.svelte
<script>
	import { onMount } from 'svelte';
	import { paint } from './gradient.js';

+++	onMount(() => {
		const canvas = document.querySelector('canvas');
		const context = canvas.getContext('2d');+++

+++		requestAnimationFrame(function loop(t) {
			requestAnimationFrame(loop);
			paint(context, t);
		});
	});+++
</script>
```

> Trong [một bài tập sau](bind-this), chúng ta sẽ tìm hiểu cách tham chiếu đến phần tử mà không sử dụng `document.querySelector`.

Hiện tại, mọi thứ đều tốt — bạn nên thấy các màu sắc nhẹ nhàng di chuyển theo hình dạng biểu tượng Svelte. Nhưng có một vấn đề — vòng lặp sẽ tiếp tục ngay cả sau khi thành phần đã bị hủy. Để khắc phục điều đó, chúng ta cần trả về một hàm làm sạch từ `onMount`:

```js
/// file: App.svelte
onMount(() => {
	const canvas = document.querySelector('canvas');
	const context = canvas.getContext('2d');

	+++let frame =+++ requestAnimationFrame(function loop(t) {
		+++frame =+++ requestAnimationFrame(loop);
		paint(context, t);
	});

+++	return () => {
		cancelAnimationFrame(frame);
	};+++
});
```
