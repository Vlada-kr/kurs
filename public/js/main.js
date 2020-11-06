$(function(){

    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, /*убрать next и preview*/
        dots: true, /*сделать точки*/
        centerMode: true,
        variableWidth: true
    });
});
