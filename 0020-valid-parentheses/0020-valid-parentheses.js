/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const stack = [];

  for (let c of s) {
    if (c === '(' || c === '{' || c === '[') {
      stack.push(c);
    } else {
      const last = stack.pop();
      if (!last || (c === ')' && last !== '(') || (c === '}' && last !== '{') || (c === ']' && last !== '[')) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
