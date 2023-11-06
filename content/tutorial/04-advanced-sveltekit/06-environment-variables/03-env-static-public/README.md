---
title: $env/static/public
---

Một số biến môi trường _có thể_ được mở rộng an toàn cho trình duyệt. Chúng được phân biệt với biến môi trường riêng tư thông qua tiền tố `PUBLIC_`.

Thêm giá trị cho hai biến môi trường công khai trong `.env`:

```env
/// file: .env
PUBLIC_THEME_BACKGROUND=+++"steelblue"+++
PUBLIC_THEME_FOREGROUND=+++"bisque"+++
```

Sau đó, import chúng vào `src/routes/+page.svelte`:

```svelte
/// file: src/routes/+page.svelte
<script>
---	const PUBLIC_THEME_BACKGROUND = 'white';
	const PUBLIC_THEME_FOREGROUND = 'black';---
+++	import {
		PUBLIC_THEME_BACKGROUND,
		PUBLIC_THEME_FOREGROUND
	} from '$env/static/public';+++
</script>
```
