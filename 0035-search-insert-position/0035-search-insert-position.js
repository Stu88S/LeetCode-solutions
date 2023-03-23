/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  return nums.reduce((acc, curr, index) => {
    if (curr === target) {
      return index;
    } else if (curr > target) {
      return acc;
    } else {
      return index + 1;
    }
  }, 0);
}