---
title: Chỉ thị use
---

Actions chủ yếu là các hàm vòng đời cấp phần tử. Chúng hữu ích để thực hiện các công việc như:

- tương tác với các thư viện của bên thứ ba
- trì hoản tải ảnh
- gợi ý
- thêm các xử lý sự kiện tùy chỉnh

Trong ứng dụng này, bạn có thể vẽ trên `<canvas>`, và thay đổi màu sắc và kích thước cọ thông qua menu. Nhưng nếu bạn mở menu và di chuyển qua các tùy chọn với phím Tab, bạn sẽ nhanh chóng nhận ra rằng sự tập trung không được _giữ_ trong modal.

Chúng ta có thể sửa điều đó bằng một action. Nhập `trapFocus` từ `actions.js`...

```svelte
/// file: App.svelte
<script>
	import Canvas from './Canvas.svelte';
	+++import { trapFocus } from './actions.js';+++

	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];
	let selected = colors[0];
	let size = 10;

	let showMenu = true;
</script>
```

...sau đó thêm nó vào menu với chỉ thị `use:`:

```svelte
/// file: App.svelte
<div class="menu" +++use:trapFocus+++>
```

Hãy xem hàm `trapFocus` trong `actions.js`. Một hàm action được gọi với một `node` — `<div class="menu">` trong trường hợp của chúng ta — khi node được gắn vào DOM, và có thể trả về một đối tượng action với một phương thức `destroy`.

Thứ nhất, chúng ta cần thêm một trình lắng nghe sự kiện mà chặn phím Tab:

```js
/// file: actions.js
focusable()[0]?.focus();

+++node.addEventListener('keydown', handleKeydown);+++
```

Thứ hai, chúng ta cần thực hiện một số công việc dọn dẹp khi node được gỡ ra — xóa bỏ trình lắng nghe sự kiện, và khôi phục tập trung về ban đầu trước khi phần tử được gắn vào:

```js
/// file: actions.js
focusable()[0]?.focus();

node.addEventListener('keydown', handleKeydown);

+++return {
	destroy() {
		node.removeEventListener('keydown', handleKeydown);
		previous?.focus();
	}
};+++
```

Bây giờ, khi bạn mở menu, bạn có thể di chuyển qua các tùy chọn với phím Tab.