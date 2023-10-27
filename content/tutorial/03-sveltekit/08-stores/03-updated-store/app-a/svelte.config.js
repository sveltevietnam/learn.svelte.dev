export default {
	kit: {
		version: {
			// Tốt nhất nên dùng giá trị dễ nhận biết
			// giống như output của `git rev-parse HEAD`
			name: Date.now().toString(),

			// nếu undefined, sẽ không có polling nào diễn ra
			pollInterval: 5000
		}
	}
};