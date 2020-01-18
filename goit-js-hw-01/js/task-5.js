const China = 'Китай';
const Chile = 'Чили';
const Australia = 'Австралию';
const India = 'Индию';
const Jamaica = 'Ямайку';
const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;
let message;

const UserInput = prompt('Введи свою страну');
const normalizeUserImput = UserInput.toLowerCase();
console.log(normalizeUserImput);

switch (normalizeUserImput) {
    case 'китай':
    message = `Доставка в ${China} будет стоить ${priceChina} кредитов`;
    alert(message);
    break;

  case 'чили':
    message = `Доставка в ${Chile} будет стоить ${priceChile} кредитов`;
    alert(message);
    break;

  case 'австралия':
    message = `Доставка в ${Australia} будет стоить ${priceAustralia} кредитов`;
    alert(message);
    break;

  case 'индия':
    message = `Доставка в ${India} будет стоить ${priceAustralia} кредитов`;
    alert(message);
    break;

  case 'ямайка':
    message = `Доставка в ${Jamaica} будет стоить ${priceJamaica} кредитов`;
    alert(message);
    break;

    default:
    message = 'В вашей стране доставка не доступна';
    alert(message);
}

