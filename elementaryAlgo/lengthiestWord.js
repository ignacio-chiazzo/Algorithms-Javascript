// Write a function `lengthiestWord` that accepts a sentence string as an argument. The function should
// return the longest word of the sentence. If there is a tie, return the word that appears later
// in the sentence.
const lengthiestWord = (words) => {
  let arrayWord = words.split(" ");
  let lengthiest = arrayWord[0];
  for (let i = 1; i < arrayWord.length; i++) {
    let word = arrayWord[i];
    if (lengthiest.length <= word.length) {
      lengthiest = word;
    }
  }
  return lengthiest;
};
console.log(lengthiestWord("I am pretty hungry")); // 'hungry'
console.log(lengthiestWord("we should think outside of the box")); // 'outside'
console.log(lengthiestWord("down the rabbit hole")); // 'rabbit'
console.log(lengthiestWord("simmer down")); // 'simmer'
