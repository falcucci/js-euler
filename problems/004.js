/**
 *
 * Project Euler Problem 4
 * =======================
 *
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 * 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 *
 */
var utils = require('../utils/reusables.js');

function main(dig) {
  var n = 100,
      numbers = [];

  while (n.toString().length == 3) {
    numbers.push(n+=1);
  }

  console.log(numbers);

  return true;
}

var dig = 3;
utils.show_answer('04', main(dig));
