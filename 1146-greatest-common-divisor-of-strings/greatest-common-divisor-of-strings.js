/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcdOfStrings(str1, str2) {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const gcdLength = gcd(str1.length, str2.length);
    const gcdString = str1.substring(0, gcdLength);
  
    let str1Check = gcdString.repeat(str1.length / gcdLength);
    let str2Check = gcdString.repeat(str2.length / gcdLength);
  
    if (str1Check === str1 && str2Check === str2) {
        return gcdString;
    } else {
        return "";
    }
}
