---
title: Chỉ thị lớp
---

Tương tự như bất kỳ thuộc tính nào khác, bạn có thể chỉ định các lớp với một thuộc tính JavaScript. Ở đây, chúng ta có thể thêm một lớp `flipped` vào thẻ:

```svelte
/// file: App.svelte
<button
	class="card +++{flipped ? 'flipped' : ''}+++"
	on:click={() => flipped = !flipped}
>
```

Điều này hoạt động như dự kiến — nếu bạn click vào thẻ bây giờ, nó sẽ lật.

Tuy nhiên, chúng ta có thể làm cho nó đẹp hơn. Thêm hoặc xóa một lớp dựa trên một vài điều kiện là một mẫu thiết kế phổ biến trong phát triển UI đến mức mà Svelte đã bao gồm một chỉ thị đặc biệt để đơn giản hóa nó:

```svelte
/// file: App.svelte
<button
	class="card"
	+++class:flipped={flipped}+++
	on:click={() => flipped = !flipped}
>
```

Chỉ thị này có nghĩa là 'thêm lớp `flipped` mỗi khi `flipped` là trị đúng'.