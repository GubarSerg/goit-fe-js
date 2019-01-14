"use strict";
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

const list = document.body.firstElementChild;


console.log(list.firstElementChild.style.color = 'red')
console.log(list.lastElementChild.style.color = 'blue')