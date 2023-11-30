---
title: Chỉ thị style
---

Tương tự như `class`, bạn có thể viết trực tiếp thuộc tính `style` trong Svelte, vì Svelte thực sự chỉ là HTML với các phần nâng cao:

```svelte
/// file: App.svelte
<button
	class="card"
	+++style="transform: {flipped ? 'rotateY(0)' : ''}; --bg-1: palegoldenrod; --bg-2: black; --bg-3: goldenrod"+++
	on:click={() => flipped = !flipped}
>
```

Khi bạn có nhiều style, nó có thể trở nên hơi lộn xộn. Chúng ta có thể sắp xếp mọi thứ bằng cách sử dụng chỉ thị `style:`:

```svelte
/// file: App.svelte
<button
	class="card"
+++	style:transform={flipped ? 'rotateY(0)' : ''}
	style:--bg-1="palegoldenrod"
	style:--bg-2="black"
	style:--bg-3="goldenrod"+++
	on:click={() => flipped = !flipped}
>
```