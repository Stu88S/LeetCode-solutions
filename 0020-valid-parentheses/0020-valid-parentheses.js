/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (brackets[char]) {
      stack.push(char);
    } else if (brackets[stack.pop()] !== char) {
      return false;
    }
  }

  return stack.length === 0;
}