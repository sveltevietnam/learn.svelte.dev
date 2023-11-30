---
title: <svelte:window> bindings
---

Chúng ta cũng có thể bind với một số thuộc tính cụ thể của `window`, như `scrollY`:

```svelte
/// file: App.svelte
<svelte:window +++bind:scrollY={y}+++ />
```

Danh sách các thuộc tính bạn có thể bind như sau:

- `innerWidth`
- `innerHeight`
- `outerWidth`
- `outerHeight`
- `scrollX`
- `scrollY`
- `online` — một bí danh cho `window.navigator.onLine`

Tất cả trừ `scrollX` và `scrollY` là chỉ đọc.
