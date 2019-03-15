'use strict'

import * as storage from './services/localStorage'
import "./css/styles.css";
import api from './services/fetchLinks';
import cardTemplate from "./templates/card.hbs";
import checkURL from './services/urlValidator';



const result = document.querySelector('ul');
const input = document.querySelector('input');
const form = document.querySelector('form');

const fetchedLinks = getFromStorage();

form.addEventListener('submit', addLink);
result.addEventListener("click", deleteCard);

updateView();

function addLink(ent) {
    ent.preventDefault();
    link(input.value);
}


function link(url) {
    if(!checkURL(url)) {
        return alert ('URL указан неверно!')
    }
    api(url).then(response => {
        const data = response.data;
        const uniqLink = checkLink(data);
        if (uniqLink) {
            alert("Такая закладка уже есть!");
            form.reset();
            return
        }
        fetchedLinks.push(data);
        refreshStorage();
        updateView();
        form.reset();
        
    }).catch(() => alert("Такого сайта нет!"));
}

function refreshStorage() {
    storage.set(fetchedLinks)
}

function updateView() {
    result.innerHTML = createMarkup();
}

function createMarkup() {
    return fetchedLinks.reduce((acc, {
        url,
        title,
        description,
        image
    }) => {
        return acc + cardTemplate({
            url,
            title,
            description,
            image
        });
    }, '');
}

function getFromStorage() {
    return storage.get('site-links');
}

function checkLink(data) {
    return getFromStorage().some(item => item.url === data.url);
}

function deleteCard(evt) {
    if (evt.target.nodeName !== "BUTTON") return;
    const url = evt.target.parentNode.children[1].innerHTML
    deleteUrl(url);
    updateView();
}

function deleteUrl(url) {
    fetchedLinks.forEach((item, idx, arr) => {
        if (item.url === url) {
            arr.splice(idx, 1);
        }
    });
    refreshStorage();
}