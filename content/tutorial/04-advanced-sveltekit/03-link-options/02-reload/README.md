---
title: Tải lại trang
---

Thường thì, SvelteKit sẽ chuyển hướng giữa các trang mà không làm mới trang. Trong bài tập này, nếu chúng ta chuyển hướng giữa `/` và `/about`, đồng hồ vẫn tiếp tục đếm.

Trong vài trường hợp hiếm hoi, bạn có thể muốn tắt chế độ này. Bạn có thể làm như vậy bằng cách thêm thuộc tính `data-sveltekit-reload` trên một liên kết cụ thể hoặc bất kỳ phần tử nào chứa liên kết:


```svelte
/// file: src/routes/+layout.svelte
<nav +++data-sveltekit-reload+++>
	<a href="/">home</a>
	<a href="/about">about</a>
</nav>
```

Để biết thêm thông tin về các tùy chọn liên kết khả dụng và giá trị của chúng, hãy tham khảo [tài liệu tùy chọn liên kết](https://kit.svelte.dev/docs/link-options).