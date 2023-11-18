<script>
	let scoops = 1;
	let flavours = [];

	const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
</script>

<h2>Kích cỡ</h2>

{#each [1, 2, 3] as number}
	<label>
		<input
			type="radio"
			name="scoops"
			value={number}
		/>

		{number} muỗng
	</label>
{/each}

<h2>Hương vị</h2>

{#each ['bánh quy và kem', 'socola bạc hà', 'ngũ quả mâm xôi'] as flavour}
	<label>
		<input
			type="checkbox"
			name="flavours"
			value={flavour}
		/>

		{flavour}
	</label>
{/each}

{#if flavours.length === 0}
	<p>Hãy chọn một hoặc nhiều hương vị</p>
{:else if flavours.length > scoops}
	<p>Không thể đặt hương vị nhiều hơn muỗng kem!</p>
{:else}
	<p>
		Bạn đã đặt {scoops} muỗng {formatter.format(flavours)}
	</p>
{/if}