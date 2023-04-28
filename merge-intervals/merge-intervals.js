/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  return intervals.reduce((result, currentInterval) => {
    const lastIntervalInResult = result[result.length - 1];

    if (currentInterval[0] <= lastIntervalInResult[1]) {
      lastIntervalInResult[1] = Math.max(currentInterval[1], lastIntervalInResult[1]);
    } else {
      result.push(currentInterval);
    }

    return result;
  }, [intervals[0]]);
}
