/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let maxAverage = sum / k;

    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i];
        maxAverage = Math.max(maxAverage, sum / k);
    }

    return maxAverage;
}