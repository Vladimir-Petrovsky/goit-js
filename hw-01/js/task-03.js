'use strict';
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let password = prompt('Введите пароль');

if (ADMIN_PASSWORD === password) {
  message = 'Добро пожаловать!';
} else if (password === null) {
  message = 'Отменено пользователем!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
