import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import {refs} from './refs'

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

export function generateMarkupGallery(data) {
  const imgCards = data.hits
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <div class="photo-card">
          <a class="photo-card-link" href="${largeImageURL}">
            <img class="card-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <div class="info">
              <p class="info-item"><b>Likes</b><span class ="info-num">${likes}</span></p>
              <p class="info-item"><b>Views</b><span class ="info-num">${views}</span></p>
              <p class="info-item"><b>Comments</b><span class ="info-num">${comments}</span></p>
              <p class="info-item"><b>Downloads</b><span class ="info-num">${downloads}</span></p>
            </div>
      </div>`,
    )
    .join('');

  refs.gallery.insertAdjacentHTML('beforeend', imgCards);

  hidePreloader();
  lightbox.refresh();

  if (data.hits.length < 40) {
    return hideLoadBtn;
  }
  showLoadBtn();
}

export function hideLoadBtn() {
  refs.loadBtn.classList.add('is-hidden');
}

export function showLoadBtn() {
  refs.loadBtn.classList.remove('is-hidden');
}

export function resetContent() {
  refs.gallery.innerHTML = '';
  hideLoadBtn();
}
