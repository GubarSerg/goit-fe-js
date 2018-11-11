"use strict";

// TASK 01
// /*
//   Есть массив имен пользователей.
//   В первом console.log вывести длину массива.

//   В последующих console.log дополнить конструкцию
//   так, чтобы в консоль вывелись указаные в комментариях 
//   элементы массива.
// */

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// console.log(users.length); // 4

// console.log(users[1]); // Poly
// console.log(users[3]); // Chelsey
// console.log(users[0]); // Mango
// console.log(users[2]); // Ajax

// TASK 02

// /* Есть массив имен пользователей */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// // /* Используя методы массива, последовательно выполнить следующие операции */

// // // Удалить из начала массива нулевой элемент
// users.shift();
// // console.log(users); // ["Poly", "Ajax", "Chelsey"]

// // // Удалить из конца массив последний элемент
// users.pop();
// // console.log(users); // ["Poly", "Ajax"]

// // // Добавить в начало массива любое имя
// users.unshift("Sam");
// // console.log(users); // ["добавленое имя", "Poly", "Ajax"]

// // // Добавить в конец массива два любых имени за одну операцию
// users.push("Bob", "Alex");
// console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]

// TASK 03
/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/

// let string;
// let arr;

// string = "Welcom to Hollywood!";
// arr = string.split(" ");
// Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
// console.log(arr);

// // // Вывести в консоли общую длину массива arr
// console.log(arr.length);

// // Используя цикл, вывести в консоль все индексы массива arr

// let i = 0;
// while (i < arr.length) {
//   console.log(i);
//   i += 1;
// }
// // // Используя цикл, вывести в консоль все элементы массива arr
// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i += 1;
// }
// // Используя цикл, bывести в консоли все пары индекс:значение массива arr
// console.log();
// let i = 0;
// while (i < arr.length) {
//   console.log(i, arr[i]);
//   i += 1;
// }

// TASK 04

/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

  Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, 
  либо не нажмёт кнопку Cancel.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/

// const num = 100;
// let userInput;
// let inRange = false;

// do {
//   userInput = Number(prompt(`Введите число больше ${num}`));
//   inRange = userInput > num;
// } while (userInput !== null && !inRange);

// TASK 05
/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

// const min = 1;
// const max = 100;

// for (let i = min; i <= max; i += 1) {
//   if (i % 3 === 0) {
//     console.log("Fizz")
//   } else if(i % 5 === 0 && i % 3 !== 0) {
//     console.log("Buzz")
//   }else {
//     console.log(i)
//   }
// }

// TASK 06

/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];

// for (let item of numbers) {
//   if (item > num) {
//     newArray.push(item);
//   }
// }
// console.log(newArray);

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers [i] > num) {
//     newArray.push(numbers[i]);
//   } 
// } console.log(newArray);

// TASK 07

/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const string = "May the force be with you";
// let longestWord;

// let longestLength = 0;
// let words = string.split(' ');
// for (let i = 0; i < words.length; i += 1) {
//   if (words[i].length > longestLength) {
//     longestLength = words[i].length;
//     longestWord = words[i];
//   }
// }
// console.log(longestWord); // 'force'

// TASK 08

/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/

// const userInput = [];
// let num;
// do {
//   num = prompt("Введите любое число");
//   if (num === '' || num === null) {
//     break;
//   } else {
//     userInput.push(Number(num));
//   }
// } while (num !== null);

// let total = 0;
// for (let item of userInput) {
//   total += item;
// }
// console.log(`Сумма: ${total}`);

// TASK 09

/*
  ***ЗАДАНИЕ ПОВЫШЕНОЙ СЛОЖНОСТИ***
  
  Создайте игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Но пользователь может ввести что угодно, необходимо проверить 
  что было введено. Преобразовать input в числовой тип и проверить 
  число ли это.
  
    - Если не число - выводим alert с сообщением о том, что было 
      введено не число.
    - Если число - проверить содержит ли в себе массив numbers это число.
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

const numbers = [12, 15, 25, 37, 41];