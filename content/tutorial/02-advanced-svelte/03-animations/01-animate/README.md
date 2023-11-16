---
title: Chỉ thị animate
---

Trong [chương trước](/tutorial/deferred-transitions), chúng ta đã sử dụng các hiệu ứng chuyển tiếp trì hoãn để tạo hiệu ứng về chuyển động khi các phần tử di chuyển từ một danh sách công việc sang danh sách khác.

Để hoàn tất hiệu ứng, chúng ta cũng cần áp dụng chuyển động cho các phần tử _không_ tham gia chuyển tiếp. Để làm điều này, chúng ta sử dụng chỉ thị `animate`.

Đầu tiên, nhập hàm `flip` — flip viết tắt của ['First, Last, Invert, Play'](https://aerotwist.com/blog/flip-your-animations/) — từ `svelte/animate` vào `TodoList.svelte`:

```svelte
/// file: TodoList.svelte
<script>
	+++import { flip } from 'svelte/animate';+++
	import { send, receive } from './transition.js';

	export let store;
	export let done;
</script>
```

Sau đó thêm nó vào các phần tử <li>:

```svelte
/// file: TodoList.svelte
<li
	class:done
	in:receive={{ key: todo.id }}
	out:send={{ key: todo.id }}
	+++animate:flip+++
>
```

Chuyển động hơi chậm trong trường hợp này, nên chúng ta có thể thêm một tham số `duration`:

```svelte
/// file: TodoList.svelte
<li
	class:done
	in:receive={{ key: todo.id }}
	out:send={{ key: todo.id }}
	animate:flip+++={{ duration: 200 }}+++
>
```

> `duration` cũng có thể là một hàm `d => milliseconds`, trong đó `d` là số pixel mà phần tử phải di chuyển

Lưu ý rằng tất cả các hiệu ứng chuyển tiếp và chuyển động đều được áp dụng bằng CSS, chứ không phải JavaScript, có nghĩa là chúng sẽ không chặn (hoặc bị chặn bởi) luồng chính.
