"use strict";

// TASK 01

/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки

// const checkNumberType = function (num) {
//   if (num%2 === 0) {
//     return 'Even'
//   } else {
//     return 'Odd'
//   }
// }

// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'

// TASK 02

/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

// const formatString = function (str) {
//   if (str.length <= 40) {
//     return str;
//   } else {
//     return str.slice(0, 40) + '...';
//   }
// }

// // Вызовы функции для проверки
// console.log(
//   formatString("Curabitur ligula sapien, tincidunt non.")
// ); // вернется оригинальная строка

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
// ); // вернется форматированная строка

// console.log(
//   formatString("Curabitur ligula sapien.")
// ); // вернется оригинальная строка

// console.log(
//   formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
// ); // вернется форматированная строка

// TASK 03

/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

// const checkForSpam = function (str) {
//   let arr = str.toLowerCase().split(' ');
//     if (arr.includes('spam') || arr.includes('sale')) {
//       return true;
//     }
//     return false;
// }

// // Вызовы функции для проверки
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true


// TASK 04

/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/
// const getPx = function (str) {
//  if (typeof str === 'string') {  
//   return Number.parseFloat(str);
//  } else {
//    return null;
//  }
// }

// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null


// TASK 05

/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы,
  символы букв и цифр!
*/

// const findLongestWord = function(str) {
//   let arr = str.split(" ");
//   let longestWord;
//   let longestLength = 0;
//   for (let i=0; i < arr.length; i+=1){
//     if (arr[i].length > longestLength) {
//       longestLength = arr[i].length;
//       longestWord = arr[i];
//     }
//   }
//   return longestWord
// }
// // Вызовы функции для проверки
// console.log(
//   findLongestWord("The quick brown fox jumped over the lazy dog")
// ); // вернет 'jumped'

// console.log(
//   findLongestWord("Google do a roll")
// ); // вернет 'Google'

// console.log(
//   findLongestWord("May the force be with you")
// ); // вернет 'force'


// TASK 06 

/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

// const findLargestNumber = function (numbers) {
//   let largestNumber = 0;
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (largestNumber < numbers[i]) {
//       largestNumber = numbers[i];
//     }
//   }

//   return largestNumber;
// }


// // Вызовы функции для проверки
// console.log(
//   findLargestNumber([1, 2, 3])
// ); // вернет 3

// console.log(
//   findLargestNumber([27, 12, 18, 5])
// ); // вернет 27

// console.log(
//   findLargestNumber([31, 128, 14, 74])
// ); // вернет 128



// TASK 07 

/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

// const uniqueNumbers = [2, 1, 4, 9];

// const addUniqueNumbers = function () {
//   for (var i = 0; i < arguments.length; i++) {
//     if (uniqueNumbers.indexOf(arguments[i]) === -1) {
//       uniqueNumbers.push(arguments[i]);
//     }
//   }
// }

// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(uniqueNumbers); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]

// TASK 08 

/*
  Создайте функцию removeFromArray(arr), 
  которая объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Удалите все элементы из исходного массива, 
  которые имеют такое же значение, что и аргументы.
*/

// const removeFromArray = function(arr) {
//   const arr2 = [...arguments].slice(1);
//   const newArrey = [];
//   for (var i = 0; i < arr.length; i++) {
//         if (arr2.indexOf(arr[i]) === -1) {
//           newArrey.push(arr[i]);
//         }
//       }
//       return newArrey;
// }; 

// // Вызовы функции для проверки
// console.log(
//   removeFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]

// console.log(
//   removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]