---
title: Ràng buộc thành phần với chính nó
---

Tương tự như bạn có thể ràng buộc với các phần tử DOM, bạn cũng có thể ràng buộc với chính các instance của component với `bind:this`.

Điều này hữu ích trong những trường hợp hiếm hoi bạn cần tương tác với một component theo cách máy móc (thay vì cung cấp cho nó các props được cập nhật). Quay lại ứng dụng canvas của chúng ta từ [một vài bài tập trước đó](actions), thật tốt nếu chúng ta có thể thêm một nút để xóa màn hình.


Trước tiên, hãy xuất một hàm từ `Canvas.svelte`:

```svelte
/// file: Canvas.svelte
export let color;
export let size;

+++export function clear() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}+++
```

Sau đó, tạo một tham chiếu đến chính component đó:

```svelte
/// file: App.svelte
<script>
	import Canvas from './Canvas.svelte';
	import { trapFocus } from './actions.js';

	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];
	let selected = colors[0];
	let size = 10;

	let showMenu = true;
	+++let canvas;+++
</script>

<div class="container">
	<Canvas +++bind:this={canvas}+++ color={selected} size={size} />
```

Cuối cùng, thêm một nút gọi hàm clear:

```svelte
/// file: App.svelte
<div class="controls">
	<button class="show-menu" on:click={() => showMenu = !showMenu}>
		{showMenu ? 'close' : 'menu'}
	</button>

+++	<button on:click={() => canvas.clear()}>
		xóa
	</button>+++
</div>
```