"use strict";
//Task - 07

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

function createBoxes(num) {

	const root = document.querySelector('#root');
	const boxes = [];

	function getRandomRgb() {
		const x = Math.floor(Math.random() * 256);
		const y = Math.floor(Math.random() * 256);
		const z = Math.floor(Math.random() * 256);
		const bgColor = "rgb(" + x + "," + y + "," + z + ")";
		return bgColor;
	}

	for(let i = 0; i < num; i++){
		const box = document.createElement('div');
		
		box.style.background = getRandomRgb();
		box.style.width = (30 + 10 * i) +'px';
		box.style.height = (30 + 10 * i) +'px';
		box.textContent = 'BOX '+ (i + 1);
		boxes.push(box)
	}
	return root.append(...boxes); 
}

createBoxes(5)