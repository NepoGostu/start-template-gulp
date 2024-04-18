const mobMenu = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

    function openMenu() {
        menu.classList.add('active');
        document.body.classList.add('overflow-hidden');
        burger.src = '../img/ico/cross.svg';
        console.log('burger on')
    }

    function closeMenu() {
        menu.classList.remove('active');
        document.body.classList.remove('overflow-hidden');
        burger.src = '../img/ico/burger.svg'
    }

    burger.addEventListener('click', () => {
        if(menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    menu.addEventListener('click', (event) => {
        if (event.target.tagName == 'LI') {
            closeMenu();
        }
    });
}

export default mobMenu;
