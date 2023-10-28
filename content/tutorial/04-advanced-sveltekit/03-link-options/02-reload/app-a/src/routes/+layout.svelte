<script>
	import { onMount } from 'svelte';

	let seconds = 0;

	onMount(() => {
		const interval = setInterval(() => {
			seconds += 1;
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<nav>
	<a href="/">home</a>
	<a href="/about">about</a>
</nav>

<slot />

<p>trang đã mở trong {seconds} giây</p>
