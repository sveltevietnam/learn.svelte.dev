---
title: Progressive enhancement
---

Bởi vì chúng ta đang dùng `<form>`, ứng dụng vẫn hoạt động ngay cả khi người dùng không có JavaScript ([điều này xảy ra thường xuyên hơn bạn nghĩ](https://kryogenix.org/code/browser/everyonehasjs.html)). Thật tuyệt vời, vì nó có nghĩa là ứng dụng của ta rất chắc chắn.

Thường thì người dùng vẫn _có_ JavaScript. Khi đó, chúng ta có thể _nâng cao dần_ trải nghiệm, giống như SvelteKit nâng cao dần phần tử `<a>` bằng cách sử dụng định tuyến phía máy khách.

Import hàm `enhance` từ `$app/forms`...

```svelte
/// file: src/routes/+page.svelte
<script>
	+++import { enhance } from '$app/forms';+++

	export let data;
	export let form;
</script>
```

... và thêm chỉ thị `use:enhance` vào các phần tử <form>:

```svelte
/// file: src/routes/+page.svelte
<form method="POST" action="?/create" +++use:enhance+++>
```

```svelte
/// file: src/routes/+page.svelte
<form method="POST" action="?/delete" +++use:enhance+++>
```

Vậy là xong! Bây giờ, khi JavaScript được kích hoạt, use:enhance sẽ mô phỏng hành vi tự nhiên của trình duyệt ngoại trừ việc tải lại toàn bộ trang. Nó sẽ:

- cập nhật prop `form`
- hủy hiệu lực của dữ liệu khi phản hồi thành công, làm cho các hàm `load` chạy lại
- chuyển đến trang mới khi có phản hồi chuyển hướng
- hiển thị trang lỗi gần nhất nếu có lỗi xảy ra

Bây giờ chúng ta đang cập nhật trang thay vì tải lại nó, chúng ta có thể làm phức tạp hơn với những thứ như transitions:

```svelte
/// file: src/routes/+page.svelte
<script>
	+++import { fly, slide } from 'svelte/transition';+++
	import { enhance } from '$app/forms';

	export let data;
	export let form;
</script>
```

```svelte
/// file: src/routes/+page.svelte
<li +++in:fly={{ y: 20 }} out:slide+++>...</li>
```
