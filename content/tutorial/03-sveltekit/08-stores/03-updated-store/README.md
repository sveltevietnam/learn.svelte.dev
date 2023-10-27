---
title: updated
---

Store `updated` chứa giá trị `true` hoặc `false` tùy thuộc vào việc một phiên bản mới của ứng dụng đã được deploy hay chưa kể từ khi trang được truy cập lần đầu. Để chạy được, `svelte.config.js` của bạn phải chỉ định `kit.version.pollInterval`.

Thay đổi phiên bản chỉ xảy ra trong môi trường production, không phải trong quá trình development. Vì lý do đó, `$updated` sẽ luôn là `false` trong hướng dẫn này.

Bạn có thể kiểm tra thủ công cho các phiên bản mới, bất kể `pollInterval`, bằng cách gọi `updated.check()`.


```svelte
/// file: src/routes/+layout.svelte
<script>
	import { page, navigating, +++updated+++ } from '$app/stores';
</script>

<nav>
	<a href="/" aria-current={$page.url.pathname === '/'}>
		home
	</a>

	<a href="/about" aria-current={$page.url.pathname === '/about'}>
		about
	</a>

	{#if $navigating}
		đang chuyển tới {$navigating.to.url.pathname}
	{/if}
</nav>

<slot />

+++{#if $updated}
	<p class="toast">
		Ứng dụng có phiên bản mới sẳn sàng để cập nhật

		<button on:click={() => location.reload()}>
			Tải lại trang
		</button>
	</p>
{/if}+++
