import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const itemMarkup = createGaleryItem(galleryItems);
gallery.insertAdjacentHTML("beforeend", itemMarkup);

function createGaleryItem(items) {
  return items
    .map(({ preview, description, original }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class = "gallery__image"
            src="${preview}"            
            data-source="${original}"
            alt="${description}"/>
        </a>
      </div>`;
    })
    .join("");
}

gallery.addEventListener("click", onGalleryLinkClick);

function onGalleryLinkClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
	<img 
    src=${evt.target.dataset.source}            
    width = "800"
    height = "600"
  >`,
    {
      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );
  instance.show();

  document.addEventListener("keydown", closeModal);
  function closeModal(evt) {
    if (evt.code !== "Escape") {
      return;
    }
    instance.close();
  }
}
