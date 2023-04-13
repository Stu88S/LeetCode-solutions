/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    const map = new Map();
    for (const char of s) {
        const count = map.get(char) || 0;
        map.set(char, count + 1);
    }
    for (let i = 0; i < s.length; i++) {
        const count = map.get(s[i]);
        if (count === 1) {
            return i;
        }
    }
    return -1;
};
