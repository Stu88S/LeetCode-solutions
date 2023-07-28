/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
	const output = [];

	for (let i = 0; i < nums.length; i++) {
		let product = 1;

		for (let j = 0; j < nums.length; j++) {
			if (i !== j) {
				product *= nums[j];
			}
		}

		output.push(product);
	}

	return output;
};
