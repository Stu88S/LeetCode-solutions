/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
function matrixReshape(mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;

  if (m * n !== r * c) {
    return mat;
  }

  return mat.reduce((acc, val) => acc.concat(val), []).reduce((acc, val, i) => {
    const row = Math.floor(i / c);
    if (!acc[row]) {
      acc[row] = [];
    }

    acc[row].push(val);

    return acc;
  }, []);
}
