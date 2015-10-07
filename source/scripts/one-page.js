/*Theme    : assan
 * Author  : Design_mylife
 * Version : V1.6
 * 
 */



//sticky header on scroll
$(window).load(function() {
    $(".sticky").sticky({
        topSpacing: 0
    });
});


//smooth scroll
$(function() {
    $('.scroll-to a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

/* ==============================================
Auto Close Responsive Navbar on Click
=============================================== */

function close_toggle() {
    if ($(window).width() <= 768) {
        $('.navbar-collapse a').on('click', function() {
            $('.navbar-collapse').collapse('hide');
        });
    } else {
        $('.navbar .navbar-default a').off('click');
    }
}
close_toggle();

$(window).resize(close_toggle);


//parallax
$(window).stellar({
    horizontalScrolling: false,
    responsive: true
        /*,
             scrollProperty: 'scroll',
             parallaxElements: false,
             horizontalScrolling: false,
             horizontalOffset: 0,
             verticalOffset: 0*/
});







/* ==============================================
 Counter Up
 =============================================== */
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 100,
        time: 800
    });
});


/* ==============================================
 WOW plugin triggers animate.css on scroll
 =============================================== */

var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 100, // distance to the element when triggering the animation (default is 0)
    mobile: false // trigger animations on mobile devices (true is default)
});
wow.init();



//MAGNIFIC POPUP
$('.show-image').magnificPopup({
    type: 'image'
});

//OWL CAROUSEL
$("#clients-slider").owlCarousel({
    autoPlay: 3000,
    pagination: false,
    items: 6,
    itemsDesktop: [1199, 6],
    itemsDesktopSmall: [991, 4]
});

// (function($, window, document, undefined) {
//     'use strict';

// // Juicy projects
//     $('#grid-container').cubeportfolio({
//         filters: '#filters-container',
//         loadMore: '#loadMore-container',
//         loadMoreAction: 'click',
//         layoutMode: 'grid',
//         defaultFilter: '*',
//         animationType: 'quicksand',
//         gapHorizontal: 15,
//         gapVertical: 15,
//         gridAdjustment: 'responsive',
//         mediaQueries: [{
//             width: 1100,
//             cols: 3
//         }, {
//             width: 800,
//             cols: 3
//         }, {
//             width: 500,
//             cols: 2
//         }, {
//             width: 320,
//             cols: 1
//         }],
//         caption: 'overlayBottomReveal',
//         displayType: 'sequentially',
//         displayTypeSpeed: 80,

//         // lightbox
//         lightboxDelegate: '.cbp-lightbox',
//         lightboxGallery: true,
//         lightboxTitleSrc: 'data-title',
//         lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

//         // singlePage popup
//         singlePageDelegate: '.cbp-singlePage',
//         singlePageDeeplinking: true,
//         singlePageStickyNavigation: true,
//         singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
//         singlePageCallback: function(url, element) {
//             // to update singlePage content use the following method: this.updateSinglePage(yourContent)
//             var t = this;

//             $.ajax({
//                     url: url,
//                     type: 'GET',
//                     dataType: 'html',
//                     timeout: 10000
//                 })
//                 .done(function(result) {
//                     t.updateSinglePage(result);
//                 })
//                 .fail(function() {
//                     t.updateSinglePage('AJAX Error! Please refresh the page!');
//                 });
//         },
//     });

// })(jQuery, window, document);
