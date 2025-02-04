/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length === 1) return true;
  const hash = new Map();
  for (let i in s) {
    console.log(hash);
    let char = s[i];
    if (hash.has(char)) {
      if (hash.get(char) !== t[i]) return false;
    } else {
      hash.set(char, t[i]);
      // hash.set(t[i], char);
    }
  }
  console.log(hash);

  return true;
};

console.log(isIsomorphic("paper", "title"));
