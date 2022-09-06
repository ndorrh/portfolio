/* eslint-disable no-constant-condition */
const hamburger = document.querySelector('.hamburger-menu');
const closeBtn = document.querySelector('.closed');
const navList = document.querySelector('.navlist');
const logo = document.querySelector('.logo');

hamburger.addEventListener('click', () => {
  navList.style.display = 'none';
  navList.style.display = 'block';
  closeBtn.style.display = 'block';
  hamburger.style.display = 'none';
  logo.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  navList.style.display = 'block';
  navList.style.display = 'none';
  closeBtn.style.display = 'none';
  hamburger.style.display = 'block';
  logo.style.display = 'block';
});

navList.addEventListener('click', () => {
  navList.style.display = 'block';
  navList.style.display = 'none';
  closeBtn.style.display = 'none';
  hamburger.style.display = 'block';
  logo.style.display = 'block';
});
