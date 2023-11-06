---
title: prerender
---

Prerendering có nghĩa là tạo HTML cho một trang một lần vào thời điểm build, thay vì linh động tạo HTML cho trang cho mỗi lần có yêu cầu request.

Ưu điểm khi dùng dữ liệu tĩnh là rất rẻ và hiệu suất, cho phép bạn dễ dàng phục vụ một số lượng lớn người dùng mà không phải lo lắng về cache-control headers (cái rất dễ gặp lỗi).

Đổi lại là quá trình build mất thời gian hơn và nội dung được prerender chỉ có thể được cập nhật bằng cách build và triển khai một phiên bản mới của ứng dụng.

Để prerender một trang, đặt `prerender` thành `true`:
```js
/// file: src/routes/+page.server.js
export const prerender = true;
```

Trong hướng dẫn này, sẽ không có bất kỳ dấu hiệu nào để bạn quan sát được, vì ứng dụng đang chạy ở chế độ `dev` mode.

Không phải tất cả các trang đều có thể được prerender. Quy tắc cơ bản là: để nội dung có thể prerender, bất kỳ hai người dùng nào truy cập trực tiếp đều phải nhận cùng một nội dung từ server, và trang không được chứa các form actions. Trang có dynamic route parameters _(tham số động trong đường dẫn)_ có thể được prerender miễn là chúng được chỉ định trong cấu hình [`prerender.entries`](https://kit.svelte.dev/docs/configuration#prerender) hoặc có thể được truy cập bằng cách theo các liên kết từ các trang nằm trong `prerender.entries`.

> Đặt `prerender` thành `true` trong `+layout.server.js` gốc của bạn về cơ bản biến SvelteKit thành một trình tạo trang tĩnh (SSG).
