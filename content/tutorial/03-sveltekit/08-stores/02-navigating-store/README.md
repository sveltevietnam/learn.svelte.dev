---
title: navigating
---

Store `navigating` đại diện cho quá trình điều hướng hiện tại. Khi một quá trình điều hướng bắt đầu — do việc nhấp vào liên kết, quá trình điều hướng lùi/tiến, hoặc một lệnh `goto` — giá trị của `navigating` sẽ trở thành một đối tượng với các thuộc tính sau:

- `from` và `to` — các đối tượng với thuộc tính `params`, `route` và `url`
- `type` — type của điều hướng, ví dụ `link`, `popstate` hay `goto`

> Để biết thông tin đầy đủ về type, hãy truy cập tài liệu [`Navigation`](https://kit.svelte.dev/docs/types#public-types-navigation).

`navigating` store có thể được sử dụng để hiển thị loading indicator cho những quá trình chuyển trang kéo dài. Trong bài tập này, `src/routes/+page.server.js` và `src/routes/about/+page.server.js` đều có một độ trễ được cố tình tạo ra. Bên trong `src/routes/+layout.svelte`, import store `navigating` và thêm một thông báo vào thanh điều hướng:


```svelte
/// file: src/routes/+layout.svelte
<script>
	import { page, +++navigating+++ } from '$app/stores';
</script>

<nav>
	<a href="/" aria-current={$page.url.pathname === '/'}>
		home
	</a>

	<a href="/about" aria-current={$page.url.pathname === '/about'}>
		about
	</a>

+++	{#if $navigating}
		đang chuyển tới {$navigating.to.url.pathname}
	{/if}+++
</nav>

<slot />
```