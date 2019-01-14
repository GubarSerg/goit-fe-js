"use strict";
/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/


const movieBase = [{
    src: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
    title: 'The Shawshank Redemption',
    description: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
    date: 'Released: 1994-10-14',
    raiting: 'Rating: 9.3'
  },

  {
    src: "http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
    title: 'The Godfather',
    description: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    date: 'Released: 1972-03-14',
    raiting: 'Rating: 8.6'
  },

  {
    src: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yPisjyLweCl1tbgwgtzBCNCBle.jpg",
    title: 'Schindler\'s List',
    description: 'The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.',
    date: 'Released: 1993-11-30',
    raiting: 'Rating: 8.5'
  },

  {
    src: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sOHqdY1RnSn6kcfAHKu28jvTebE.jpg",
    title: 'The Green Mile',
    description: 'A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people\'s ailments. When the cell block\'s head guard, Paul Edgecomb, recognizes Coffey\'s miraculous gift, he tries desperately to help stave off the condemned man\'s execution.',
    date: 'Released: 1999-12-10',
    raiting: 'Rating: 8.7'
  },
]

let elements = [];

movieBase.forEach(mov => {
  const el = createMovieCard(mov);
  elements.push(el)
})
const movieCatalog = document.body.querySelector('.notes-grid')
console.log(movieCatalog);
const movie = createMovieCard({
  src: "http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
  title: 'The Godfather',
  description: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
  date: 'Released: 1972-03-14',
  raiting: 'Rating: 8.6'
});

movieCatalog.append(...elements);
console.log(movie);

function createMovieCard({
  src,
  title,
  description,
  date,
  raiting
}) {
  const movie = document.createElement('div');
  movie.classList.add('movie');

  const movieImage = document.createElement('img');
  movieImage.classList.add('movie__image');
  movieImage.setAttribute("src", src);
  movieImage.setAttribute("alt", "movie image");

  const movieBody = document.createElement('div');
  movieBody.classList.add('movie__body');

  const movieTitle = document.createElement('h2');
  movieTitle.classList.add('movie__title');
  movieTitle.textContent = title;

  const movieDescription = document.createElement('p');
  movieDescription.classList.add('movie__description');
  movieDescription.textContent = description;

  const movieDate = document.createElement('p');
  movieDate.classList.add('movie__date');
  movieDate.textContent = date;

  const movieRating = document.createElement('p');
  movieRating.classList.add('movie__rating');
  movieRating.textContent = raiting;

  movie.append(movieImage, movieBody)
  movieBody.append(movieTitle, movieDescription, movieDate, movieRating)

  return movie
}