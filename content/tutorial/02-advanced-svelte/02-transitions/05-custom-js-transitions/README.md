---
title: Tùy biến JS chuyển tiếp
---

Mặc dù bạn nên sử dụng CSS cho chuyển tiếp nhiều nhất có thể, có một số hiệu ứng không thể chạy được mà không có JavaScript, như hiệu ứng máy đánh chữ:


```js
/// file: App.svelte
function typewriter(node, { speed = 1 }) {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!valid) {
		throw new Error(`Quá trình chuyển tiếp này chỉ hoạt động trên các phần tử có một node văn bản con`);
	}

	+++const text = node.textContent;
	const duration = text.length / (speed * 0.01);

	return {
		duration,
		tick: (t) => {
			const i = Math.trunc(text.length * t);
			node.textContent = text.slice(0, i);
		}
	};+++
}
```
