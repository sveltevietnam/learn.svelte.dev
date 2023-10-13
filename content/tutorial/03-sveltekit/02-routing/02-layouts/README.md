---
title: Layouts (Bố cục)
---

Các route khác nhau trong ứng dụng của bạn thường có giao diện giống nhau. Thay vì lặp đi lặp lại trong mỗi component `+page.svelte`, ta nên sử dụng component `+layout.svelte` để áp dụng cho tất cả các route trong chính thư mục đó.

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
