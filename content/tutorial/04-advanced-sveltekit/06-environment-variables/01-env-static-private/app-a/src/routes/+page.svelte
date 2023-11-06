<script>
	export let form;
</script>

<form method="POST">
	<label>
		nhập passphrase
		<input name="passphrase" autocomplete="off" />
	</label>
</form>

{#if form?.incorrect}
	<p class="error">sai passphrase!</p>
{/if}

<style>
	.error {
		color: red;
	}
</style>
