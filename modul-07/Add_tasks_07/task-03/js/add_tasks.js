"use strict";

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

const list = document.body.firstElementChild

const addEl = function (arr) {
	for (let item of arr) {
		const elem = document.createElement('li')
		elem.textContent = item
		list.appendChild(elem)
	}
}

addEl(elements)

