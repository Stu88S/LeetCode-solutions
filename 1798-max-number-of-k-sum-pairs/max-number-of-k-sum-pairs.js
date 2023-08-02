/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxOperations(nums, k) {
	nums.sort((a, b) => a - b);

	let count = 0;
	let i = 0;
	let j = nums.length - 1;

	while (i < j) {
		let sum = nums[i] + nums[j];
		if (sum === k) {
			count++;
			i++;
			j--;
		} else if (sum < k) {
			i++;
		} else {
			j--;
		}
	}
	return count;
}
