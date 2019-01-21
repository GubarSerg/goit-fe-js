"use strict";

/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/
document.addEventListener('DOMContentLoaded', () => {

  const list = document.querySelector('ul');

  list.addEventListener('click', showSrc);

  function showSrc(event) {
    if (event.target.nodeName !== 'IMG') return;
    alert(event.target.src);
  }
})