---
title: Gán lựa chọn
---

Ta cũng có thể dùng `bind:value` cho phần tử `<select>`:

```svelte
/// file: App.svelte
<select
    +++bind:+++value={selected}
    on:change={() => answer = ''}
>
```

Note that the `<option>` values are objects rather than strings. Svelte doesn't mind.
Để ý rằng giá trị của `<option>` là những object thay vì là dải kí tự. Svelte không quan tâm đâu.

> Because we haven't set an initial value of `selected`, the binding will set it to the default value (the first in the list) automatically. Be careful though — until the binding is initialised, `selected` remains undefined, so we can't blindly reference e.g. `selected.id` in the template.