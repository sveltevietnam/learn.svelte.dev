---
title: Modifier trong sự kiện
---

DOM event handler có thể có _modifier_ để thay đổi hành vi của nó. Chẳng hạn như một handler với modifier `once` sẽ làm cho nó chạy đúng _một lần_:

```svelte
/// file: App.svelte
<button on:click+++|once+++={() => alert('đã bấm')}>
	Bấm vào tôi
</button>
```

Dưới đây là đầy đủ danh sách các modifier:

- `preventDefault` — gọi `event.preventDefault()` trước khi chạy handler. Hữu ích cho việc xử lý form.
- `stopPropagation` — gọi `event.stopPropagation()`, tránh sự kiện với tới phần tử kế tiếp.
- `passive` - tăng hiệu năng cho việc cuộn trang trên các sự kiện chạm/lăn chuột (Svelte sẽ tự động thêm khi chỗ đó có thể thêm được).
- `nonpassive` — buộc đặt `passive: false`.
- `capture` - chạy handler trong giai đoạn [_capture_](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_capture) thay vì giai đoạn [_bubbling_](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling).
- `once` — bỏ kích hoạt handler sau khi chạy lần đầu tiên.
- `self` — chỉ chạy handler khi `event.target` là phần tử chính nó.
- `trusted` - chỉ chạy handler khi `event.isTrusted` là `true`, tức là sự kiện chỉ có thể kích hoạt bởi thao tác từ người dùng thay vì được gọi từ JavaScript bằng `element.dispatchEvent(...)`.

Bạn có thể chồng các modifier lên, ví dụ như `on:click|once|capture={...}`.
