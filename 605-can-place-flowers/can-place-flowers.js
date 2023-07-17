/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {
  let count = 0;

  flowerbed.forEach((current, i) => {
    if (
      (i === 0 || flowerbed[i - 1] === 0) &&
      current === 0 &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      count++;
    }
  });

  return count >= n;
};
