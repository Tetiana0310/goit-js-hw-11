import { searchImgByQuery } from './js/pixabay-api.js';
import {
    getPicture,
    resetContent,
    showLoader,
    hideLoader
} from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
let pages = null;

form.addEventListener('submit', onSearch);

function onSearch(event) {
    event.preventDefault();

    const queryInput = event.currentTarget.elements.searchQuery;  // Враховуючи ім'я "searchQuery"

    if (!queryInput) {
        iziToast.error({
            message: 'Поле введення не знайдено!',
            position: 'topRight',
        });
        return;
    }

    const query = queryInput.value.trim();

    if (!query) {
        iziToast.error({
            message: 'Будь ласка, введіть пошуковий запит!',
            position: 'topRight',
        });
        return;
    }

    resetContent(gallery);
    showLoader();

    searchImgByQuery(query)
        .then((data) => {
            hideLoader();
            if (data.hits.length === 0) {
                iziToast.warning({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
                return;
            }
            getPicture(data.hits);  // Виклик функції для рендерингу зображень
        })
        .catch(error => {
            hideLoader();
            iziToast.error({
                message: `Помилка: ${error.message}`,
                position: 'topRight',
            });
            console.log(error);
        });
}
