let credits = 23580;
const pricePerDroid = 3000;
let message;
let totalPrice;
let balance;

const DroidInput = prompt('Введите количество дроидов');

if (DroidInput === null) {
  message = 'Отменено пользователем!';
  console.log(message);
} else {
  totalPrice = DroidInput * pricePerDroid;
  balance = credits - totalPrice;
}
 
if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
  console.log(message);
} else if (totalPrice <= credits) {
  console.log(
    `Вы купили ${DroidInput} дроидов, на счету осталось ${balance} кредитов.`
  );
}
