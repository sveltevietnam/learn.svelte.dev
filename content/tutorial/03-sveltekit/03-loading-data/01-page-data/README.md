---
title: Page data (Dữ liệu trang)
path: /blog
---

Về cơ bản, những chức năng của SvelteKit có thể tóm gọn thành ba điều:

1. **Routing** — xác định route nào phù hợp với một incoming request _(yêu cầu đến)_
2. **Loading** — lấy dữ liệu cần thiết cho route _(định tuyến)_
3. **Rendering** - tạo ra một số HTML (trên server _(máy chủ)_) hoặc cập nhật DOM (ở browser _(trình duyệt)_)

Chúng ta đã biết cách route và render hoạt động. Bây giờ hãy nói về phần giữa — loading _(tải)_.

Mỗi trang của ứng dụng có thể khai báo một hàm `load` trong tệp `+page.server.js` cùng thư mục với tệp `+page.svelte`. Như tên tệp gợi ý, mô-đun này chỉ chạy trên server, bao gồm cả khi truy cập phía client-side _(máy khách)_. Chúng ta hãy thêm một tệp `src/routes/blog/+page.server.js` để có thể thay thế các hard-coded links _(các liên kết có dữ liệu mẫu)_ trong `src/routes/blog/+page.svelte` bằng dữ liệu thực sự của bài viết blog:

```js
/// file: src/routes/blog/+page.server.js
import { posts } from './data.js';

export function load() {
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title
		}))
	};
}
```

> Vì mục đích hướng dẫn là chính, nên chúng ta sẽ lấy dữ liệu từ `src/routes/blog/data.js`. Trong ứng dụng thực tế, bạn có thể lấy dữ liệu từ một cơ sở dữ liệu hoặc một hệ quản trị nội dung (CMS).

Chúng ta có thể truy cập dữ liệu này trong `src/routes/blog/+page.svelte` thông qua prop _(thuộc tính)_ `data`:

```svelte
/// file: src/routes/blog/+page.svelte
+++<script>
	export let data;
</script>+++

<h1>blog</h1>

<ul>
---	<li><a href="/blog/one">one</a></li>
	<li><a href="/blog/two">two</a></li>
	<li><a href="/blog/three">three</a></li>---
+++	{#each data.summaries as { slug, title }}
		<li><a href="/blog/{slug}">{title}</a></li>
	{/each}+++
</ul>
```

Bây giờ, chúng ta hãy làm tương tự cho trang bài viết:

```js
/// file: src/routes/blog/[slug]/+page.server.js
import { posts } from '../data.js';

export function load({ params }) {
	const post = posts.find((post) => post.slug === params.slug);

	return {
		post
	};
}
```

```svelte
/// file: src/routes/blog/[slug]/+page.svelte
+++<script>
	export let data;
</script>+++

---<h1>blog post</h1>---
+++<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>+++
```

Còn một chi tiết cuối cùng chúng ta cần chú ý — người dùng có thể truy cập vào một đường dẫn không tồn tại hoặc không hợp lệ như `/blog/nope`, trong trường hợp này, chúng ta muốn phản hồi với một trang 404:

```js
/// file: src/routes/blog/[slug]/+page.server.js
+++import { error } from '@sveltejs/kit';+++
import { posts } from '../data.js';

export function load({ params }) {
	const post = posts.find((post) => post.slug === params.slug);

	+++if (!post) throw error(404);+++

	return {
		post
	};
}
```

Chúng ta sẽ tìm hiểu thêm về xử lý lỗi trong các chương sau.
