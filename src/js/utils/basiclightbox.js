import * as basicLightbox from 'basiclightbox';
import sryleBasicLightbox from '../../../node_modules/basiclightbox/dist/basicLightbox.min.css';
import refs from '../utils/refs';

refs.imageList.addEventListener(`click`, openLargeImage);

function openLargeImage(event) {
  if (!event.target.classList.contains('photo-card__img')) {
    return;
  }
  const largeImg = event.target.dataset.source;
  const instance = basicLightbox.create(
    `
  <img width="600" height="900" src="${largeImg}">
`,
  );
  instance.show();
  window.addEventListener('keydown', handleCloseModalEsc);
  function handleCloseModalEsc(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
    window.removeEventListener('keydown', handleCloseModalEsc);
  }
}
