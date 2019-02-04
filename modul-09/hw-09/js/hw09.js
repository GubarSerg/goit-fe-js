"use strict";

/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

const wrap = document.querySelector(".stopwatch");
const clockFace = document.querySelector('.js-time');
const startBtn = document.querySelector('.js-start');
const lapBtn = document.querySelector('.js-take-lap');
const resetBtn = document.querySelector('.js-reset');
const lapFace = document.querySelector('.js-laps');
let lapNumber = 0;



const stopwatch = {
  startTime: null,
  deltaTime: null,
  timerId: null,
  isActive: false,
  isPaused: false,
  pauseTime: 0,


  start() {
    if (!this.isActive) {
      this.isActive = true;
      this.startTime = Date.now() - this.pauseTime;

      this.timerId = setInterval(() => {
        const currentTime = Date.now();
        this.deltaTime = currentTime - this.startTime;
        const time = new Date(this.deltaTime);
        updateClockface(time);
      }, 100);
    } else {
      this.isActive = false;
      clearInterval(this.timerId);
      this.timerId = null;
      this.pauseTime = this.deltaTime;
    };
    if (this.isActive && !this.isPaused) {
      this.isPaused = true;
      startBtn.textContent = 'Paused';
    }
    if (!this.isActive && this.isPaused) {
      this.isPaused = false;
      startBtn.textContent = 'Continue';
    }
    startStatus();
  },

  lap() {
    makeLap();
  },

  reset() {
    this.isActive = false;
    this.isPaused = false;
    clearInterval(this.timerId);
    this.pauseTime = 0;
    resetStatus();
    lapNumber = 0;
  }
};


startBtn.addEventListener("click", stopwatch.start.bind(stopwatch));
lapBtn.addEventListener("click", stopwatch.lap.bind(stopwatch));
resetBtn.addEventListener("click", stopwatch.reset.bind(stopwatch));

function updateClockface(time) {
  clockFace.textContent = getFormattedTime(time);
}

function makeLap() {
  addLaps();
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


function resetStatus() {
  resetBtn.disabled = true;
  lapBtn.disabled = true;
  clockFace.textContent = `00:00.0`;
  startBtn.textContent = 'START';
  while (lapFace.firstChild) {
    lapFace.removeChild(lapFace.firstChild);
  }
  startBtn.classList.remove("active");
  startBtn.classList.remove("paused");
  resetBtn.classList.remove("reset");
  lapBtn.classList.remove("blink");
}

function startStatus() {
  resetBtn.disabled = false;
  lapBtn.disabled = false;
  resetBtn.classList.add("reset");
  if (startBtn.classList.contains("active")) {
    startBtn.classList.remove("active");
    startBtn.classList.toggle("paused");
  }
  if (startBtn.classList.contains("paused")) {
    lapBtn.setAttribute("disabled", "true");
  }
  startBtn.classList.add("active");
  lapBtn.classList.toggle("blink");
}

function addLaps(){
  lapNumber ++;
  const lap = document.createElement('li');
  lap.textContent =`Lap ${lapNumber} ` + clockFace.textContent;
  lapFace.insertAdjacentElement('afterbegin', lap);
}