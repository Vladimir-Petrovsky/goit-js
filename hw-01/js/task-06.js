'use strict';

let input;
let total = 0;

while (input !== null) {
  input = prompt('Введите число');
  if (input === null) {
    break;
  }
  input = Number(input);
  total = total + input;
}

alert(`Сумма введеных чисел равна ${total}`);
