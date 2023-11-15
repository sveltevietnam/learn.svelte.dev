---
title: Chỉ thị chuyển tiếp
---

Chúng ta có thể tạo giao diện người dùng hấp dẫn hơn bằng cách chuyển tiếp nhẹ các phần tử vào và ra khỏi DOM. Svelte làm điều này rất dễ dàng với chỉ thị `transition`.

Đầu tiên, nhập hàm `fade` từ `svelte/transition`...


```svelte
/// file: App.svelte
<script>
	+++import { fade } from 'svelte/transition';+++
	let visible = true;
</script>
```

...sau đó thêm vào phần tử `<p>`:

```svelte
/// file: App.svelte
<p +++transition:fade+++>
	Fades in and out
</p>
```
