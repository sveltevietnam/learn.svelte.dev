---
title: Khối Await
---

Nhiều ứng dụng web sẽ phải làm việc với dữ liệu không được đồng bộ _(asynchronous, viết tắt: async)_. Svelte giúp bạn _đợi_ _(await)_ giá trị dữ liệu của [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) _(hứa hẹn)_ vào thẳng trong markup một cách dễ dàng:

```svelte
/// file: App.svelte
+++{#await promise}+++
	<p>...vui lòng đợi</p>
+++{:then number}
	<p>Con số đó là số {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}+++
```

> Chỉ có `promise` gần nhất sẽ được xem xét, tức là bạn không cần phải lo về việc xử lí race conditions _(tranh đoạt điều khiển)_.
>
> [Race conditions là gì?](https://vi.wikipedia.org/wiki/Tranh_%C4%91o%E1%BA%A1t_%C4%91i%E1%BB%81u_khi%E1%BB%83n)

Nếu bạn chắc rằng promise của bạn không thể từ chối, bạn có thể bỏ khối `catch`. Bạn cũng có thể bỏ luôn khối đầu nếu bạn không muốn hiện gì cho đến khi promise được giải quyết:

```svelte
/// no-file
{#await promise then number}
	<p>Con số đó là số {number}</p>
{/await}
```
