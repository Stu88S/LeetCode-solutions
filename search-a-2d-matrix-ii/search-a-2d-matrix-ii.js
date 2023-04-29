/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function binarySearch(row, target) {
  let left = 0;
  let right = row.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (row[mid] === target) {
      return true;
    } else if (row[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

function searchMatrix(matrix, target) {
  for (let row of matrix) {
    if (binarySearch(row, target)) {
      return true;
    }
  }
  return false;
}
