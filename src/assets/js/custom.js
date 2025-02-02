(function($) {
    'use strict';

    // Mean Menu
    jQuery('.mean-menu').meanmenu({ 
        meanScreenWidth: "991"
    });

    // Navbar Area
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >150){  
            $('.navbar-area').addClass("sticky-nav");
        }
        else{
            $('.navbar-area').removeClass("sticky-nav");
        }
    });

    // Search Botton
    $('.close-btn').on('click',function() {
        $('.search-overlay').fadeOut();
        $('.search-btn').show();
        $('.close-btn').removeClass('active');
    });
    $('.search-btn').on('click',function() {
        $(this).hide();
        $('.search-overlay').fadeIn();
        $('.close-btn').addClass('active');
    });
        
    // Home Slider
    $('.slider-area').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        mouseDrag: true,
        items: 1,
        dots: true,
        autoplay: true,
        smartSpeed: 1500,
        autoplayHoverPause: true,
    });

    // Brand Slider 
    $('.brand-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 2
            },
            568:{
                items: 3
            },
            768:{
                items: 5
            },
            1000:{
                items: 5
            }
        }
    })
        
    // Popup Video 
    $('.play-btn').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Service Item Area Slider
    $('.service-item-area').owlCarousel({
        center: true,
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>"
        ],
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            768:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    })

    // Popup Gallery 
    $('.gallery-view').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] 
        }
    });

    // Testimonial Slider
    $('.testimonial-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ],
    });
        
    // Tabs Single Page
    (function ($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        $('.tab ul.tabs li a').on('click', function (g) {
            var tab = $(this).closest('.tab'), 
            index = $(this).closest('li').index();
            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');
            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
            g.preventDefault();
        });
    })(jQuery);

    // Input Plus & Minus Number JS
    $('.input-counter').each(function() {
        var spinner = jQuery(this),
        input = spinner.find('input[type="text"]'),
        btnUp = spinner.find('.plus-btn'),
        btnDown = spinner.find('.minus-btn'),
        min = input.attr('min'),
        max = input.attr('max');
        
        btnUp.on('click', function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.on('click', function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });

    // Back To Top Js
    $('body').append('<div id="toTop" class="top-btn"><i class="fas fa-chevron-up"></i></div>');
    $(window).on('scroll',function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    }); 
    $('#toTop').on('click',function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    // WOW JS
    new WOW().init();

})(jQuery);

 
