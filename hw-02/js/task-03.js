'use strict';

const findLongestWord = function(string) {
  const wordsArr = string.split(' ');
  let wordLong = wordsArr[0];

  for (let word of wordsArr) {
    if (word.length > wordLong.length) wordLong = word;
  }

  return wordLong;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
