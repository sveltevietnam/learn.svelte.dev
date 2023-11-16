---
title: Thêm tham số
---

Hàm chuyển tiếp có thể chấp nhận các tham số. Thay thế chuyển tiếp `fade` bằng `fly`...

```svelte
/// file: App.svelte
<script>
	import { +++fly+++ } from 'svelte/transition';
	let visible = true;
</script>
```

... và áp dụng nó cho phần tử <p> cùng với một số tùy chọn:

```svelte
/// file: App.svelte
<p transition:+++fly={{ y: 200, duration: 2000 }}+++>
	+++Flies+++ in and out
</p>
```

Lưu ý: chuyển tiếp có thể _đảo ngược_ — nếu bạn thay đổi checkbox trong khi chuyển động đang diễn ra, nó sẽ chuyển tiếp từ điểm hiện tại, thay vì từ đầu hoặc cuối.
