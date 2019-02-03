"use strict";

/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Используйте возможности объекта Date для работы со временем.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 3.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const stopBtn = document.querySelector(".js-timer-stop");
const wrap = document.querySelector(".timer");

class Timer {
  constructor({ onTick }) {
    this.startTime = null;
    this.deltaTime = null;
    this.timerId = null;
    this.isActive = false;
    this.onTick = onTick;
  }

  start() {
    if (!this.isActive) {
      this.isActive = true;
      this.startTime = Date.now();

      this.timerId = setInterval(() => {
        const currentTime = Date.now();
        this.deltaTime = currentTime - this.startTime;
        const time = new Date(this.deltaTime);
        this.onTick(time);
      }, 100);
    }
  }

  stop() {
    this.isActive = false;
    clearInterval(this.timerId);
    this.timerId = null;
    this.startTime = null;
    this.deltaTime = 0;
  }
}

const timer = new Timer({
  onTick: updateClockface
});

startBtn.addEventListener("click", timer.start.bind(timer));
stopBtn.addEventListener("click", timer.stop.bind(timer));

function updateClockface(time) {
  clockface.textContent = getFormattedTime(time);
}


function getFormattedTime(time) {
  let min = addZero(time.getMinutes());
  let sec = addZero(time.getSeconds());
  let ms = Number.parseInt(time.getMilliseconds() / 100);
  return `${min}:${sec}.${ms}`;
}

function addZero(item) {
  if (String(item).length < 2) {
    item = "0" + item;
  }
  return item;
}

function setActiveBtn({ target }) {
  if (target.nodeName !== "BUTTON" || target.classList.contains("active")) {
    return;
  }

  startBtn.classList.remove("active");
  stopBtn.classList.remove("active");

  target.classList.add("active");
}
wrap.addEventListener("click", setActiveBtn);
