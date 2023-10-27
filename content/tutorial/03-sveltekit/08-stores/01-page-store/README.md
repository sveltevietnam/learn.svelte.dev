---
title: page
---

Như chúng ta đã học [trước đó](writable-stores), Svelte stores là nơi để lưu dữ liệu không thuộc về một component riêng lẻ nào.

SvelteKit cung cấp ba readonly stores thông qua module `$app/stores` — `page`, `navigating` và `updated`. Cái bạn sẽ sử dụng thường xuyên nhất là [`page`](https://kit.svelte.dev/docs/types#public-types-page), nơi cung cấp thông tin về trang hiện tại:

* `url` — [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) của trang hiện tại
* `params` — [parameters](params) của trang hiện tại
* `route` — một đối tượng với thuộc tính `id` đại diện cho route hiện tại
* `status` — HTTP status code của trang hiện tại
* `error` — error object của trang hiện tại, nếu có (bạn sẽ tìm hiểu thêm về [xử lý lỗi](handleerror) trong các [bài tập sau](error-basics))
* `data` —  dữ liệu của trang hiện tại, kết hợp các giá trị trả về của tất cả các hàm `load`
* `form` — dữ liệu được trả về từ một [form action](the-form-element)

Tương tự như bất kỳ store nào khác, bạn có thể tham chiếu đến giá trị của nó trong một component bằng cách thêm ký tự `$` trước tên của nó. Ví dụ, chúng ta có thể truy cập đường dẫn hiện tại như `$page.url.pathname`:

```svelte
/// file: src/routes/+layout.svelte
+++<script>
	import { page } from '$app/stores';
</script>+++

<nav>
	<a href="/" +++aria-current={$page.url.pathname === '/'}+++>
		home
	</a>

	<a href="/about" +++aria-current={$page.url.pathname === '/about'}+++>
		about
	</a>
</nav>

<slot />
```
