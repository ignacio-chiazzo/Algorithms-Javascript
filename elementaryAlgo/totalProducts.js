// Write a function `totalProduct(array)` that accepts a 2D array of numbers. The function should return
// the total product of all numbers in the array.
const totalProduct = (array) => {
  let totalProduct = 1;
  for (let i = 0; i < array.length; i++) {
    let product = array[i];
    for (let j = 0; j < product.length; j++) {
      totalProduct *= product[j];
    }
  }
  return totalProduct;
};
let array1 = [
  [3, 5, 2],
  [6, 2],
];
console.log(totalProduct(array1)); // 360

let array2 = [
  [4, 6],
  [2, 3],
  [1, 2],
];
console.log(totalProduct(array2)); // 288
