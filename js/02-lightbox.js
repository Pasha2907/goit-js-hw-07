import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const itemMarkup = createGaleryItem(galleryItems);
gallery.insertAdjacentHTML("beforeend", itemMarkup);

function createGaleryItem(items) {
  return items
    .map(({ preview, description, original }) => {
      return `
        <a class="gallery__link" href="${original}">
          <img class = "gallery__image"
            src="${preview}"            
            alt="${description}"/>
        </a>`;
    })
    .join("");
}

gallery.addEventListener("click", onGalleryLinkClick);

function onGalleryLinkClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
}
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
