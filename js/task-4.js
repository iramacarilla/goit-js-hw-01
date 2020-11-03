'use strict';
let credits = 23580;
const pricePerDroid = 3000;
const quantityOfDroids = prompt('How many droids do you want to buy?');
console.log(quantityOfDroids);
let totalPrice = pricePerDroid * quantityOfDroids;
if (quantityOfDroids === null) 
{ 
    console.log('Отменено пользователем!');
}
else if (totalPrice > credits)
{
    console.log('Недостаточно средств на счету!');
}
else {
    credits -= totalPrice;
    console.log (`'Вы купили ${quantityOfDroids} дроидов, на счету осталось ${credits} кредитов.'.`)

}