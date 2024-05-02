

$(document).ready(function () {
    // Initialize Owl Carousel
    var slider = $('.slider-2').owlCarousel({
        autoplay: true,
        loop: true,
        nav: false,
        margin: 10,
        thumbs: true,
        thumbImage: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item',
        dots: false,
        slideBy: 1,
        autoplayTimeout: 5000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            992: { items: 1 }
        }
    });

    // Pause button click event
    $('.pause-slider').on('click', function () {
        if ($(this).hasClass('paused')) {
            $(this).removeClass('paused').html('<i class="far fa-pause-circle"></i>');
            slider.trigger('play.owl.autoplay');
        } else {
            $(this).addClass('paused').html('<i class="far fa-play-circle"></i>');
            slider.trigger('stop.owl.autoplay');
        }
    });

});
