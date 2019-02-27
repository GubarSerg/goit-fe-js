"use strict";

/*
  Реализуйте форму фильтра товаров в каталоге и список отфильтрованных товаров.
  Используйте шаблонизацию для создания карточек товаров.
  
  Есть массив объектов (дальше в задании), каждый из которых описывает 
  ноутбук с определенными характеристиками.
  
  Поля объекта по которым необходимо производить фильтрацию: size, color, release_date.
  Поля объекта для отображения в карточке: name, img, descr, color, price, release_date.
    
  Изначально есть форма с 3-мя секциями, состоящими из заголовка и группы 
  чекбоксов (разметка дальше в задании). После того как пользователь выбрал 
  какие либо чекбоксы и нажал кнопку Filter, необходимо собрать значения чекбоксов по группам. 
  
  🔔 Подсказка: составьте объект формата
      const filter = { size: [], color: [], release_date: [] }
    
  После чего выберите из массива только те объекты, которые подходят 
  под выбраные пользователем критерии и отрендерите список карточек товаров.
  
  🔔 Каждый раз когда пользователь фильтрует товары, список карточек товаров очищается, 
      после чего в нем рендерятся новые карточки товаров, соответствующих текущим критериям фильтра.
*/


//==================================================================//
const form = document.querySelector(".js-form");
const result = document.querySelector(".result");
const source = document.querySelector("#laptop").innerHTML.trim();
const clearBtn = document.querySelector('[type="reset"]');


form.addEventListener("submit", filterOnClick);
clearBtn.addEventListener("click", ClearOnClick);

function filterOnClick(evt) {
  evt.preventDefault();
  clearResult();
  const cards = createFilteredCards(selectedCheckboxes ());
  cards.length !== 0 ? renderLaptops(cards) : alert('Not found');
}

function ClearOnClick() {
  clearResult();
}

function selectedCheckboxes () {

  const checkedArray = Array.from(document.querySelectorAll("input[type=checkbox]:checked"));
  const filter = { size: [], color: [], release_date: [] };

  checkedArray.forEach(item => {
    switch (item.name) {
      case "size":
        filter.size.push(+item.value);
        break;
      case "color":
        filter.color.push(item.value);
        break;
      case "release_date":
        filter.release_date.push(+item.value);
        break;
    }
  });
  return filter;
}

function createFilteredCards(obj) {
  const filteredCards = laptops.filter(laptop => {
    if (obj.size.length === 0 && obj.color.length === 0 && obj.release_date.length === 0) {
      return laptops;
    }
    if (obj.size.length === 0 && obj.color.length === 0) {
      return obj.release_date.includes(laptop.release_date);
    }
    if (obj.size.length === 0 && obj.release_date.length === 0) {
      return obj.color.includes(laptop.color);
    }
    if (obj.color.length === 0 && obj.release_date.length === 0) {
      return obj.size.includes(laptop.size);
    }
    if (obj.size.length === 0) {
      return obj.color.includes(laptop.color) && obj.release_date.includes(laptop.release_date);
    }

    if (obj.color.length === 0) {
      return obj.size.includes(laptop.size) && obj.release_date.includes(laptop.release_date);
    }

    if (obj.release_date.length === 0) {
      return obj.size.includes(laptop.size) && obj.color.includes(laptop.color);
    }
    if (obj.size.length !== 0 && obj.color.length !== 0 && obj.release_date.length !== 0) {
    return obj.color.includes(laptop.color) && obj.size.includes(laptop.size) && obj.release_date.includes(laptop.release_date);
    }
  });
   return filteredCards;
}



function renderLaptops(filter) {
  const template = Handlebars.compile(source);
  const markup = createResult(template, filter);
  result.insertAdjacentHTML("afterbegin", markup);
}

function createResult(template, filter) {
  return filter.reduce((acc, item) => acc + template(item), "");
}

function clearResult() {
  if (result.childNodes.length !== 0)
    while (result.firstChild) {
      result.removeChild(result.firstChild);
    }
}
//==================================================================//

const laptops = [
  {
    size: 13,
    color: "white",
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "gray",
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "black",
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "white",
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "gray",
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "black",
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "white",
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "gray",
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "black",
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  }
];
