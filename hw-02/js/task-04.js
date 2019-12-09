'use strict';

const formatString = function(string) {
  const symbols = string.split('');
  const symbolPerLine = symbols.length;
  let message;

  if (symbolPerLine <= 40) {
    message = symbols.join('');
  } else {
    let modifiedArr = symbols.slice(0, 40);
    message = `${modifiedArr.join('') + '...'}`;
  }

  return message;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
