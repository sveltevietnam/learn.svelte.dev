<script>
	import { onMount } from 'svelte';
	import { typewriter } from './transition.js';
	import { messages } from './loading-messages.js';

	let i = -1;

	onMount(() => {
		const interval = setInterval(() => {
			i += 1;
			i %= messages.length;
		}, 2500);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<h1>đang tải...</h1>

{#key i}
	<p in:typewriter={{ speed: 10 }}>
		{messages[i] || ''}
	</p>
{/key}