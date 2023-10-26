export function handleError({ event, error }) {
	console.error(error.stack);

	return {
		message: 'mọi thứ đều ổn',
		code: 'JEREMYBEARIMY'
	};
}