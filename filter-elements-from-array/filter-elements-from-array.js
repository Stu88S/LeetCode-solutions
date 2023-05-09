/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function filter(arr, fn) {
  return arr.reduce((acc, curr, index) => {
    if(fn(curr, index)) {
      acc.push(curr);
    }
    return acc;
  }, [])
}