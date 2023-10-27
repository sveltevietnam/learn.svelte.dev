export function load(event) {
	return {
		message: `câu trả lời là ${event.locals.answer}`
	};
}