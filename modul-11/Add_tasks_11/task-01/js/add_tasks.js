"use strict";

/*
  К pen уже подключен Handlebars.
  Используйте встроенные шаблоны и метод Handlebars.compile
  
  Создайте шаблон списка указаного во вкладке HTML.
  
  Отрендерите список в DOM по данным из массива listItems.
*/

const products = [
  { name: 'Apples', count: 50 },
  { name: 'Grapes', count: 44 },
  { name: 'Cheese', count: 128 },
  { name: 'Milk', count: 293 },
];

const root = document.querySelector('#root');
const source = document.querySelector('#tamplate').innerHTML.trim();
const template = Handlebars.compile(source);

const markup = products.reduce((acc, prod) => acc + template(prod), '');

console.log(markup);
root.insertAdjacentHTML('afterbegin', markup);

