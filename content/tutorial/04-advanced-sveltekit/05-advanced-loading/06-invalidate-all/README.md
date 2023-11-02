---
title: invalidateAll
path: /Europe/London
---

Cuối cùng, có tùy chọn mạnh nhất - `invalidateAll()`. Ứng dụng sẽ chạy lại tất cả các hàm `load` cho trang hiện tại, không phân biệt bất kể chúng phụ thuộc vào cái gì.

Cập nhật `src/routes/[...timezone]/+page.svelte` từ bài tập trước:

```svelte
/// file: src/routes/[...timezone]/+page.svelte
<script>
	import { onMount } from 'svelte';
	import { +++invalidateAll+++ } from '$app/navigation';

	export let data;

	onMount(() => {
		const interval = setInterval(() => {
			+++invalidateAll();+++
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>
```

Gọi `depends` trong `src/routes/+layout.js` không còn cần thiết nữa:
```js
/// file: src/routes/+layout.js
export async function load(---{ depends }---) {
	---depends('data:now');---

	return {
		now: Date.now()
	};
}
```

> `invalidate(() => true)` và `invalidateAll` _không_ giống nhau. `invalidateAll` cũng chạy lại hàm `load` mà không có bất kỳ `url` phụ thuộc nào, trong khi `invalidate(() => true)` không làm điều đó.
