'use strict';

let input;
const numbers = [];
let total = 0;

while (input !== null && input !== NaN) {
  let input = prompt('Введите число:');

  numbers.push(Number(input));

  if (input === '' || input === null) {
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    alert(`Cумма чисел равна ${total}`);
    break;
  }
}
