/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
	const wordsArray = s.split(" ").filter(item => item);
	return wordsArray.reverse().join(" ");
};
