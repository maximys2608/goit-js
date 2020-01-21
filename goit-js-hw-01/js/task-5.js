let country;
let price;

const UserInput = prompt('Введи свою страну');
switch (UserInput.toLowerCase()) {
  case 'китай':
    country = 'Китай';
    price = 100;
    break;
  case 'чили':
    country = 'Чили';
    price = 250;
    break;
  case 'австралия':
    country = 'Австралию';
    price = 170;
    break;
  case 'индия':
    country = 'Индию';
    price = 80;
    break;
  case 'ямайка':
    country = 'Ямайку';
    price = 120;
    break;
  default:
    alert('В вашей стране доставка не доступна');
}
const message = `Доставка в ${country} будет стоить ${price} кредитов`;
if(country && country.length) alert(message);

