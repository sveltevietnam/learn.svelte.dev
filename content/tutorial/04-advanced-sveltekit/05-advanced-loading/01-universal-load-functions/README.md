---
title: Universal load functions (Hàm phổ dụng)
---

Trong [phần trước về việc tải dữ liệu](page-data) chúng ta đã tải dữ liệu từ server bằng cách sử dụng các tệp `+page.server.js` và `+layout.server.js`. Điều này rất thuận tiện nếu bạn cần thực hiện các nhiệm vụ như lấy dữ liệu trực tiếp từ cơ sở dữ liệu hoặc đọc cookie.

Đôi khi việc tải dữ liệu từ server khi thực hiện điều hướng phía client không được hợp lý lắm. Ví dụ:

- Bạn đang tải dữ liệu từ một API bên ngoài
- Bạn muốn sử dụng dữ liệu (nếu) có sẳn trên bộ nhớ
- Bạn muốn tránh sự xuất hiện đột ngột nên muốn trì hoãn điều hướng cho đến khi một hình ảnh đã được tải xong
- Bạn cần trả về một cái gì đó từ `load` mà không thể serialized (SvelteKit sử dụng [devalue](https://github.com/Rich-Harris/devalue) để chuyển đổi dữ liệu từ server thành JSON), chẳng hạn như một component hoặc một store

Trong bài tập này, chúng ta đang xử lý trường hợp cuối cùng. Các hàm server `load` trong các tệp `src/routes/red/+page.server.js`, `src/routes/green/+page.server.js` và `src/routes/blue/+page.server.js` trả về một hàm tạo `component`, những `component` này không thể serialized như dữ liệu. Nếu bạn di chuyển đến `/red`, `/green` hoặc `/blue`, bạn sẽ thấy một lỗi 'Dữ liệu được trả về từ `load` ... không thể được serializable' _('Data returned from `load` ... is not serializable')_ trong cửa sổ terminal.

Để chuyển đổi các hàm `load` trên server thành các hàm `load` phổ dụng, đổi tên từng tệp `+page.server.js` thành `+page.js`. Bây giờ, các hàm sẽ chạy trên server trong quá trình render phía server, nhưng cũng sẽ chạy trong trình duyệt khi ứng dụng hydrate hoặc người dùng thực hiện một điều hướng phía client.

Bây giờ, chúng ta có thể sử dụng `component` được trả về từ các hàm `load` này giống như bất kỳ giá trị nào khác, bao gồm trong `src/routes/+layout.svelte`:

```svelte
/// file: src/routes/+layout.svelte
<nav
	class:has-color={!!$page.data.color}
	style:background={$page.data.color ?? 'var(--bg-2)'}
>
	<a href="/">home</a>
	<a href="/red">red</a>
	<a href="/green">green</a>
	<a href="/blue">blue</a>

+++	{#if $page.data.component}
		<svelte:component this={$page.data.component} />
	{/if}+++
</nav>
```

Đọc [tài liệu](https://kit.svelte.dev/docs/load#universal-vs-server) để biết thêm về sự phân biệt giữa các hàm load trên server và các hàm load phổ rộng, cũng như khi nào nên sử dụng chúng.
