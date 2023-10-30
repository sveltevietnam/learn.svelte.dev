---
title: Thoát layouts
---

Thường thì, một trang kế thừa tất cả các layout ở phía trên nó, có nghĩa là `src/routes/a/b/c/+page.svelte` sẽ kế thừa bốn layout:

- `src/routes/+layout.svelte`
- `src/routes/a/+layout.svelte`
- `src/routes/a/b/+layout.svelte`
- `src/routes/a/b/c/+layout.svelte`

Thỉnh thoảng, việc thoát khỏi layout hiện tại rất hữu ích. Chúng ta có thể làm điều đó bằng cách thêm ký hiệu `@` theo sau là tên của phần cha để 'reset' về — ví dụ `+page@b.svelte` sẽ đặt `/a/b/c` vào bên trong `src/routes/a/b/+layout.svelte`, trong khi `+page@a.svelte` sẽ đặt nó vào bên trong `src/routes/a/+layout.svelte`.

Hãy reset toàn bộ về layout gốc, bằng cách đổi tên thành `+page@.svelte`.

> Layout gốc áp dụng cho mọi trang của ứng dụng của bạn, bạn không thể thoát khỏi nó.
