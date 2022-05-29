
import ApiService from "./js/api-service";
import { getPicture } from "./js/markup";
import { Notify } from 'notiflix/build/notiflix-notify-aio'

const apiService = new ApiService

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadBtn = document.querySelector('.load-more');

form.addEventListener('submit', onSearch);
loadBtn.addEventListener('click', onLoadBtn);

function onSearch(evt) {
  evt.preventDefault();
  resetContent()
  loadBtn.classList.add('is-hidden');
  apiService.resetPage();
  apiService.query = evt.currentTarget.elements.searchQuery.value;
 if (apiService.query.trim() === '') {
    Notify.failure('Please fill in the field');
    return;
  }
  apiService
    .fetchCards()
    .then(({ totalHits, hits }) => {
      pages = Math.ceil(totalHits / hits.length);
      if (hits.length === 0) {
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again',
        );
        return;
      }
      Notify.success(`Hooray! We found ${totalHits} images!`);
      getPicture(hits);
      loadBtn.classList.remove('is-hidden');
      if (pages === 1) {
        loadBtn.classList.add('is-hidden');
        onLastCards();
      }
    })
    .catch(error => console.log(error));
}

function resetContent() {
  gallery.innerHTML = '';
}
function onLastCards() {
        if (photosApiService.totalHits <= 40) {
    hideShowMoreBtn();
  Notify.info("We're sorry, but you've reached the end of search results");
    return;
  }
}
    function onLoadBtn() {
  apiService.fetchData().then(({ hits }) => {
    if (pages === apiService.nowPage()) {
      loadBtn.classList.add('is-hidden');
    }
    getPicture(hits);
  });
}