---
title: Style thành phần
---

Thường thì bạn cần thay đổi style bên trong một component con. Có lẽ chúng ta muốn làm cho những hộp này màu đỏ, xanh và xanh dương.

Một cách để làm điều này là sử dụng bộ điều chỉnh kiểu CSS `:global`, cho phép bạn nhắm tùy ý đến các phần tử bên trong các component khác:

```svelte
/// file: App.svelte
<style>
	.boxes :global(.box:nth-child(1)) {
		background-color: red;
	}

	.boxes :global(.box:nth-child(2)) {
		background-color: green;
	}

	.boxes :global(.box:nth-child(3)) {
		background-color: blue;
	}
</style>
```

Nhưng có nhiều lý do _không nên_ làm như vậy. Đầu tiên, nó rất dài dòng. Thứ hai, nó mong manh — bất kỳ thay đổi nào đối với các chi tiết triển khai của `Box.svelte` có thể làm hỏng bộ chọn.

Nhưng hơn tất cả, nó khá thô sơ. Các thành phần nên có khả năng quyết định cho bản thân mình style nào có thể được kiểm soát từ 'bên ngoài', giống như cách chúng quyết định biến nào được tiết lộ dưới dạng thuộc tính. ``:global` nên được sử dụng như một cửa thoát - một phương án cuối cùng.

Bên trong `Box.svelte`, hãy thay đổi `background-color` để nó được xác định bởi một [thuộc tính tùy chỉnh CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/--*):

```svelte
/// file: Box.svelte
<style>
	.box {
		width: 5em;
		height: 5em;
		border-radius: 0.5em;
		margin: 0 0 1em 0;
		background-color: +++var(--color, #ddd)+++;
	}
</style>
```

Bất kỳ phần tử cha nào (như `<div class="boxes">`) có thể đặt giá trị của `--color`, nhưng chúng ta cũng có thể đặt nó trên các thành phần con:

```svelte
/// file: App.svelte
<div class="boxes">
	<Box +++--color="red"+++ />
	<Box +++--color="green"+++ />
	<Box +++--color="blue"+++ />
</div>
```

Các giá trị có thể là động, giống như bất kỳ thuộc tính nào khác.

Tính năng này hoạt động bằng cách bọc mỗi thành phần trong một `<div style="display: contents">` cần thiết, và áp dụng các thuộc tính tùy chỉnh cho nó.
