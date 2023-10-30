---
title: Rest parameters
path: /how
focus: /src/routes/[path]/+page.svelte
---

Để phù hợp với một số đoạn path không xác định trước, bạn có thể sử dụng tham số `[...rest]`, được đặt tên như vậy vì nó giống với [rest parameters trong JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).


Đổi tên `src/routes/[path]` thành `src/routes/[...path]`. Bây giờ, route này sẽ phù hợp với bất kỳ đoạn path nào.

> Đối với các route khác, nếu rout nào cụ thể rõ ràng hơn, sẽ được kiểm tra trước, làm cho rest parameters trở nên hữu ích như là các route 'catch-all'. Ví dụ, nếu bạn cần một trang 404 tùy chỉnh cho các trang bên trong `/categories/...`, bạn có thể thêm các tệp như sau:
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