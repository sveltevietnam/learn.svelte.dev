---
title: DOM event forwarding
---

Bạn cũng có thể forward sự kiện cho DOM event luôn.

Để được thông báo khi bấm nút `<BigRedButton>` - ta chỉ cần forward sự kiện `click` trên phần tử `<button>` ở trong `BigRedButton.svelte`:

```svelte
/// file: BigRedButton.svelte
<button +++on:click+++>
	Push
</button>
```
