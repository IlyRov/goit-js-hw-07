// js/02-lightbox.js
import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>
`;

const galleryMarkup = galleryItems.map(createGalleryItem).join('');
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);



const lightbox = new SimpleLightbox('.gallery a', {
  captions: true, // This enables captions
  captionDelay: 250,
  captionSelector: "img",
  captionType: "attr",
});
