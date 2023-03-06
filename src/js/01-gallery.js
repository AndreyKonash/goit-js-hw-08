// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) =>
  `<a class='gallery__link'  href = "${original}">
        <img 
            class = "gallery__image"
            src = "${preview}"
            data-source= "${original}"
            alt = "${description}"
        />
    </a>`;
const galleryMarkup = galleryItems.map(createGalleryItem).join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  aptionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
