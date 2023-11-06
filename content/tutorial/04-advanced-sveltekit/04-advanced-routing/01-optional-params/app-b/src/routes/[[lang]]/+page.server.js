const greetings = {
	en: 'hello!',
	de: 'hallo!',
	fr: 'bonjour!',
	vn: 'xin chào'
};

export function load({ params }) {
	return {
		greeting: greetings[params.lang ?? 'vn']
	};
}
