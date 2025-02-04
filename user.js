const users = require("./users.json");

let arr = users.map((user) => user.approved_amount);

arr.sort((a, b) => a - b);

console.log(arr);

let res = arr[Math.ceil(arr.length / 2)];

console.log(arr[arr.length - 1]);
