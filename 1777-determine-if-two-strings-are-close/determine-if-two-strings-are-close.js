/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
function closeStrings(word1, word2) {
	const getFrequencyAndSet = word => {
		const set = new Set();
		const freq = Array.from({ length: 26 }, _ => 0);

		for (let char of word) {
			set.add(char);
			freq[char.charCodeAt() - 97]++;
		}

		return [set, freq.sort((a, b) => a - b)];
	};

	const [set1, freq1] = getFrequencyAndSet(word1);
	const [set2, freq2] = getFrequencyAndSet(word2);

	if (set1.size !== set2.size || [...set1].sort().join("") !== [...set2].sort().join("")) return false;

	for (let i = 0; i < freq1.length; i++) {
		if (freq1[i] !== freq2[i]) return false;
	}
	return true;
}
