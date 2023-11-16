---
title: Các sự kiện chuyển tiếp
---

Việc biết khi nào chuyển tiếp bắt đầu và kết thúc có thể hữu ích. Svelte phát ra các sự kiện mà bạn có thể lắng nghe giống như bất kỳ sự kiện DOM nào khác:

```svelte
/// file: App.svelte
<p
	transition:fly={{ y: 200, duration: 2000 }}
	+++on:introstart={() => status = 'intro started'}
	on:outrostart={() => status = 'outro started'}
	on:introend={() => status = 'intro ended'}
	on:outroend={() => status = 'outro ended'}+++
>
	Flies in and out
</p>
```
