var contentFP = $('#fullpage'),
    logoHeader = $('#logo-header'),
    containerI = $('#inicioC');

function crearFullpage() {
    contentFP.fullpage({
        menu: '#menu',
        slidesNavigation: true,
        paddingTop: '3.5%',
        verticalCentered: true,
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