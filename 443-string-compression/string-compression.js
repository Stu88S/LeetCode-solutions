/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function (chars) {
	let i = 0;

	for (let j = 0, count = 1; j < chars.length; j++) {
		if (chars[j] !== chars[j + 1] || j === chars.length - 1) {
			chars[i++] = chars[j];

			if (count > 1) {
				for (let c of count.toString()) {
					chars[i++] = c;
				}
			}
			count = 1;
		} else {
			count++;
		}
	}
	return i;
};
