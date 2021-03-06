/**
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *
 */

var utils = require('../utils/reusables.js');

function multiples(len) {
  var list = [];
  for (var i = 0, len; i < len; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      list.push(i)
    }
  }
  return list.reduce(utils.add, 0);
}

utils.show_answer('01', multiples(1000));

module.exports = {
  multiples
};
