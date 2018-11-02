/*
  Напишите скрипт, для авторизации администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
       показывать alert с текстом 'Доступ запрещен!'   
    - Если был введен логин совпадающий со значением константы adminLogin, спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен!'        
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'
        
  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/

const adminLogin = "admin";
const adminPassword = "m4ngo1zh4ackz0r";

const cancel = "Отменено пользователем!";
const wellcom = "Добро пожаловать!";
const accessIsDenied = "Доступ запрещен!";

const userLogin = prompt("Login");
let userPassword;

if (userLogin === null) {
  alert(cancel);
} else if (userLogin === adminLogin) {
  userPassword = prompt("Password");
  if (userPassword === null) {
    alert(cancel);
  } else if (userPassword === adminPassword) {
    alert(wellcom);
  } else {
    alert(accessIsDenied);
  }
} else {
  alert(accessIsDenied);
}
