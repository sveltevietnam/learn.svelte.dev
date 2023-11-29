---
title: <svelte:document>
---

Phần tử `<svelte:document>` cho phép bạn lắng nghe các sự kiện xảy ra trên `document`. Điều này hữu ích với các sự kiện như `selectionchange`, không xảy ra trên `window`.

Thêm xử lý sự kiện `selectionchange` vào thẻ `<svelte:document>`:

```svelte
/// file: App.svelte
<svelte:document +++on:selectionchange={handleSelectionChange}+++ />
```

> Tránh sử dụng các xử lý sự kiện `mouseenter` và `mouseleave` trên phần tử này, vì những sự kiện này không được kích hoạt trên document trên tất cả các trình duyệt. Thay vào đó hãy sử dụng <svelte:body>.
