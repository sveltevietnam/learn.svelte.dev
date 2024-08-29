---
title: Kiểm tra nội dung slot
---

Trong một số trường hợp, bạn có thể muốn kiểm soát các phần của thành phần dựa trên việc liệu nội dung được đặt vào thông qua slot hay không. Ví dụ, nếu chúng ta xóa `<header>` từ `App.svelte`...

```svelte
/// file: App.svelte
---<header slot="header" class="row">
	<span class="color"></span>
	<span class="name">name</span>
	<span class="hex">hex</span>
	<span class="rgb">rgb</span>
	<span class="hsl">hsl</span>
</header>---

<div class="row">
	<span class="color" style="background-color: {row.hex}" />
	<span class="name">{row.name}</span>
	<span class="hex">{row.hex}</span>
	<span class="rgb">{row.rgb}</span>
	<span class="hsl">{row.hsl}</span>
</div>
```

...chúng ta sẽ có một đường viền kép xấu xí vì `FilterableList.svelte` vẫn đang hiển thị `<div class="header">`.

Chúng ta có thể sửa điều đó bằng cách sử dụng biến đặc biệt `$$slots` trong `FilterableList.svelte`:

```svelte
/// file: FilterableList.svelte
+++{#if $$slots.header}+++
	<div class="header">
		<slot name="header"></slot>
	</div>
+++{/if}+++
```
