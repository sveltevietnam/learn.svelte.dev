---
title: SvelteKit là gì?
---

Trong khi Svelte là một _framework component_ (bộ khung thành phần), SvelteKit là một _app framework_ (bộ khung ứng dụng, chứa các bộ khung thành phần) (hoặc 'metaframework', tùy thuộc vào người bạn hỏi) giải quyết những vấn đề khó khăn khi xây dựng một ứng dụng sẵn sàng để chạy thực tế (ứng dụng sẳn sàng tung ra thị trường cho người dùng sử dụng - production-ready):

- Routing (Định tuyến)
- Server-side rendering (Hiển thị phía máy chủ)
- Data fetching (Lấy dữ liệu)
- Service workers (một đoạn mã (script) mà trình duyệt chạy nền (ở dưới background), tách khỏi trang web và giúp thực hiện các tính năng không cần đến trang web, hay tương tác người dùng)
- TypeScript integration (Tích hợp TypeScript)
- Prerendering (Trước khi hiển thị (render))
- Single-page apps (Ứng dụng trang đơn)
- Library packaging (Đóng gói thư viện)
- Optimised production builds (Xây dựng tối ưu cho production)
- Deploying to different hosting providers (Triển khai lên các nhà cung cấp hosting khác nhau)
- ...và còn nhiều điều khác nữa

Ứng dụng SvelteKit được render bởi máy chủ mặc định (giống như 'multi-page apps' truyền thống hoặc MPAs) để có hiệu suất tải lần đầu tốt và đặc tính SEO xuất sắc, nhưng sau đó có thể chuyển sang điều hướng phía máy khách / phía người dùng (giống như 'single-page apps' hiện đại hoặc SPAs) để tránh việc tải lại mọi thứ một cách giật gân, khó chịu với người dùng (bao gồm cả mã phân tích của bên thứ ba như mã của google analytic) khi người dùng điều hướng. Chúng có thể chạy ở bất kỳ nơi nào JavaScript chạy, tuy nhiên — như chúng ta sẽ thấy — có thể người dùng của bạn không cần phải chạy bất kỳ JavaScript nào.

Nếu điều này nghe có vẻ phức tạp, đừng lo lắng: SvelteKit là framework (bộ khung - là cấu trúc được dùng để xây dựng phần mềm. Framework sẽ bao gồm các đoạn code được viết sẵn cùng với các thư viện, tệp hình ảnh và tài liệu tham khảo được đóng thành một gói. Gói này có thể sửa đổi để phù hợp với nhu cầu cụ thể của từng dự án) phát triển cùng với bạn! Bắt đầu đơn giản và thêm tính năng mới khi bạn cần chúng.

## Cấu trúc dự án

Bên phải, trong trình xem (cây) tệp tin, bạn sẽ thấy một số file tệp tin mà SvelteKit mong đợi tìm thấy (cần có) trong một dự án.

`package.json` sẽ quen thuộc nếu bạn đã làm việc với Node.js trước đây. Nó liệt kê các dependencies (là những gói (package) bắt buộc phải có trong quá trình chạy sản phẩm, nó sẽ cung cấp các hàm đã được khai báo (khi tiến hành cài đặt package vào dự án) mà chương trình sử dụng) của dự án — bao gồm `svelte` và `@sveltejs/kit` — và một loạt các `scripts` để tương tác với CLI của SvelteKit. (Chúng ta đang chạy `npm run dev` ở cửa sổ dưới cùng.)

> Lưu ý rằng nó cũng chỉ định `"type": "module"`, có nghĩa là các tệp `.js` được xử lý như các mô-đun JavaScript native mặc định, thay vì định dạng CommonJS cũ.

`svelte.config.js` chứa cấu hình dự án của bạn. Bạn không cần lo lắng về tệp này lúc này, nhưng nếu bạn tò mò, [ghé thăm tài liệu](https://kit.svelte.dev/docs/configuration).

`vite.config.js` chứa cấu hình [Vite](https://vitejs.dev/). Vì SvelteKit sử dụng Vite, bạn có thể sử dụng [các tính năng của Vite](https://vitejs.dev/guide/features.html) như hot module replacement, hỗ trợ TypeScript, xử lý tài nguyên tĩnh và cũng như vậy.

`src` là nơi mã nguồn ứng dụng của bạn được đặt. `src/app.html` là mẫu trang của bạn (SvelteKit thay thế `%sveltekit.head%` và `%sveltekit.body%` khi cần thiết), và `src/routes` định nghĩa [routes](/tutorial/pages) của ứng dụng bạn.

Cuối cùng, `static` chứa bất kỳ tài nguyên nào (như `favicon.png` hoặc `robots.txt`) nên đã được đi kèm ( included) khi ứng dụng của bạn được triển khai.
