document.addEventListener("DOMContentLoaded", function() {
    var welcomeText = document.querySelector('.welcome-text');
    var menu = document.querySelector('.menu');
    var formSection = document.querySelector('.form-section');

    if (welcomeText) {
        setTimeout(function() {
            welcomeText.classList.add('visible');
        }, 70);
    }

    if (menu) {
        setTimeout(function() {
            menu.classList.add('visible');
        }, 70);
    }

    if (formSection) {
        setTimeout(function() {
            formSection.classList.add('visible');
        }, 70);
    }
});