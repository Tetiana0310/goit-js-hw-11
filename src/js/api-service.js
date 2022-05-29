import axios from "axios";

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchCards() {
    const params = {
      key: '27724892-827ddf08d8a030d9df862d5fb',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    }
    return await axios.get(`https://pixabay.com/api/?key=27724892-827ddf08d8a030d9df862d5fb&q=${this.searchQuery}
    &image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`,)
      .then(object => {
        this.pageIncrement()
        return {
          totalHits: object.data.totalHits,
          hits: object.data.hits,
        }
      })
      .catch(error => console.log('error', error));
  }

  resetPage() {
    this.page = 1;
  }

  pageIncrement() {
    this.page += 1;
  }
  nowPage() {
    return this.page - 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}