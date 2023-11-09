---
title: Sự kiện trong component
---

Component cũng có thể phái _(dispatch)_ các sự kiện. Bạn cần phải tạo một _event dispatcher_ để có thể làm điều này.

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

> Bạn phải gọi `createEventDispatcher` khi component được khởi tạo lần đầu - bạn không thể chúng gọi sau này, chẳng hạn như trong callback của `setTimeout`. Việc này sẽ liên kết `dispatch` với instance của component.

Sau đó, thêm handler `on:message` vào `App.svelte`:

```svelte
/// file: App.svelte
<Inner +++on:message={handleMessage}+++ />
```

> Bạn cũng có thể thay đổi tên sự kiện thành thứ khác. Chẳng hạn như thay đổi `dispatch('message', {...})` thành `dispatch('greet', {...})` trong `Inner.svelte` và thay đổi tên attribute từ `on:message` thành `on:greet` trong `App.svelte`.
