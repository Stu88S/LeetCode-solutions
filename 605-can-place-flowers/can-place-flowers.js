/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {
	let count = 0;
	let length = flowerbed.length;

	for (let i = 0; i < length; i++) {
		if ((i === 0 || flowerbed[i - 1] === 0) && flowerbed[i] === 0 && (i === length - 1 || flowerbed[i + 1] === 0)) {
			flowerbed[i] = 1;
			count++;
			i++;
		}
	}

	return count >= n;
};
