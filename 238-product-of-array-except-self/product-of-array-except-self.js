/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    const length = nums.length;

    const leftProduct = new Array(length);
    const rightProduct = new Array(length);
    const output = new Array(length);

    leftProduct[0] = 1;
    for (let i = 1; i < length; i++) {
        leftProduct[i] = nums[i - 1] * leftProduct[i - 1];
    }

    rightProduct[length - 1] = 1;
    for (let i = length - 2; i >= 0; i--) {
        rightProduct[i] = nums[i + 1] * rightProduct[i + 1];
    }

    for (let i = 0; i < length; i++) {
        output[i] = leftProduct[i] * rightProduct[i];
    }

    return output;
};
