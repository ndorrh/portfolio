const hamburger = document.querySelector('.hamburger-menu');
const closeBtn = document.querySelector('.closed');
const navList = document.querySelector('.navlist');
const logo = document.querySelector('.logo');

hamburger.addEventListener('click', function (){
    if(navList.style.display = 'none'){
        navList.style.display = 'block'
        closeBtn.style.display = 'block'
        hamburger.style.display = "none" 
        logo.style.display = "none" 
    }
})


