<script>
	import Keypad from './Keypad.svelte';

	let pin;
	$: view = pin
		? pin.replace(/\d(?!$)/g, '•')
		: 'nhập mã pin';

	function handleSubmit() {
		alert(`đã gửi: ${pin}`);
	}
</script>

<h1 style="opacity: {pin ? 1 : 0.4}">
	{view}
</h1>

<Keypad
	bind:value={pin}
	on:submit={handleSubmit}
/>
