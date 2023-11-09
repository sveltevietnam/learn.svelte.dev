---
title: Sự kiện DOM
---

Như bạn đã thấy, bạn có thể lắng nghe bất kì sự kiện DOM nào trên một phần tử (chẳng hạn như một click chuột hoặc [pointermove](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointermove_event)) với `on:`:

```svelte
/// file: App.svelte
<div +++on:pointermove={handleMove}+++>
	Con trỏ chuột đang ở {m.x} x {m.y}
</div>
```
