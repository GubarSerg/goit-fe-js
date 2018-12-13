"use strict";

// TASK 01

/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
  В prototype функции-конструктора добавить метод getAccountInfo(), 
  который выводит в консоль значения полей login, email и friendsCount. 
  
  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

const Account = function (login, email, friendsCount) {
  this.login = login;
  this.email = email;
  this.friendsCount = friendsCount;
}

Account.prototype.getAccountInfo = function() {
  console.log(`Login: ${this.login}, mail: ${this.email}, friendsCoun: ${this.friendsCount}`)
}

const serhio = new Account ('Serhio', 'gubar.serg@gmail.com', '5')
const kris = new Account ('Kris', 'gubar.kris@gmail.com', '10')


serhio.getAccountInfo()
kris.getAccountInfo()