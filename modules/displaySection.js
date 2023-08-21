const bookDetails = document.querySelector('.section1');
const listLink = document.querySelector('.list');
const addBookForm = document.querySelector('.form-section');
const contactForm = document.querySelector('.contactUs');
const addLink = document.querySelector('.addnew');
const contactUsLink = document.querySelector('.contact');

const setupSectionListeners = () => {
  listLink.addEventListener('click', () => {
    addBookForm.classList.add('hideform');
    contactForm.classList.add('hideform');
    bookDetails.classList.remove('hideform');
  });

  addLink.addEventListener('click', () => {
    bookDetails.classList.add('hideform');
    contactForm.classList.add('hideform');
    addBookForm.classList.remove('hideform');
  });

  contactUsLink.addEventListener('click', () => {
    addBookForm.classList.add('hideform');
    bookDetails.classList.add('hideform');
    contactForm.classList.remove('hideform');
  });
};

export default setupSectionListeners;
