import axios from 'axios';

// const BASE_URL = 'https://pixabay.com/api/';
// const KEY = '27724892-827ddf08d8a030d9df862d5fb';


class ImageApi {
  constructor() {
    this.options = {
      params: {
        key: '25182566-6d97045846fa1b6cae2a84492',
        q: '',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 39,
      },
    };
  }

  async getPictures() {
    const response = await axios.get('https://pixabay.com/api/', this.options);
    this.incrementPage();
    return response;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
export default new ImageApi();

