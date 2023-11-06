---
title: Vô hiệu lực
path: /Europe/London
---

Khi người dùng điều hướng từ một trang sang trang khác, SvelteKit sẽ gọi các hàm `load`, nhưng chỉ khi nó nghĩ rằng đã có sự thay đổi.

Trong ví dụ này, việc điều hướng giữa các múi giờ làm cho hàm `load` trong `src/routes/[...timezone]/+page.js` chạy lại vì `params.timezone` không hợp lệ. Nhưng hàm `load` trong `src/routes/+layout.js` _không_ chạy lại, bởi vì theo SvelteKit, nó không bị mất hiệu lực bởi điều hướng đó.

Chúng ta có thể sửa điều đó bằng cách vô hiệu hóa nó một cách thủ công sử dụng hàm [`invalidate(...)`](https://kit.svelte.dev/docs/modules#$app-navigation-invalidate), hàm này nhận vào một URL và chạy lại bất kỳ hàm `load` nào phụ thuộc vào nó. Bởi vì hàm `load` trong `src/routes/+layout.js` gọi `fetch('/api/now')`, nó phụ thuộc vào `/api/now`.

Trong `src/routes/[...timezone]/+page.svelte`, thêm một hàm gọi lại `onMount` gọi hàm `invalidate('/api/now')` mỗi một giây:

```svelte
/// file: src/routes/[...timezone]/+page.svelte
<script>
	+++import { onMount } from 'svelte';+++
	+++import { invalidate } from '$app/navigation';+++

	export let data;

+++	onMount(() => {
		const interval = setInterval(() => {
			invalidate('/api/now');
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});+++
</script>

<h1>
	{new Intl.DateTimeFormat([], {
		timeStyle: 'full',
		timeZone: data.timezone
	}).format(new Date(data.now))}
</h1>
```

> Bạn cũng có thể truyền một hàm cho `invalidate`, trong trường hợp bạn muốn vô hiệu hóa dựa trên một mẫu và không phải là URL cụ thể.
