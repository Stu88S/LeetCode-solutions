/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
	const length = nums.length;

	const output = new Array(length);

	output[0] = 1;
	for (let i = 1; i < length; i++) {
		output[i] = nums[i - 1] * output[i - 1];
	}

	let rightProduct = 1;
	for (let i = length - 1; i >= 0; i--) {
		output[i] = output[i] * rightProduct;
		rightProduct *= nums[i];
	}
	return output;
};
