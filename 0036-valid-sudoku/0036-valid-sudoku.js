/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
    const rows = Array(9).fill().map(() => new Set());
    const cols = Array(9).fill().map(() => new Set());
    const boxes = Array(9).fill().map(() => new Set());

    const isValid = (i, j, num) => {
        const boxIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3);
        return !rows[i].has(num) && !cols[j].has(num) && !boxes[boxIndex].has(num);
    };

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];
            if (num === '.') continue;

            if (!isValid(i, j, num)) {
                return false;
            }

            rows[i].add(num);
            cols[j].add(num);
            boxes[3 * Math.floor(i / 3) + Math.floor(j / 3)].add(num);
        }
    }

    return true;
}
