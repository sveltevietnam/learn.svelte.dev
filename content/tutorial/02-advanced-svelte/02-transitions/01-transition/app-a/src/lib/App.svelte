<script>
	let visible = true;
</script>

<label>
	<input type="checkbox" bind:checked={visible} />
	hiện
</label>

{#if visible}
	<p>
		Fades in and out
	</p>
{/if}
