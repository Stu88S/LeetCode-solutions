/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    let count = 0, candidate;

    for (const num of nums) {
        if (count === 0) candidate = num;
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};