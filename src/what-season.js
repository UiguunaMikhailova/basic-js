const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  if (!(date instanceof Date) || date.hasOwnProperty('getMonth')) throw new Error(`Invalid date!`)
  
  let month;
  try {
    month = date.getMonth()
  } catch {
    throw new Error(`Invalid date!`)
  }
  if (month < 2 || month === 11) return 'winter'
  if (month < 5 && month > 1) return 'spring'
  if (month < 8 && month > 4) return 'summer'
  if (month < 11 && month > 7) return 'autumn'
}

module.exports = {
  getSeason
};
