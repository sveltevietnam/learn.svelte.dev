---
title: Event forwarding
---

<!-- FIXME: Need link for "bubble" -->
Không như DOM event, component events không _bubble_. Nếu bạn muốn lắng nghe một sự kiện trên component được lồng sâu bên trong, component trung gian đó phải đẩy _(forward)_ sự kiện đó.

Trong trường hợp này, chúng ta có `App.svelte` và `Inner.svelte` trong [phần trước](/tutorial/component-events), và bây giờ ta có component `Outer.svelte` bao gồm `<Inner/>`.

Một cách mà ta _có thể_ giải là thêm `createEventDispatcher` vào `Outer.svelte`, _nghe_ sự kiện `message`, và tạo một handler cho nó:

```svelte
/// file: Outer.svelte
<script>
	import Inner from './Inner.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function forward(event) {
		dispatch('message', event.detail);
	}
</script>

<Inner on:message={forward}/>
```

Nhưng bạn phải viết khá nhiều code cho việc này, cho nên Svelte có một cách viết tắt - một event `on:message` mà không có giá trị thì nó có nghĩa là "forward tất cả sự kiện có tên `message`".

```svelte
/// file: Outer.svelte
<script>
	import Inner from './Inner.svelte';
</script>

<Inner +++on:message+++/>
```
