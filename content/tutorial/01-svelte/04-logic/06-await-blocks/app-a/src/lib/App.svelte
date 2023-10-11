<script>
	import { getRandomNumber } from './utils.js';

	let promise = getRandomNumber();

	function handleClick() {
		promise = getRandomNumber();
	}
</script>

<button on:click={handleClick}>
	lấy số ngẫu nhiên
</button>

<p>...vui lòng đợi</p>
