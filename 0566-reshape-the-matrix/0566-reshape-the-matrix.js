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

  const res = new Array(r).fill().map(() => new Array(c).fill(0));

  for (let i = 0; i < m * n; i++) {
    res[Math.floor(i / c)][i % c] = mat[Math.floor(i / n)][i % n];
  }

  return res;
}