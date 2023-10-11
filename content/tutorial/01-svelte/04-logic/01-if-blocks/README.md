---
title: Khối If 
---

HTML không có cách nào để diễn đạt _logic_, như điều kiện và vòng lặp. Nhưng Svelte thì có.

Để cho ra những markup có điều kiện, chúng ta sẽ bao nó trong một khối `if`. Sau đó ta hãy thêm vài chữ khi `count` lớn hơn `10`:

```svelte
/// file: App.svelte
<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

+++{#if count > 10}
	<p>{count} lớn hơn 10</p>
{/if}+++
```

Thử đi - sửa lại component, và bấm nút.
