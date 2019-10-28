'use strict';
const pricePerDroid = 3000;
let credits = 23580;
let totalprice;
let amountDroid = prompt('Сколько дроидов вы хотите купить?');

totalprice = amountDroid * pricePerDroid;

if (amountDroid === null) {
  alert('Отменено пользователем!');
} else if (totalprice > credits) {
  alert('Недостаточно средств на счету!');
} else {
  alert(
    `Вы купили ${amountDroid} дроидов, на счету осталось ${credits -
      totalprice} кредитов.`,
  );
}
