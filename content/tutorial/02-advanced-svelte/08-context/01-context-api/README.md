---
title: setContext và getContext
---

API ngữ cảnh cung cấp cơ chế cho các thành phần 'trò chuyện' với nhau mà không cần truyền dữ liệu và hàm thông qua prop, hoặc phát ra nhiều sự kiện. Đây là một tính năng nâng cao, nhưng hữu ích. Trong bài tập này, chúng ta sẽ tái tạo [Schotter](https://collections.vam.ac.uk/item/O221321/schotter-print-nees-georg/) của George Nees — một trong những người tiên phong trong nghệ thuật tạo sinh — bằng cách sử dụng API ngữ cảnh.

Bên trong `Canvas.svelte`, có một hàm `addItem` thêm một mục vào canvas. Chúng ta có thể làm cho nó có sẵn cho các thành phần bên trong `<Canvas>`, như `<Square>`, với `setContext`:

```svelte
/// file: Canvas.svelte
<script>
	import { +++setContext+++, afterUpdate, onMount, tick } from 'svelte';

	// ...

	onMount(() => {
		ctx = canvas.getContext('2d');
	});

+++	setContext('canvas', {
		addItem
	});+++

	function addItem(fn) {...}

	function draw() {...}
</script>
```

Bên trong các thành phần con, bây giờ chúng ta có thể lấy ngữ cảnh bằng cách sử dụng `getContext`:

```svelte
/// file: Square.svelte
<script>
	+++import { getContext } from 'svelte';+++

	export let x;
	export let y;
	export let size;
	export let rotate;

	+++getContext('canvas').addItem(draw);+++

	function draw(ctx) {...}
</script>
```

Cho đến giờ, rất là...nhàm chán. Hãy thêm một số yếu tố ngẫu nhiên vào lưới:

```svelte
/// file: App.svelte
<div class="container">
	<Canvas width={800} height={1200}>
		{#each Array(12) as _, c}
			{#each Array(22) as _, r}
				<Square
					x={180 + c * 40+++ + jitter(r * 2)+++}
					y={180 + r * 40+++ + jitter(r * 2)+++}
					size={40}
					+++rotate={jitter(r * 0.05)}+++
				/>
			{/each}
		{/each}
	</Canvas>
</div>
```

Giống như [các hàm vòng đời](/tutorial/onmount), `setContext` và `getContext` phải được gọi trong quá trình khởi tạo component. (Khóa ngữ cảnh (`'canvas'` trong trường hợp này) có thể là bất cứ điều gì bạn thích không cần phải là chuỗi, điều này hữu ích trong việc kiểm soát ai có thể truy cập ngữ cảnh.)

Đối tượng ngữ cảnh của bạn có thể bao gồm bất cứ điều gì, bao gồm cả store. Điều này cho phép bạn truyền các giá trị thay đổi theo thời gian đến các component con:

```js
/// no-file
// in a parent component
import { setContext } from 'svelte';
import { writable } from 'svelte/store';

setContext('my-context', {
	count: writable(0)
});
```
```js
/// no-file
// in a child component
import { getContext } from 'svelte';

const { count } = getContext('my-context');

$: console.log({ count: $count });
```
