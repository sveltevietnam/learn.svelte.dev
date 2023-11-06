---
title: Thoát layouts
---

Thường thì, một trang kế thừa tất cả các layout ở phía trên nó, có nghĩa là `src/routes/a/b/c/+page.svelte` sẽ kế thừa bốn layout:

- `src/routes/+layout.svelte`
- `src/routes/a/+layout.svelte`
- `src/routes/a/b/+layout.svelte`
- `src/routes/a/b/c/+layout.svelte`

Thỉnh thoảng ta cần thoát khỏi layout hiện tại. Có thể làm điều đó bằng cách thêm ký hiệu `@`, theo sau là layout cha. Ví dụ, `+page@b.svelte` sẽ đặt trang `/a/b/c` vào bên trong `src/routes/a/b/+layout.svelte`, trong khi `+page@a.svelte` sẽ đặt nó vào bên trong `src/routes/a/+layout.svelte`.

Hãy reset toàn bộ về layout gốc, bằng cách đổi tên thành `+page@.svelte`.

> Layout gốc áp dụng cho mọi trang của ứng dụng của bạn, bạn không thể thoát khỏi nó.
