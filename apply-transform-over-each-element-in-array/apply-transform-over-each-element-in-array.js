/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function map(arr, fn) {
  return Array.from(arr, fn);
}