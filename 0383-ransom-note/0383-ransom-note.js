/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
    const charCount = {};
    for ( let i of magazine) {
        charCount[i] = (charCount[i] || 0) + 1;
    }
    
    for (let i of ransomNote) {
        if(!charCount[i]) {
            return false;
        }
        charCount[i]--;
    }
    return true;
}