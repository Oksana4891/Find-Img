// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
// https://pixabay.com/api/&q=cat&page=1$per_page=5&key=14644846-07a6d79481414866d9d75e37a

const URL = 'https://pixabay.com/api/';
const key = '14644846-07a6d79481414866d9d75e37a';

export default {
  page: 1,
  query: "",
  fetchImg() {
    const request =
      URL +
      `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=6&key=${key}`;
    return fetch(request)
      .then(response => response.json())
      .then(parsedResponse => {
          this.incrementPage();
       return parsedResponse.hits;
      });
  },
  incrementPage() {
    this.page += 1;
  },
  set searchQuery (query){
      this.query=query;
  },

  get searchQuery(){
      return this.query;
  },
  resetPage (){
    this.page = 1;
  }
};
