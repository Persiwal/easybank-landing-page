const hamburger = document.querySelector('.header__hamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    header.classList.toggle('open'); // toggle hamburger menu
    overlay.classList.toggle('fade-out');
    body.classList.toggle('no-scroll');
})


window.addEventListener('resize', () => {
    if(window.innerWidth > 899) {
        header.classList.remove('open'); // toggle hamburger menu
        overlay.classList.add('fade-out');
        body.classList.remove('no-scroll');
    } 
})