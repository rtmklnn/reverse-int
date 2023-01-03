function reverse (n) {
  let answer = '';
  let str = String(n);
  for (let i = str.length; i == 0; i--) {
    answer = answer + str[i];
    console.log(answer);
  }
  return +answer;
}
reverse(123);