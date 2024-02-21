---
title: Khối Each có khoá
---

Khi bạn thay đổi giá trị của một khối `each`, nó mặc định sẽ thêm và xoá DOM node ở _cuối_ mảng, và cập nhật những giá trị mà có thể đã được thay đổi. Nhưng có thể bạn không muốn vậy.

Làm sẽ dễ hơn nói. Component `<Thing>` đặt emoji là hằng số khi nó được tạo, nhưng `name` được truyền vào qua prop.

Hãy nhấn vào nút 'Xoá phần tử đầu tiên' vài lần, và để ý xem:

1. Phần tử cuối cùng bị xóa.
2. Sau đó, giá trị `name` trong các DOM node còn lại được cập nhật, nhưng emoji thì không, vì nó đã được cố định khi mỗi `<Thing>` được tạo.

Thay vào đó, ta muốn chỉ xoá component `<Thing>` đầu tiên và các DOM node của chính nó, và không đụng chạm những cái khác.

Để làm thế, ta có thể cho định danh _(unique identity)_ (còn gọi là "khoá") cho mỗi khối `each`:

```svelte
/// file: App.svelte
{#each things as thing (+++thing.id+++)}
	<Thing name={thing.name}/>
{/each}
```

Ở đây, `(thing.id)` là _khoá_, nó giúp Svelte biết được nên cập nhật gì khi có giá trị thay đổi (trong ví dụ này là `name`).

<!-- FIXME: dịch "identity persists without referential equality" như thế nào? -->
> Bạn có thể dùng bất kì đối tượng nào làm khoá, vì Svelte sử dụng `Map` ở bên trong - cách nói khác là bạn có thể dùng `(thing)` thay cho `(thing.id)`. Tuy nhiên dùng dải kí tự hoặc số sẽ an toàn hơn vì giá trị của chúng là không đổi, còn object thì có thể khác (dù dữ liệu vẫn giữ nguyên) vì nó là tham chiếu (reference).