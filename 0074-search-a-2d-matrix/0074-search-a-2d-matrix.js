/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  let row = 0;
  let col = numCols - 1;

  while (row < numRows && col >= 0) {
    const val = matrix[row][col];
    if (val === target) {
      return true;
    } else if (val < target) {
      row++;
    } else {
      col--;
    }
  }

  return false;
};
