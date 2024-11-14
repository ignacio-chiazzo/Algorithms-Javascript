// Write a function `zipper` that accepts two arrays as arguments. The function should return a 2D
// array containing pairs of elements at the same indices. You can assume that the arrays have the
// same length.
const zipper = (array1, array2) => {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    let elem1 = array1[i];
    let elem2 = array2[i];
    result.push([elem1, elem2]);
  }
  return result;
};
// const zipper = (array1, array2) => {
//     let result = []
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//      if(i === j){
//         result.push([array1[i], array2[j]])
//      }
//     }
//   }
//   return result
// };
let array1 = ["a", "b", "c", "d"];
let array2 = [-1, -2, -3, -4];
console.log(zipper(array1, array2));
// [
//   ['a', -1],
//   ['b', -2],
//   ['c', -3],
//   ['d', -4],
// ]

let array3 = ["whisper", "talk", "shout"];
let array4 = ["quiet", "normal", "loud"];
console.log(zipper(array3, array4));
// [
//   ['whisper', 'quiet'],
//   ['talk', 'normal'],
//   ['shout', 'loud'],
// ]
