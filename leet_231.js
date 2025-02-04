/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (!n || n < 0) return false;
  let x = Math.abs(n);
  while (x > 2) {
    if (x % 2) return false;
    x = x >> 1;
  }
  return true;
};

const n = 16;
console.log(isPowerOfTwo(n));
