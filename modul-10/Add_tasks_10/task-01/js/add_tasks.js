"use strict";

/*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");
const API_URL = "https://restcountries.eu/rest/v2/name/";


form.addEventListener("submit", fetchCountryData);

/*
  @param {FormEvent} evt
*/
function fetchCountryData(evt) {
  evt.preventDefault();
  const countryName = evt.target.children[0].value;
  fetch(API_URL + countryName)
    .then(response => {
      if (response.ok) return response.json();

      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(data => {
      console.log(data);
      createEl(data);
    })
    .catch(error => {
      console.log(error);
    });
}

function createEl(obj) {
  const country = document.createElement('div');
  country.classList.add('country');
  const name = document.createElement('div');
  name.textContent = `Country name: ${obj[0].name}`;
  const capital = document.createElement('div');
  capital.textContent = `Capital: ${obj[0].capital}`;
  const currency = document.createElement('div');
  currency.textContent = `Currency: ${obj[0].currencies[0].name}`;
  const flag = document.createElement('div');
  flag.textContent = 'Flag:';
  const img = document.createElement('img');
  img.setAttribute('src', obj[0].flag);
  flag.appendChild(img);
  country.append(name, capital, currency, flag);
  result.appendChild(country);
}