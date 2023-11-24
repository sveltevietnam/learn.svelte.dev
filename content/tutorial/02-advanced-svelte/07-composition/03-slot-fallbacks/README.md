---
title: Slot dự phòng
---

Một thành phần có thể chỉ định _dự phòng_ cho bất kỳ slot nào bị bỏ trống, bằng cách đặt nội dung vào phần tử `<slot>`:


```svelte
/// file: Card.svelte
<div class="card">
	<header>
		<slot name="telephone">
			+++<i>(telephone)</i>+++
		</slot>
		
		<slot name="company">
			+++<i>(company name)</i>+++
		</slot>
	</header>

	<slot>
		+++<i>(name)</i>+++
	</slot>
		
	<footer>
		<slot name="address">
			+++<i>(address)</i>+++
		</slot>
	</footer>
</div>
```