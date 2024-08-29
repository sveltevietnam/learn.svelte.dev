---
title: Slots
---

Tương tự như các phần tử có thể có các phần tử con...

```html
/// no-file
<div>
	<p>Tôi là một phần tử con của thẻ div</p>
</div>
```

... thì các component cũng có thể. Trước khi một component có thể chấp nhận các phần tử con, nó cần biết nơi để đặt chúng. Chúng ta làm điều này với phần tử `<slot>`. Đặt nó bên trong `Card.svelte`:

```svelte
/// file: Card.svelte
<div class="card">
	+++<slot></slot>+++
</div>
```

Bây giờ bạn có thể đặt các phần tử lên thẻ:

```svelte
/// file: App.svelte
<Card>
	+++<span>Patrick BATEMAN</span>+++
	+++<span>Vice President</span>+++
</Card>
```
