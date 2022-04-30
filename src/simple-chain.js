const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(value = ' ') {
    this.arr.push(`( ${String(value)} )`)
    return this
  },
  removeLink(position) {
    if (position < 1 || position > this.getLength() || !Number.isInteger(position)) {
      this.arr = []
      throw new Error(`You can't remove incorrect link!`)
    } else {
      this.arr = this.arr.filter((item, index) => index + 1 !== position)
      return this
    }
  },
  reverseChain() {
    this.arr = this.arr.reverse()
    return this
  },
  finishChain() {
    const finish = this.arr.join('~~')
    this.arr = []
    return finish
  }
};

module.exports = {
  chainMaker
};
