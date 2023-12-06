---
title: Stores tùy chỉnh
---

Miễn là một đối tượng triển khai đúng phương thức `subscribe`, nó sẽ là một store. Ngoài ra không có ràng buộc gì. Do đó, việc tạo ra các store tùy chỉnh với logic cụ thể cho miền rất dễ dàng.

Ví dụ, store `count` từ ví dụ trước của chúng ta có thể bao gồm các phương thức `increment`, `decrement` và `reset` và tránh việc tiết lộ `set` và `update`:

```js
/// file: stores.js
function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => +++update((n) => n + 1)+++,
		decrement: () => +++update((n) => n - 1)+++,
		reset: () => +++set(0)+++
	};
}
```
