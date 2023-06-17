const bs = (list, target) => {
  if (list.length === 1) return list[0] === target;
  let [left, right] = [0, list.length - 1];

  while (left <= right) {
    let mid = (left + right) >> 1;
    if (list[mid] === target) {
      return mid;
    }
    if (list[mid] > target) {
      right = mid - 1;
    }
    if (list[mid] < target) {
      left = mid + 1;
    }
  }
  return -1;
};

// console.log(bs([2, 3, 5, 6, 7, 8, 9, 23, 45], 2));
