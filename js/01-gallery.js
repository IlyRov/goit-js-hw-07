import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
`;

const galleryMarkup = galleryItems.map(createGalleryItem).join('');
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

// Lightbox functionality
galleryList.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.classList.contains('gallery__image')) {
    const source = event.target.dataset.source;
    const description = event.target.alt;

    const instance = basicLightbox.create(`
      <img src="${source}" alt="${description}" width="800" height="600">
    `);

    instance.show();
  }
});
