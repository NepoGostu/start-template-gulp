const navigation = () => {
    let toTopBtn = document.getElementById('toTopBtn');
    let aLinks = document.querySelectorAll('a[href^="#"');
    let btnLinks = document.querySelectorAll('[data-href]');
    let links = [...aLinks].concat([...btnLinks]);
    let href;

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            if (link.hasAttribute('data-href')) {
                href = link.getAttribute('data-href').substring(1);
            } else {
                href = this.getAttribute('href').substring(1);
            }
            try {
                const scrollTarget = document.getElementById(href);
                const topOffset = document.querySelector('.header').offsetHeight;
                // const topOffset = 0;
                const elementPosition = scrollTarget.getBoundingClientRect().top;
                const offsetPosition = elementPosition - topOffset;

                window.scrollBy({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            } catch (error) {
                console.error(`Якорь для ${href} не найден`);
            }
        });
    });

    let lastScrollPosition = window.pageYOffset;

    toTopBtn.addEventListener('click', () => {
        window.scrollBy({
            top: -window.pageYOffset,
            behavior: "smooth"
        });
    })

    window.addEventListener('scroll', function () {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > 50 && currentScrollPosition < lastScrollPosition) {
            toTopBtn.style.opacity = 1;
            toTopBtn.style.pointerEvents = 'auto';
        } else {
            toTopBtn.style.opacity = 0;
            toTopBtn.style.pointerEvents = 'none';
        }

        // Обновление позиции скролла
        lastScrollPosition = currentScrollPosition;
    });

    // toTopBtn.addEventListener('click', () => {
    //     window.scrollBy({
    //         top: -window.scrollY,
    //         behavior: "smooth"
    //     });
    // })
}

export default navigation;