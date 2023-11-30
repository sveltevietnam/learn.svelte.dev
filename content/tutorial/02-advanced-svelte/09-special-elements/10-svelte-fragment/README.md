---
title: <svelte:fragment>
---

Phần tử `<svelte:fragment>` cho phép bạn đặt nội dung trong một khe _(slot)_ có tên mà không cần bọc nó trong một phần tử DOM container.

Trong bài tập này, chúng ta đang tạo một trò chơi Tic-Tac-Toe. Để tạo lưới, các phần tử `<button>` trong `App.svelte` nên là con trực tiếp của phần tử `<div class="board">` trong `Board.svelte`.

Hiện tại, nó chưa thành hình vì chúng là con của `<div slot="game">`. Hãy sửa nó:

```svelte
/// file: App.svelte
<+++svelte:fragment+++ slot="game">
	{#each squares as square, i}
		<button
			class="square"
			class:winning={winningLine?.includes(i)}
			disabled={square}
			on:click={() => {
				squares[i] = next;
				next = next === 'x' ? 'o' : 'x';
			}}
		>
			{square}
		</button>
	{/each}
</+++svelte:fragment+++>
```