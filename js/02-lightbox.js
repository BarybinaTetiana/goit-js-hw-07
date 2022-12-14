import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function imagesList() {
  return galleryItems
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
	<a class="gallery__link" href="${original}">
	  <img
		class="gallery__image"
		src="${preview}"
		data-source="${original}"
		alt="${description}"
	  />
	</a>
  </div>`
    )
    .join("");
}
gallery.insertAdjacentHTML("beforeend", imagesList());

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
