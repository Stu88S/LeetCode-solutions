/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
	const mergedString = [];
	const maxLength = Math.max(word1.length, word2.length);

	for (let i = 0; i < maxLength; i++) {
		if (i < word1.length) {
			mergedString.push(word1[i]);
		}

		if (i < word2.length) {
			mergedString.push(word2[i]);
		}
	}

	return mergedString.join("");
};
