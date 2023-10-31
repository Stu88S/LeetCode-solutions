/**
 * @param {string} s
 * @return {string}
 */
function removeStars(s) {
    let arr = Array.from(s);
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '*') {
            j = Math.max(0, j - 1);
        } else {
            arr[j] = arr[i];
            j++;
        }
    }
    return arr.slice(0, j).join('');
}