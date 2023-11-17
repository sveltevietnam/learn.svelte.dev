---
title: Thêm tham số
---

Giống như các hiệu ứng chuyển tiếp và chuyển động, một action có thể nhận một đối số, đối số này sẽ được gọi với hàm action cùng với phần tử mà nó thuộc về.

Trong bài tập này, chúng ta muốn thêm một gợi ý cho `<button>` bằng thư viện [`Tippy.js`](https://atomiks.github.io/tippyjs/). Hành động đã được kết nối với `use:tooltip`, nhưng nếu bạn di chuyển chuột qua nút (hoặc tập trung vào nó bằng bàn phím) thì gợi ý không chứa nội dung nào.

Trước tiên, action cần chấp nhận một số tùy chọn và chuyển chúng vào Tippy:

```js
/// file: App.svelte
function tooltip(node, +++options+++) {
	const tooltip = tippy(node, +++options+++);

	return {
		destroy() {
			tooltip.destroy();
		}
	};
}
```

Sau đó, chúng ta cần truyền một số tùy chọn vào action:

```svelte
/// file: App.svelte
<button use:tooltip+++={{ content, theme: 'material' }}+++>
	rê chuột qua tôi
</button>
```

Gợi ý bây giờ hoạt động tương đối. Nếu chúng ta thay đổi văn bản trong `<input>`, gợi ý sẽ không phản ánh nội dung mới. Chúng ta có thể sửa điều đó bằng cách thêm một phương thức `update` vào đối tượng được trả về.

```js
/// file: App.svelte
function tooltip(node, options) {
	const tooltip = tippy(node, options);

	return {
+++		update(options) {
			tooltip.setProps(options);
		},+++
		destroy() {
			tooltip.destroy();
		}
	};
}
```
