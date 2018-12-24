"use strict";

// TASK 01

/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
//   В prototype функции-конструктора добавить метод getAccountInfo(), 
//   который выводит в консоль значения полей login, email и friendsCount. 
  
//   Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
//   а использовать его смогут все экземпляры, по ссылке.
  
//   Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
// */

// const Account = function(login, email, friendsCount) {
//   this.login = login;
//   this.email = email;
//   this.friendsCount = friendsCount;
// };

// Account.prototype.getAccountInfo = function() {
//   console.log(
//     `Login: ${this.login}, mail: ${this.email}, friendsCoun: ${
//       this.friendsCount
//     }`
//   );
// };

// const serhio = new Account("Serhio", "gubar.serg@gmail.com", "5");
// const kris = new Account("Kris", "gubar.kris@gmail.com", "10");

// serhio.getAccountInfo();
// kris.getAccountInfo();

//  TASK 02

// /*
//   Напишите ES6 класс StringBuilder.

//   На вход (в конструкторе) он получает один параметр string - строку,
//   которую записывает в поле value.

//   Добавьте классу следующие методы:

//     - getValue() - выводит в консоль текущее значение поля value

//     - append(str) - получает парметр str - строку и добавляет
//       ее в конец значения поля value

//     - prepend(str) - получает парметр str - строку и добавляет
//       ее в начало значения поля value

//     - pad(str) - получает парметр str - строку и добавляет
//       ее в начало и в конец значения поля value
// */
// class StringBuilder {
//   constructor(str) {
//     this.str = new Array(str);
//   }

//   showValue() {
//     console.log(`string: ${this.str}`);
//   }
//   append(str) {
//     this.str.push(str);
//   }
//   prepend(str) {
//     this.str.unshift(str);
//   }
//   pad(str) {
//     this.str.push(str);
//     this.str.unshift(str);
//   }
// }

// const stringBuilder = new StringBuilder("Hello World!");

// stringBuilder.append("This is Serg");
// stringBuilder.showValue(); // '.^'

// stringBuilder.prepend("This massege is:");
// stringBuilder.showValue(); // '^.^'

// stringBuilder.pad("!!!");
// stringBuilder.showValue(); // '=^.^='

//  TASK 03

// /*
//   Создайте класс Car с указанными полями и методами.
// */

// class Car {
//   constructor(maxSpeed) {
// .....
// }

class Car {
  constructor(maxSpeed) {
    // - speed - для отслеживания текущей скорости, изначально 0.
    this.speed = 0;
    // - maxSpeed - для хранения максимальной скорости
    this.maxSpeed = maxSpeed;
    // - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
    this.running = false;
    // - distance - содержит общий киллометраж, изначально с 0
    this.distance = 0;
  }

  turnOn() {
    // Добавьте код для того чтобы завести автомобиль, просто записывает в свойство running значание true
    this.running = true;
  }

  turnOff() {
    // Добавьте код для того чтобы заглушить автомобиль, просто записывает в свойство running значание false
    this.running = false;
  }

  accelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что оно не больше чем значение свойства maxSpeed
    if ((spd < this.maxSpeed) && (spd > this.speed)) {
      this.speed = spd;
    }
    return this.speed;
  }

  decelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что оно не больше чем значение свойства maxSpeed и не меньше нуля
    if ((spd > 0) && (spd <= this.speed)) {
      this.speed = spd;
    }
    return this.speed;
  }

  drive(hours) {
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed), но только в том случае если машина заведена!
    if (this.turnOn) {
      this.distance = this.maxSpeed * hours;
    }
  }

  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, running: ${car.running}, distance: ${
        car.distance
      }`
    );
  }
}

// TASK 04

// /*
//   Добавьте к классу Car из предыдущего задания статический
//   метод getSpecs, который получает объект-машину как аргумент
//   и выводит в консоль значения полей maxSpeed, running и distance.

//   Использование будет выглядеть следующим образом:

const someCar = new Car(100);
someCar.turnOn();
someCar.drive(2);

Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200

// */

//TASK 05

// /*
//   Добавьте классу Car свойство value - цена автомобиля.

//   Добавьте классу Car использование геттеров и сеттеров для свойства value.

//   Геттер вернет текущей значение поля this._value
//   Сеттер запишет в поле this._value то что ему присвоят

//   PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
//     не this.value а this._value

//   Использование выглядит следующим образом:

//   const myCar = new Car(50, 2000);

//   myCar.value; // 2000
//   myCar.value = 4000;
//   myCar.value; // 4000
// */

// class Car {
//   constructor(maxSpeed, value) {
//     // ... код
//     this._value = value;
//   }
//   // ... код
// }

