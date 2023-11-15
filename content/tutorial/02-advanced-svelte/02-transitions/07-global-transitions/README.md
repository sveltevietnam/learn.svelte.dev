---
title: Chuyển tiếp toàn cục
---

Thường thì, các chuyển tiếp chỉ hoạt động trên các phần tử khi khối chứa trực tiếp của chúng được thêm vào hoặc hủy bỏ. Trong ví dụ này, việc chuyển đổi khả năng nhìn thấy của toàn bộ danh sách không áp dụng các chuyển tiếp cho các phần tử danh sách cục bộ.


Thay vào đó, chúng ta muốn các chuyển tiếp không chỉ hoạt động khi các mục cục bộ được thêm và loại bỏ với thanh trượt mà còn khi chúng ta chuyển đổi checkbox.

Chúng ta có thể làm được điều này với một chuyển tiếp _toàn cục_, chạy khi _bất kỳ_ khối chứa các chuyển tiếp nào được thêm hoặc xóa:

```svelte
/// file: App.svelte
<div transition:slide+++|global+++>
	{item}
</div>
```

> Trong Svelte 3, các chuyển tiếp mặc định là toàn cục (global) và bạn phải sử dụng modifier `|local` để làm chúng trở thành chuyển tiếp cục bộ.
