// Write a function `makeMatrix(m, n, value)` that accepts three arguments. The function should return
// a 2-dimensional array of height `m` and width `n` that contains the `value` as every element.
const makeMatrix = (m, n, value) => {
  let matrix = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(value);
    }
    matrix.push(row);
  }
  return matrix;
};
// const makeMatrix = (m, n, value) => {
//   let matrix = Array.from(Array(m), () => Array(n).fill(value));
//   return matrix
// };
console.log(makeMatrix(3, 5, null));
// [
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ]
// ]

console.log(makeMatrix(4, 2, "x"));
// [
//   [ 'x', 'x' ],
//   [ 'x', 'x' ],
//   [ 'x', 'x' ],
//   [ 'x', 'x' ]
// ]

console.log(makeMatrix(2, 2, 0));
// [
//   [ 0, 0 ],
//   [ 0, 0 ]
// ]
