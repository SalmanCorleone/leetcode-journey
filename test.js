/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // edge cases

  if (!nums1.length) return getMedianOfArr(nums2);
  if (!nums2.length) return getMedianOfArr(nums1);
  if (nums1[nums1.length - 1] < nums2[0]) {
    return (nums1[nums1.length - 1] + nums2[0]) / 2;
  }
  if (nums2[nums2.length - 1] < nums1[0]) {
    return (nums2[nums2.length - 1] + nums1[0]) / 2;
  }

  let A = nums1,
    B = nums2;
  if (B.length < A.length) {
    [A, B] = [B, A];
  }

  let totalLen = A.length + B.length;
  let half = totalLen >> 1;

  console.log({ totalLen, half });

  let [lenA, lenB] = [A.length, B.length];

  let [left, right] = [0, lenA - 1];
  let count = 0;
  while (count < 10) {
    count++;
    let mid = (left + right) >> 1;
    let Bslice = half - mid - 2;
    let A_end = A[mid];
    let B_end = B[Bslice];
    let A2_start = A[mid + 1] ?? -Infinity;
    let B2_start = B[Bslice + 1] ?? Infinity;

    console.log({ mid, Bslice });
    // am I on corerct slice
    if (A_end <= B2_start && B_end <= A2_start) {
      // even
      if (totalLen % 2 === 0) {
        return (Math.max(A_end, B_end) + Math.min(A2_start, B2_start)) / 2;
      } else {
        return Math.min(A2_start, B2_start);
      }
    } else if (B2_start < A_end) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
};

let getMedianOfArr = (arr) => {
  let len = arr.length;
  if (len % 2 === 0) {
    let idx = (len - 1) >> 1;
    return (arr[idx] + arr[idx + 1]) / 2;
  } else {
    return (arr[0] + arr[len - 1]) >> 1;
  }
};

// console.log({ x: findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4]) });
console.log({ res: findMedianSortedArrays([1, 3], [2]) });

let x = [1, 2, 3, 4];
let y = [3, 4, 5, 6];
[1, 2, 3, 3, 4, 4, 5, 6];
