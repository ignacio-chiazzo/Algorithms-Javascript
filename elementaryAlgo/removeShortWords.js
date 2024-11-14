// Write a function `removeShortWords` that accepts a sentence string as an argument. The function
// should return a new sentence where all of the words shorter than 4 characters are removed.
const removeShortWords = (words) => {
  let result = "";
  let arrayWords = words.split(" ");
  for (let i = 0; i < arrayWords.length; i++) {
    let word = arrayWords[i];
    if (word.length < 4) continue;
    else result += word + " ";
  }
  return result;
};
console.log(removeShortWords("knock on the door will you")); // 'knock door will'
console.log(removeShortWords("a terrible plan")); // 'terrible plan'
console.log(removeShortWords("run faster that way")); // 'faster that'
