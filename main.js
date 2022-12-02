/--- emailMenu dinámico: activado y desactivado con un click---/
    const menuEmail = document.querySelector('.navbar-email');
    const desktop_menu = document.querySelector('.desktop-menu');

    menuEmail.addEventListener('click', toggleDesktopMenu);

        function toggleDesktopMenu(){
            desktop_menu.classList.toggle('inactive');
        }

/---mobileMenu dinámico: activado y desactivado con un click---/
    const menuMobileIcon = document.querySelector('.menu');
    const mobile_menu = document.querySelector('.mobile-menu');

    menuMobileIcon.addEventListener('click', toggleMobileMenu);

        function toggleMobileMenu(){
            mobile_menu.classList.toggle('inactive');
        }