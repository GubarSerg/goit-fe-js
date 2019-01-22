"use strict";

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

const inputs = document.querySelector('.input-list');
inputs.addEventListener('blur', lostFocus, true);
function lostFocus({target}) {
	const inputDataLength = +target.dataset.length;
	const correctLength = target.value.length;
	if (inputDataLength === correctLength) {
	  target.classList.add('valid'); 
	  target.classList.remove('invalid');
	} else {
		target.classList.add('invalid');
		target.classList.remove('valid');
	};
}
