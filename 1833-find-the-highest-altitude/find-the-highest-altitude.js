/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function (gain) {
	let altitude = 0;
	return Math.max(
		0,
		...gain.reduce((acc, curr) => {
			altitude += curr;
			acc.push(altitude);
			return acc;
		}, [])
	);
};
