export async function GET(req) {
	const query = req.url.searchParams;
	let min = query.get('min') || '0';
	let max = query.get('max') || '100';
	min = +min;
	max = +max;

	// simulate a long delay
	await new Promise((res) => setTimeout(res, 1000));

	// fail sometimes
	if (Math.random() < 0.333) {
		return new Response(`Không thể lấy số ngẫu nhiên, xin hãy thử lại`, {
			status: 400,
			headers: { 'Access-Control-Allow-Origin': '*' }
		});
	}

	const num = min + Math.round(Math.random() * (max - min));
	return new Response(String(num), {
		headers: { 'Access-Control-Allow-Origin': '*' }
	});
}