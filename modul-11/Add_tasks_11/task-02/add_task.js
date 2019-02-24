"use strict";

/*
  К pen уже подключен Handlebars.
  Используйте встроенные шаблоны и метод Handlebars.compile
  
  Создайте шаблон поста указаного во вкладке HTML.
  Отрендерите список постов в DOM по данным из массива posts.
  
  Если в объекте поле isFav=true, в посте должна быть 
  разметка иконки избранного поста, в противном случае
  разметки иконки быть не должно.
  
  Используйте эту иконку для фона:
  https://image.flaticon.com/icons/svg/290/290413.svg
*/

const posts = [
  {
    title: "Phasellus volutpat metus",
    text:
      "Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Ut leo.",
    isFav: true
  },
  {
    title: "Nulla consequat massa",
    text:
      "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    isFav: false
  },
  {
    title: "In enim justo",
    text:
      "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Suspendisse eu ligula. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.",
    isFav: true
  },
  {
    title: "Vestibulum ante ipsum",
    text:
      "Vestibulum suscipit nulla quis orci. Praesent venenatis metus at tortor pulvinar varius. Nulla sit amet est.",
    isFav: false
  }
];


const root = document.querySelector('#root');
const source = document.querySelector('#tamplate').innerHTML.trim();
const template = Handlebars.compile(source);

const markup = posts.reduce((acc, post) => acc + template(post), '');

console.log(markup);
root.insertAdjacentHTML('afterbegin', markup);