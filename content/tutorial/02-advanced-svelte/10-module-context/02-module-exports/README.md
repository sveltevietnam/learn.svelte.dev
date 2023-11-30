---
title: Xuất
---

Bất cứ thứ gì được xuất từ khối mã nguồn `context="module"` sẽ trở thành một xuất từ mô-đun đó. Hãy xuất một hàm `stopAll`:

```svelte
/// file: AudioPlayer.svelte
<script context="module">
	let current;

+++	export function stopAll() {
		current?.pause();
	}+++
</script>
```

Bây giờ chúng ta có thể nhập `stopAll` trong `App.svelte`...

```svelte
/// file: App.svelte
<script>
	import AudioPlayer, +++{ stopAll }+++ from './AudioPlayer.svelte';
</script>
```

...và sử dụng nó trong một xử lý sự kiện:

```svelte
/// file: App.svelte
<div class="centered">
	{#each tracks as track}
		<AudioPlayer {...track} />
	{/each}

+++	<button on:click={stopAll}>
		stop all
	</button>+++
</div>
```

> Bạn không thể có một xuất mặc định _(default export)_, vì component _là_ xuất mặc định.
