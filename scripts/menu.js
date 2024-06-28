document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const menu = document.querySelector('.menu');

    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('open');
        menu.classList.toggle('active');
    });
});
