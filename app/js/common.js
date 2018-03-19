

/* import 'owl.carousel';

$('.popular__tabs__carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    items: 3,
    stageOuterClass: 'popular__tabs__carousel_wrap',
    dots: false,
    navText: ["&lt;", "&gt;"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
}); */



$('.tab-content.current').slick({
    infinite: true,
    slidesToShow: 5,
    arrows: true,
    nextArrow: $('.popular__tabs__carousel_arrow_right'),
    prevArrow: $('.popular__tabs__carousel_arrow_left'),
    responsive: [{

        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            infinite: true
        }

    }, {

        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            dots: true
        }

    }, {

        breakpoint: 300,
        settings: "unslick" // destroys slick

    }]
});

$('ul.popular__tabs__nav li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('ul.popular__tabs__nav li').removeClass('popular__tabs__nav__link_active');
    $(this).addClass('popular__tabs__nav__link_active');
    $('.tab-content').removeClass('current');

    $("#" + tab_id).addClass('current');
    if ($("#" + tab_id).hasClass('slick-initialized')) {
        $("#" + tab_id).slick('unslick');
    }
    

    $("#" + tab_id).slick({
        infinite: true,
        slidesToShow: 5,
        arrows: true,
        nextArrow: $('.popular__tabs__carousel_arrow_right'),
        prevArrow: $('.popular__tabs__carousel_arrow_left'),
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                dots: true
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });
});
