---
title: Chuyển tiếp trì hoãn
---

Một tính năng mạnh mẽ của hệ thống chuyển tiếp của Svelte là khả năng _trì hoãn_ các hiệu ứng chuyển tiếp, giúp chúng có thể được đồng bộ giữa nhiều phần tử.

Xem xét cặp danh sách todo này, trong đó việc chuyển đổi một todo gửi nó đến danh sách khác. Trong thực tế, các đối tượng không hoạt động như vậy — thay vì biến mất và xuất hiện lại ở một nơi khác, chúng di chuyển qua một loạt các vị trí trung gian. Sử dụng chuyển động có thể giúp người dùng hiểu được điều gì đang xảy ra trong ứng dụng của bạn.

Chúng ta có thể tạo được hiệu ứng này bằng cách sử dụng hàm `crossfade` như trong `transition.js`, tạo ra một cặp chuyển tiếp gọi là `send` và `receive`. Khi một phần tử được 'gửi', nó sẽ tìm kiếm một phần tử tương ứng đang được 'nhận', và tạo ra một chuyển động chuyển đổi phần tử đó đến vị trí của phần tử đối tác và làm mờ nó đi. Khi một phần tử được 'nhận', điều ngược lại sẽ xảy ra. Nếu không có phần tử đối tác, chuyển tiếp `fallback` sẽ được sử dụng.

Mở `TodoList.svelte`. Đầu tiên, nhập các chuyển tiếp `send` và `receive` từ `transition.js`:

```svelte
/// file: TodoList.svelte
<script>
	+++import { send, receive } from './transition.js';+++

	export let store;
	export let done;
</script>
```

Sau đó, thêm chúng vào phần tử <li>, sử dụng thuộc tính `todo.id` làm khóa để phù hợp các phần tử:

```svelte
/// file: TodoList.svelte
<li
	class:done
	+++in:receive={{ key: todo.id }}+++
	+++out:send={{ key: todo.id }}+++
>
```

Bây giờ, khi bạn chuyển đổi các mục, chúng sẽ di chuyển mượt mà đến vị trí mới của chúng. Các mục không chuyển tiếp vẫn nhảy lên xung quanh một cách không thoải mái — chúng ta có thể sửa nó trong chương tiếp theo.
