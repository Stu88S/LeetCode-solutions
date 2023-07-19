/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
	let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
	let strArray = s.split("");
	let i = 0,
		j = s.length - 1;

	while (i < j) {
		if (!vowels.includes(strArray[i])) {
			i++;
			continue;
		}
		if (!vowels.includes(strArray[j])) {
			j--;
			continue;
		}

		let temp = strArray[i];
		strArray[i] = strArray[j];
		strArray[j] = temp;
		i++;
		j--;
	}

	return strArray.join("");
};
