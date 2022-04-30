const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`)
  if (arr.length === 0) return []

  let newArr = []
  const dn = '--double-next'
  const dp = '--double-prev'
  const din = '--discard-next'
  const dip = '--discard-prev'

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === dn) {
      if (i !== arr.length - 1) {
        newArr.push(arr[i + 1])
      }
    } else if (arr[i] === dp) {
      if ((i !== 0) && (arr[i - 2] !== din)) {
        newArr.push(arr[i - 1])
      }
    } else if (arr[i] === din) {
      i +=1
    } else if (arr[i] === dip) {
      if (arr[i - 2] !== din) {
        newArr.pop()
      }
    } else {
      newArr.push(arr[i])
    }
  }

  return newArr
}

module.exports = {
  transform
};
