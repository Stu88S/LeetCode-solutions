/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxOperations(nums, k) {
	let count = 0;
	let map = new Map();

	for (let i = 0; i < nums.length; i++) {
		let complement = k - nums[i];
		if (map.get(complement) > 0) {
			count++;
			map.set(complement, map.get(complement) - 1);
		} else {
			map.set(nums[i], (map.get(nums[i]) || 0) + 1);
		}
	}
	return count;
}
