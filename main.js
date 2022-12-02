const menuEmail = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktop_menu.classList.toggle('inactive');
}