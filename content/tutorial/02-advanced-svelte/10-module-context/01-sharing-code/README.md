---
title: Chia sẽ mã
---

Trong tất cả các ví dụ chúng ta đã thấy cho đến nay, khối `<script>` chứa mã nguồn chạy khi mỗi trường hợp của thành phần được khởi tạo. Đối với hầu hết các component, đó sẽ là tất cả những gì bạn cần.

Hiếm khi, bạn có thể cần chạy một số mã nguồn bên ngoài của một trường hợp cụ thể của component. Ví dụ: trở lại với trình phát audio tùy chỉnh từ một [bài tập trước đó](media-elements), bạn có thể phát cả bốn bản đồ âm thanh cùng một lúc. Sẽ tốt hơn nếu  phát một bản còn tất cả các bản khác thì dừng.

Chúng ta có thể thực hiện điều đó bằng cách khai báo một khối `<script context="module">`. Mã được chứa trong nó sẽ chạy một lần, khi mô-đun lần đầu được phản hồi, thay vì khi một thành phần được khởi tạo. Đặt nó ở đầu `AudioPlayer.svelte` (lưu ý đây là một thẻ `<script>` _riêng biệt_):

```svelte
/// file: AudioPlayer.svelte
+++<script context="module">
	let current;
</script>+++
```

Bây giờ có thể cho phép các thành phần 'nói chuyện' với nhau mà không cần quản lý trạng thái:

```svelte
/// file: AudioPlayer.svelte
<audio
	src={src}
	bind:currentTime={time}
	bind:duration
	bind:paused
+++	on:play={(e) => {
		const audio = e.currentTarget;

		if (audio !== current) {
			current?.pause();
			current = audio;
		}
	}}+++
	on:ended={() => {
		time = 0;
	}}
/>
```
