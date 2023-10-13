---
title: Khối Else
---

Cũng như trong JavaScript, một khối `if` có thể có khối `else` theo sau:

```svelte
/// file: App.svelte
{#if count > 10}
	<p>{count} lớn hơn 10</p>
+++{:else}
	<p>{count} ở giữa 0 và 10</p>+++
{/if}
```

> Kí tự `#` luôn dùng để chỉ định khi _mở một khối_. Còn kí tự `/` luôn dùng để chỉ định khi _đóng một khối_. Kí tự `:`, như trong `{:else}`, sẽ dùng để chỉ định những _khối tiếp diễn_. Đừng lo, so với tất cả cú pháp mà Svelte thêm vào HTML, bạn vừa học gần hết rồi.
