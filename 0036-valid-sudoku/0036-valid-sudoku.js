/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
    let rows = {};
    let cols = {};
    let boxes = {};

    for (let i = 0; i < 9; i++) {
        rows[i] = {};
        cols[i] = {};
        boxes[i] = {};
    }

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] !== '.') {
                let val = board[r][c];
                let boxIndex = parseInt((r / 3)) * 3 + parseInt(c / 3);

                if (rows[r][val] ||
                    cols[c][val] ||
                    boxes[boxIndex][val]) {
                    return false;
                }

                rows[r][val] = true;
                cols[c][val] = true;
                boxes[boxIndex][val] = true;
            }
        }
    }

    return true;
};
