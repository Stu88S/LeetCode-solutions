/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = function(nums, k) {
    let left = 0, right = 0, max = 0;

    while (right < nums.length) {
        if (nums[right] === 0) k--;

        if (k < 0) {
            if (nums[left] === 0) k++;
            left++;
        }

        max = Math.max(max, right - left +1);
        right++;
    }

    return max;
};