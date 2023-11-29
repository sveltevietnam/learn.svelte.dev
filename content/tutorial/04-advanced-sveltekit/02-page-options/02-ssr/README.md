---
title: ssr
---

Server-side rendering (SSR) là quá trình tạo ra HTML trên máy chủ và là điều mà SvelteKit thực hiện mặc định. Điều này quan trọng cho hiệu suất và [độ bền](https://kryogenix.org/code/browser/everyonehasjs.html), và rất hữu ích để tối ưu hóa công cụ tìm kiếm (SEO) - tuy một số công cụ tìm kiếm có thể đánh chỉ mục nội dung được render trong trình duyệt với JavaScript, điều này xảy ra ít thường xuyên và ít tin cậy hơn.

Tuy nhiên, một số component _không thể_ được render trên server, có thể do chúng mong đợi có thể truy cập các biến toàn cục của trình duyệt như `window` ngay lập tức. Nếu có thể, bạn nên thay đổi những component đó để chúng _có thể_ render trên server, nhưng nếu không thì bạn có thể tắt SSR:


```js
/// file: src/routes/+page.server.js
export const ssr = false;
```

> Đặt `ssr` thành `false` bên trong `+layout.server.js` gốc của bạn thực tế chuyển ứng dụng của bạn thành một ứng dụng một trang đơn (SPA).

