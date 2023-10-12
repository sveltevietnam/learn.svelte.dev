---
title: Route parameters (Các tham số định tuyến/tham số đường dẫn)
path: /blog
---

Để tạo các routes (định tuyến) với parameters (tham số) động, sử dụng dấu ngoặc vuông xung quanh một tên biến hợp lệ. Ví dụ, một file như `src/routes/blog/[slug]/+page.svelte` sẽ tạo ra một route phù hợp với `/blog/one`, `/blog/two`, `/blog/three` và cứ như vậy.


Chúng ta hãy tạo file đó:

```svelte
/// file: src/routes/blog/[slug]/+page.svelte
<h1>blog post</h1>
```

Bây giờ chúng ta có thể điều hướng từ trang `/blog` đến các bài viết blog cá nhân. Trong chương tiếp theo, chúng ta sẽ biết cách load (tải) nội dung của chúng.

> Nhiều route parameters (tham số định tuyến/ tham số đường dẫn) có thể xuất hiện trong một đoạn URL, miễn là chúng được tách ra bởi ít nhất một ký tự tĩnh:`foo/[bar]x[baz]` là một route hợp lệ trong đó `[bar]` và `[baz]` là các dynamic parameters (tham số động).
