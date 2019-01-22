"use strict";

/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

const message = document.querySelector(".message");

const currentValue = document.querySelector(".input-value");
const input = document.querySelector(".input");

input.addEventListener("keyup", getCurrentValue);

function getCurrentValue(event) {
  currentValue.innerText = `Current input value: ${event.target.value}`;
}

input.addEventListener("focus", onFocus);
function onFocus() {
  message.innerText = "Input is in focus!";
}

input.addEventListener("blur", offFocus);
function offFocus() {
  message.innerText = "";
}

console.log(currentValue);
