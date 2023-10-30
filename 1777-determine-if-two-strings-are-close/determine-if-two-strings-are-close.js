/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
function closeStrings(word1, word2) {
	let set1 = new Set(word1);
	let set2 = new Set(word2);
	if (set1.size !== set2.size || [...set1].sort().join("") !== [...set2].sort().join("")) return false;

	let freq1 = Array.from({ length: 26 }, _ => 0),
		freq2 = Array.from({ length: 26 }, _ => 0);

	for (let char of word1) freq1[char.charCodeAt() - 97]++;
	for (let char of word2) freq2[char.charCodeAt() - 97]++;

	freq1.sort((a, b) => a - b);
	freq2.sort((a, b) => a - b);

	for (let i = 0; i < freq1.length; i++) {
		if (freq1[i] !== freq2[i]) return false;
	}
	return true;
}

