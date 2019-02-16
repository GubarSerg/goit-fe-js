"use strict";

/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/

//---------------------------------const-----------------------

const url = 'https://test-users-api.herokuapp.com/users/';
const userIdList = document.querySelector('.id');
const userNameList = document.querySelector('.name');
const userAgeList = document.querySelector('.age');
const result = document.querySelector('.result');

const getUserIDInput = document.querySelector('.get-user-input-id')
const addUserNameInput = document.querySelector('.add-user-input-name')
const addUserAgeInput = document.querySelector('.add-user-input-age')
const removeUserIDInput = document.querySelector('.remove-user-input-id')
const updateUserIDInput = document.querySelector('.update-user-input-id')
const updateUserNameInput = document.querySelector('.update-user-input-name')
const updateUserAgeInput = document.querySelector('.update-user-input-age')


const formAllUsers = document.querySelector('.get-all-users');
const formUserById = document.querySelector('.get-users-by-id');
const formAddUser = document.querySelector('.add-user');
const formRemoveUser = document.querySelector('.remove-user');
const formUpdateUser = document.querySelector('.update-user');


//----------------------Lisener-----------------------------
formAllUsers.addEventListener('submit', getAllUsersOnClick);
formUserById.addEventListener('submit', getUserByIdOnClick);
formAddUser.addEventListener('submit', addUserOnClick);
formRemoveUser.addEventListener('submit', removeUserOnClick);
formUpdateUser.addEventListener('submit', updateUserOnClick);

//----------------------Get ALL Users-----------------------------
function getAllUsersOnClick(evt) {
  evt.preventDefault();
  resultReset();
  getAllUsers();
}

function getAllUsers() {
  fetchAllUsers()
    .then(users => showUsers(users))
    .catch(error => console.log(error));
}

function fetchAllUsers() {
  return fetch(url)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(response.statusText);
    })
    .then(base => base.data);
}

//----------------------Get User By ID-----------------------------

function getUserByIdOnClick(evt) {
  evt.preventDefault();
  const userID = getUserIDInput.value;
  resultReset();
  getUserById(userID);
  evt.target.reset();
}

function getUserById(id) {
  fetchUserById(id)
    .then(user => showUsers([user]))
    .catch(error => console.log(error));
}

function fetchUserById(id) {
  return fetch(url + id)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(response.statusText);
    })
    .then(content => content.data);
}
//----------------------Add User-----------------------------

function addUserOnClick(evt) {
  evt.preventDefault();
  resultReset();
  const name = addUserNameInput.value;
  const age = addUserAgeInput.value;
  addUser(name, age);
  evt.target.reset();
}

function addUser(name, age) {
  fetchAddUser(name, age)
    .then(user => {
      const id = user._id;
      return {
        id,
        ...user
      }
    })
    .then(user => showUsers([user]))
    .catch(error => console.log(error));
}

function fetchAddUser(name, age) {
  return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        age
      })
    })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(response.statusText);
    })
    .then(content => content.data);
}
//---------------------------Remove User By ID-------------------
function removeUserOnClick(evt) {
  evt.preventDefault();
  const id = removeUserIDInput.value;
  resultReset();
  removeUser(id);
  evt.target.reset();
}

function removeUser(id) {
  fetchRemoveUser(id)
    .then(user => alert(`${user.name} has been successful deleted`))
    .catch(error => console.log(error))
}

function fetchRemoveUser(id) {
  return fetch(url + id, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(content => content.data);
}

//---------------------------Update User-----------------------

function updateUserOnClick(evt) {
  evt.preventDefault();
  resultReset();
  const id = updateUserIDInput.value;
  const name = updateUserNameInput.value;
  const age = updateUserAgeInput.value;
  updateUser(id, {
    name,
    age
  });
  evt.target.reset();
}

function updateUser(id, {
  name,
  age
}) {
  fetchUpdateUser(id, {
      name,
      age
    })
    .then(user => showUsers([user]))
    .catch(error => console.log(error));
}

function fetchUpdateUser(id, {
  name,
  age
}) {
  return fetch(url + id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        age
      })
    })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(response.statusText);
    })
    .then(content => content.data);
}

//---------------------------Create result-----------------------
function showUsers(users) {
  users.forEach(item => createElement(item));
}

function createElement({
  id,
  name,
  age
}) {
  const userId = document.createElement('li');
  userId.classList.add("user-id");
  userId.textContent = id;
  userIdList.appendChild(userId);

  const userName = document.createElement('li');
  userName.classList.add("user-name");
  userName.textContent = name;
  userNameList.appendChild(userName);

  const userAge = document.createElement('li');
  userAge.classList.add("user-age");
  userAge.textContent = age;
  userAgeList.appendChild(userAge);
}
//-------------------------Create block--------------------


function resultReset() {
  if (userIdList.childNodes.length !== 0 && userNameList.childNodes.length !== 0 && userAgeList.childNodes.length !== 0) {
    while (userIdList.firstElementChild && userNameList.firstElementChild && userAgeList.firstElementChild) {
      userIdList.removeChild(userIdList.firstElementChild);
      userNameList.removeChild(userNameList.firstElementChild);
      userAgeList.removeChild(userAgeList.firstElementChild);
    }
  }
}