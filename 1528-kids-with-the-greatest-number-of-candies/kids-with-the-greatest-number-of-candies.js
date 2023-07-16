/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
	let greatestCandy = Math.max(...candies);
	return candies.map(candy => candy + extraCandies >= greatestCandy);
};
