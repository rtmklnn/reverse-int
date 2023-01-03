module.exports = function reverse (n) {
  let answer = '';
  let str = String(Math.abs(n));
  for (let i = str.length - 1; i >= 0; i--) {
    answer = answer + str[i];
  }
  return +answer;
}
