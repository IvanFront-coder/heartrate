/* $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slider_img/chevron_left_solid_980.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slider_img/chevron_right_solid_982.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
}); */

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: true,
    navPosition: "bottom",
    responsive: {
        640: {
            nav: true       
        },
        700: {
            nav: true
        },
        992: {
            nav: false
        }
    }
});
document.querySelector('.prev').addEventListener('click', function(){
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function(){
    slider.goTo('next');
});