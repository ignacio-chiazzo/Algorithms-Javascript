// Write a function `total` that accepts an array of numbers as an argument. The function should return
// the total sum of all elements of the array.

function total(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(total([3, 2, 8])); // 13
console.log(total([-5, 7, 4, 6])); // 12
console.log(total([7])); // 7
console.log(total([])); // 0

let obj = {
  name: "right",
  number: 3,
};

if (key in obj) {
}
