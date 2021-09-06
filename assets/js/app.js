'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('esileht', 'home.html', true),            
            new Route('ettevottest', 'about.html'),
            new Route('teenused', 'services.html'),
            new Route('tehtud-tood', 'work.html'),
            new Route('kontakt', 'contact.html'),
            new Route('vannitubade-remont', 'services/bathroom-renovation.html'),
            new Route('plaatimistood', 'services/tiling.html'),
            new Route('hudroisolatsioon', 'services/hydro-isolation.html'),
            new Route('furnituurid', 'services/furnitures.html'),
            new Route('jakob-tross-susteemid', 'services/jakob-systems.html'),
            new Route('konsultatsioon', 'services/consultation.html'),
            new Route('transport', 'services/transport.html')
        ]);
    }
    init();
}());