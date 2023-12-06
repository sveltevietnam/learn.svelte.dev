---
title: beforeUpdate và afterUpdate
---

Hàm `beforeUpdate` lên lịch công việc để thực hiện ngay trước khi DOM được cập nhật. `afterUpdate` là hàm tương ứng, được sử dụng để chạy mã sau khi DOM đã đồng bộ với dữ liệu của bạn.

Cả hai đều hữu ích để thực hiện những tác vụ theo các mệnh lệnh mà khó có thể đạt được theo cách hoàn toàn dựa trên trạng thái, như cập nhật vị trí cuộn của một phần tử.

Chatbot [Eliza](https://en.wikipedia.org/wiki/ELIZA) này khi dùng hơi khó chịu, vì bạn phải liên tục cuộn thanh trò chuyện. Hãy sửa điều đó.

```js
/// file: App.svelte
let div;
+++let autoscroll = false;+++

beforeUpdate(() => {
+++	if (div) {
		const scrollableDistance = div.scrollHeight - div.offsetHeight;
		autoscroll = div.scrollTop > scrollableDistance - 20;
	}+++
});

afterUpdate(() => {
+++	if (autoscroll) {
		div.scrollTo(0, div.scrollHeight);
	}+++
});
```

Lưu ý rằng `beforeUpdate` sẽ chạy trước khi component được gắn vào, nên chúng ta cần kiểm tra xem `div` có tồn tại trước khi đọc các thuộc tính của nó.
