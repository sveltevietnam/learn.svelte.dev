<script>
	import { name, greeting } from './stores.js';
</script>

<h1>{$greeting}</h1>
<input bind:value={$name} />

<button on:click={() => $name += '!'}>
	Thêm dấu chấm than!
</button>
