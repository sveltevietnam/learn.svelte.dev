---
title: Route parameters (Tham số đường dẫn)
path: /blog
---

Để tạo các route với tham số động, ta có thể cho một tên biến vào trong dấu ngoặc vuông. Ví dụ, một tệp như `src/routes/blog/[slug]/+page.svelte` sẽ tạo ra một route phù hợp với `/blog/one`, `/blog/two`, `/blog/three` và nhiều hơn nữa.


Chúng ta hãy tạo file đó:

```svelte
/// file: src/routes/blog/[slug]/+page.svelte
<h1>blog post</h1>
```

Bây giờ chúng ta có thể đi từ trang `/blog` đến từng bài blog khác nhau. Trong chương tiếp theo, chúng ta sẽ được học cách load những nội dung đó.

> Nhiều route parameters (tham số định tuyến/ tham số đường dẫn) có thể xuất hiện trong một đoạn URL, miễn là chúng được tách ra bởi ít nhất một ký tự tĩnh:`foo/[bar]x[baz]` là một route hợp lệ trong đó `[bar]` và `[baz]` là các dynamic parameters (tham số động).
