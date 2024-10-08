---
title: SvelteKit là gì?
---

Nếu Svelte là một _framework component_ thì SvelteKit là một _app framework_ (hoặc 'metaframework' tùy vào cách định nghĩa). SvelteKit giúp giải quyết nhiều vấn đề phức tạp khi xây dựng một ứng dụng thực tế (production-ready):

- Routing
- Server-side rendering
- Data fetching
- Service workers
- TypeScript integration
- Prerendering
- Single-page apps
- Library packaging (Đóng gói thư viện)
- Optimised production builds (Tối ưu hóa bản build cho production)
- Deploying to different hosting providers (Deploy lên các nhà cung cấp hosting khác nhau)
- ...và còn nhiều điều khác nữa

SvelteKit sẽ mặc định render ứng dụng từ phía server (giống như 'multi-page apps' (MPA) theo cách truyền thống) để có SEO tốt và có thể load nhanh từ lần đầu tiên (first load), rồi sau đó có thể chuyển sang sử dụng client-side navigation _(điều hướng bên phía client)_ (như 'single-page apps' (SPA)) để tránh bị gián đoạn đường truyền và phải tải lại nhiều thứ (ví dụ như script analytics từ bên thứ ba - ví dụ như Google Analytics). Nơi nào chạy JavaScript được thì sẽ chạy được các ứng dụng này. Có thể những người dùng ấy không nhất thiết phải sử dụng đến JavaScript.

Tuy nghe phức tạp nhưng bạn đừng lo lắng: SvelteKit sẽ đồng hành cùng bạn! Hãy bắt đầu từ những thử đơn giản và thêm dần tính năng khi cần.

## Cấu trúc dự án

Bên phải, trong cây thư mục, bạn sẽ thấy một số tệp tin thường gặp trong một dự án có sử dụng SvelteKit.

`package.json` sẽ quen thuộc nếu bạn đã làm việc với Node.js trước đây. Nó liệt kê các phần mềm phụ thuộc (dependencies) của dự án — bao gồm `svelte` và `@sveltejs/kit` — và một loạt các `scripts` để tương tác với CLI của SvelteKit. (Chúng ta đang chạy `npm run dev` ở cửa sổ dưới cùng.)

> Lưu ý rằng nó cũng bao gồm dòng `"type": "module"`, có nghĩa là các tệp `.js` sẽ được mặc định xử lý như các mô-đun thuần JavaScript, thay vì định dạng CommonJS thời cũ.

`svelte.config.js` chứa cấu hình dự án của bạn. Bạn không cần lo lắng về tệp này lúc này, nhưng nếu bạn tò mò, [ghé thăm tài liệu](https://kit.svelte.dev/docs/configuration).

`vite.config.js` chứa cấu hình [Vite](https://vitejs.dev/). Vì SvelteKit sử dụng Vite, bạn có thể sử dụng [các tính năng của Vite](https://vitejs.dev/guide/features.html) như hot module replacement, hỗ trợ TypeScript, xử lý tài nguyên tĩnh (static asset), vân vân

`src` là nơi mã nguồn ứng dụng của bạn được đặt. `src/app.html` là mẫu trang của bạn (SvelteKit sẽ thay thế `%sveltekit.head%` và `%sveltekit.body%`), và `src/routes` định nghĩa [routes](/tutorial/pages) của ứng dụng bạn.

Cuối cùng, `static` chứa các tài guyên khác (như `favicon.png` hoặc `robots.txt`) và sẽ được giữ nguyên khi deploy.
