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

{#await promise}
	<p>...vui lòng đợi</p>
{:then number}
	<p>Con số đó là số {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
