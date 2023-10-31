/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
function asteroidCollision(asteroids) {
	let stack = [];

	const pushAsteroid = asteroid => {
		let absAsteroid = Math.abs(asteroid);
		while (stack.length > 0 && stack[stack.length - 1] < absAsteroid && stack[stack.length - 1] > 0) {
			stack.pop();
		}
		if (stack.length === 0 || stack[stack.length - 1] < 0) {
			stack.push(asteroid);
		} else if (stack[stack.length - 1] === absAsteroid) {
			stack.pop();
		}
	};

	for (let i = 0; i < asteroids.length; i++) {
		let asteroid = asteroids[i];
		if (asteroid > 0) {
			stack.push(asteroid);
		} else {
			pushAsteroid(asteroid);
		}
	}
	return stack;
}
