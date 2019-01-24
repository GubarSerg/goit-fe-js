'use strict'

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
  чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
  аналогичный заданию выше.
  
  При создании экземпляра конструктор получает:
    - items - список элементов для preview
    - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
    - defaultActiveItem - номер активного элемента preview по умолчанию
    
  Тогда создание экземпляра будет выглядеть следующим образом.
*/

class Gallery {
    constructor({
        items,
        parentNode,
        defaultActiveItem
    }) {
        this.items = items;
        this.parentNode = parentNode;
        this.defaultActiveItem = defaultActiveItem;
        this.gallery = this.createPreviewGallery();
        this.fullviewImg = this.createFullview();
    }

    createGallery() {
        this.gallery.addEventListener('click', this.fullView.bind(this));
        this.gallery.addEventListener("click", this.isActive.bind(this));
        this.parentNode.append(this.fullviewImg, this.gallery);
    }

    createPreviewImg({
        preview = "",
        fullview = "",
        alt = "",
    }) {
        const listItem = document.createElement('li');

        const image = document.createElement('img');
        image.setAttribute("src", preview);
        image.setAttribute("data-fullview", fullview);
        image.setAttribute("alt", alt);

        listItem.appendChild(image);
        return listItem;
    }

    createPreviewGallery() {
        const list = document.createElement('ul');
        list.classList.add('preview');
        const previewItems = this.createPreview(this.items);
        previewItems[0].firstChild.classList.add('isActive');
        list.append(...previewItems);
        return list;
    }
    createPreview(items) {
        return items.map(item => this.createPreviewImg(item));
    }

    createFullviewImg({
        fullview = "",
        alt = "",
    }) {
        const fullImg = document.createElement('img');
        fullImg.setAttribute('src', fullview);
        fullImg.setAttribute('alt', alt);
        return fullImg;
    }

    createFullview() {
        const fullview = document.createElement('div');
        fullview.classList.add('fullview');
        fullview.appendChild(this.createFullviewImg(this.items[this.defaultActiveItem]));
        return fullview;
    }

    fullView({
        target
    }) {
        if (target.nodeName !== 'IMG') return;
        this.fullviewImg.firstElementChild.src = target.dataset.fullview;
        this.fullviewImg.firstElementChild.alt = target.alt;
    }

    isActive({
        target
    }) {
        if (target.nodeName !== "IMG") return;
        this.gallery.childNodes.forEach(li => {
            if (li.firstChild !== target) {
                li.firstChild.classList.remove("isActive");
            } else {
                li.firstChild.classList.add("isActive");
            }
        });
    }
}

const newGallery = new Gallery({
    items: galleryItems,
    parentNode: document.querySelector('.image-gallery'),
    defaultActiveItem: 0
});



addGalleryBtn.addEventListener('click', addGallery);

function addGallery() {
    newGallery.createGallery();
}
/* Далее плагин работает в автономном режиме */