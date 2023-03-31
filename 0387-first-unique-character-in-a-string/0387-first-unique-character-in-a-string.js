/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
    const repeatedChars = new Set();
    
    for (let i=0; i < s.length; i++) {
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        } else {
            repeatedChars.add(s[i]);
        }
    }
    return -1;
}