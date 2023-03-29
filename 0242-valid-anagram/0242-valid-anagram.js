/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let freqCount = new Array(26).fill(0);
  
  for (let i = 0; i < s.length; i++) {
    freqCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    freqCount[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  for (let i = 0; i < 26; i++) {
    if (freqCount[i] !== 0) {
      return false;
    }
  }
  return true;
}