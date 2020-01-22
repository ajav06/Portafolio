$(document).ready(function () {

    if ($(window).width() < 1408) {
        $('#ocultar').addClass('is-hidden');
        $('#oculto').removeClass('is-hidden');
    }else{
        $('.fp-slidesNav').addClass('is-hidden');
    }

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    $(".box").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".modal").toggleClass("is-active");

    });

    $(".modal-close").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".modal").removeClass("is-active");

    });
});