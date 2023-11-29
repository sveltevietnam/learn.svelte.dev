---
title: <svelte:head>
---

Phần tử `<svelte:head>` cho phép bạn chèn các phần tử vào trong thẻ `<head>` của tài liệu của bạn. Điều này hữu ích cho các thẻ `<title>` và `<meta>`, quan trọng để tối ưu hóa SEO.

Vì những thẻ đó khá khó để hiển thị trong ngữ cảnh của bài hướng dẫn này, chúng ta sẽ sử dụng nó cho một mục đích khác — tải các stylesheets.

```svelte
/// file: App.svelte
<script>
	const themes = ['margaritaville', 'retrowave', 'spaaaaace', 'halloween'];
	let selected = themes[0];
</script>

+++<svelte:head>
	<link rel="stylesheet" href="/stylesheets/{selected}.css" />
</svelte:head>+++

<h1>Chào mừng đến với site của tôi!</h1>
```

> Trong chế độ render trên máy chủ (SSR), nội dung của <svelte:head> được trả về một cách riêng biệt so với phần còn lại của mã HTML của bạn.
