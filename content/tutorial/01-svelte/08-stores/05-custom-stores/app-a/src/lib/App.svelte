<script>
	import { count } from './stores.js';
</script>

<h1>Số lượng là {$count}</h1>

<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>
