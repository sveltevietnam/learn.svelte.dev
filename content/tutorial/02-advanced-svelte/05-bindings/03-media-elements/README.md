---
title: Phần tử media
---

Bạn có thể bind thuộc tính của phần tử `<audio>` và `<video>`, giúp bạn dễ dàng xây dựng giao diện trình phát tùy chỉnh, chẳng hạn như `AudioPlayer.svelte`.

Đầu tiên, thêm phần tử `<audio>` cùng với các phép bind của nó (chúng ta sẽ sử dụng dạng viết tắt cho `src`, `duration` và `paused`):

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

Tổng số phép bind đầy đủ cho <audio> và <video> như sau - bảy phép bind _chỉ đọc_...

- `duration` (chỉ đọc) — tổng thời tính bằng giây
- `buffered`  (chỉ đọc) — một mảng các đối tượng `{start, end}`
- `seekable` (chỉ đọc) — như trên
- `played` (chỉ đọc) — như trên
- `seeking` (chỉ đọc) — boolean
- `ended` (chỉ đọc) — boolean
- `readyState` (chỉ đọc) — số giữa (và bao gồm) 0 và 4

...và năm phép bind hai chiều:

- `currentTime` — điểm đang phát hiện tại của video, tính bằng giây
- `playbackRate` — phát nhanh hơn hoặc chậm lại (`1` là 'bình thường')
- `paused` — dừng
- `volume` — một giá trị giữa 0 và 1
- `muted` — một giá trị boolean, trong đó true là tắt tiếng

Video còn có các phép bind chỉ đọc với `videoWidth` và `videoHeight`.
