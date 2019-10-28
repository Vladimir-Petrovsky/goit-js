'use strict';
const CHINA = 'китай';
const CHILE = 'чили';
const AUSTRALIA = 'австралия';
const INDIA = 'индия';
const JAMAICA = 'ямайка';

let countryName = prompt('Введите название страны');
let message;

if (countryName === null) {
  message = `Отменено пользователем!`;
} else {
  countryName = countryName.toLowerCase();
  switch (countryName) {
    case CHINA:
      message = `Доставка в Китай будет стоить 100 кредитов`;
      break;

    case CHILE:
      message = `Доставка в Чили будет стоить 250 кредитов`;
      break;

    case AUSTRALIA:
      message = `Доставка в Австралию будет стоить 170 кредитов`;
      break;

    case INDIA:
      message = `Доставка в Индию будет стоить 80 кредитов`;
      break;

    case JAMAICA:
      message = `Доставка в Ямайку будет стоить 120 кредитов`;
      break;
    default:
      message = `В вашей стране доставка не доступна`;
      break;
  }
}
alert(message);
