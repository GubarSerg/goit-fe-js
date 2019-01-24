"use strict";
/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpg" data-fullview="img/fullview-1.jpg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpg" data-fullview="img/fullview-2.jpg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpg" data-fullview="img/fullview-3.jpg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [{
    preview: "img/preview-1.jpg",
    fullview: "img/fullview-1.jpg",
    alt: "alt text 1"
  },
  {
    preview: "img/preview-2.jpg",
    fullview: "img/fullview-2.jpg",
    alt: "alt text 2"
  },
  {
    preview: "img/preview-3.jpg",
    fullview: "img/fullview-3.jpg",
    alt: "alt text 3"
  },
  {
    preview: "img/preview-4.jpg",
    fullview: "img/fullview-4.jpg",
    alt: "alt text 4"
  },
  {
    preview: "img/preview-5.jpg",
    fullview: "img/fullview-5.jpg",
    alt: "alt text 5"
  },
  {
    preview: "img/preview-6.jpg",
    fullview: "img/fullview-6.jpg",
    alt: "alt text 6"
  }
];

// ====================================================================================================

const imageGallery = document.body.querySelector(".image-gallery");
const gallery = createPreviewGallery();
const fullviewImg = createFullview();
const addGalleryBtn = createButton();

imageGallery.append(fullviewImg, gallery, addGalleryBtn);

// ==================CreatePreviewItem======================

function createPreviewImg({
  preview = "",
  fullview = "",
  alt = ""
}) {
  const listItem = document.createElement("li");

  const image = document.createElement("img");
  image.setAttribute("src", preview);
  image.setAttribute("data-fullview", fullview);
  image.setAttribute("alt", alt);

  listItem.appendChild(image);
  return listItem;
}

// ==================CreatePreviewGallery======================

function createPreviewGallery() {
  const list = document.createElement("ul");
  list.classList.add("preview");
  const previewItems = createPreview(galleryItems);
  previewItems[0].firstChild.classList.add('isActive');
  list.append(...previewItems);
  return list;
}

function createPreview(galleryItems) {
  return galleryItems.map(item => createPreviewImg(item));
}

// ==================CreateFullImg======================

function createFullviewImg({
  fullview = "",
  alt = ""
}) {
  const fullImg = document.createElement("img");
  fullImg.setAttribute("src", fullview);
  fullImg.setAttribute("alt", alt);
  return fullImg;
}

// ==================CreateFullGallery======================

function createFullview() {
  const fullview = document.createElement("div");
  fullview.classList.add("fullview");
  fullview.appendChild(createFullviewImg(galleryItems[0]));
  return fullview;
}

// ==================CreateButton======================

function createButton() {
  const btn = document.createElement("button");
  btn.classList.add("myButton");
  btn.innerText = "Add Gallery";
  return btn;
}

// ======================addEventListener=============================

gallery.addEventListener("click", fullView);

function fullView({
  target
}) {
  if (target.nodeName !== "IMG") return;
  fullviewImg.firstElementChild.src = target.dataset.fullview;
  fullviewImg.firstElementChild.alt = target.alt;
}

gallery.addEventListener("click", isActive);

function isActive({
  target
}) {
  if (target.nodeName !== "IMG") return;
  gallery.childNodes.forEach(li => {
    if (li.firstChild !== target) {
      li.firstChild.classList.remove("isActive");
    } else {
      li.firstChild.classList.add("isActive");
    }
  });
}

//=======================================================================