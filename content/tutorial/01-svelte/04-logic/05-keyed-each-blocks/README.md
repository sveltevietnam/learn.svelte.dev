---
title: Khối Each có khoá
---

Khi bạn thay đổi giá trị của một khối `each`, nó mặc định sẽ thêm và xoá giá trị ở _cuối_ mảng, và cập nhật những giá trị mà có thể đã được thay đổi. Nhưng có thể bạn không muốn vậy.

<!-- Thêm kết luận vì có thể họ không hiểu DOM node là gì. -->
Làm sẽ dễ hơn nói. Hãy bấm vào nút 'Xoá thứ đầu tiên' vài lần, và để ý xem: nó không xoá component `<Thing>` đầu tiên, nhưng lại xoá cái DOM node _ở cuối_. Rồi nó cập nhật giá trị của `name` trong các DOM node còn lại, ngoại trừ các emoji mà đã dính vào mỗi cái `<Thing>` khi nó được tạo. Kết quả là các emoji và các từ sẽ không còn khớp với nhau.

Thay vào đó, ta muốn chỉ xoá cái component `<Thing>` đầu tiên và DOM node chính nó, và không đụng chạm những cái khác.

Để làm thế, ta có thể cho định danh _(unique identity)_ (hoặc là "khoá") cho mỗi khối `each`:

```svelte
/// file: App.svelte
{#each things as thing (+++thing.id+++)}
	<Thing name={thing.name}/>
{/each}
```

Ở đây, `(thing.id)` là _khoá_, nó sẽ bảo Svelte ngẫm ra DOM node nào sẽ thay đổi khi component được cập nhật.

<!-- FIXME: dịch "identity persists without referential equality" như thế nào? -->
> Bạn có thể dùng bất kì đối tượng nào làm khoá, vì Svelte sử dụng `Map` ở bên trong - cách nói khác là bạn có thể dùng `(thing)` thay cho `(thing.id)`. Tuy nhiên dùng dải kí tự hoặc số sẽ an toàn hơn vì giá trị của chúng là không đổi, còn object thì có thể khác (dù dữ liệu vẫn giữ nguyên) vì nó là tham chiếu (reference).