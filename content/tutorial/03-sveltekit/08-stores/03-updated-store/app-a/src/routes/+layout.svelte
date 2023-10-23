<script>
	import { page, navigating, updated } from '$app/stores';
</script>

<nav>
	<a href="/" aria-current={$page.url.pathname === '/'}>
		home
	</a>

	<a href="/about" aria-current={$page.url.pathname === '/about'}>
		about
	</a>

	{#if $navigating}
		đang chuyển tới {$navigating.to.url.pathname}
	{/if}
</nav>

<slot />

{#if $updated}
	<p class="toast">
		Ứng dụng có phiên bản mới sẳn sàng để cập nhật

		<button on:click={() => location.reload()}>
			Tải lại trang
		</button>
	</p>
{/if}
