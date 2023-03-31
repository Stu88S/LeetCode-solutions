/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }
  const flattened = matrix.flat();
  const index = flattened.indexOf(target);
  return index !== -1;
};