// Write a function `makeAcronym` that accepts a sentence string as an argument. The function should
// return a string containing the first character of each word in the sentence.
const makeAcronym = (words) => {
  let arrayWord = words.split(" ");
  let result = "";
  for (let i = 0; i < arrayWord.length; i++) {
    let word = arrayWord[i][0];
    result += word.toUpperCase();
  }
  return result;
};
console.log(makeAcronym("New York")); // NY
console.log(makeAcronym("same stuff different day")); // SSDD
console.log(makeAcronym("Laugh out loud")); // LOL
console.log(makeAcronym("don't over think stuff")); // DOTS
