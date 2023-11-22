---
title: Các ràng buộc có thể chỉnh sửa nội dung
---

Các phần tử có thuộc tính `contenteditable` hỗ trợ việc ràng buộc `textContent` và `innerHTML`:

```svelte
/// file: App.svelte
<div +++bind:innerHTML={html}+++ contenteditable />
```
