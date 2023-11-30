<script>
	let user = {
		firstname: 'Ada',
		lastname: 'Lovelace'
	};
</script>

<label>
	<input bind:value={user.firstname} />
	tên
</label>

<label>
	<input bind:value={user.lastname} />
	họ
</label>

{@debug user}

<h1>Chào {user.firstname}!</h1>
