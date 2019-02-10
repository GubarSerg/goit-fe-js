"use strict";

/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");
const API_URL = "https://api.github.com/users/";

form.addEventListener("submit", fetchUserData);

/*
  @param {FormEvent} evt
*/
function fetchUserData(evt) {
  evt.preventDefault();
  const userName = evt.target.children[0].value;
  fetch(API_URL + userName)
    .then(response => {
      if (response.ok) return response.json();

      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(data => {
      createEl(data)
    })
    .catch(error => {
      console.log(error);
    });
}

function createEl(obj) {
  const user = document.createElement('div');
  user.classList.add('user');
  const ava = document.createElement('div');
  ava.textContent = 'Avatar:';
  const img = document.createElement('img');
  const login = document.createElement('div');
  login.textContent = `User login: ${obj.login}`;
  const bio = document.createElement('div');
  bio.textContent = `bio: ${obj.bio}`;
  const publicRep = document.createElement('div');
  publicRep.textContent = `publicRep: ${obj.public_repos}`;
  
  img.setAttribute('src', obj.avatar_url);
  ava.appendChild(img);
  user.append(ava, login, bio, publicRep);
  result.appendChild(user);
}