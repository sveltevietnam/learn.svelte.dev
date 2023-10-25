---
title: Trang lỗi
---

Khi có điều gì đó không đúng bên trong một hàm `load`, SvelteKit sẽ render một trang lỗi.

Trang lỗi mặc định hơi nhạt nhòa. Chúng ta có thể tùy chỉnh nó bằng cách tạo một component `src/routes/+error.svelte`:

```svelte
/// file: src/routes/+error.svelte
<script>
	import { page } from '$app/stores';
	import { emojis } from './emojis.js';
</script>

<h1>{$page.status} {$page.error.message}</h1>
<span style="font-size: 10em">
	{emojis[$page.status] ?? emojis[500]}
</span>
```

Chú ý component `+error.svelte` được render bên trong root `+layout.svelte`. Chúng ta có thể tạo ra các trang lỗi `+error.svelte` cụ thể cho từng trang:

```svelte
/// file: src/routes/expected/+error.svelte
<h1>lỗi expected</h1>
```

Component này sẽ được render cho `/expected`, trong khi trang gốc `src/routes/+error.svelte` sẽ được render cho bất kỳ lỗi nào khác xảy ra.
