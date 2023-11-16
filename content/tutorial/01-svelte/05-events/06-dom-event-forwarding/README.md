---
title: DOM event forwarding
---

Bạn cũng có thể chuyển tiếp cả sự kiện của DOM.

Để được thông báo khi bấm nút `<BigRedButton>` - ta chỉ cần chuyển tiếp sự kiện `click` trên phần tử `<button>` ở trong `BigRedButton.svelte`:

```svelte
/// file: BigRedButton.svelte
<button +++on:click+++>
	Push
</button>
```
