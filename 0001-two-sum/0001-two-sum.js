/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const map = {};
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.hasOwnProperty(complement)) {
      result.push(map[complement], i);
      break;
    }
    map[nums[i]] = i;
  }

  return result;
}