'use strict'

/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [{
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "http://placeimg.com/400/150/animals",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];

// function createCards(posts){
//   return posts.reduce(
//     (acc ,post) => acc.concat(createPostCard(post)),
//   []
//   );
// }

function createCards(posts){
  return posts.map(post => createPostCard(post));
}

const postCatalog = document.body.querySelector('.container');

const catalog = createCards(posts);
console.log(catalog);
postCatalog.append(...catalog);

function createPostCard({
  img = "",
  title = "",
  text = "",
  link = ""
}) {
  const post = document.createElement('div');
  post.classList.add('post');

  const postImage = document.createElement('img');
  postImage.classList.add('post__image');
  postImage.setAttribute("src", img);
  postImage.setAttribute("alt", "post image");

  const postBody = document.createElement('div');
  postBody.classList.add('post__body');

  const postTitle = document.createElement('h2');
  postTitle.classList.add('post__title');
  postTitle.textContent = title;

  const postDescription = document.createElement('p');
  postDescription.classList.add('post__description');
  postDescription.textContent = text;

  const postLink = document.createElement('a');
  postLink.classList.add('post__date');
  postLink.textContent = link;
  postLink.setAttribute("href", img);

  post.append(postImage, postBody);
  postBody.append(postTitle, postDescription, postLink);

  return post;
}

console.log(createCards(posts));