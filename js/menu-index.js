const menuBtnOpen = document.querySelector('.js-open-menu');
const menuBtnClose = document.querySelector('.js-close-menu');
const menu = document.querySelector('.js-menu');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-open');
}