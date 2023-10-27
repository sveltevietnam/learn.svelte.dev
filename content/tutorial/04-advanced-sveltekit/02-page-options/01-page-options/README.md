---
title: Cơ bản
---

Trong chương về [tải dữ liệu](/tutorial/page-data), chúng ta đã thấy làm thế nào bạn có thể xuất các hàm `load` từ các tệp `+page.js`, `+page.server.js`, `+layout.js` và `+layout.server.js`. Chúng ta cũng có thể xuất các **tùy chọn trang** từ những module này:

- `ssr` — nên hoặc không nên render trang trên server
- `csr` — có nên tải SvelteKit client hay không
- `prerender` — có nên prerender trang vào thời điểm build, thay vì mỗi request
- `trailingSlash` — có nên loại bỏ, thêm hoặc bỏ qua dấu gạch chéo sau cùng trong URL

Trong các bài tập tiếp theo, chúng ta sẽ tìm hiểu về từng tùy chọn này một cách chi tiết.

Các tùy chọn trang có thể áp dụng cho từng trang cụ thể (nếu được xuất từ `+page.js` hoặc `+page.server.js`), hoặc nhóm các trang (nếu được xuất từ `+layout.js` hoặc `+layout.server.js`). Để xác định một tùy chọn cho toàn bộ ứng dụng, hãy xuất nó từ layout gốc. Layout con và trang sẽ ghi đè các giá trị được đặt trong các layout cha, vì vậy - ví dụ - bạn có thể bật prerender cho toàn bộ ứng dụng của mình, sau đó tắt nó cho các trang cần được render động.

Bạn có thể pha trộn và kết hợp các tùy chọn này trong các khu vực khác nhau của ứng dụng của bạn - bạn có thể prerender các trang tiếp thị, render động trên server các trang dựa trên dữ liệu, và xem xét các trang quản trị của mình như là một SPA có thể render trên client. Điều này làm cho SvelteKit rất linh hoạt.
