---
title: Tùy chỉnh thông báo lỗi
---

Trang lỗi trong bài tập trước khá tĩnh. Có thể bạn muốn hiển thị thông báo lỗi để giúp người dùng có thể tìm đến các kênh hỗ trợ nhanh hơn.

Đối với điều này, SvelteKit cung cấp cho bạn `$page.error` và `$page.status`, chứa thông tin về lỗi và status code _(mã trạng thái)_. Hãy thêm nó vào `+error.svelte`:

```svelte
/// file: src/routes/+error.svelte
<script>
	+++import { page } from '$app/stores';+++

	let online = typeof navigator !== 'undefined'
		? navigator.onLine
		: true;
</script>

+++{#if $page.status === 404}
	<h1>Not found</h1>
{:else +++if !online}
	<h1>Bạn đang offline</h1>
{:else}
	<h1>Oops!</h1>
	---<p>Có gì đó sai sai</p>---
	+++<p>{$page.error.message}</p>+++
{/if}
```

`$page.error.message` luôn chứa "Internal Error" - tại sao vậy? Điều này là do SvelteKit ưu tiên an toàn và ngăn bạn sơ ý để lộ thông tin nhạy cảm.

Để tùy chỉnh nó, triển khai hook `handleError` trong `hooks.server.js` và `hooks.client.js`  sẽ chạy khi một unexpected error được throw trong quá trình tải dữ liệu trên server hoặc client tương ứng.

```js
// hooks.server.js
export function handleError(+++{ error }+++) {
    ---return { message: 'Internal Error' }; // cấu hình mặc định của hook này---
    +++return { message: error instanceof Error ? error.message : 'Internal Error' };+++
}
```

```js
// hooks.client.js
export function handleError(+++{ error }+++) {
    ---return { message: 'Internal Error' }; // cấu hình mặc định của hook này---
    +++return { message: error instanceof Error ? error.message : 'Internal Error' };+++
}
```

Bạn cũng có thể gọi dịch vụ báo cáo lỗi của mình trong những hook này.

Lưu ý rằng bạn có thể trả về nhiều hơn một thông báo lỗi nếu bạn muốn. Bất kỳ object shape nào bạn trả về sẽ có sẵn trong `$page.error`, yêu cầu duy nhất là có một thuộc tính `message`. Bạn có thể đọc thêm về điều này (và làm cho nó type-safe!) trong [error docs](https://kit.svelte.dev/docs/errors).

> Khi xử lý lỗi, hãy cẩn thận và không nên giả định rằng đó là một đối tượng `Error` vì bất cứ thứ gì cũng có thể throw được. Ngoài ra, hãy đảm bảo bạn không để lộ dữ liệu nhạy cảm bằng cách chuyển tiếp quá nhiều thông tin.
