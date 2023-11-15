---
title: Key blocks (khối khóa)
---

Các khối khóa (key blocks) hủy và tạo lại nội dung của chúng khi giá trị của biểu thức thay đổi. Điều này rất hữu ích trong trường hợp bạn muốn một phần tử chạy hiệu ứng chuyển tiếp mỗi khi giá trị thay đổi thay vì chỉ khi phần tử vào hoặc rời khỏi DOM.

Ở đây, ví dụ, chúng ta muốn chạy hiệu ứng chuyển tiếp `typewriter` từ `transition.js` mỗi khi thông báo tải, tức là `i`, thay đổi. Bọc phần tử `<p>` trong một khối khóa:


```svelte
/// file: App.svelte
+++{#key i}+++
	<p in:typewriter={{ speed: 10 }}>
		{messages[i] || ''}
	</p>
+++{/key}+++
```