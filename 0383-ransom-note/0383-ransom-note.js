/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  for (let char of ransomNote) {
    if (!magazine.includes(char)) {
      return false;
    }
    magazine = magazine.replace(char, '');
  }
  return true;
}