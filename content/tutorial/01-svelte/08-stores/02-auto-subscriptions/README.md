---
title: Subscription tư động
---

Ứng dụng trong ví dụ trước vẫn hoạt động, nhưng có một lỗi nhỏ — ta subscribe vào store nhưng chưa unsubscribe. Nếu component được khởi tạo và hủy nhiều lần, điều này sẽ dẫn đến _rò rỉ bộ nhớ (memory leak)_.

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

Tuy nhiên, đoạn mã trở nên hơi khó hiểu, đặc biệt là nếu component của bạn subscribe vào nhiều stores. Thay vào đó, Svelte có một mẹo nhỏ — bạn có thể tham chiếu đến một giá trị store bằng cách thêm trước tên store kí hiệu `$`:

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

> Subscription tự động chỉ hoạt động với các biến store được khai báo (hoặc được import) ở cấp trên cùng của một component.

'$count' cũng không bắt buộc phải được dùng trong phần đánh dấu - bạn có thể dùng nó ở thẻ `<script>`, như trong hàm xử lý sự kiện hoặc ở các khai báo phản ứng.

> Bất kỳ tên nào bắt đầu bằng `$` đều được giả định là đề cập đến một giá trị store. Nó là một ký tự hiệu dành riêng — Svelte sẽ ngăn bạn khai báo các biến của riêng mình với tiền tố `$`.