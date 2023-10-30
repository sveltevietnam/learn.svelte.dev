<script>
	let online =
		typeof navigator !== 'undefined' ? navigator.onLine : true;
</script>

{#if !online}
	<h1>bạn đang offline</h1>
{:else}
	<h1>oops!</h1>
	<p>Có gì đó sai sai</p>
{/if}
