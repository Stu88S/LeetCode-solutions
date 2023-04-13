/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  const charCount = new Map();
  for (let char of magazine) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  for (let char of ransomNote) {
    if (!charCount.has(char) || charCount.get(char) === 0) {
      return false;
    }
    charCount.set(char, charCount.get(char) - 1);
  }
  return true;
}
