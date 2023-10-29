/**
 * @param {number[]} arr
 * @return {boolean}
 */
function uniqueOccurrences(arr) {
	let count = {};
	for (let num of arr) {
		if (count[num]) {
			count[num]++;
		} else {
			count[num] = 1;
		}
	}

	let freq = Object.values(count);
	return freq.length === new Set(freq).size;
}
