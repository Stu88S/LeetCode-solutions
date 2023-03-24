/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const frequencyCounter = nums.reduce((counter, num) => {
    counter[num] = (counter[num] || 0) + 1;
    return counter;
  }, {});
  return Object.keys(frequencyCounter).some(key => frequencyCounter[key] > 1);
}