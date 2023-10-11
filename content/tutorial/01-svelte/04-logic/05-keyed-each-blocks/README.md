---
title: Khối Each có khoá
---


Mặc định rằng khi bạn thay đổi giá trị của một khối `each`, nó sẽ thêm và xoá giá trị ở _cuối_ mảng, và cập nhật những giá trị mà có thể đã được thay đổi. Nhưng có thể đây là thứ bạn không muốn.

Làm sẽ dễ hơn nói. Hãy bấm vào nút 'Xoá thứ đầu tiên' vài lần, và để ý xem: nó không xoá component `<Thing>` đầu tiên, nhưng lại xoá cái DOM node _ở cuối_. Rồi nó cập nhật giá trị của `name` trong các DOM node còn lại, ngoại trừ các emoji mà đã dính vào mỗi cái `<Thing>` khi nó được tạo.

Thay vào đó, ta muốn chỉ xoá cái component `<Thing>` đầu tiên và DOM node của nó, và không đụng chạm những cái khác.

Để làm thế, ta có thể cho một cái định danh (hoặc là "khoá") cho mỗi khối `each`:

```svelte
/// file: App.svelte
{#each things as thing (+++thing.id+++)}
	<Thing name={thing.name}/>
{/each}
```

Ở đây, `(thing.id)` là _khoá_, nó sẽ bảo Svelte ngẫm ra DOM node nào sẽ thay đổi khi component được cập nhật.

<!-- FIXME: dịch "identity persists without referential equality" như thế nào? -->
> Bạn có thể dùng bất kì đối tượng nào làm khoá, vì Svelte sử dụng `Map` ở bên trong - cách nói khác là bạn có thể dùng `(thing)` thay cho `(thing.id)`. Dùng dải kí tự hoặc số sẽ an toàn hơn, bởi lẽ danh tính của mỗi cái sẽ được giữ nguyên mà không có sự bình đẳng tham chiếu, ví dụ như khi cập nhật dữ liệu mới nhất từ một máy chủ API.