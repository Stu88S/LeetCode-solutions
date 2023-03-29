/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let freqMap = new Map();
    
  for (let i = 0; i < s.length; i++) {
    freqMap.set(s[i], (freqMap.get(s[i]) || 0) + 1);
    freqMap.set(t[i], (freqMap.get(t[i]) || 0) - 1);
  }

  for (let value of freqMap.values()) {
    if (value !== 0) {
      return false;
    }
  }
  return true;
}