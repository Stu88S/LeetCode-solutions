/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const map = new Map();
  
  return nums.reduce((result, num, index) => {
    const complement = target - num;
    
    if (map.has(complement)) {
      result.push(map.get(complement), index);
    }
    
    map.set(num, index);
    
    return result;
  }, []);
}