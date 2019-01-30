"use strict";

/*
  Дан массив цветов и кнопки "Start" и "Stop". Сделайте так, чтобы после
  нажатия кнопки "Start", каждую секунду body менял цвет фона на случайное 
  значение из массива. 

  При нажатии на кнопку "Stop", изменении цвета фона должно останавливаться.
  
  Учтите что на кнопку Start могно нажать бесконечное количество раз,
  сделайте так чтобы пока изменение темы запушено, нажатие на кнопку
  Start не имело эффекта.
*/

const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');
const body = document.body;


const changerBodyColor = {
  id: null,
  isActive: false,

  start(callback) {
    console.log('start');
    if (!this.isActive) {
      this.isActive = true;
      this.id = setInterval(() => {
        callback()
      }, 1000);
    }
  },

  stop() {
    console.log('stop');
    this.isActive = false;
    clearInterval(this.id);
  },
};

function updateColor() {
  body.style.backgroundColor = colors[randomArrItem(colors)];
}

function randomArrItem(arr) {
  const min = 0;
  const max = arr.length - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

startBtn.addEventListener('click', changerBodyColor.start.bind(changerBodyColor, updateColor));
stopBtn.addEventListener('click', changerBodyColor.stop.bind(changerBodyColor));

