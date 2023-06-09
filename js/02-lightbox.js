import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const items = [];

galleryItems.forEach((element) => {
  const containerImages = document.createElement("div");
  containerImages.className = "gallery__item";
  const images = document.createElement("img");
  images.className = "gallery__image";
  images.setAttribute("data-source", element.original);
  images.alt = element.description;
  images.src = element.preview;
  const linkOfImages = document.createElement("a");
  linkOfImages.className = "gallery__link ";
  linkOfImages.href = element.original;

  containerImages.append(linkOfImages);
  linkOfImages.append(images);
  items.push(containerImages);
});
gallery.append(...items);

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
