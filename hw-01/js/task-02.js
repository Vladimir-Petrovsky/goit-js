'use strict';
const total = 100;
let ordered = prompt('Введите количество единиц товара');

if (total >= ordered && ordered > 0) {
  alert('Заказ оформлен, с вами свяжется менеджер');
} else if (total <= ordered) {
  alert('На складе недостаточно товаров!');
} else {
  alert('Вы не указали нужное количество единиц товара');
}
