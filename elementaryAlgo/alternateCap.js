// Write a function `alternatingCaps` that accepts a sentence string as an argument. The function should
// return the sentence where words alternate between lowercase and uppercase.
const alternatingCaps = (words) => {
  let result = "";
  let arraySplit = words.split(" ");
  for (let i = 0; i < arraySplit.length; i++) {
    let word = arraySplit[i];
    if (i % 2 === 0) {
      result += word.toLowerCase() + " ";
    } else {
      result += word.toUpperCase() + " ";
    }
  }
  return result;
};
console.log(alternatingCaps("take them to school")); // 'take THEM to SCHOOL'
console.log(alternatingCaps("What did ThEy EAT before?")); // 'what DID they EAT before?'
