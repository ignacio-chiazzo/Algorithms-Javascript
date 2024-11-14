// Write a function `divisors` that accepts a number as an argument. The function should return an
// array containing all positive numbers that can divide into the argument.
function divisors(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    let eachNum = i;
    if (num % eachNum === 0) {
      result.push(eachNum);
    }
  }
  return result;
}
console.log(divisors(15)); // [1, 3, 5, 15]
console.log(divisors(7)); // [1, 7]
console.log(divisors(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
