/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
function findDifference(nums1, nums2) {
	let ans = [];

	let list1 = nums1.filter(a => !nums2.includes(a));
	let list2 = nums2.filter(a => !nums1.includes(a));

	ans.push(Array.from(new Set(list1)));
	ans.push(Array.from(new Set(list2)));

	return ans;
}
