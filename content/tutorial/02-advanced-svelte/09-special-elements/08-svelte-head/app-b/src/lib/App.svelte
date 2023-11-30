<script>
	const themes = ['margaritaville', 'retrowave', 'spaaaaace', 'halloween'];
	let selected = themes[0];
</script>

<svelte:head>
	<link rel="stylesheet" href="/stylesheets/{selected}.css" />
</svelte:head>

<h1>Chào mừng đến với site của tôi!</h1>

<select bind:value={selected}>
	<option disabled>chọn một theme</option>

	{#each themes as theme}
		<option>{theme}</option>
	{/each}
</select>