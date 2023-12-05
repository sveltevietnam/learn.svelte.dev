---
title: Tự động subscriptions
---

Ứng dụng trong ví dụ trước đó hoạt động, nhưng có một lỗi nhỏ — store được subscribed, nhưng không bao giờ được unsubscribed. Nếu component được khởi tạo và hủy nhiều lần, điều này sẽ dẫn đến _rò rỉ bộ nhớ (memory leak)_.

Bắt đầu bằng cách khai báo `unsubscribe` trong `App.svelte`:

```js
/// file: App.svelte
+++const unsubscribe =+++ count.subscribe((value) => {
	count_value = value;
});
```

> Gọi một phương thức `subscribe` trả về một hàm `unsubscribe`.

Bạn đã khai báo `unsubscribe`, nhưng nó vẫn cần được gọi, ví dụ thông qua lifecycle hook `onDestroy`:

```svelte
/// file: App.svelte
<script>
	+++import { onDestroy } from 'svelte';+++
	import { count } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

	let count_value;

	const unsubscribe = count.subscribe(value => {
		count_value = value;
	});

	+++onDestroy(unsubscribe);+++
</script>

<h1>Số lượng là {count_value}</h1>
```

Tuy nhiên, đoạn mã trở nên hơi khó hiểu, đặc biệt là nếu component của bạn đăng ký nhiều stores. Thay vào đó, Svelte có một mẹo nhỏ — bạn có thể tham chiếu đến một giá trị store bằng cách thêm tiền tố tên store với `$`:

```svelte
/// file: App.svelte
<script>
	---import { onDestroy } from 'svelte';---
	import { count } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

	---let count_value;---

	---const unsubscribe = count.subscribe(value => {
		count_value = value;
	});---

	---onDestroy(unsubscribe);---
</script>

<h1>Số lượng là {+++$count+++}</h1>
```

> Auto-subscription chỉ hoạt động với các biến store được khai báo (hoặc được import) ở cấp độ trên cùng của một component.

Bạn không bị giới hạn trong việc sử dụng `$count` trong đánh giá cú pháp, bạn có thể sử dụng nó bất cứ nơi nào trong <script>, chẳng hạn như trong xử lý sự kiện hoặc khai báo linh hoạt _(reactive)_.

> Bất kỳ tên nào bắt đầu bằng `$` đều được giả sử là đề cập đến một giá trị store. Nó là một ký tự  hiệu quả được dành riêng — Svelte sẽ ngăn bạn khai báo các biến của riêng mình với tiền tố `$`.