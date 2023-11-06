---
title: $env/dynamic/public
---

Tương tự như [biến môi trường riêng tư](/tutorial/env-static-private), nếu có thể, thì nên sử dụng giá trị tĩnh, nhưng nếu cần thiết, chúng ta cũng có thể sử dụng giá trị động:

```svelte
/// file: src/routes/+page.svelte
<script>
	import { +++env+++ } from '$env/+++dynamic+++/public';
</script>

<main
	style:background={+++env.+++PUBLIC_THEME_BACKGROUND}
	style:color={+++env.+++PUBLIC_THEME_FOREGROUND}
>
	{+++env.+++PUBLIC_THEME_FOREGROUND} on {+++env.+++PUBLIC_THEME_BACKGROUND}
</main>
```
