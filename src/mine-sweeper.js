const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let newMatrix = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill(0))
  for (let i = 0; i < matrix[0].length; i++) {
    for (let k = 0; k < matrix.length; k++) {
      if (matrix[k][i + 1]) newMatrix[k][i] += 1
      if (matrix[k][i - 1]) newMatrix[k][i] += 1
      if (matrix[k + 1] && matrix[k + 1][i]) newMatrix[k][i] += 1
      if (matrix[k + 1] && matrix[k + 1][i + 1]) newMatrix[k][i] += 1
      if (matrix[k + 1] && matrix[k + 1][i - 1]) newMatrix[k][i] += 1
      if (matrix[k - 1] && matrix[k - 1][i]) newMatrix[k][i] += 1
      if (matrix[k - 1] && matrix[k - 1][i + 1]) newMatrix[k][i] += 1
      if (matrix[k - 1] && matrix[k - 1][i - 1]) newMatrix[k][i] += 1
    }
  }
  return newMatrix
}

module.exports = {
  minesweeper
};
