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

	labels.forEach(function (item) {
		if (item.children[0].checked) {
			result.innerText = `Resalt : ${item.textContent.trim()}`;
		}
	})
}
