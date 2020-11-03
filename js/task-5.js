'use strict';
let price;
let countryInput = prompt('What country');
const countryLower= countryInput.toLowerCase();
let country = countryLower;
console.log(country);

switch (country) {
    case 'китай':
        price = 100;
        console.log (`'Доставка в Китай будет стоить ${price} кредитов'`);
        break;
    case 'чили':
        price = 120;
        console.log (`'Доставка в Чили будет стоить ${price} кредитов'`);
        break;
     case 'австралия ':
         price = 170;
         console.log (`'Доставка в Австралия  будет стоить ${price} кредитов'`);
         break;
    case 'индия':
         price = 80;
         console.log (`'Доставка в Индия  будет стоить ${price} кредитов'`);
         break;     
     case 'ямайка':
        price = 120;
        console.log (`'Доставка в Ямайка   будет стоить ${price} кредитов'`);
        break;         
default:
    alert('В вашей стране доставка не доступна');
}