// leetcode 2013
var DetectSquares = function () {
  this.points = [];
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
  this.points.push({ x: point[0], y: point[1] });
};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
  let pnt = { x: point[0], y: point[1] };
  if (this.points.length < 3) return 0;
  let cnt = 0;

  for (let i = 0; i < this.points.length; i++) {
    // for (let j = i + 1; j < this.points.length; j++) {
    //   for (let k = j + 1; k < this.points.length; k++) {
    //     let [p1, p2, p3] = [this.points[i], this.points[j], this.points[k]];
    //     let isSq = this.isAxisSquare(p1, p2, p3, pnt);
    //     console.log({ isSq, p1, p2, p3, pnt });
    //     if (isSq) cnt++;
    //   }
    // }
    if (pnt.x !== this.points[i].x && pnt.y !== this.points[i].y) {
      continue;
    } else {
    }
  }
  console.log({ cnt });
  return cnt;
};

DetectSquares.prototype.isAxisSquare = function (p1, p2, p3, p4) {
  //check same point included twice
  let arr = [p1, p2, p3, p4].sort((a, b) => a.x - b.x);
  let [a, b, c, d] = arr;
  if (a.x === b.x && a.y === b.y) return false;
  if (c.x === d.x && c.y === d.y) return false;
  let isXSame = a.x === b.x && c.x === d.x;
  if (!isXSame) return false;
  let xLen = Math.abs(a.x - c.x);
  let yLen = Math.abs(a.y - b.y);
  let yLen2 = Math.abs(c.y - d.y);
  return xLen === yLen && yLen === yLen2;
};

//  Your DetectSquares object will be instantiated and called as such:
let detectSquares = new DetectSquares();
detectSquares.add([3, 10]);
detectSquares.add([11, 2]);
detectSquares.add([3, 2]);
detectSquares.count([11, 10]); // return 1. You can choose:
// - The first, second, and third points
detectSquares.count([14, 8]); // return 0. The query point cannot form a square with any points in the data structure.
detectSquares.add([11, 2]); // Adding duplicate points is allowed.
detectSquares.count([11, 10]);
