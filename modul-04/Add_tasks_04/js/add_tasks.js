"use strict";

// TASK 01

/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// user.mood = "happy";
// user.hobby = "javascript";
// delete user.premium;

//   for (let key in user) {
//     console.log(`${key}: ${user[key]}`);
//   }

// const keys = Object.keys(user);
// for(let key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// const entries = Object.entries(user);
// for (const entry of entries) {
//     const [key, value] = entry;
//     console.log(`${key}: ${value}`);
//   }

// TASK 02

/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };

// const entries = Object.entries(tasksCompleted);
// let maxValue = 0;
// let name;
// for (let [key, value] of entries) {
//   if (maxValue < value) {
//     maxValue = value;
//     name = key;
//   }
// } console.log(name);

// TASK 03

/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// // Вызовы функции для проверки
// const countProps = function(obj) {
//   const values = Object.values(obj);
//   return values.length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 3, c: "hello" })); // 3

// TASK 04

/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// const isObjectEmpty = function(obj) {
//     if (Object.keys(obj).length === 0) {
//       return true;
//     } else {
//       return false;
//     }
// };

// // Вызовы функции для проверки
// console.log(isObjectEmpty({})); // true

// console.log(isObjectEmpty({ a: 1 })); // false

// console.log(isObjectEmpty({ a: 1, b: 2 })); // false

// TASK 05

/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/

// const countTotalSalary = function(salaries) {
//   const values = Object.values(salaries)
//   let summ = 0;
//   for (let i = 0; i < values.length; i++) {
//     summ += values[i];
//   } return summ;
// };

// // Вызовы функции для проверки
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330

// TASK 06

/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// const users = [
//   { name: "Poly", age: 7, mood: "happy" },
//   { name: "Mango", age: 4, mood: "blissful" },
//   { name: "Ajax", age: 3, mood: "tired" }
// ];

// const getAllPropValues = function(arr, prop) {
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (prop in arr[i]) {
//       arr1.push(arr[i][prop]);
//     }
//   }return arr1;
// };

// // Вызовы функции для проверки
// console.log(getAllPropValues(users, "name")); // ['Poly', 'Mango', 'Ajax']

// console.log(getAllPropValues(users, "mood")); // ['happy', 'blissful', 'tired']

// console.log(getAllPropValues(users, "active")); // []

//  TASK 07

/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, необходимо передать 
  как аргументы при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/

// function User(name, isActive, age, friends) {
//   this.name = name;
//   this.isActive = isActive;
//   this.age = age;
//   this.friends = friends;

//   this.getUserInfo = function() {
//     console.log(
//       `User ${this.name} is ${this.age} years old and has ${
//         this.friends
//       } friends`
//     );
//   };
// }

// const mango = new User("Mango", true, 2, 5);
// const poly = new User("Poly", true, 10, 4);

// mango.getUserInfo();
// poly.getUserInfo();

// TASK 08

/*  
  Расставьте отсутствующие this в методах объекта store
*/

// const store = {
//   products: ['bread', 'cheese', 'milk', 'apples'],
//   managers: ['poly', 'mango', 'ajax'],
//   addManager(manager) {
//     this.managers.push(manager);

//     console.log(this.managers);
//   },
//   removeManager(manager) {
//     const idx = this.managers.indexOf(manager);

//     this.managers.splice(idx, 1);

//     console.log(this.managers);
//   },
//   getProducts() {
//     console.log(this.products);

//     return this.products;
//   }
// }

// store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

// store.removeManager('mango'); // ['poly', ajax', 'chelsey']

// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']

// TASK 09

/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

function Account(login, password, type = "regular") {
  this.login = login;
  this.password = password;
  this.type = type;

  this.changePassword = function(newPassword) {
    this.password = newPassword;

    return this.password;
  };

  this.getAccountInfo = function() {
    return `
      Login: ${this.login}, 
      Pass: ${this.password}, 
      Type: ${this.type}
    `;
  };
}

const account = new Account("Mango", "qwe123", "premium");

console.log(account.login); // 'Mango'
console.log(account.password); // 'qwe123'
console.log(account.type); // 'premium'

console.log(account.changePassword("asdzxc")); // 'asdzxc'

console.log(account.getAccountInfo()); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
