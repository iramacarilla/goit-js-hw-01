
let total = 0;

while (true) {
   let input = prompt('Let add a number');
   

    if (input === null)
    {
      // console.log(`'Общая сумма чисел равна ${total}'`);
        break;
   }
    input = Number(input);
    //console.log (input);

    const notANumber = Number.isNaN(input);

    if (notANumber) {
       alert('Было введено не число, попробуйте еще раз');
        continue;
    }
    total += input;
    console.log(total);
  }
  alert(`Общая сумма чисел равна ${total}`);
