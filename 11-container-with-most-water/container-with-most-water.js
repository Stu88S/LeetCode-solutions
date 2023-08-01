/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
	let max = 0,
		left = 0,
		right = height.length - 1;
	while (left < right) {
		let h = Math.min(height[left], height[right]);
		let w = right - left;
		let area = h * w;
		max = Math.max(max, area);
		if (height[left] < height[right]) {
			left++;
		} else {
			right--;
		}
	}
	return max;
}
