$(document).ready(function(){

    // ***** mnu-customization start *****
    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".mobile-mnu").slideToggle();
        return false;
    });

    $(".toggle-serv-mnu").click(function() {
        $(this).toggleClass("on");
        $(".serv-mobile-mnu").slideToggle();
        return false;
    });

    $(".serv-mobile-mnu ul li.menu-item-has-children a").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("opened");
        $(this).parents("li").find('ul').slideToggle();
        return false;
    });

    $(".toggle-foot-mnu").click(function() {
        $(this).toggleClass("on");
        $(this).parents('.foot-col-item').find('.foot-botline').slideToggle();
        return false;
    });

    // ***** mnu-customization start *****




    var $curentSlide = $('#intro-count .current');
    var $totalSlides = $('#intro-count .total');
    var $introSlider = $('.intro-slider');

    $introSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $curentSlide.text(i);
        $totalSlides.text(slick.slideCount);
    });

    $introSlider.slick({
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 8000,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="intro-prev"></button>',
        nextArrow: '<button type="button" class="intro-next"></button>',
    });


    var $exCurrentSlide = $('#ex-count .current');
    var $exTotalSlides = $('#ex-count .total');
    var $exSlider = $('.examples-slider');

    $exSlider.on('init reInit afterChange', function(event, slick, exCurrentSlide, nextSlide){
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (exCurrentSlide ? exCurrentSlide : 0) + 1;
        $exCurrentSlide.text(i);
        $exTotalSlides.text(slick.slideCount);
    });

    $exSlider.slick({
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 8000,
        // fade: true,
        // cssEase: 'linear',
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="intro-prev"></button>',
        nextArrow: '<button type="button" class="intro-next"></button>',
    });


    var $revCurrentSlide = $('#rev-count .current');
    var $revTotalSlides = $('#rev-count .total');
    var $revSlider = $('.reviews-slider');

    $revSlider.on('init reInit afterChange', function(event, slick, revCurrentSlide, nextSlide){
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (revCurrentSlide ? revCurrentSlide : 0) + 1;
        $revCurrentSlide.text(i);
        $revTotalSlides.text(slick.slideCount);
    });

    $revSlider.slick({
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 8000,
        // fade: true,
        // cssEase: 'linear',
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="intro-prev"></button>',
        nextArrow: '<button type="button" class="intro-next"></button>',
        responsive: [
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.services-slider').slick({
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 8000,
        // fade: true,
        // cssEase: 'linear',
        adaptiveHeight: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="intro-prev"></button>',
        nextArrow: '<button type="button" class="intro-next"></button>',
        responsive: [
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });



    $('.marks-slider').owlCarousel({
        loop:true,
        nav: true,
        margin: 20,
        dots: true,
        autoHeight: false,
        slideBy: 12,
        navText: ["<img class='svg' src='../img/icons/arrow.svg'>","<img class='svg' src='../img/icons/arrow.svg'>"],
        responsive: {
            0: {
                items: 3,
                dots: false
            },
            400: {
                items: 4,
                dots: false
            },
            480: {
                items: 6,
                dots: true
            },
            992: {
                items: 9,
                dots: true
            },
            1200: {
                items: 12,
                dots: true
            }

        }
    });




    $('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });


    function heightses() {

        if ($(window).width()>=768) {
            $('.review-slide-desc').height('auto').equalHeights();
            $('.article-item-desc').height('auto').equalHeights();
            $('.service-slide-title').height('auto').equalHeights();
            $('.other-item-desc').height('auto').equalHeights();
        }

        $('.serv-mnu>ul>li>a').height('auto').equalHeights();
    }
    $(window).resize(function() {
        heightses();
    });
    heightses();

    $('.preloader').fadeOut();

    //******* forms start *******//

    $("a[href='#popup-contact']").magnificPopup({
        type: "inline",
        fixedContentPos: !1,
        fixedBgPos: !0,
        overflowY: "auto",
        closeBtnInside: !0,
        preloader: !1,
        midClick: !0,
        removalDelay: 300,
        mainClass: "my-mfp-zoom-in",
    });

    var uPhone = $('.user-phone');
    uPhone.mask("+3 8(999) 999-99-99",{autoclear: false});

    uPhone.on('click', function (ele) {
        var needelem = ele.target || event.srcElement;
        needelem.setSelectionRange(5,5);
        needelem.focus();
    });

    $.validate({
        form : '.contact-form',
        scrollToTopOnError: false
    });

    $('.form-select').styler();
    $('form .checkbox').styler()

    $(".contact-form").submit(function() { //Change
        var th = $(this);

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {

        });
        return false;
    });
    //******* FORMS end *******//


});

$(window).on('load', function(){
    if ($('#map').length) {
        function initMap(){
            var mapAttr = $('#map'),
                latitude = mapAttr.data('lat'),
                longitude = mapAttr.data('lng'),
                zoom = mapAttr.data('zoom'),
                location = {lat: latitude, lng: longitude},
                offset = mapAttr.data('offset');

            var map = new google.maps.Map(document.getElementById('map'), {
                center: location,
                zoom: zoom,
                disableDefaultUI: true,
                zoomControl: true,
                streetViewControl: true,
                fullscreenControl: true,
            });

            var marker = new google.maps.Marker({
                position: location,
                map: map,
                // icon: image,
            });

            marker.setMap(map);

            if(offset) {
                if($(window).width() >=1200) {
                    map.panBy(250, 0);
                }
            }
        }

        initMap();
    }
});

