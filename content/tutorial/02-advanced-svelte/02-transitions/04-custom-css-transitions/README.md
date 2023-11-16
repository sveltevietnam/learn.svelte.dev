---
title: Tùy biến CSS chuyển tiếp
---

Module `svelte/transition` có một số chuyển tiếp tích hợp sẵn, nhưng rất dễ tạo ra chuyển tiếp riêng của bạn. Qua ví dụ, đây là mã nguồn của chuyển tiếp `fade`:

```js
/// no-file
function fade(node, { delay = 0, duration = 400 }) {
	const o = +getComputedStyle(node).opacity;

	return {
		delay,
		duration,
		css: (t) => `opacity: ${t * o}`
	};
}
```

Hàm nhận hai đối số — node mà chuyển tiếp được áp dụng và bất kỳ tham số nào được truyền vào — và trả về một đối tượng chuyển tiếp có thể có các thuộc tính sau:

- `delay` — số mili giây trước khi chuyển tiếp bắt đầu
- `duration` — độ dài của chuyển động trong mili giây
- `easing` — một hàm easing `p => t` (xem chương [tweening](/tutorial/tweens))
- `css` — một hàm `(t, u) => css`, trong đó `u === 1 - t`
- `tick` — một hàm `(t, u) => {...}` có một số ảnh hưởng đối với node

Giá trị `t` là `0` ở đầu của một intro hoặc cuối của một outro, và `1` ở cuối của một intro hoặc đầu của một outro.

Thường thì bạn nên trả về thuộc tính `css` và _không_ phải thuộc tính `tick`, vì các hoạt ảnh CSS chạy ngoài luồng chính để ngăn chặn gián đoạn khi có thể. Svelte 'mô phỏng' chuyển tiếp và xây dựng một hoạt ảnh CSS, sau đó để nó chạy.

Ví dụ, chuyển tiếp `fade` tạo ra một hoạt ảnh CSS giống như sau:

```css
/// no-file
0% { opacity: 0 }
10% { opacity: 0.1 }
20% { opacity: 0.2 }
/* ... */
100% { opacity: 1 }
```

Chúng ta có thể sáng tạo nhiều hơn. Hãy tạo ra điều gì đó thực sự miễn phí:

```svelte
/// file: App.svelte
<script>
	import { fade } from 'svelte/transition';
	+++import { elasticOut } from 'svelte/easing';+++

	let visible = true;

	function spin(node, { duration }) {
		return {
			duration,
			css: t => +++{
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 * (1 - t))}%,
						${Math.min(50, 500 * (1 - t))}%
					);`
			}+++
		};
	}
</script>
```

Nhớ rằng: quyền lực lớn đến từ trách nhiệm lớn.
