/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x == [...String(x)].reverse().join('')) {return true} else return false
};