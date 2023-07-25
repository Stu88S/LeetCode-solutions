/**
 * @param {string} s
 * @return {string}
 */

const reverseWords = function (s) {
    const wordsArray = s.trim().split(/\s+/);
    return wordsArray.reverse().join(" ");
};
