---
title: Khối If 
---

HTML không thể để diễn đạt logic như điều kiện hay vòng lặp. Nhưng Svelte thì làm được.

Để hiển thị có điều kiện một đoạn markup, ta bao nó trong một khối `if`. Như bên dưới, ta hiển thị một cụm từ chỉ khi biến `count` lớn hơn `10`:

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

Hãy thử sửa lại component và sau đó nhấn nút.
