
import imageApi from './js/api-service';
import { refs } from './js/refs';
import * as renderGallery from './js/markup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



refs.form.addEventListener('submit', onSearch);
refs.loadBtn.addEventListener('click', onLoadBtn);

async function onSearch(evt) {
  evt.preventDefault();

  imageApi.query = evt.currentTarget.elements.searchQuery.value;
  const response = await imageApi.fetchImages();
  generateMarkupPage(response);
}

async function onLoadBtn() {
  renderGallery.hideLoadBtn();
  

  const nextImgSet = await imageApi.fetchImages();
  renderGallery.generateMarkupGallery(nextImgSet);

  checkEndDataSet(nextImgSet);
  makeSmothScrollDown();
}

function checkEndDataSet(dataSet) {
  if (imageApi.page - 1 > dataSet.totalHits / 40) {
    const textWarning = document.createElement('p');
    textWarning.classList.add('end-gallery');
    textWarning.innerText = "We're sorry, but you've reached the end of search results.";
    refs.contentBottom.append(textWarning);

    renderGallery.hideLoadBtn();
  }
}

function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 1.5,
    behavior: 'smooth',
  });
}

function generateMarkupPage(data) {
  imageApi.resetPage();
  renderGallery.resetContent();
  smoothScroll();
  if (data.hits.length === 0) {
    return Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.',
    );
  }
  if (imageApi.query === '') {
    return Notify.warning('Please, enter your request');
  }
  if (data.total >= 1) {
    Notify.success(`Hooray! We found ${data.total} images.`);
  }

  renderGallery.generateMarkupGallery(data);
}