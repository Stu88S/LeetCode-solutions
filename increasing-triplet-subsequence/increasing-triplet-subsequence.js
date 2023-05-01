/**
 * @param {number[]} nums
 * @return {boolean}
 */
function increasingTriplet(nums) {
	const result = nums.reduce(
		(curr, num) => {
			if (num <= curr.first) {
				curr.first = num;
			} else if (num <= curr.second) {
				curr.second = num;
			} else {
				curr.found = true;
			}
			return curr;
		},
		{ first: Number.MAX_VALUE, second: Number.MAX_VALUE, found: false }
	);

	return result.found;
}
