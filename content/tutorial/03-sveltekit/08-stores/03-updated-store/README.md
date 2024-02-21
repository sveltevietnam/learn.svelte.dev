---
title: updated
---

Store `updated` chứa giá trị `true` hoặc `false` tùy thuộc vào việc một phiên bản mới của ứng dụng đã được deploy hay chưa kể từ khi trang được truy cập lần đầu. Để chạy được, `svelte.config.js` của bạn phải chỉ định `kit.version.pollInterval`.

```svelte
/// file: src/routes/+layout.svelte
<script>
	import { page, navigating, +++updated+++ } from '$app/stores';
</script>
```

Thay đổi phiên bản chỉ xảy ra trong môi trường production, không phải trong quá trình development. Vì lý do đó, `$updated` sẽ luôn là `false` trong hướng dẫn này.

Bạn có thể kiểm tra thủ công cho các phiên bản mới, bất kể `pollInterval`, bằng cách gọi `updated.check()`.

```svelte
/// file: src/routes/+layout.svelte

+++{#if $updated}+++
	<div class="toast">
		<p>
			Ứng dụng đã được cập nhật với phiên bản mới

			<button on:click={() => location.reload()}>
				tải lại trang
			</button>
		</p>
	</div>
+++{/if}+++
```
