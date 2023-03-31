/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
    const rowSet = new Set();
    const colSet = new Set();
    const boxSet = new Set();
    
    for(let i=0; i<9; i++) {
        for(let j=0; j<9; j++) {
            let num = board[i][j];
            
            if(num === '.') continue;
            
            if(rowSet.has(`${i}-${num}`)) return false;
            
            rowSet.add(`${i}-${num}`);
            
            if(colSet.has(`${j}-${num}`)) return false;
            
            colSet.add(`${j}-${num}`);
            
            let boxIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            if(boxSet.has(`${boxIndex}-${num}`)) return false;
            
            boxSet.add(`${boxIndex}-${num}`);
        }
    }

    return true;
}
