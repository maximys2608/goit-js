import '../css/style.css';
import apiService from './apiService.js';
import galleryItem from '../template/galleryItem.hbs';
import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import refs from './refs.js';

PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';
PNotify.defaults.delay = 2500;
const { API_KEY, API_URL } = apiService;
let page = 1;
let perPage = 12;

const { searchForm, serchInput, ul, btn } = refs;

const getListByName = async name => {
  const result = await fetch(
    `${API_URL}?image_type=photo&orientation=horizontal&q=${name}&page=${page}&per_page=${perPage}&key=${API_KEY}`,
  );
  return await result.json();
};

const createList = photoList => {
  return photoList.reduce((acc, photo) => {
    return acc + galleryItem(photo);
  }, '');
};

const renderList = async () => {
  page = 1;
  const { hits } = await getListByName(serchInput.value);
  if (hits <= 0) {
    PNotify.error('There is nothing for your request');
  } else {
    ul.innerHTML = createList(hits);
    btn.style.display = 'block';
  }
};

const loadeMore = async () => {
  page += 1;
  const { hits } = await getListByName(serchInput.value);
  ul.insertAdjacentHTML('beforeend', createList(hits));
  window.scrollTo(0, document.body.scrollHeight);
  window.scrollTo({
    behavior: 'smooth',
  });
};

searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  renderList();
});

btn.addEventListener('click', () => {
  loadeMore();
});
