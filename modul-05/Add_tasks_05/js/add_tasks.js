"use strict";

// TASK 01

/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/* 
  Функция findGreaterThan получает два аргумента - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/

// const findGreaterThan = (num, arr) => {
//   const result = [];

//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     if (arr[i] > num) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// };

// const findGreaterThan = (num, arr) => arr.filter(value => value > num);


// console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
// console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
// console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]

/* 
  Функция multiplyBy принимает два аргумента - число и массив. 
  Возвращает массив все значения которого умножены на число.
*/
// const multiplyBy = (num, arr) => {
//   let result = [];

//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     result.push(arr[i] * num);
//   }

//   return result;
// };
// const multiplyBy = (num, arr) => arr.map(value => value*num);

// console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
// console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
// console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]

// /* 
//   Функция summAllNumbers принимает любое число аргументов.
//   Возвращает число - сумму всех аргументов.
// */
// function summAllNumbers(...args) {
//   let accumulator = 0;

//   for (let i = 0, max = args.length; i < max; i += 1) {
//     accumulator += args[i];
//   }

//   return accumulator;
// }
// const summAllNumbers = (...arr) => arr.reduce((acc, item) => acc + item, 0);

// console.log( summAllNumbers(1, 2, 3) ); // 6
// console.log( summAllNumbers(1, 2, 3, 4) ); // 10
// console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15

// /* 
//   Функция findEvery получает два аргумента - число и массив.
//   Возвращает true если все элементы массива больше или равны числу.
//   Иначе если есть хоть один элемент меньше числа, то возвращается false.
// */
// const findEvery = (num, arr) => {
//   for (let i = 0, max = arr.length; i < max; i += 1) {
//     if (arr[i] < num) {
//       return false;
//     }
//   }

//   return true;
// };
// const findEvery = (num, arr) => arr.every(value => value >= num);

// console.log(findEvery(5, [5, 6, 7, 8, 9])); // true
// console.log(findEvery(6, [5, 6, 7, 8, 9])); // false
// console.log(findEvery(4, [5, 6, 7, 8, 9])); // true

// TASK 02

/*
  Напишите функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

const guests = [
  { name: "Mango", age: 20, isActive: true },
  { name: "Poly", age: 18, isActive: false },
  { name: "Ajax", age: 30, isActive: true },
  { name: "Chelsey", age: 45, isActive: false }
];
const getPropValues = (arr, prop) => arr.map(prop => prop.name);
// Вызовы функции для проверки
console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']

console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]

console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]