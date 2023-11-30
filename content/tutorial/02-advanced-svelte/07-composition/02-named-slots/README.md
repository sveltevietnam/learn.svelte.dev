---
title: Slot được đặt tên
---

Ví dụ trước dùng _slot mặc định_ để hiển thị các phần tử con trực tiếp của component. Đôi khi bạn sẽ cần nhiều kiểm soát hơn về vị trí đặt. Trong những trường hợp đó, chúng ta có thể sử dụng _slot được đặt tên_.

Bên trong `App.svelte`, chúng ta đang hiển thị một component `<Card>` chứa `<span slot="telephone">` và các thành phần khác cho `company` và `address`. Hãy thêm các slot được đặt tên tương ứng trong `Card.svelte`:

```svelte
/// file: Card.svelte
<div class="card">
+++	<header>
		<slot name="telephone" />
		<slot name="company" />
	</header>+++

	<slot />
		
+++	<footer>
		<slot name="address" />
	</footer>+++
</div>
```

Chúng ta cần thêm một số kiểu _(styles)_ cho phần tử `<small>` trong `App.svelte` để nó chiếm một dòng riêng. Nội dung của `<Card>` kế thừa các kiểu từ `Card.svelte`, như `font-family` (những chữ cái được gọi là ['Silian Rail'](https://www.youtube.com/watch?v=aZVkW9p-cCU)), nhưng các quy tắc phổ thông vẫn áp dụng — chúng ta cần thêm kiểu vào `App.svelte` vì đó là nơi chứa phần tử đó:

```svelte
/// file: App.svelte
<style>
	main {
		display: grid;
		place-items: center;
		height: 100%;
		background: url(./wood.svg);
	}

+++	small {
		display: block;
		font-size: 0.6em;
		text-align: right;
	}+++
</style>
```
Hoặc, chúng ta có thể sử dụng bộ chỉnh `:global` bên trong `Card.svelte` để chọn tất cả các phần tử `small` bên trong `.card`:

```svelte
/// file: Card.svelte
<style>
	/* ... */ 

	+++.card :global(small) {
		display: block;
		font-size: 0.6em;
		text-align: right;
	}+++
</style>
```