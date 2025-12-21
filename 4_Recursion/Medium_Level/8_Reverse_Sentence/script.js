// reverse sentence and words
function reverseSentence(sentence, i = 0) {
  // Base case: if we've reached the end of the sentence
  if (i === sentence.length) return "";

  // Recursive case: process the rest first, then add current character
  return reverseSentence(sentence, i + 1) + sentence[i];
}

console.log(reverseSentence("hello world js"));



// const reverseSentence = (sentence) => {
//   let res = "";

//   let temp = "";
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] !== " ") {
//       temp += sentence[i];
//     } else {
//       res = temp + " " + res;
//       temp = "";
//     }
//   }

//   return temp + " " + res;
// };

// console.log(reverseSentence("hello world js"));
