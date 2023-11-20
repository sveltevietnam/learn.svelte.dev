---
title: Input đánh dấu
---

Các ô đánh dấu được sử dụng cho việc bật tắt các trạng thái. Thay vì bind nó vào `input.value`, ta bind nó với `input.checked`:

```svelte
/// file: App.svelte
<input type="checkbox" +++bind:+++checked={yes}>
```
