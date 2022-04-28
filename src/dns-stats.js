const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {}
  for (let i = 0; i < domains.length; i++) {
    let domain = domains[i].split('.').reverse()
    console.log(domain)
    let str = ''
    for (let k = 0; k < domain.length; k++) {
      str += `.${domain[k]}`
      if (result[str]) {
        result = {...result, [str]: result[str] + 1}
      } else {
        result = {...result, [str]: 1}
      }
    }
    
  }
  return result
}

module.exports = {
  getDNSStats
};
