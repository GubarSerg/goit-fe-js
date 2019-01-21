"use strict";
/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/
document.addEventListener('DOMContentLoaded', () => {
	const input = document.querySelectorAll('input')
	const btn = document.querySelector('button')
	const result = document.querySelector('.result')


	btn.addEventListener('click', count)
	function count() {
		const sum = +input[0].value + +input[1].value;
		result.innerText = sum;
	}
})