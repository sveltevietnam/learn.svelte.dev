---
title: Preloading
---

Trong bài tập này, cả hai đường dẫn `/slow-a` và `/slow-b` đều được tạo một độ trễ trong các hàm `load` của chúng, điều này có nghĩa là mất nhiều thời gian để chuyển hướng đến chúng.

Không phải lúc nào bạn cũng có thể làm dữ liệu của mình tải nhanh hơn — đôi khi điều đó nằm ngoài tầm kiểm soát của bạn — nhưng SvelteKit có thể tăng tốc độ chuyển hướng bằng cách _dự đoán_ chúng. Khi một phần tử `<a>` có thuộc tính `data-sveltekit-preload-data`, SvelteKit sẽ bắt đầu chuyển hướng ngay khi người dùng di chuột qua liên kết (trên máy tính để bàn) hoặc chạm vào nó (trên điện thoại di động). Hãy thử thêm nó vào liên kết đầu tiên:

```svelte
/// file: src/routes/+layout.svelte
<nav>
	<a href="/">home</a>
	<a href="/slow-a" +++data-sveltekit-preload-data+++>slow-a</a>
	<a href="/slow-b">slow-b</a>
</nav>
```

Việc chuyển hướng đến `/slow-a` sẽ nhanh hơn đáng kể. Bắt đầu chuyển hướng khi di chuột qua hoặc chạm vào (thay vì chờ sự kiện click được đăng ký) có lẽ không tạo ra sự khác biệt lớn, nhưng thực tế thường tiết kiệm 200ms hoặc hơn. Đó là đủ để thấy sự khác biệt giữa chậm và nhanh.

Bạn có thể đặt thuộc tính này trên từng liên kết hoặc trên bất kỳ phần tử nào _chứa_ liên kết. Mẫu dự án mặc định chứa thuộc tính trên phần tử <body>:

```html
/// no-file
<body data-sveltekit-preload-data>
	%sveltekit.body%
</body>
```

Bạn có thể tùy chỉnh hành vi thêm bằng cách chỉ định một trong các giá trị sau cho thuộc tính:

- `"hover"` (mặc định, fallback thành `"tap"` trên di động)
- `"tap"` — chỉ bắt đầu preload khi chạm
- `"off"` — tắt preload

Việc sử dụng `data-sveltekit-preload-data` đôi khi có thể dẫn đến những kết quả không chính xác - tức là tải dữ liệu trước nhưng sau đó chuyển hướng không xảy ra — điều này không ai muốn. Có một phương án khác, `data-sveltekit-preload-code` cho phép bạn preload JavaScript cần thiết cho một đường dẫn nhất định mà không cần tải trước dữ liệu của nó. Thuộc tính này có thể có một trong những giá trị sau:

- `"eager"` — preload mọi thứ trên trang sau mỗi chuyển hướng
- `"viewport"` — preload mọi thứ khi nó xuất hiện trong viewport
- `"hover"` (mặc định) như ở trên
- `"tap"` — như ở trên
- `"off"` — như ở trên

Bạn cũng có thể khởi chạy việc preload với `preloadCode` và `preloadData` được imported từ `$app/navigation`:

```js
/// no-file
import { preloadCode, preloadData } from '$app/navigation';

// preload code và data cần thiết để chuyển hướng đến /foo
preloadData('/foo');

// preload code cần thiết để chuyển hướng đến /bar, nhưng không preload data
preloadCode('/bar');
```