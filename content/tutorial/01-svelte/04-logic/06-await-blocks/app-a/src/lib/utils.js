export async function getRandomNumber() {
    // Lấy số bất kì từ 0-100
    // (với độ trễ nhất định, để ta có thể thấy)
    const res = await fetch('/random-number');

    if (res.ok) {
        return await res.text();
    } else {
        // Đôi khi API sẽ bị thất bại!!
        throw new Error('Yêu cầu thất bại.');
    }
}