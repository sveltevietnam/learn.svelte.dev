---
title: Springs
---

Hàm `spring` là một lựa chọn thay thế cho `tweened` mà thường hoạt động tốt hơn cho các giá trị thay đổi thường xuyên.

Trong ví dụ này, chúng ta có hai stores — một đại diện cho tọa độ của hình tròn, và một đại diện cho kích thước của nó. Hãy chuyển chúng thành springs:

```svelte
/// file: App.svelte
<script>
	import { +++spring+++ } from 'svelte/+++motion+++';

	let coords = +++spring+++({ x: 50, y: 50 });
	let size = +++spring+++(10);
</script>
```

Cả hai spring đều có giá trị mặc định `stiffness` và `damping`, điều này kiểm soát độ mượt mà của spring. Chúng ta có thể chỉ định giá trị ban đầu của chúng:

```js
/// file: App.svelte
let coords = spring({ x: 50, y: 50 }, +++{
	stiffness: 0.1,
	damping: 0.25
}+++);
```

Vung chuột của bạn xung quanh và thử kéo các thanh trượt để cảm nhận cách chúng ảnh hưởng đến hành vi của spring. Lưu ý, bạn có thể điều chỉnh các giá trị trong khi spring vẫn đang chuyển động.
