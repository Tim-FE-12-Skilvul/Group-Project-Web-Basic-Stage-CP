const hamburger = document.querySelector('#hamburger-container');
const menuNav = document.querySelector('#menuNav');
const pencarianNav = document.querySelector('#pencarianNav');

hamburger.addEventListener('click', () => {
    menuNav.classList.toggle('active');
    pencarianNav.classList.toggle('active');
});