---
title: Pages (Các trang)
---

SvelteKit sử dụng filesystem-based routing _(định tuyến dựa trên hệ thống tệp tin)_, điều này có nghĩa là khi người dùng truy cập đến một URL cụ thể trong ứng dụng của bạn, thì _routes_ trong ứng dụng của bạn — sẽ được xác định bởi các thư mục trong mã nguồn của bạn.

Mỗi tệp `+page.svelte` bên trong `src/routes` tạo ra một trang trong ứng dụng của bạn. Trong ứng dụng này, hiện tại chúng ta có một trang — `src/routes/+page.svelte`, tương ứng với đường dẫn `/`. Nếu chúng ta điều hướng đến `/about`, chúng ta sẽ thấy một lỗi 404 Not Found. (404 Không tìm thấy)

Hãy sửa điều đó. Thêm một trang thứ hai, `src/routes/about/+page.svelte`, sao chép nội dung từ `src/routes/+page.svelte`, và cập nhật nó:

```svelte
/// file: src/routes/about/+page.svelte
<nav>
	<a href="/">home</a>
	<a href="/about">about</a>
</nav>

<h1>+++about+++</h1>
<p>Đây là trang +++about+++</p>
```

Bây giờ chúng ta có thể navigate (điều hướng) giữa `/` và `/about`.

> Khác với các ứng dụng nhiều trang truyền thống, điều hướng đến `/about` và quay lại cập nhật nội dung của trang hiện tại, giống như một single-page app (SPA). Điều này mang lại cho chúng ta lợi về cả hai mặt — server-rendered khởi động nhanh, sau đó điều hướng ngay lập tức. (Việc này có thể được [cấu hình](https://kit.svelte.dev/docs/page-options).)