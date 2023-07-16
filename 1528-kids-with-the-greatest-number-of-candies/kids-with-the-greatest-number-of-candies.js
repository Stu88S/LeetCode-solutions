/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function (candies, extraCandies) {
	let greatestCandy = candies[0];

	for (let i = 1; i < candies.length; i++) {
		if (candies[i] > greatestCandy) {
			greatestCandy = candies[i];
		}
	}

	const result = [];

	for (let i = 0; i < candies.length; i++) {
		result.push(candies[i] + extraCandies >= greatestCandy);
	}
	
	return result;
};
