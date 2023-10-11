---
title: Khối Else-if
---

Bạn cũng có thể chồng nhiều điều kiện lên nhau với `else if`:

```svelte
/// file: App.svelte
{#if count > 10}
	<p>{count} lớn hơn 10</p>
+++{:else if count < 5}
	<p>{count} nhỏ hơn 5</p>+++
{:else}
	<p>{count} ở giữa +++5+++ với 10</p>
{/if}
```
