/**
 * @param {string} s
 * @return {string}
 */
function removeStars(s) {
	let stack = [];
	for (let char of s) {
		if (char === "*") {
			stack.pop();
		} else {
			stack.push(char);
		}
	}
	return stack.join("");
}
