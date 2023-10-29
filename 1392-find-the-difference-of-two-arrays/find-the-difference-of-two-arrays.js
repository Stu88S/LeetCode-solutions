/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
function findDifference(nums1, nums2) {
	let ans = [];

	let set1 = new Set(nums1);
	let set2 = new Set(nums2);

	let list1 = [...set1].filter(a => !set2.has(a));
	let list2 = [...set2].filter(a => !set1.has(a));

	ans.push(list1);
	ans.push(list2);

	return ans;
}
