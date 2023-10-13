---
title: Layout data (Dữ liệu bố cục)
path: /blog
---

Tương tự như các tệp `+layout.svelte` tạo UI _(giao diện người dùng)_ cho mọi child route _(định tuyến con)_, thì các tệp `+layout.server.js` tải dữ liệu cho mọi định tuyến con.

Giả sử chúng ta muốn thêm một thanh bên 'Xem thêm' vào trang bài viết blog của chúng ta. Chúng ta _có thể_ trả về `summaries` từ hàm `load` trong `src/routes/blog/[slug]/+page.server.js`, giống như chúng ta làm trong `src/routes/blog/+page.server.js`, nhưng như vậy sẽ bị lặp lại.

Thay vào đó, chúng ta hãy đổi tên `src/routes/blog/+page.server.js` thành `src/routes/blog/+layout.server.js`. Lưu ý: đường dẫn `/blog` vẫn hoạt động — `data.summaries` vẫn có sẵn cho trang.

Bây giờ, ta hãy thêm một thanh bên trong bố cục cho trang bài viết:

```svelte
/// file: src/routes/blog/[slug]/+layout.svelte
<script>
	export let data;
</script>

<div class="layout">
	<main>
		<slot />
	</main>

+++	<aside>
		<h2>Xem thêm</h2>
		<ul>
			{#each data.summaries as { slug, title }}
				<li>
					<a href="/blog/{slug}">{title}</a>
				</li>
			{/each}
		</ul>
	</aside>+++
</div>

<style>
	@media (min-width: 640px) {
		.layout {
			display: grid;
			gap: 2em;
			grid-template-columns: 1fr 16em;
		}
	}
</style>
```

Bố cục (và trang dưới nó) kế thừa `data.summaries` từ `+layout.server.js` cha.

Khi chúng ta chuyển từ một bài viết này sang bài viết khác, chúng ta chỉ cần tải dữ liệu cho bài viết đó — layout data _(dữ liệu bố cục)_ vẫn giữ nguyên. Xem tài liệu về [invalidation _(vô hiệu hóa)_](https://kit.svelte.dev/docs/load#rerunning-load-functions) để biết thêm thông tin.
