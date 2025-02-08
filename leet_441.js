/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let count = 1,
    totalCoins = 1;

  while (true) {
    if (totalCoins + count + 1 > n) return count;
    if (totalCoins + count + 1 === n) return count + 1;
    totalCoins += count + 1;
    count++;
  }
};
