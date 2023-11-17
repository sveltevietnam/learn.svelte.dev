<script>
	import tippy from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/material.css';

	let content = 'Xin chào!';

	function tooltip(node) {
		const tooltip = tippy(node);

		return {
			destroy() {
				tooltip.destroy();
			}
		};
	}
</script>

<input bind:value={content} />

<button use:tooltip>
	Rê chuột qua tôi
</button>