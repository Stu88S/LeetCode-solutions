/**
 * @param {number[]} nums
 * @return {number}
 */
function pivotIndex(nums) {
    let totalSum = 0;
    for (let num of nums) {
        totalSum += num;
    }
    
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        totalSum -= nums[i];
        if (leftSum === totalSum) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
}
