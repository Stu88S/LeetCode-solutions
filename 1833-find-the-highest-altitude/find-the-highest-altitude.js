/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function (gain) {
	let altitude = 0;
	let maxAltitude = 0;

	for (let i = 0; i < gain.length; i++) {
		altitude += gain[i];
		if (altitude > maxAltitude) {
			maxAltitude = altitude;
		}
	}
	return maxAltitude;
};
