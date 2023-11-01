/**
 * @param {string} s
 * @return {string}
 */
function decodeString(s) {
	let stack = [{ count: 1, res: '' }];
	let count = 0;

	for (let char of s) {
			if (!isNaN(char)) {
					count = count * 10 + Number(char);
			} else if (char === '[') {
					stack.push({ count: count, res: '' });
					count = 0;
			} else if (char === ']') {
					let { count, res } = stack.pop();
					stack[stack.length - 1].res += res.repeat(count);
			} else {
					stack[stack.length - 1].res += char;
			}
	}

	return stack[0].res;
}