---
title: Ô nhập số
---

Trong DOM, mọi thứ sẽ là dải kí tự. Điều này sẽ không giúp gì cho bạn khi bạn phải làm việc với những ô nhập số — `type="number"` và `type="range"` — tức là bạn phải nhớ chuyển kiểu cho giá trị của `input.value` trước khi sử dụng nó.

Với `bind:value`, Svelte sẽ giúp bạn làm điều này:

```svelte
/// file: App.svelte
<label>
	<input type="number" +++bind:+++value={a} min="0" max="10" />
	<input type="range" +++bind:+++value={a} min="0" max="10" />
</label>

<label>
	<input type="number" +++bind:+++value={b} min="0" max="10" />
	<input type="range" +++bind:+++value={b} min="0" max="10" />
</label>
```
