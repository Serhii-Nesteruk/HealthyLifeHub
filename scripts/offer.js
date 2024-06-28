document.addEventListener('DOMContentLoaded', function () {
    const offer = document.querySelector('.offer');

    function checkVisibility() {
        const rect = offer.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        if (rect.top <= windowHeight && rect.bottom >= 0) {
            offer.classList.add('visible');
            window.removeEventListener('scroll', checkVisibility);
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});
