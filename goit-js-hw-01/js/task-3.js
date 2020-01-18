const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const UserInput = prompt('Введи пароль');

if (UserInput === null) {
   message = 'Отменено пользователем!';
  alert(message);
} else if (UserInput === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
  alert(message);
} else if (UserInput !== ADMIN_PASSWORD) {
   message = 'Доступ запрещен, неверный пароль!';
  alert(message);
}
