var contentFP = $('#fullpage'),
    logoHeader = $('#logo-header');

function crearFullpage() {
    contentFP.fullpage({
        menu: '#menu',
        slidesNavigation: true,
        // scrollHorizontally: true,
        // loopBottom: true, // va al inicio luego de dar scroll en el final
        scrollOverflow: true,
        // navigation: true,
        // navigationTooltips: ['Acerca de mi', 'Proyectos', 'Contáctame'],
        // showActiveTooltip: true,
        onLeave: function (origin, destination, direction) {
            var leavingSection = this;
            // logoHeader.addClass('hidden'); 
            let aux = destination.index;
            $('#navBurger div a').removeClass('is-active');
            $('#navBurger div a').removeClass('is-tab');
            aux = $('#navBurger div a').get(aux);
            $(aux).addClass('is-active');
            $(aux).addClass('is-tab');
            if (destination.index == 0) {
                logoHeader.addClass('is-hidden');
            } 
            // if (destination.index == 2) {
            //     $('.carousel').carousel(0);
            // }
        },
        afterLoad: function (origin, destination, direction) {
            var loadedSection = this;
            if (destination.index != 0) {
                logoHeader.removeClass('is-hidden');
            }
        },
    });
}

crearFullpage();

$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
});