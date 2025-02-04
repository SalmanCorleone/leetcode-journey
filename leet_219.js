/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const hash = new Map();
  for (let i in nums) {
    let num = nums[i];
    if (hash.has(num)) {
      if (Math.abs(hash.get(num) - i) <= k) return true;
      else hash.set(num, i);
    } else {
      hash.set(num, i);
    }
  }
  return false;
};

const nums = [1, 2, 3, 1, 2, 3],
  k = 2;
console.log(containsNearbyDuplicate(nums, k));
