/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    let result = 0;
    
    for (let num of nums) {
        result ^= num;
    }
    
    return result;
};