/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);

    if (c === '(' || c === '{' || c === '[') {
      stack.push(c);
    } else {
      if (stack.length === 0) {
        return false;
      }

      const last = stack.pop();

      if (c === ')' && last !== '(') {
        return false;
      } else if (c === '}' && last !== '{') {
        return false;
      } else if (c === ']' && last !== '[') {
        return false;
      }
    }
  }

  return stack.length === 0;
};
