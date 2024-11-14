// Write a function `stringsToLengths` that accepts an array of strings as an argument. The function
// should return a new array containing the lengths of the elements of the original array.
function stringsToLengths(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    result.push(word.length);
  }
  return result;
}
console.log(stringsToLengths(["belly", "echo", "irony", "pickled"]));
// [5, 4, 5, 7]

console.log(stringsToLengths(["on", "off", "handmade"]));
// [2, 3, 8]
