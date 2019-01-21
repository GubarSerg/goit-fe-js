"use strict";

/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

let num = 0;
 
const counter = document.querySelector('.button')
const count = function(){
  num ++;
  counter.innerHTML = num;
}
counter.addEventListener('click', count) 

console.log(counter);