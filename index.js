import setCurrentDate from './modules/date.js';
import setupSectionListeners from './modules/displaySection.js';
import LibraryApp from './modules/script.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

setCurrentDate();
setupSectionListeners();

const libraryApp = new LibraryApp();
const button = document.querySelector('#add-book');
button.addEventListener('click', (e) => {
  libraryApp.handleAddBook(e);
});

const currentDate = document.querySelector('.date');
setInterval(() => {
  const d = DateTime.now();
  currentDate.innerHTML = d.toLocaleString(DateTime.DATETIME_FULL);
}, 1000);