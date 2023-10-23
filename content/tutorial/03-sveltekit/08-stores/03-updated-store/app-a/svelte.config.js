export default {
	kit: {
		version: {
			// Nên dùng cái tên mang tính deterministic _(chắc chắn, chuẩn xác)_ là tốt nhất
			// giống như output của `git rev-parse HEAD`
			name: Date.now().toString(),

			// nếu undefined, sẽ không có polling nào diễn ra
			pollInterval: 5000
		}
	}
};