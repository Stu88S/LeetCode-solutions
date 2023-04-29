/**
 * @param {number[][]} intervals
 * @return {number}
 */
function eraseOverlapIntervals(intervals) {
    if (intervals.length === 0) {
        return 0;
    }
    
    intervals.sort((a, b) => a[1] - b[1]);
    let count = 1;
    let prevEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= prevEnd) {
            count++;
            prevEnd = intervals[i][1];
        }
    }
    
    return intervals.length - count;
}
