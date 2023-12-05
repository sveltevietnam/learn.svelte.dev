---
title: Các stores có thể ghi
---

Không phải tất cả trạng thái của ứng dụng đều nằm bên trong cấu trúc component của ứng dụng của bạn. Đôi khi, bạn sẽ có các giá trị cần được truy cập bởi nhiều component không liên quan, hoặc bởi một module JavaScript thông thường.

Trong Svelte, chúng ta làm điều này bằng cách sử dụng _stores_. Một store đơn giản là một đối tượng với một phương thức `subscribe` cho phép những bên quan tâm nhận thông báo mỗi khi giá trị của store thay đổi. Trong `App.svelte`, `count` là một store, và chúng ta đang thiết lập `count_value` trong hàm gọi lại `count.subscribe`.

Mở tệp `stores.js` để xem định nghĩa của `count`. Đây là một store _có thể ghi_, có nghĩa là nó có các phương thức `set` và `update` ngoài `subscribe`.

Bây giờ, trong `Incrementer.svelte`, kết nối nút `+`:

```js
/// file: Incrementer.svelte
function increment() {
	+++count.update((n) => n + 1);+++
}
```

Bấm vào nút `+` sẽ cập nhật giá trị đếm. Thực hiện điều ngược lại cho `Decrementer.svelte`.

Cuối cùng, trong `Resetter.svelte`, triển khai hàm `reset`:

```js
/// file: Resetter.svelte
function reset() {
	+++count.set(0);+++
}
```
