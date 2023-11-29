---
title: <svelte:element>
---

Tương tự, không phải lúc nào chúng ta cũng biết trước loại phần tử DOM nào sẽ hiển thị. `<svelte:element>` sẽ giúp ích cho điều này. Giống như trong [bài tập trước](svelte-component), chúng ta có thể thay thế một chuỗi dài các khối `if` bằng một phần tử động duy nhất:

```svelte
/// file: App.svelte
<select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option}</option>
	{/each}
</select>

+++<svelte:element this={selected}>
	Tôi là một <code>&lt;{selected}&gt;</code> element
</svelte:element>+++
```

Giá trị `this` có thể là bất kỳ chuỗi nào, hoặc giá trị falsy _(undefined, null, false, 0, -0, 0n, NaN)_ — nếu nó là falsy, không có phần tử nào được hiển thị.