
/**
 * dependencies
 */

var time = require('approximate-time');

/**
 * Convert the given `Date` to a human readable string.
 *
 * @param {Date} date
 * @return {String}
 * @api public
 */

module.exports = function(date){
  if (new Date < date) return '';
  var ret = time(date);
  if ('just now' == ret) return ret;
  return time(date) + ' ago';
};
