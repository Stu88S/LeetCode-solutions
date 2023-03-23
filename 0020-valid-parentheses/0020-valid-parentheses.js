/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];
  const open = ['(', '[', '{'];
  const close = [')', ']', '}'];

  for (let i = 0; i < s.length; i++) {
    if (open.includes(s[i])) {
      stack.push(s[i]);
    } else if (close.includes(s[i])) {
      const lastOpen = stack.pop();
      if (open.indexOf(lastOpen) !== close.indexOf(s[i])) {
        return false;
      }
    }
  }

  return stack.length === 0;
}