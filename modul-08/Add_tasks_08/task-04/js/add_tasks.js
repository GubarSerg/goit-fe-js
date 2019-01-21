"use strict";

/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/
const btn = document.querySelector('.btn');
const labels = document.querySelectorAll('label');
const result = document.querySelector('.result');

btn.addEventListener('click', showResult);

	function showResult(event) {
		event.preventDefault();

		labels.forEach(function(item){
			if(item.children[0].checked){
				result.innerText =`Resalt : ${item.textContent.trim()}`;
			}
		})
	}
	// 
// radio.forEach(function(item){
// 	if(item.checked){
// 		alert(item.value);
// 	}
// })
// console.log(radio);


// document.addEventListener('DOMContentLoaded', () => {
// 	const btn = document.querySelector('.btn');
// 	const result = document.querySelector('.result');
// 	const options = document.querySelector('.options');

// 	btn.addEventListener('click', showResult);

// 	function showResult(event) {
// 		event.preventDefault();
// 		console.log(result.innerText);
// 	}

// })

// const form = document.querySelector('.question-form');
// form.addEventListener('click', handlerClick);
// function handlerClick ({target}) {
// 	const nodeName = target.nodeName;
// 	event.preventDefault();
	
// 	if(nodeName !== 'LABEL') return;
// 	console.log(target);
// }
// console.log(options);