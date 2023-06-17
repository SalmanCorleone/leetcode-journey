/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  let idHash = {};
  for (let i = 0; i < arr1.length; i++) {
    let id = arr1[i].id;
    idHash[id] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    let id = arr2[i].id;
    if (id in idHash) {
      idHash[id] = { ...idHash[id], ...arr2[i] };
    } else {
      idHash[id] = arr2[i];
    }
  }

  return Object.values(idHash);
};

let arr1 = [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 },
  ],
  arr2 = [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 },
  ];

console.log(join(arr1, arr2));
