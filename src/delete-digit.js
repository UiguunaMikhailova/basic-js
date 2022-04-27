const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  const arr = n.toString().split('')
  let res = 0
  for (let i = 0; i < n.toString().split('').length; i++) {
    let newNum = +arr.slice(0,i).concat(arr.slice(i+1)).join('')
    if (newNum > res) res = newNum
  }
  return res
}

module.exports = {
  deleteDigit
};
