---
title: <svelte:self>
---

Svelte cung cấp một loạt các phần tử tích hợp. Phần tử đầu tiên, `<svelte:self>`, cho phép một component chứa chính nó một cách đệ quy.

Nó hữu ích cho những thứ như cây thư mục, nơi các thư mục có thể chứa các thư mục _khác_. Trong `Folder.svelte`, chúng ta muốn  làm điều này...

```svelte
/// file: Folder.svelte
{#if file.files}
	<Folder {...file}/>
{:else}
	<File {...file}/>
{/if}
```

... nhưng điều đó là không thể, vì một module không thể nhập chính nó. Thay vào đó, chúng ta sử dụng <svelte:self>:

```svelte
/// file: Folder.svelte
{#if file.files}
	+++<svelte:self {...file} />+++
{:else}
	<File {...file} />
{/if}
```
