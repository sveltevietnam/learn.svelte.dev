---
title: <svelte:options>
---

Phần tử `<svelte:options>` cho phép bạn chỉ định các tùy chọn trình biên dịch.

Chúng ta sẽ sử dụng tùy chọn `immutable` như một ví dụ. Trong ứng dụng này, phần tử `<Todo>` nhấp nháy mỗi khi nó nhận dữ liệu mới. Bằng cách nhấp vào một trong các mục, nó sẽ chuyển đổi trạng thái `done` của nó bằng cách tạo một mảng `todos` được cập nhật. Điều này khiến các phần tử `<Todo>` _khác_ nhấp nháy, mặc dù chúng không thực sự tạo ra bất kỳ thay đổi nào trên DOM.

Chúng ta có thể tối ưu hóa điều này bằng cách thông báo rằng phần tử `<Todo>` luôn nhận dữ liệu bất biến. Có nghĩa là ta cam kết không bao giờ _thay đổi_ prop `todo`, mà thay vào đó sẽ tạo ra các đối tượng todo mới mỗi khi có thay đổi.

Thêm dòng sau vào đầu của `Todo.svelte`:

```svelte
/// file: Todo.svelte
<svelte:options immutable={true} />
```

> Bạn có thể rút gọn điều này thành `<svelte:options immutable/>` nếu bạn muốn.

Bây giờ, khi bạn chuyển đổi các todo bằng cách nhấp vào chúng, chỉ có các phần tử được cập nhật mới nhấp nháy.

Các tùy chọn có thể được thiết lập ở đây bao gồm:

- `immutable={true}` — bạn không bao giờ sử dụng dữ liệu có thể thay đổi, vì vậy trình biên dịch có thể thực hiện các kiểm tra đơn giản về đẳng thức tham chiếu để xác định xem giá trị có thay đổi hay không.
- `immutable={false}` — mặc định. Svelte sẽ cẩn trọng hơn về việc xác định xem đối tượng có thể thay đổi hay không.
- `accessors={true}` — thêm các getter và setter cho các prop của component.
- `accessors={false}` — mặc định
- `namespace="..."` — namespace nơi phần tử này sẽ được sử dụng, thường là `"svg"`.
- `customElement="..."` — tên để sử dụng khi biên dịch phần tử này như một phần tử tùy chỉnh.

Tham khảo [tài liệu API](https://svelte.dev/docs) để biết thêm thông tin về các tùy chọn này.
