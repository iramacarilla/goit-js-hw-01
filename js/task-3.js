const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userPassword = prompt('Please enter your password:');
console.log(userPassword);
if (userPassword === null)
{
    message = 'Отменено пользователем!';
    console.log(message);
}
else if (userPassword === ADMIN_PASSWORD)
{
    message = 'Добро пожаловать!';
    console.log(message);
}
else {
    message = 'Доступ запрещен, неверный пароль!';
    console.log(message);
}
alert(message);