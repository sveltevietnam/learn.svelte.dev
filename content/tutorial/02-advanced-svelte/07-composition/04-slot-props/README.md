---
title: Thuộc tính slot
---

Các thành phần có thể truyền dữ liệu _trở lại_ cho nội dung được đặt vào thông qua _thuộc tính slot_. Trong ứng dụng này, chúng ta có một danh sách các màu CSS được đặt tên. Việc gõ vào ô `<input>` sẽ lọc danh sách.

Hiện tại, mỗi hàng hiển thị `AliceBlue`, và mặc dù màu này rất đẹp, nhưng đó không phải là điều chúng ta muốn.

Mở tệp `FilterableList.svelte`. Thẻ `<slot>` được hiển thị cho mỗi mục đã được lọc trong danh sách. Truyền dữ liệu vào slot:

```svelte
/// file: FilterableList.svelte
<div class="content">
	{#each data.filter(matches) as item}
		<slot +++{item}+++ />
	{/each}
</div>
```

(Giống như ở các ngữ cảnh khác, `{item}` là cách rút gọn của `item={item}`.)

Sau đó, ở phía bên kia, tiếp cận dữ liệu trong nội dung được đặt vào thông qua hướng dẫn `let`::

```svelte
/// file: App.svelte
<FilterableList
	data={colors}
	field="name"
	+++let:item={row}+++
>
	<div class="row">
		<span class="color" style="background-color: {row.hex}" />
		<span class="name">{row.name}</span>
		<span class="hex">{row.hex}</span>
		<span class="rgb">{row.rgb}</span>
		<span class="hsl">{row.hsl}</span>
	</div>
</FilterableList>
```

Cuối cùng, loại bỏ biến giữ chỗ, chúng ta không còn cần chúng nữa:

```svelte
/// file: App.svelte
<script>
	import FilterableList from './FilterableList.svelte';
	import { colors } from './colors.js';

	---let row = colors[0];---
</script>
```

> Các slot được đặt tên cũng có thể có các thuộc tính _(props)_; sử dụng chỉ thị `let` trên một phần tử có thuộc tính `slot="..."`, thay vì trên chính thành phần của nó.
