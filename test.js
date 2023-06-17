var TimeMap = function () {
  this.map = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  this.map[key] = this.map[key] ? [...this.map[key], { timestamp, value }] : { timestamp, value };
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  let list = this.map[key];
  let idx = bss(list, timestamp);
  return list[idx]?.value;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

const bss = (list, target) => {
  let [left, right] = [0, list.length - 1];

  while (left <= right) {
    let mid = (left + right) >> 1;
    if (list[mid].timestamp === target) {
      return mid;
    }
    if (list[mid].timestamp > target) {
      right = mid - 1;
    }
    if (list[mid].timestamp < target) {
      left = mid + 1;
    }
  }
  return right;
};

// console.log(bs([2, 3, 5, 6, 7, 8, 9, 23, 45], 2));
