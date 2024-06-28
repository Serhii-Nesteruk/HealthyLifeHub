const languages = {
    'en': {
        'welcome-heading': 'Welcome to Healthy Food',
        'menu-home' : 'Home',
        'menu-sign-in' : 'Sign In',
        'menu-contact' : 'Contact',
        'menu-about-us' : 'About Us'
    },
    'ua': {
        'welcome-heading': 'Ласкаво просимо до Healthy Food',
        'menu-home': 'На головну',
        'menu-sign-in': 'Увійти',
        'menu-contact': 'Контакт',
        'menu-about-us': 'Про нас'
    },
    'pl': {
        'welcome-heading': 'Witamy na Healthy Food',
        'menu-home': 'Strona główna',
        'menu-sign-in': 'Zaloguj się',
        'menu-contact': 'Kontakt',
        'menu-about-us': 'O nas'
    }
};

function switchLanguage(lang) {
    const text = languages[lang];

    document.getElementById('welcome-heading').textContent = text['welcome-heading'];
    document.getElementById('menu-home').textContent = text['menu-home'];
    document.getElementById('menu-sign-in').textContent = text['menu-sign-in'];
    document.getElementById('menu-contact').textContent = text['menu-contact'];
    document.getElementById('menu-about-us').textContent = text['menu-about-us'];
}