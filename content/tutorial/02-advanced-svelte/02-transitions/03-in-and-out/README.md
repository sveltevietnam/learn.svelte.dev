---
title: In và out
---

Thay vì sử dụng chỉ thị `transition`, một phần tử có thể có một chỉ thị `in` hoặc một chỉ thị `out`, hoặc cả hai cùng một lúc. Import `fade` cùng với `fly`...

```js
/// file: App.svelte
import { +++fade+++, fly } from 'svelte/transition';
```

... sau đó thay thế chỉ thị `transition` bằng các chỉ thị `in` và `out` riêng lẻ:

```svelte
/// file: App.svelte
<p +++in+++:fly={{ y: 200, duration: 2000 }} +++out:fade+++>
	Flies in, +++fades out+++
</p>
```

Trong trường hợp này, các chuyển tiếp không được _đảo ngược_.
