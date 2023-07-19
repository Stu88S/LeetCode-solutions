/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
	let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
	let vowelPositions = [];
	let vowelChars = [];
	let strArray = s.split("");

	for (let i = 0; i < s.length; i++) {
		if (vowels.includes(s[i])) {
			vowelPositions.push(i);
			vowelChars.push(s[i]);
		}
	}

	vowelChars.reverse();

	for (let i = 0; i < vowelPositions.length; i++) {
		strArray[vowelPositions[i]] = vowelChars[i];
	}
	return strArray.join("");
};
