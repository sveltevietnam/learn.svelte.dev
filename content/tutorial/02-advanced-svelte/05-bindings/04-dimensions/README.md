---
title: Kích thước
---

Mọi phần tử cấp khối đều có các phép bind `clientWidth`, `clientHeight`, `offsetWidth` và `offsetHeight`:

```svelte
/// file: App.svelte
<div +++bind:clientWidth={w} bind:clientHeight={h}+++>
	<span style="font-size: {size}px" contenteditable>{text}</span>
	<span class="size">{w} x {h}px</span>
</div>
```

Những ràng buộc này chỉ đọc — việc thay đổi giá trị của `w` và `h` sẽ không có ảnh hưởng gì đối với phần tử.

> Các phần tử được đo lường bằng một kỹ thuật tương tự như [kỹ thuật này](http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/). Sẽ tốn một số tài nguyên liên quan, vì vậy không khuyến khích sử dụng nó cho một lượng lớn các phần tử.
>
> Các phần tử có `display: inline` không thể được đo lường bằng cách tiếp cận này; cũng như các phần tử không thể chứa các phần tử khác (như `<canvas>`). Trong những trường hợp này, bạn sẽ cần đo một phần tử bọc ngoài.
