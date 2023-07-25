/**
 * @param {string} s
 * @return {string}
 */

const reverseWords = function (s) {
	let wordsArray = [];
	let word = "";

	for (let i = 0; i < s.length; i++) {
		if (s[i] !== " ") {
			word += s[i];
		}
		if ((s[i] === " " || i === s.length - 1) && word) {
			wordsArray.push(word);
			word = "";
		}
	}
	let reversed = "";
	for (let i = wordsArray.length - 1; i >= 0; i--) {
		reversed += wordsArray[i];
		if (i > 0) {
			reversed += " ";
		}
	}
	return reversed;
};
