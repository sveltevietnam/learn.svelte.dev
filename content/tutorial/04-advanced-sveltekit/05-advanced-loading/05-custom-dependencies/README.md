---
title: Tùy biến phụ thuộc
path: /Europe/London
---

Gọi `fetch(url)` bên trong một hàm `load` đăng ký `url` như một dependency _(phụ thuộc)_. Đôi khi sử dụng `fetch` không phù hợp lắm, trong trường hợp đó bạn có thể chỉ định một phụ thuộc một cách thủ công với hàm [`depends(url)`](https://kit.svelte.dev/docs/load#invalidation-manual-invalidation).


Vì bất kỳ chuỗi nào bắt đầu bằng mẫu `[a-z]+:` đều là một URL hợp lệ, chúng ta có thể tạo khóa vô hiệu lực tùy ý như `data:now`.

Cập nhật `src/routes/+layout.js` để trả về một giá trị trực tiếp thay vì thực hiện một cuộc gọi `fetch`, và thêm `depends`:

```js
/// file: src/routes/+layout.js
export async function load({ +++depends+++ }) {
	+++depends('data:now');+++

	return {
		now: +++Date.now()+++
	};
}
```

Tiếp theo, cập nhật `invalidate` trong `src/routes/[...timezone]/+page.svelte`:

```svelte
/// file: src/routes/[...timezone]/+page.svelte
<script>
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';

	export let data;

	onMount(() => {
		const interval = setInterval(() => {
			invalidate(+++'data:now'+++);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>
```
