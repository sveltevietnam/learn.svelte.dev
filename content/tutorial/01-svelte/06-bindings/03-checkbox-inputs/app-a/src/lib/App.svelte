<script>
	let yes = false;
</script>

<label>
	<input type="checkbox" checked={yes} />
	Vâng! Gửi tôi email spam thường xuyên
</label>

{#if yes}
	<p>
		Cảm ơn! Chúng tôi sẽ gửi hàng tá email cho bạn và bán thông tin cá nhân của bạn.
	</p>
{:else}
	<p>
		Bạn phải tham gia để tiếp tục. Nếu bạn không trả tiền, thì bạn là sản phẩm.
	</p>
{/if}

<button disabled={!yes}>Subscribe</button>
