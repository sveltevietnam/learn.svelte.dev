<script>
	function sayHello() {
		dispatch('message', {
			text: 'Xin chào!'
		});
	}
</script>

<button on:click={sayHello}>
	Bấm để nói Xin chào
</button>
