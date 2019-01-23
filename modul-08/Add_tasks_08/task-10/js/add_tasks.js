"use strict";

/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

document.addEventListener("DOMContentLoaded", () => {
	const list = document.querySelector('.js-menu');
	const links = document.querySelectorAll('.menu-link')

	list.addEventListener('click', addActive);

	function addActive({
		target
	}) {
		event.preventDefault();

		if (target.nodeName !== 'A') return;

		links.forEach(link => {
			if (link !== target) {
				link.classList.remove('active')
			} else {
				link.classList.add('active')
			}
		})
	}
})