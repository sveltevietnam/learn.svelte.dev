---
title: trailingSlash
---

Hai URL như `/foo` và `/foo/` có vẻ giống nhau, nhưng thực sự chúng khác nhau. Một URL tương đối như `./bar` sẽ trở thành `/bar` trong trường hợp đầu tiên và `/foo/bar` trong trường hợp thứ hai, và các công cụ tìm kiếm sẽ xem xét chúng như các mục riêng biệt, ảnh hưởng đến SEO của bạn.

Nói một cách ngắn gọn, việc thoải mái thêm dấu gạch chéo ở cuối là một ý tưởng tồi. Theo mặc định, SvelteKit loại bỏ dấu gạch chéo ở cuối, có nghĩa là một yêu cầu cho `/foo/` sẽ dẫn đến một chuyển hướng đến `/foo`.

Nếu bạn muốn thêm một dấu gạch chéo ở cuối, bạn có thể chỉ định tùy chọn `trailingSlash` như sau:

```js
/// file: src/routes/always/+page.server.js
export const trailingSlash = 'always';
```

Để điều chỉnh cả hai trường hợp (điều này không được khuyến khích!), sử dụng `'ignore'`:

```js
/// file: src/routes/ignore/+page.server.js
export const trailingSlash = 'ignore';
```

Giá trị mặc định là `'never'`.

Việc áp dụng hay không dấu gạch chéo ở cuối ảnh hưởng đến quá trình prerendering. Một URL như `/always/` sẽ được lưu vào ổ đĩa dưới dạng `always/index.html` trong khi một URL như `/never` sẽ được lưu dưới dạng `never.html`.
