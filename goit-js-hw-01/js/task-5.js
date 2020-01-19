let country;
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
    country = 'Китай';
    message = `Доставка в ${country} будет стоить ${priceChina} кредитов`;
    alert(message);
    break;
  
  case 'чили':
    country = 'Чили';
    message = `Доставка в ${country} будет стоить ${priceChile} кредитов`;
    alert(message);
    break;
    
  case 'австралия':
    country = 'Австралию';
    message = `Доставка в ${country} будет стоить ${priceAustralia} кредитов`;
    alert(message);
    break;
    
  case 'индия':
    country = 'Индию';
    message = `Доставка в ${country} будет стоить ${priceAustralia} кредитов`;
    alert(message);
    break;
    
  case 'ямайка':
    country = 'Ямайку';
    message = `Доставка в ${country} будет стоить ${priceJamaica} кредитов`;
    alert(message);
    break;

    default:
    message = 'В вашей стране доставка не доступна';
    alert(message);
}

