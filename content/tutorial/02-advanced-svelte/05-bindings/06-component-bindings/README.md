---
title: Phép bind với component
---

Tương tự như bạn có thể bind thuộc tính của phần tử DOM, bạn cũng có thể bind props của component. Ví dụ, chúng ta có thể bind prop `value` của component `<Keypad>` như là một phần tử biểu mẫu:

```svelte
/// file: App.svelte
<Keypad
	+++bind:value={pin}+++
	on:submit={handleSubmit}
/>
```

Bây giờ, khi người dùng tương tác với bàn phím, giá trị của `pin` trong component cha sẽ được cập nhật ngay lập tức.

> Hãy sử dụng phép bind với component một cách cẩn thận. Nó có thể khiến bạn khó theo dõi luồng dữ liệu trong ứng dụng nếu có quá nhiều phép bind, đặc biệt là nếu không có 'nguồn đáng tin cậy duy nhất' _(single source of truth)_.
