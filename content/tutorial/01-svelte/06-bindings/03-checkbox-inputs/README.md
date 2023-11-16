---
title: Ô đánh dấu
---

Các ô đánh dấu được sử dụng cho việc bật tắt các trạng thái. Thay vì gán nó vào `input.value`, ta gán nó với `input.checked`:

```svelte
/// file: App.svelte
<input type="checkbox" +++bind:+++checked={yes}>
```
