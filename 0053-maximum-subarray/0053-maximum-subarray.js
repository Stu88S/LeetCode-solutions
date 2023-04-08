/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let currentSum = 0;
  return nums.reduce((maxSum, num) => {
    currentSum = Math.max(num, currentSum + num);
    return Math.max(maxSum, currentSum);
  }, nums[0]);
};