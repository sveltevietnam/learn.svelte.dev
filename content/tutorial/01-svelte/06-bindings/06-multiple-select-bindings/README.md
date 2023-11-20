---
title: Chọn nhiều trong select
---

Một phần tử `<select>` có thể có thuộc tính `multiple`, tức là nó sẽ phân ra thành một mảng thay vì chỉ có chọn một giá trị.

Thay các ô đánh dấu với `<select multiple>`:

```svelte
/// file: App.svelte
<h2>Hương vị</h2>

+++<select multiple bind:value={flavours}>+++
	{#each ['bánh quy và kem', 'socola bạc hà', 'ngũ quả mâm xôi'] as flavour}
+++		<option>{flavour}</option>+++
	{/each}
+++</select>+++
```

Để ý rằng ta có thể bỏ thuộc tính `value` trên `<option>`, vì các giá trị giống với nội dung các phần tử.

> Bấm giữ phím `Control` (hoặc `command` trên macOS) để có thể chọn nhiều lựa chọn.