
    const menuEmail = document.querySelector('.navbar-email');
    const desktop_menu = document.querySelector('.desktop-menu');

    const menuMobileIcon = document.querySelector('.menu');
    const mobile_menu = document.querySelector('.mobile-menu');

    const product_detail = document.querySelector('.product-detail');
    const shopping_car = document.querySelector('.nav-bar-shopping-card');
    const title_container = document.querySelector('.title-container');

/--- emailMenu dinámico: activado y desactivado con un click---/
    menuEmail.addEventListener('click', showDesktopMenu);

        function showDesktopMenu(){
            desktop_menu.classList.toggle('inactive');
            product_detail.classList.add('inactive');
        }

/---mobileMenu dinámico: activado y desactivado con un click---/
    menuMobileIcon.addEventListener('click', showMobileMenu);

        function showMobileMenu(){
            mobile_menu.classList.toggle('inactive');
            product_detail.classList.add('inactive');
        }

/---desktop: shopping car---/
    title_container.addEventListener('click', showShoppingCar);
    shopping_car.addEventListener('click', showShoppingCar);

        function showShoppingCar(){
            product_detail.classList.toggle('inactive');
            desktop_menu.classList.add('inactive');
            mobile_menu.classList.add('inactive');
        }

