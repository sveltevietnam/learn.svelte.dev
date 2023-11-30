---
title: Phép bind với component
---

Tương tự như bạn có thể ràng buộc với các thuộc tính của các phần tử DOM, bạn cũng có thể ràng buộc với các props của component _(thành phần)_. Ví dụ, chúng ta có thể ràng buộc với prop `value` của thành phần `<Keypad>` như là một phần tử biểu mẫu (form element):

```svelte
/// file: App.svelte
<Keypad
	+++bind:value={pin}+++
	on:submit={handleSubmit}
/>
```

Now, when the user interacts with the keypad, the value of `pin` in the parent component is immediately updated.
Bây giờ, khi người dùng tương tác với bàn phím, giá trị của `pin` trong thành phần cha sẽ được cập nhật ngay lập tức.

> Sử dụng ràng buộc thành phần một cách cẩn thận. Nó có thể khó theo dõi luồng dữ liệu trong ứng dụng của bạn nếu bạn có quá nhiều ràng buộc, đặc biệt là nếu không có 'nguồn đáng tin cậy duy nhất'.
