import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay]);

export const swiperInit = () => {
    function firstSlider(swiperSelector) {
        if (swiperSelector) {
            const firstSlider = new Swiper(swiperSelector, {
                modules: [Autoplay],
                loop: true,
                direction: 'horizontal',
                spaceBetween: 20,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }
            });
        }
    }

    firstSlider(".first__swiper-container.swiper-container");
};
