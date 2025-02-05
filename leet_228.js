/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return [];
  if (nums.length === 1) return [`${nums[0]}`];

  const res = [];
  let rangeString = "";
  for (let i = 1; i < nums.length; i++) {
    let numCurr = nums[i],
      numPrev = nums[i - 1];

    if (numCurr === numPrev + 1) {
      if (!rangeString) rangeString = `${numPrev}`;
    } else {
      res.push(!rangeString ? `${numPrev}` : `${rangeString}->${numPrev}`);
      rangeString = "";
    }
  }

  const lastNum = nums[nums.length - 1];
  res.push(!rangeString ? `${lastNum}` : `${rangeString}->${lastNum}`);
  return res;
};

const nums = [0, 1, 2, 4, 5, 7];
const nums2 = [0, 2, 3, 4, 6, 8, 9];

console.log(summaryRanges(nums));
console.log(summaryRanges(nums2));
