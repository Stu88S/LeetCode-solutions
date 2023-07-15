/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
	const maxLength = Math.max(word1.length, word2.length);

	const mergedString = Array.from({ length: maxLength }).reduce((acc, _, i) => acc.concat(word1[i] || "", word2[i] || "", ""), "");

	return mergedString;
};
