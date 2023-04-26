/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
  const colorCounts = nums.reduce((acc, num) => {
    acc[num]++;
    return acc;
  }, [0, 0, 0]);

  let index = 0;
  for (let color = 0; color <= 2; color++) {
    for (let count = 0; count < colorCounts[color]; count++) {
      nums[index++] = color;
    }
  }
}
