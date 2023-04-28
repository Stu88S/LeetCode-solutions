/**
 * @param {number} n
 * @return {number[][]}
 */
function generateMatrix(n) {
    let matrix = new Array(n).fill().map(() => new Array(n).fill(0));
    let count = 1;
    let rowStart = 0, rowEnd = n - 1, colStart = 0, colEnd = n - 1;

    while (rowStart <= rowEnd && colStart <= colEnd) {
        for (let col = colStart; col <= colEnd; col++) {
            matrix[rowStart][col] = count++;
        }
        rowStart++;

        for (let row = rowStart; row <= rowEnd; row++) {
            matrix[row][colEnd] = count++;
        }
        colEnd--;

        if (rowStart <= rowEnd) {
            for (let col = colEnd; col >= colStart; col--) {
                matrix[rowEnd][col] = count++;
            }
        }
        rowEnd--;

        if (colStart <= colEnd) {
            for (let row = rowEnd; row >= rowStart; row--) {
                matrix[row][colStart] = count++;
            }
        }
        colStart++;
    }

    return matrix;
}
