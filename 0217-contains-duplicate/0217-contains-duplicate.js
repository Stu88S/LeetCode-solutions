/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  let set = new Set(nums);
  return set.size !== nums.length;
}