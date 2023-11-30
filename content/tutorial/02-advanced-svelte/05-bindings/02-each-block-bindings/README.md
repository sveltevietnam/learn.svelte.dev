---
title: Phép bind trong khối each
---

Thậm chí bạn cũng có thể bind các thuộc tính bên trong một khối `each`.


```svelte
/// file: App.svelte
{#each todos as todo}
	<li class:done={todo.done}>
		<input
			type="checkbox"
			+++bind:+++checked={todo.done}
		/>

		<input
			type="text"
			placeholder="Việc cần hoàn thành?"
			+++bind:+++value={todo.text}
		/>
	</li>
{/each}
```

> Lưu ý: tương tác với các phần tử `<input>` này sẽ thay đổi mảng. Nếu bạn muốn làm việc với dữ liệu không thay đổi, bạn nên tránh các phép bind này và thay vào đó, sử dụng các hàm xử lý sự kiện.
