'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  let minLength = 4;
  let maxLength = 16;
  if (login.length >= minLength && login.length <= maxLength) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function(allLogins, login) {
  for (const word of allLogins) {
    if (word === login) {
      return false;
      break;
    }
  }
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login) === false) {
    alert('Ошибка! Логин должен быть от 4 до 16 символов');
  } else if (isLoginUnique(allLogins, login) === false) {
    alert('Такой логин уже используется!');
  } else {
    allLogins.push(login);
    alert('Логин успешно добавлен!');
  }
  console.log(logins);
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
