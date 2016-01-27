System.register(['angular2/platform/browser', 'angular2/core', './heroes/hero-list.component', './heroes/hero.service', './heroes/logger.service'], function(exports_1) {
    "use strict";
    var browser_1, core_1, hero_list_component_1, hero_service_1, logger_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_list_component_1_1) {
                hero_list_component_1 = hero_list_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            console.info('Hi there');
            core_1.enableProdMode();
            browser_1.bootstrap(hero_list_component_1.HeroListComponent, [hero_service_1.HeroService, logger_service_1.Logger]);
        }
    }
});
//# sourceMappingURL=main.js.map