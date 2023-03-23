/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  const uniqueArray = nums.reduce((unique, num) => {
    if (unique.indexOf(num) === -1) {
      unique.push(num);
    }
    return unique;
  }, []);
  
  for(let i = 0; i < uniqueArray.length; i++) {
    nums[i] = uniqueArray[i];
  }
  return uniqueArray.length;
}