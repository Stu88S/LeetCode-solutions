/**
 * @param {number[][]} grid
 * @return {number}
 */
function equalPairs(grid) {
	let count = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid.length; j++) {
			let flag = true;
			for (let k = 0; k < grid.length; k++) {
				if (grid[i][k] != grid[k][j]) {
					flag = false;
					break;
				}
			}
			if (flag) count++;
		}
	}
	return count;
}
