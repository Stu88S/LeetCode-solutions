/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let maxSubarray = -Infinity;
  let currentMax = -Infinity;

  nums.reduce((_, currentElement) => {
    currentMax = Math.max(currentElement, currentMax + currentElement);
    maxSubarray = Math.max(maxSubarray, currentMax);
  }, null);

  return maxSubarray;
}