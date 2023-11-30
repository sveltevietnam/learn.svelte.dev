---
title: Các ràng buộc có thể chỉnh sửa nội dung
---

Các phần tử có thuộc tính `contenteditable` hỗ trợ phép bind cho `textContent` và `innerHTML`:

```svelte
/// file: App.svelte
<div +++bind:innerHTML={html}+++ contenteditable />
```
