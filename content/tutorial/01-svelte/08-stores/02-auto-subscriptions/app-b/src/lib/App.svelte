<script>
	import { count } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';
</script>

<h1>Số lượng là {$count}</h1>

<Incrementer />
<Decrementer />
<Resetter />
