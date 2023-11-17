---
title: Sự kiện trong component
---

Component cũng có thể gởi _(dispatch)_ các sự kiện. Bạn cần phải tạo một _event dispatcher_ để có thể làm điều này. Hãy sửa lại `Inner.svelte`:

```svelte
/// file: Inner.svelte
<script>
	+++import { createEventDispatcher } from 'svelte';+++

	+++const dispatch = createEventDispatcher();+++

	function sayHello() {
		dispatch('message', {
			text: 'Xin chào!'
		});
	}
</script>
```

> Bạn phải gọi `createEventDispatcher` khi component được khởi tạo lần đầu - bạn không thể gọi sau này, chẳng hạn như trong callback của `setTimeout`. Việc này sẽ liên kết `dispatch` với instance của component.

Sau đó, thêm hàm xử lý `on:message` vào `App.svelte`:

```svelte
/// file: App.svelte
<Inner +++on:message={handleMessage}+++ />
```

> Bạn cũng có thể thay đổi tên của sự kiện. Chẳng hạn như thay đổi `dispatch('message', {...})` thành `dispatch('greet', {...})` trong `Inner.svelte` và thay đổi tên thuộc tính từ `on:message` thành `on:greet` trong `App.svelte`.
