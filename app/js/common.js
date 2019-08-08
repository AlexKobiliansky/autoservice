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
    // ***** mnu-customization start *****

    var $curentSlide = $('#intro-count .current');
    var $totalSlides = $('#intro-count .total');
    var $introSlider = $('.intro-slider')

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

        if ($(window).width()>480) {
        }

        $('.serv-mnu>ul>li>a').height('auto').equalHeights();
    }
    $(window).resize(function() {
        heightses();
    });
    heightses();


    //******* forms start *******//

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
