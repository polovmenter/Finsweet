const sliderText = new Swiper(".testimonials__slider", {
    slidesPerView: 1,
})

const sliderAuthor = new Swiper(".testimonials__author-slider", {
    navigation: {
        prevEl: ".testimonials__button-prev",
        nextEl: ".testimonials__button-next"
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    thumbs: {
        swiper: sliderText,
    } 
})