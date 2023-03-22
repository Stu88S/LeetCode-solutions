/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const map = new Map();
  const result = [];

  nums.forEach((num, index) => {
    const complement = target - num;
    if (map.has(complement)) {
      result.push(map.get(complement), index);
      return;
    }
    map.set(num, index);
  });

  return result;
}