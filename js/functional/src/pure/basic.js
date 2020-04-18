const R = require('ramda');

const add = (x, y) => x * y;

const sentence =
  'Mollit elit dolor elit deserunt ea sint exercitation dolor id.';

const wordList = R.split(' ', sentence);

const wordCount = R.length(wordList);

console.log(wordList, wordCount);

const countWords = R.compose(R.length, R.split);

const result = countWords(' ', sentence);

console.log(result);

const countWords2 = R.compose(R.length, R.split(' '));

const result2 = countWords2(sentence);

console.log(result2);

// Count how many digits there are in the following
// sentence, using functional composition
const sentence =
  'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

const numbersInString = R.compose(
  R.length,
  R.filter(Number.isInteger),
  R.map(parseInt),
  R.split(' ')
); // add function composition here

expect(numbersInString(sentence)).toBe(3);

console.log('If you see this printed in the console, the test passed!');
