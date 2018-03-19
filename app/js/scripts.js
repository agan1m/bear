(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvY29tbW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEsRUFBRSxzQkFBRixFQUEwQixLQUExQixDQUFnQztBQUM1QixjQUFVLElBRGtCO0FBRTVCLGtCQUFjLENBRmM7QUFHNUIsWUFBUSxJQUhvQjtBQUk1QixlQUFXLEVBQUUsc0NBQUYsQ0FKaUI7QUFLNUIsZUFBVyxFQUFFLHFDQUFGLENBTGlCO0FBTTVCLGdCQUFZLENBQUM7O0FBRVQsb0JBQVksSUFGSDtBQUdULGtCQUFVO0FBQ04sMEJBQWMsQ0FEUjtBQUVOLHNCQUFVO0FBRko7O0FBSEQsS0FBRCxFQVFUOztBQUVDLG9CQUFZLEdBRmI7QUFHQyxrQkFBVTtBQUNOLDBCQUFjLENBRFI7QUFFTixrQkFBTTtBQUZBOztBQUhYLEtBUlMsRUFnQlQ7O0FBRUMsb0JBQVksR0FGYjtBQUdDLGtCQUFVLFNBSFgsQ0FHcUI7O0FBSHJCLEtBaEJTO0FBTmdCLENBQWhDOztBQThCQSxFQUFFLDBCQUFGLEVBQThCLEtBQTlCLENBQW9DLFlBQVk7QUFDNUMsUUFBSSxTQUFTLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxVQUFiLENBQWI7O0FBRUEsTUFBRSwwQkFBRixFQUE4QixXQUE5QixDQUEwQyxpQ0FBMUM7QUFDQSxNQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLGlDQUFqQjtBQUNBLE1BQUUsY0FBRixFQUFrQixXQUFsQixDQUE4QixTQUE5Qjs7QUFFQSxNQUFFLE1BQU0sTUFBUixFQUFnQixRQUFoQixDQUF5QixTQUF6QjtBQUNBLFFBQUksRUFBRSxNQUFNLE1BQVIsRUFBZ0IsUUFBaEIsQ0FBeUIsbUJBQXpCLENBQUosRUFBbUQ7QUFDL0MsVUFBRSxNQUFNLE1BQVIsRUFBZ0IsS0FBaEIsQ0FBc0IsU0FBdEI7QUFDSDs7QUFHRCxNQUFFLE1BQU0sTUFBUixFQUFnQixLQUFoQixDQUFzQjtBQUNsQixrQkFBVSxJQURRO0FBRWxCLHNCQUFjLENBRkk7QUFHbEIsZ0JBQVEsSUFIVTtBQUlsQixtQkFBVyxFQUFFLHNDQUFGLENBSk87QUFLbEIsbUJBQVcsRUFBRSxxQ0FBRixDQUxPO0FBTWxCLG9CQUFZLENBQUM7O0FBRVQsd0JBQVksSUFGSDtBQUdULHNCQUFVO0FBQ04sOEJBQWMsQ0FEUjtBQUVOLDBCQUFVO0FBRko7O0FBSEQsU0FBRCxFQVFUOztBQUVDLHdCQUFZLEdBRmI7QUFHQyxzQkFBVTtBQUNOLDhCQUFjLENBRFI7QUFFTixzQkFBTTtBQUZBOztBQUhYLFNBUlMsRUFnQlQ7O0FBRUMsd0JBQVksR0FGYjtBQUdDLHNCQUFVLFNBSFgsQ0FHcUI7O0FBSHJCLFNBaEJTO0FBTk0sS0FBdEI7QUE2QkgsQ0ExQ0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIlxuXG4vKiBpbXBvcnQgJ293bC5jYXJvdXNlbCc7XG5cbiQoJy5wb3B1bGFyX190YWJzX19jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICBsb29wOiB0cnVlLFxuICAgIG1hcmdpbjogMjAsXG4gICAgbmF2OiB0cnVlLFxuICAgIGl0ZW1zOiAzLFxuICAgIHN0YWdlT3V0ZXJDbGFzczogJ3BvcHVsYXJfX3RhYnNfX2Nhcm91c2VsX3dyYXAnLFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIG5hdlRleHQ6IFtcIiZsdDtcIiwgXCImZ3Q7XCJdLFxuICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgMDoge1xuICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgfSxcbiAgICAgICAgNjAwOiB7XG4gICAgICAgICAgICBpdGVtczogMlxuICAgICAgICB9LFxuICAgICAgICAxMDAwOiB7XG4gICAgICAgICAgICBpdGVtczogM1xuICAgICAgICB9XG4gICAgfVxufSk7ICovXG5cblxuXG4kKCcudGFiLWNvbnRlbnQuY3VycmVudCcpLnNsaWNrKHtcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgYXJyb3dzOiB0cnVlLFxuICAgIG5leHRBcnJvdzogJCgnLnBvcHVsYXJfX3RhYnNfX2Nhcm91c2VsX2Fycm93X3JpZ2h0JyksXG4gICAgcHJldkFycm93OiAkKCcucG9wdWxhcl9fdGFic19fY2Fyb3VzZWxfYXJyb3dfbGVmdCcpLFxuICAgIHJlc3BvbnNpdmU6IFt7XG5cbiAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXG4gICAgICAgIH1cblxuICAgIH0sIHtcblxuICAgICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBkb3RzOiB0cnVlXG4gICAgICAgIH1cblxuICAgIH0sIHtcblxuICAgICAgICBicmVha3BvaW50OiAzMDAsXG4gICAgICAgIHNldHRpbmdzOiBcInVuc2xpY2tcIiAvLyBkZXN0cm95cyBzbGlja1xuXG4gICAgfV1cbn0pO1xuXG4kKCd1bC5wb3B1bGFyX190YWJzX19uYXYgbGknKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRhYl9pZCA9ICQodGhpcykuYXR0cignZGF0YS10YWInKTtcblxuICAgICQoJ3VsLnBvcHVsYXJfX3RhYnNfX25hdiBsaScpLnJlbW92ZUNsYXNzKCdwb3B1bGFyX190YWJzX19uYXZfX2xpbmtfYWN0aXZlJyk7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygncG9wdWxhcl9fdGFic19fbmF2X19saW5rX2FjdGl2ZScpO1xuICAgICQoJy50YWItY29udGVudCcpLnJlbW92ZUNsYXNzKCdjdXJyZW50Jyk7XG5cbiAgICAkKFwiI1wiICsgdGFiX2lkKS5hZGRDbGFzcygnY3VycmVudCcpO1xuICAgIGlmICgkKFwiI1wiICsgdGFiX2lkKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICAkKFwiI1wiICsgdGFiX2lkKS5zbGljaygndW5zbGljaycpO1xuICAgIH1cbiAgICBcblxuICAgICQoXCIjXCIgKyB0YWJfaWQpLnNsaWNrKHtcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICBuZXh0QXJyb3c6ICQoJy5wb3B1bGFyX190YWJzX19jYXJvdXNlbF9hcnJvd19yaWdodCcpLFxuICAgICAgICBwcmV2QXJyb3c6ICQoJy5wb3B1bGFyX190YWJzX19jYXJvdXNlbF9hcnJvd19sZWZ0JyksXG4gICAgICAgIHJlc3BvbnNpdmU6IFt7XG5cbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sIHtcblxuICAgICAgICAgICAgYnJlYWtwb2ludDogNjAwLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sIHtcblxuICAgICAgICAgICAgYnJlYWtwb2ludDogMzAwLFxuICAgICAgICAgICAgc2V0dGluZ3M6IFwidW5zbGlja1wiIC8vIGRlc3Ryb3lzIHNsaWNrXG5cbiAgICAgICAgfV1cbiAgICB9KTtcbn0pO1xuIl19
