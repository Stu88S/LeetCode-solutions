/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex) {
  const result = new Array(rowIndex + 1).fill(0);
  result[0] = 1;

  const halfRowLength = Math.floor((rowIndex + 1) / 2);

  for (let i = 1; i <= rowIndex; i++) {
    for (let j = Math.min(i, halfRowLength); j > 0; j--) {
      result[j] = result[j] + result[j - 1];
    }
  }

  if (rowIndex % 2 === 0) {
    for (let i = halfRowLength + 1, j = halfRowLength - 1; i <= rowIndex; i++, j--) {
      result[i] = result[j];
    }
  } else {
    for (let i = halfRowLength, j = halfRowLength - 1; i <= rowIndex; i++, j--) {
      result[i] = result[j];
    }
  }

  return result;
}
