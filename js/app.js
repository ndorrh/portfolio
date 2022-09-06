/* eslint-disable no-constant-condition */
const hamburger = document.querySelector('.hamburger-menu');
const closeBtn = document.querySelector('.closed');
const navList = document.querySelector('.navlist');
const logo = document.querySelector('.logo');
const widerScreenWidth = window.matchMedia('(max-width: 768px)');

const menuOpen = () => {
  navList.style.display = 'none';
  navList.style.display = 'block';
  closeBtn.style.display = 'block';
  hamburger.style.display = 'none';
  logo.style.display = 'none';
};

const menuClose = () => {
  if (widerScreenWidth.matches) {
    navList.style.display = 'block';
    navList.style.display = 'none';
    closeBtn.style.display = 'none';
    hamburger.style.display = 'block';
    logo.style.display = 'block';
  }
};

hamburger.addEventListener('click', menuOpen);

closeBtn.addEventListener('click', menuClose);

navList.addEventListener('click', menuClose);