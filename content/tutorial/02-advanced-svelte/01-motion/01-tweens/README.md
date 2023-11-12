---
title: Tweens
---

Bây giờ, sau khi đã covers những kiến thức cơ bản, là lúc để học một số kỹ thuật Svelte nâng cao, bắt đầu với _motion_.

Việc đặt giá trị và theo dõi cập nhật DOM tự động là tuyệt vời. Bạn biết cái gì còn tuyệt vời hơn không? Làm cho những giá trị đó tween. Svelte bao gồm các công cụ để giúp bạn xây dựng giao diện người dùng tuyệt vời sử dụng animation để truyền đạt các thay đổi.

Hãy bắt đầu bằng cách thay đổi `progress` store thành một giá trị `tweened`:


```svelte
/// file: App.svelte
<script>
	import { +++tweened+++ } from 'svelte/+++motion+++';

	const progress = +++tweened+++(0);
</script>
```

Việc nhấp vào các nút khiến thanh tiến trình di chuyển đến giá trị mới của nó. Nó trông không được tự nhiên lắm. Chúng ta cần thêm một hàm easing:

```svelte
/// file: App.svelte
<script>
	import { tweened } from 'svelte/motion';
	+++import { cubicOut } from 'svelte/easing';+++

	const progress = tweened(0, +++{
		duration: 400,
		easing: cubicOut
	}+++);
</script>
```

> Module `svelte/easing` chứa các [phương trình easing Penner](https://web.archive.org/web/20190805215728/http://robertpenner.com/easing/), hoặc bạn có thể tự chỉnh hàm `p => t` với `p` và `t` đều là giá trị giữa 0 và 1.

Tập hợp đầy đủ các tùy chọn sẵn có cho `tweened`:

- `delay` — số mili giây trước khi tween bắt đầu
- `duration` — là thời gian của tween trong mili giây, hoặc là một hàm `(from, to) => mili giây` cho phép bạn chỉ định giá trị tween lâu hơn cho sự thay đổi lớn hơn
- `easing` — một hàm `p => t`
- `interpolate` — một hàm `(from, to) => t => value` tùy chỉnh để nội suy giữa các giá trị tùy ý. Theo mặc định, Svelte sẽ nội suy giữa các số, ngày và mảng có hình dạng giống nhau (miễn là chúng chỉ chứa số và ngày hoặc các mảng và đối tượng hợp lệ khác). Nếu bạn muốn nội suy (ví dụ) các chuỗi màu hoặc ma trận biến đổi, thì hãy cung cấp một trình nội suy tùy chỉnh

Bạn cũng có thể chuyển các tùy chọn này vào `progress.set` và `progress.update` như là một đối số thứ hai, trong trường hợp đó chúng sẽ ghi đè lên các giá trị mặc định. Cả hai phương thức `set` và `update` đều trả về một promise để giải quyết khi tween hoàn thành.
