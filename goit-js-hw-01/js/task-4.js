let credits = 23580;
const pricePerDroid = 3000;
let message;
let totalPrice;
let balance;

const droidInput = prompt('Введите количество дроидов');

if (droidInput === null) {
  message = 'Отменено пользователем!';
  console.log(message);
} else {
  totalPrice = droidInput * pricePerDroid;
  balance = credits - totalPrice;
  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
    console.log(message);
  } else {
    console.log(
      `Вы купили ${droidInput} дроидов, на счету осталось ${balance} кредитов.`
    );
  }
}
 

