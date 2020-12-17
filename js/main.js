
$(function(){

    $('.slider__inner').slick({
        arrows: false,
        dots: true,
        speed: 500,
});

    $('.works__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev "><img src="image/icons/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next "><img src="image/icons/arrow-right.svg" alt=""></button>',
    });

});