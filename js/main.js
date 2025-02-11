const sliderText = new Swiper(".testimonials__slider", {
    slidesPerView: 1,
})

const sliderAuthor = new Swiper(".testimonials__author-slider", {
    navigation: {
        prevEl: ".testimonials__prev-button",
        nextEl: ".testimonials__next-button"
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    thumbs: {
        swiper: sliderText,
    } 
})