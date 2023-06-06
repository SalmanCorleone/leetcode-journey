async function sleep(millis) {
  return new Promise((resolve) => setTimeout(() => resolve(), millis));
}
// let t = Date.now();
// sleep(100).then(() => console.log(Date.now() - t)); // 100

var debounce = function (fn, t) {
  let ptr;
  return function (...args) {
    if (ptr) {
      clearTimeout(ptr);
      ptr = setTimeout(() => fn(...args), t);
    } else {
      ptr = setTimeout(() => fn(...args), t);
    }
  };
};
// const log = debounce(console.log, 100);
// log("Hello"); // cancelled
// log("Hello"); // cancelled
// log("Hello"); // Logged at t=100ms
