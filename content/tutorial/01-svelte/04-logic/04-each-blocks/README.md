---
title: Khối Each
---

Khi xây dựng giao diện người dùng, bạn sẽ phải làm việc với mảng dữ liệu. Trong bài này, markup `<button>` được lặp lại nhiều lần, mỗi lần một màu, nhưng vẫn chưa hiển thị đủ tất cả các màu.

Thay vì phải sao chép, dán rồi sửa một cách khổ sở, ta có thể bỏ hết trừ nút đầu tiền, rồi sử dụng khối `each`:

```svelte
/// file: App.svelte
<div>
	+++{#each colors as color}+++
		<button
			aria-current={selected === 'red'}
			aria-label="red"
			style="background: red"
			on:click={() => selected = 'red'}
		></button>
	+++{/each}+++
</div>
```

<!-- FIXME: làm rõ phần này -->
> Những biểu thức (điển hình như `colors`) có thể là một mảng hoặc một object dạng mảng (có thuộc tính `length`). Bạn có thể với đi qua từng giá trị của nó với `each [...đoạn lặp]`.

Bây giờ ta phải dùng biến `color` thay cho `"red"`:

```svelte
/// file: App.svelte
<div>
	{#each colors as color}
		<button
			aria-current={selected === +++color+++}
			aria-label=+++{color}+++
			style="background: +++{color}+++"
			on:click={() => selected = +++color+++}
		></button>
	{/each}
</div>
```

Ta cũng có thể lấy _số thứ tự_ qua tham số thứ hai như thế này:

```svelte
/// file: App.svelte
<div>
	{#each colors as color, +++i}+++
		<button
			aria-current={selected === color}
			aria-label={color}
			style="background: {color}"
			on:click={() => selected = color}
		>+++{i + 1}+++</button>
	{/each}
</div>
```
