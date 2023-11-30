---
title: Phần tử media
---

Bạn có thể ràng buộc đến các thuộc tính của các phần tử `<audio>` và `<video>`, giúp bạn dễ dàng xây dựng giao diện trình phát tùy chỉnh, chẳng hạn như `AudioPlayer.svelte`.

Đầu tiên, thêm phần tử `<audio>` cùng với các ràng buộc của nó (chúng ta sẽ sử dụng dạng viết tắt cho `src`, `duration` và `paused`):

```svelte
/// file: AudioPlayer.svelte
<div class="player" class:paused>
+++	<audio
		{src}
		bind:currentTime={time}
		bind:duration
		bind:paused
	/>+++

	<button
		class="play"
		aria-label={paused ? 'play' : 'pause'}
	/>
```

Tiếp theo, thêm một trình xử lý sự kiện cho <button> để chuyển đổi `paused`:

```svelte
/// file: AudioPlayer.svelte
<button
	class="play"
	aria-label={paused ? 'play' : 'pause'}
	+++on:click={() => paused = !paused}+++
/>
```

Bây giờ, trình phát audio của chúng ta đã có chức năng cơ bản. Hãy thêm khả năng tua đến một phần cụ thể của bản nhạc bằng cách kéo thanh trượt. Bên trong trình xử lý `pointerdown` của thanh trượt có một hàm `seek`, nơi chúng ta có thể cập nhật `time`:

```js
/// file: AudioPlayer.svelte
function seek(e) {
	const { left, width } = div.getBoundingClientRect();

	let p = (e.clientX - left) / width;
	if (p < 0) p = 0;
	if (p > 1) p = 1;

	+++time = p * duration;+++
}
```

Khi bản nhạc kết thúc, hãy lịch sự - tua lại:

```svelte
/// file: AudioPlayer.svelte
<audio
	{src}
	bind:currentTime={time}
	bind:duration
	bind:paused
+++	on:ended={() => {
		time = 0;
	}}+++
/>
```

Tổng số ràng buộc đầy đủ cho <audio> và <video> như sau - bảy ràng buộc _chỉ đọc_...

- `duration` (chỉ đọc) — tổng thời lượng của video, tính bằng giây
- `buffered`  (chỉ đọc) — một mảng các đối tượng `{start, end}`
- `seekable` (chỉ đọc) — như trên
- `played` (chỉ đọc) — như trên
- `seeking` (chỉ đọc) — boolean
- `ended` (chỉ đọc) — boolean
- `readyState` (chỉ đọc) — số giữa (và bao gồm) 0 và 4

...và năm ràng buộc hai chiều:

- `currentTime` — the current point in the video, in seconds điểm hiện tại trong video, tính bằng giây
- `playbackRate` — tốc độ phát video, với `1` là 'bình thường'
- `paused` — dừng
- `volume` — một giá trị giữa 0 và 1
- `muted` — một giá trị boolean, trong đó true là tắt tiếng

Video thêm vào đó các ràng buộc chỉ đọc `videoWidth` và `videoHeight`.
