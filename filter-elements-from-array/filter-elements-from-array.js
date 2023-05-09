/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function filter(arr,fn) {
  return arr.filter((el, index) => fn(el, index));
} 