---
title: Readable stores
---

Không phải tất cả các store đều nên được ghi bởi bất kỳ người nào có tham chiếu đến chúng. Ví dụ, bạn có thể có một store đại diện cho vị trí con trỏ chuột hoặc vị trí địa lý của người dùng, và không hợp lý khi có thể thiết lập các giá trị đó từ 'bên ngoài'. Đối với những trường hợp như vậy, chúng ta có các store có thể _đọc được_ (_readable_ stores). 


Mở tệp `stores.js`. Đối số đầu tiên cho hàm `readable` là một giá trị ban đầu, có thể là `null` hoặc `undefined` nếu bạn chưa có giá trị nào. Đối số thứ hai là một hàm `start` nhận một hàm gọi lại `set` và trả về một hàm `stop`. Hàm `start` được gọi khi store có subscriber đầu tiên; `stop` được gọi khi subscriber cuối cùng hủy đăng ký.

```js
/// file: stores.js
export const time = readable(+++new Date()+++, function start(set) {
+++	const interval = setInterval(() => {
		set(new Date());
	}, 1000);+++

	return function stop() {
		+++clearInterval(interval);+++
	};
});
```
