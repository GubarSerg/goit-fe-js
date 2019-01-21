"use strict";

/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

document.addEventListener('DOMContentLoaded', () => {
	const sub = document.querySelector('[data-action="sub"]');
	const add = document.querySelector('[data-action="add"]');
	const value = document.querySelector('.value');

	let num = 0;
	sub.addEventListener('click', subCount);

	function subCount() {
		num -= 1;
		value.innerText = num;
	}

	add.addEventListener('click', addCount);

	function addCount() {
		num += 1;
		value.innerText = num;
	}
})

