"use strict";

/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/


document.addEventListener('DOMContentLoaded', () => {
	const btnOpenModal = document.querySelector('[data-action="open-modal"]');
	const btnCloseModal = document.querySelector('[data-action="close-modal"]');
	const modalBackDrop = document.querySelector('.js-modal-backdrop');
	const modal = document.querySelector('.js-modal-backdrop');

	btnOpenModal.addEventListener('click', showModal);
	btnCloseModal.addEventListener('click', closeModal);
	modalBackDrop.addEventListener('click', handleBackDropClick);

	function handleBackDropClick(event) {
		if (this !== event.target) return;
		closeModal();
	}

	function showModal() {
		modal.classList.remove('modal-hidden');
	}

	function closeModal() {
		modal.classList.add('modal-hidden');
	}
	console.log(btnOpenModal);
	console.log(btnCloseModal);
	console.log(modal);
})