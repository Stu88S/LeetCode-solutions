/**
 * @param {number[]} arr
 * @return {boolean}
 */
function uniqueOccurrences(arr) {
	let count = new Map();
	for (let num of arr) {
		count.set(num, (count.get(num) || 0) + 1);
	}

	let freq = new Set(count.values());
	return count.size === freq.size;
}
