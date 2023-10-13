---
title: Layouts (Bố cục)
---

Các routes (định tuyến) khác nhau của ứng dụng của bạn thường sẽ chia sẻ giao diện người dùng chung. Thay vì lặp lại nó trong mỗi thành phần `+page.svelte`, chúng ta có thể sử dụng một thành phần `+layout.svelte` áp dụng cho tất cả các routes trong cùng một thư mục.

Trong ứng dụng này, chúng ta có hai route, `src/routes/+page.svelte` và `src/routes/about/+page.svelte`, chứa thanh điều hướng giống nhau. Vậy nên ta hãy tạo một tệp mới, `src/routes/+layout.svelte`...

```
src/routes/
├ about/
│ └ +page.svelte
+++├ +layout.svelte+++
└ +page.svelte
```

...và di chuyển nội dung trùng lặp từ các file `+page.svelte` vào file mới `+layout.svelte`. Phần tử `<slot />` là nơi nội dung của trang sẽ được render:

```svelte
/// file: src/routes/+layout.svelte
<nav>
	<a href="/">home</a>
	<a href="/about">about</a>
</nav>

<slot />
```

Một file `+layout.svelte` áp dụng cho mọi child route (định tuyến con hay rout con), bao gồm cả `+page.svelte` cùng cấp (nếu nó tồn tại). Bạn có thể lồng layouts (các bố cục) theo bất kỳ độ sâu nào.
