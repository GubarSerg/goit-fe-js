"use strict";
TASK 01
/*
  - Объявите две переменные: guest и name
  - В переменную name запишите строку 'Mango'
  - Скопируйте значение из name в guest
  - Выведите в консоли значение переменной guest (должно вывести 'Mango')
*/
 let guest;
 const name = 'mango';
 guest = name;
 console.log(guest);

 TASK 02
/*
  Есть три переменные содержащие день, месяц, и год. 
  Необходимо получить строку день\месяц\год
  в формате xx\xx\xxxx
  
  Найдите ошибку в записи значания для переменной date, 
  результат будет выведен в консоль и равен комментарию 
  напротив console.log()
*/

const day = '02';
const month = 10;
const year = 2017;

const date = day + "\\" + month + "\\" + year;

console.log(date); // 02\10\2017

TASK 03

/* 
  Напишите скрипт который:
  - при загрузке страницы спрашивает имя пользователя (используйте prompt)
  - после того как было введено имя показывает alert с тем что ввели в prompt
*/

const userName = prompt('Введите ваше имя');
alert (userName);
console.log(userName);

TASK 04

/*
  Есть три переменные name, date и roomType, содержащие 
  имя гостя, дату его прибытия на отдых и тип комнаты отеля.
  
  Используя шаблонные строки необходимо записать 
  в перменную message сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
  
  Найти ошибки в коде и исправить их, при верном решении 
  в консоль будет выведена строка идентичная той что 
  напротив console.log
*/

const name = 'Mango';
const date = '14/08/2031';
const roomType = 'люкс';

const message = `${name} прибывает на отдых ${date} в ${roomType}`;

console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.

TASK 05

/*
  Есть 3 переменные в которых хранится  размер составляющих 
  блочной модели в формате Npx, где N это целое число.
  
  Используя эти переменные, запишите в переменную totalWidth 
  общую ширину блока в формате Npx.
  
  К примеру "сумма" '20px' и '30px' будет равна '50px'.
  
  Если все верно, то в консоли будет выведена строка '125px'
*/

const padding = "20px";
const border = "5px";
const contentWidth = "100px";

let totalWidth = Number.parseInt(padding)+Number.parseInt(border)+Number.parseInt(contentWidth);

console.log(totalWidth+'px'); // '125px'

TASK 06

/*
  Напишите скрипт который: 
  
  - Через prompt cпрашивает 'Какой сейчас год?'
  - Если посетитель вводит 2018 - показывать alert со строкой 'Все верно!'
  - Если что-то другое — показывать alert 'Но ведь на вдоре 2018!'
  
  PS: используйте конструкцию if..else.
*/

const year = Number(prompt('Какой сейчас год?'));
if (year === 2018) {
    alert('Все верно!');
} else {
    alert('Но ведь на вдоре 2018!');
}

TASK 07

/*
  Напишите скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
  
  PS: используйте конструкцию if..else.
*/

const a = (prompt('Введите произвольное целое число'));

if (a === null) {
    alert('Приходите еще!');
}
if (Number(a)) {
  alert('Спасибо!');
} else {
  alert('Необходимо было ввести целое число!');
}

TASK 08

/* 
  В переменную num записывается случайное число.
  
  Используя ветвления запишите в переменную type строку:  
    - "even" если num четное
    - "odd" если num не четное

  PS: попробуйте использовать тернарный оператор
*/

const num = Number.parseInt(Math.random() * 100);

let type = num % 2 === 0 ? "Even" : "Odd";
console.log(`${num} is ${type}`);

TASK 09

/* 
  Время состоит из: 
    часов(hours)
    минут (minutes)
    секунд(seconds).
  
  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45
  
  Составляющие времени не гарантированно состоят из 2-х цифр!
  
  Напишите скрипт который проверяет каждую составляющую,
  тоесть значения переменных hours, minutes, seconds 
  и добавлят впереди 0 если необходимо.
*/

let hours = 7;
let minutes = 3;
let seconds = 42;

if (String(hours).length === 1) {
  hours = '0' + hours;
}

if (String(minutes).length === 1) {
  minutes = '0' + minutes;
}

if (String(seconds).length === 1) {
  seconds = '0' + seconds;
}

const time = `${hours}:${minutes}:${seconds}`;

console.log('Time is: ', time);

TASK 10

/* 
  Создайте срипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то вывести 
  alert с текстом 'очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, 
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, 
  в зависимости от числа, используя switch, 
  вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
const HOSTELS_LIST = 1;
const CHIP_HOTELS = 2;
const THREE_STARS = 3;
const FOUR_STARS = 4;
const FIVE_STARS = 5;

const userInput = prompt("Введите число от 1 до 5");
const hotelstars = Number(userInput);

const isValidInput = userInput !== null && !Number.isNaN(hotelstars);

if (userInput === null) {
  alert("очень жаль, приходите еще!");
}

if (hotelstars >= 1 && hotelstars <= 5) {
  switch (hotelstars) {
    case HOSTELS_LIST:
      alert("Каталог хостелов");
      break;
    case CHIP_HOTELS:
      alert("Каталог бюджетных отелей");
      break;
    case THREE_STARS:
      alert("Каталог отелей ***");
      break;
    case FOUR_STARS:
      alert("Каталог отелей ****");
      break;
    case FIVE_STARS:
      alert("Каталог лучших отелей");
      break;
  }
} else {
  alert("Неверный ввод, возможные варианты 1-5!");
}
