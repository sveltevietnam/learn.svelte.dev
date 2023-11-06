---
title: Rest parameters
path: /how
focus: /src/routes/[path]/+page.svelte
---

Nếu không định trước số lượng phân đoạn đường dẫn, bạn có thể sử dụng tham số `[...rest]`, được đặt tên như vậy vì nó giống với [rest parameters trong JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).


Đổi tên `src/routes/[path]` thành `src/routes/[...path]`. Bây giờ, route này sẽ phù hợp với bất kỳ đường dẫn nào.

> Các route cụ thể hơn sẽ được kiểm tra trước, khiến rest parameters trở nên hữu ích như một route 'catch all'. Ví dụ, nếu bạn cần tùy chỉnh trang 404 cho các trang `/categories/...`, bạn có thể thêm các tệp sau:
>
> ```diff
> src/routes/
> ├ categories/
> │ ├ animal/
> │ ├ mineral/
> │ ├ vegetable/
> +│ ├ [...catchall]/
> +│ │ ├ +error.svelte
> +│ │ └ +page.server.js
> ```
>
> Trong tệp `+page.server.js`, `throw error(404)` trong hàm `load`.

Rest parameters không cần phải ở cuối cùng - một route như `/items/[...path]/edit` hoặc `/items/[...path].json` là hoàn toàn hợp lệ.