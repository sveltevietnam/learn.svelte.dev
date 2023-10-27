<script>
	/** @type {number} */
	let number;

	async function roll() {
		const response = await fetch('/roll');
		number = await response.json();
	}
</script>

<button on:click={roll}>Tung súc sắc</button>

{#if number !== undefined}
	<p>Bạn đã tung được số {number}</p>
{/if}
