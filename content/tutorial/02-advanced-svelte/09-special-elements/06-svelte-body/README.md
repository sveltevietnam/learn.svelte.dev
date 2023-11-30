---
title: <svelte:body>
---

Tương tự như `<svelte:window>`, phần tử `<svelte:body>` cho phép bạn lắng nghe các sự kiện xảy ra trên `document.body`. Điều này hữu ích với các sự kiện `mouseenter` và `mouseleave`, không xảy ra trên `window`.


Thêm các xử lý sự kiện `mouseenter` và `mouseleave` vào thẻ `<svelte:body>`...

```svelte
/// file: App.svelte
<svelte:body
	+++on:mouseenter={() => hereKitty = true}+++
	+++on:mouseleave={() => hereKitty = false}+++
/>
```

... và di chuột qua `<body>`.