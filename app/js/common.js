$(document).ready(function(){

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

    function heightses() {

        if ($(window).width()>480) {
        }

        $('.serv-mnu>ul>li>a').height('auto').equalHeights();
    }

    $(window).resize(function() {
        heightses();
    });
    heightses();

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {

        });
        return false;
    });
});
