---
title: Tên gọi $lib
---

Bởi vì SvelteKit sử dụng route _(định tuyến)_ dựa trên thư mục, nên việc đặt các module và components gần các route sử dụng chúng sẽ tiện hơn. Có một quy tắc là 'đặt mã gần nơi sử dụng nó'.

Đôi khi, mã được sử dụng ở nhiều nơi trong dự án. Do vậy, sẽ tiện hơn khi có một nơi để đặt chúng mà có thể được truy cập bởi tất cả các route mà không cần prefix _(tiền tố)_ nhập với `../../../../`. Trong SvelteKit, đó là thư mục `src/lib`. Bất cứ thứ gì bên trong thư mục này có thể được truy cập bởi bất kỳ mô-đun nào trong `src` thông qua tên `$lib`.

Cả hai tệp `+page.svelte` trong bài tập này đều nhập `src/lib/message.js`. Nhưng nếu bạn chuyển đến `/a/deeply/nested/route`, ứng dụng sẽ gặp lỗi, vì chúng ta đã điền sai tiền tố. Hãy sửa nó lại thành `$lib/message.js`:

```svelte
/// file: src/routes/a/deeply/nested/route/+page.svelte
<script>
	import { message } from +++'$lib/message.js'+++;
</script>

<h1>một route nằm sâu</h1>
<p>{message}</p>
```

Làm tương tự cho `src/routes/+page.svelte`:

```svelte
/// file: src/routes/+page.svelte
<script>
	import { message } from +++'$lib/message.js'+++;
</script>

<h1>home</h1>
<p>{message}</p>
```
