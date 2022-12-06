
    const menuEmail = document.querySelector('.navbar-email');
    const desktop_menu = document.querySelector('.desktop-menu');

    const menuMobileIcon = document.querySelector('.menu');
    const mobile_menu = document.querySelector('.mobile-menu');

    const cart_detail = document.querySelector('.cart-detail');
    const shopping_car = document.querySelector('.nav-bar-shopping-card');
    const title_container = document.querySelector('.title-container');

/--- emailMenu dinámico: activado y desactivado con un click---/
    menuEmail.addEventListener('click', showDesktopMenu);

        function showDesktopMenu(){
            desktop_menu.classList.toggle('inactive');
            cart_detail.classList.add('inactive');
        }

/---mobileMenu dinámico: activado y desactivado con un click---/
    menuMobileIcon.addEventListener('click', showMobileMenu);

        function showMobileMenu(){
            mobile_menu.classList.toggle('inactive');
            cart_detail.classList.add('inactive');
        }

/---desktop: shopping car---/
    title_container.addEventListener('click', showShoppingCar);
    shopping_car.addEventListener('click', showShoppingCar);

        function showShoppingCar(){
            cart_detail.classList.toggle('inactive');
            desktop_menu.classList.add('inactive');
            mobile_menu.classList.add('inactive');
        }

/---render products---/
const productList = [];
    productList.push({
        name:'Bike',
        price:120,
        image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    });
    productList.push({
        name:'MTB',
        price:220,
        image:'https://images.pexels.com/photos/14517120/pexels-photo-14517120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    });
    productList.push({
        name:'Gravel',
        price: 210,
        image:'https://images.pexels.com/photos/11074451/pexels-photo-11074451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    });

    /* 
    >>> Código HTML original del render de los productos <<<
    <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
        <div class="product-info">
            <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
    </div>
    */
   function renderProducts(array){
        for (var x of productList){
            /*Maquetación de los elementos del cards-container*/
            const product_card = document.createElement('div');
                product_card.classList.add('product-card');

            const product_img = document.createElement('img');
                product_img.setAttribute('src', x.image);

            const product_info = document.createElement('div');
                product_info.classList.add('product-info');

            const div_container = document.createElement('div');
                const product_price = document.createElement('p');
                    product_price.innerText = ('$' + x.price);
                const product_name = document.createElement('p');
                    product_name.innerText = x.name;

            const figure_container = document.createElement('figure');
                const img_figure = document.createElement('img');
                    img_figure.setAttribute('src', './icons/bt_add_to_cart.svg')
            
            /*Encapsulamiento de los elementos en la estructura correspondiente cards-container*/
            /*Se recomienda construir esta estructura de abajo hacia arriba*/
            figure_container.append(img_figure);
            div_container.append(product_price, product_name);
            product_info.append(div_container, figure_container);
            product_card.append(product_img, product_info);

            const cards_container = document.querySelector('.cards-container');
                cards_container.append(product_card)      
        }
    }

    renderProducts(productList);