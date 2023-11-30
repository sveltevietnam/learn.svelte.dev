---
title: <svelte:component>
---

Một thành phần có thể thay đổi loại của mình hoàn toàn với `<svelte:component>`. Trong bài tập này, chúng ta muốn hiển thị `RedThing.svelte` nếu `color` là `red`, `GreenThing.svelte` nếu là `green`, và cứ như thế.

Chúng ta _có thể_ làm điều này với một chuỗi các khối `if`...

```svelte
/// file: App.svelte
{#if selected.color === 'red'}
	<RedThing/>
{:else if selected.color === 'green'}
	<GreenThing/>
{:else if selected.color === 'blue'}
	<BlueThing/>
{/if}
```

...nhưng nó hơi cồng kềnh. Thay vào đó, chúng ta có thể tạo một thành phần động duy nhất:

```svelte
/// file: App.svelte
<select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option.color}</option>
	{/each}
</select>

+++<svelte:component this={selected.component}/>+++
```

Giá trị `this` có thể là bất kỳ hàm tạo thành phần nào, hoặc là một giá trị falsy _(undefined, null, false, 0, -0, 0n, NaN)_ — nếu nó là falsy, không có thành phần nào được hiển thị.
