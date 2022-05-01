const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(unReverse = true) {
    this.unReverse = unReverse
  }

  getAlphabet() {
    const alphabet = []
    for (let i = 65; i <= 90; i++) {
      alphabet.push(String.fromCharCode(i))
    }
    return alphabet
  }

  alphabet = this.getAlphabet()

  getSquare() {
    let alphabet = this.alphabet
    const square = []
    for (let i = 0; i < 26; i++) {
      square.push(alphabet)
      alphabet = alphabet.slice(1).concat(alphabet.slice(0, 1))
    }
    return square
  }

  square = this.getSquare()

  encrypt(m, k) {

    if (!m || !k) {
      throw new Error(`Incorrect arguments!`)
    }

    const alphabet = this.alphabet
    const square = this.square
    const repeatCount = Math.ceil(m.length / k.length)
    const key = k.repeat(repeatCount).toUpperCase().split('')
    const message = m.toUpperCase().split('')
    const result = []
    let index = 0

    for (let i = 0; i < message.length; i++) {
      if (!alphabet.includes(message[i])) {
        result.push(message[i])
      } else {
        let k = alphabet.indexOf(message[i])
        let j = alphabet.indexOf(key[index])
        result.push(square[k][j])
        index++
      }
    }

    return this.unReverse ? result.join('') : result.reverse().join('')
  }

  decrypt(m, k) {

    if (!m || !k) {
      throw new Error(`Incorrect arguments!`)
    }

    const alphabet = this.alphabet
    const square = this.square
    const repeatCount = Math.ceil(m.length / k.length)
    const key = k.repeat(repeatCount).toUpperCase().split('')
    const message = m.toUpperCase().split('')
    const result = []
    let index = 0

    for (let i = 0; i < message.length; i++) {
      if (!alphabet.includes(message[i])) {
        result.push(message[i])
      } else {
        let k = alphabet.indexOf(key[index])
        let j = square[k].indexOf(message[i])
        result.push(alphabet[j])
        index++
      }
    }
    
    return this.unReverse ? result.join('') : result.reverse().join('')
  }
}
module.exports = {
  VigenereCipheringMachine
};