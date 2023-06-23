import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".js-gallery");

// list.insertAdjacentHTML('beforeend', createMarkupItems(cars));
// [...document.querySelectorAll('.js-add')].forEach(item => item.addEventListener('click', handlerClickCarBTN))
// list.addEventListener('click', handlerClickCar);

list.insertAdjacentHTML("beforeend", createMarkupItems(arr));
// list.addEventListener("click", handlerClickCarBTN);
list.addEventListener("click", handlerClickImg);

// function handlerClickCarBTN(evt) {
//   const cardItem = evt.target.closest(".js-item");
//   if (evt.target.classList.contains("js-add")) {
//     const obj = findCarItem(cardItem);
//     const instance = basicLightbox.create(createAddToCartMarkup(obj));
//     evt.stopImmediatePropagation();
//     // evt.stopPropagation()
//     instance.show();
//   }
// }

function handlerClickImg(evt) {
  const imgItem = evt.target.closest(".js-item");
  if (imgItem) {
    //evt.target !== evt.currentTarget
    const obj = findImgItem(imgItem);
    const instance = basicLightbox.create(createDetailInfoMarkup(obj));
    instance.show();
  }
}

function findImgItem(item) {
  const { id } = item.dataset;
  const currentImg = photos.find(({ id: imgId }) => imgId === Number(id));
  return currentImg;
}

function createAddToImgMarkup({ img } = {}) {
  return `<div class="modal">
    <img src="${img}" alt="${photo}" class="item-img"/>
  </div>`;
}

function createDetailInfoMarkup({
  id,
  photo,
  img = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",
} = {}) {
  return `<div data-id="${id}" class="modal">
    <img src="${img}" alt="${photo}" class="item-img"/>
  </div>`;
}

function createMarkupItems(arr) {
  return arr
    .map(
      ({ id, img, photo }) => `
<li data-id="${id}" class="item js-item">
    <img src="${img}" alt="${photo}" class="item-img"/>
</li>`
    )
    .join("");
}

console.log(galleryItems);
