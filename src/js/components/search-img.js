import refs from '../utils/refs';
import pixabayApi from '../services/pixabayApi';
import refreshMenu from '../components/refreshMenu';
import imageItem from '../templates/imageItem.hbs';
import { error, infoNoEnter, infoNoFind } from '../utils/pnotify';
import { showSpinner, hiddenSpinner } from '../utils/spinner';

refs.form.addEventListener('submit', searchFormSubmitHandler);
refs.leadMore.addEventListener('click', searchMoreImgButton);

function searchFormSubmitHandler(event) {
  event.preventDefault();
  showSpinner();
  pixabayApi.resetPage();
  clearImageItem();
  const inputValue = event.currentTarget.elements.query.value;

  if (inputValue === '') {
    hiddenSpinner();
    infoNoEnter();
    return;
  } else {
    pixabayApi.searchQuery = inputValue;
    pixabayApi
      .fetchImg()
      .then(img => {
        if (img.length === 0) {
          infoNoFind();
          hiddenSpinner();
        }
        hiddenSpinner();
        refreshMenu(img, refs.imageList, imageItem);
      })
      .catch(err => error());
  }
}

function searchMoreImgButton() {
  showSpinner();
  if (pixabayApi.query === '') {
    hiddenSpinner();
    return;
  } else {
    pixabayApi.fetchImg().then(img => {
      hiddenSpinner();
      refreshMenu(img, refs.imageList, imageItem);
      refs.leadMore.scrollIntoView(false);
    });
  }
}

function clearImageItem() {
  refs.imageList.innerHTML = '';
}
