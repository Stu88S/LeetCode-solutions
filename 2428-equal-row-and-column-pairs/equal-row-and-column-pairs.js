/**
 * @param {number[][]} grid
 * @return {number}
 */
function equalPairs(grid) {
	let count = 0;
	let map = new Map();

	function arrayToString(array) {
		return JSON.stringify(array);
	}

	for (let i = 0; i < grid.length; i++) {
		let row = arrayToString(grid[i]);
		map.set(row, (map.get(row) || 0) + 1);
	}

	for (let j = 0; j < grid.length; j++) {
		let col = arrayToString(grid.map(row => row[j]));
		count += map.get(col) || 0;
	}
	return count;
}
