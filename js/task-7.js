const countryName = "КитаЙ";

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
}
 else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
  switch (country) {
  // Write code under this line
    
    case 'Китай':
        price = 100;
        //message = `Доставка в ${country} будет стоить ${price} кредитов`;
        break;
     case 'Австралия':
         price = 170;
         //message = `Доставка в ${country} будет стоить ${price} кредитов`;
         break;
    case 'Индия':
         price = 80;
         //message = `Доставка в ${country} будет стоить ${price} кредитов`;
         break;     
     case 'Ямайка':
        price = 120;
        //message = `Доставка в ${country} будет стоить ${price} кредитов`;
        break;         
default:
    message = NO_DELIVERY;
}
  }

if ( price > 0) { // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}
console.log(message);