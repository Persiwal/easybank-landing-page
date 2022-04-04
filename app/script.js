const hamburger = document.querySelector('.header__hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
})