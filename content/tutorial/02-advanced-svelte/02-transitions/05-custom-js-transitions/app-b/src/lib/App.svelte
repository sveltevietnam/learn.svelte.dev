<script>
	let visible = false;

	function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`Quá trình chuyển tiếp này chỉ hoạt động trên các phần tử có một node văn bản con`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<label>
	<input type="checkbox" bind:checked={visible} />
	hiện
</label>

{#if visible}
	<p transition:typewriter>
		The quick brown fox jumps over the lazy dog
	</p>
{/if}
