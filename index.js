
/**
 * Convert the given `Date` to a human readable string.
 *
 * @param {Date} date
 * @return {String}
 * @api public
 */

module.exports = function(date){
  var now = new Date
    , diff = now - date
    , t;

  // Ignore future.
  if (date > now) return '';

  // just now
  if (1e3 > diff) return 'just now';

  // seconds
  t = diff / 1e3 | 0;
  if (60 > t) return format(t, 'second');

  // minutes
  t = diff / 6e4 | 0;
  if (60 > t) return format(t, 'minute');

  // hours
  t = diff / 3.6e+6 | 0;
  if (24 > t) return format(t, 'hour');

  // days
  t = diff / 8.64e+7;
  if (30.4368 > t) return format(t | 0, 'day');

  // months
  t = diff / 2.63e+9 | 0;
  if (12 > t) return format(t, 'month');

  // years
  t = diff / 3.156e+10 | 0;
  return format(t, 'year');
};

/**
 * Format the given `n` with `unit`.
 *
 * @param {Number} n
 * @param {String} unit
 * @return {String}
 * @api private
 */

function format(n, unit){
  var a = 'hour' == unit ? 'an' : 'a';
  return (1 == n ? a : n)
    + ' ' +(1 == n ? unit : unit + 's')
    + ' ago';
}
