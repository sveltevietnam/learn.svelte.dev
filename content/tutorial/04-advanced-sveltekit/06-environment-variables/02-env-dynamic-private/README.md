---
title: $env/dynamic/private
---

Nếu bạn cần đọc giá trị của biến môi trường khi ứng dụng chạy, thay vì khi ứng dụng được xây dựng, bạn có thể sử dụng `$env/dynamic/private` thay vì `$env/static/private`:

```js
/// file: src/routes/+page.server.js
import { redirect, fail } from '@sveltejs/kit';
import { +++env+++ } from '$env/+++dynamic+++/private';

export function load({ cookies }) {
	if (cookies.get('allowed')) {
		throw redirect(307, '/welcome');
	}
}

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

		if (data.get('passphrase') === +++env.+++PASSPHRASE) {
			cookies.set('allowed', 'true', {
				path: '/'
			});

			throw redirect(303, '/welcome');
		}

		return fail(403, {
			incorrect: true
		});
	}
};

```
