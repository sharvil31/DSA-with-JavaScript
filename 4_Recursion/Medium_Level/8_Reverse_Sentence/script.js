
// reverse sentence and words
function reverseSentence(sentence, i = 0) {
  // Base case: if we've reached the end of the sentence
  if (i === sentence.length) return "";

  // Recursive case: process the rest first, then add current character
  return reverseSentence(sentence, i + 1) + sentence[i];
}

console.log(reverseSentence("hello world js"));
