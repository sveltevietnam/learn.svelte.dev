// Trong một ứng dụng thực tế, dữ liệu này sẽ nằm trong một cơ sở dữ liệu,
// thay vì ở trong bộ nhớ. Nhưng tạm thời, chúng ta cứ để như vậy.

const db = new Map();

export function getTodos(userid) {
	if (!db.get(userid)) {
		db.set(userid, [{
			id: crypto.randomUUID(),
			description: 'Học SvelteKit',
			done: false
		}]);
	}

	return db.get(userid);
}

export function createTodo(userid, description) {
	const todos = db.get(userid);

	todos.push({
		id: crypto.randomUUID(),
		description,
		done: false
	});
}

export function deleteTodo(userid, todoid) {
	const todos = db.get(userid);
	const index = todos.findIndex((todo) => todo.id === todoid);

	if (index !== -1) {
		todos.splice(index, 1);
	}
}
