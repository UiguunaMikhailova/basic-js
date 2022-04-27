const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let s2arr = s2.split('')
  let counter = 0
  for (let i = 0; i < s1.length; i++) {
    if (s2arr.indexOf(s1[i]) !== -1) {
      counter +=1
      const index = s2arr.indexOf(s1[i])
      s2arr.splice(index,1)
    }
  }
  return counter
}

module.exports = {
  getCommonCharacterCount
};
