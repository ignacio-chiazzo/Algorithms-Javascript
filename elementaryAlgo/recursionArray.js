//Given an array of integers, write a function that return the sum all of it element using recursion
const sum = (array) => {
  if (array.length === 0) return 0;
  let rest = array.slice(1);
  return array[0] + sum(rest);
};
console.log(sum([2, 5, 6, 8, 9]));
//Time: O(n^2)
//Space: O(n)
// can improve our space complexity like this
const sumImprove = (array) => {
  return _sum(array, 0);
};
const _sum = (array, idx) => {
  if (array.length === idx) return 0;
  return array[idx] + _sum(array, idx + 1);
};
console.log(sumImprove([2, 5, 6, 8, 9]));
//Time: O(n)
//Space: O(n)
