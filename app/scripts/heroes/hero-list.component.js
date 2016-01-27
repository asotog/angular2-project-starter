System.register(['angular2/core', './hero-form.component', './hero-detail.component', './hero.service', './exponential-strength.pipe', './highlight.directive'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_form_component_1, hero_detail_component_1, hero_service_1, exponential_strength_pipe_1, highlight_directive_1;
    var HeroListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_form_component_1_1) {
                hero_form_component_1 = hero_form_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (exponential_strength_pipe_1_1) {
                exponential_strength_pipe_1 = exponential_strength_pipe_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            HeroListComponent = (function () {
                function HeroListComponent(heroService) {
                    this.heroes = [];
                    console.info('initializing heroes 2');
                    this.heroes = heroService.getHeroes();
                }
                // ngOnInit(){
                //   this.heroes = this._service.getHeroes();
                // }
                HeroListComponent.prototype.selectHero = function (hero) {
                    this.selectedHero = hero;
                };
                HeroListComponent.prototype.deleteHero = function (hero) {
                    console.info('deleting');
                };
                HeroListComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-list',
                        templateUrl: 'scripts/heroes/hero-list.component.html',
                        pipes: [exponential_strength_pipe_1.ExponentialStrengthPipe],
                        directives: [hero_form_component_1.HeroFormComponent, hero_detail_component_1.HeroDetailComponent, highlight_directive_1.HighlightDirective]
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], HeroListComponent);
                return HeroListComponent;
            })();
            exports_1("HeroListComponent", HeroListComponent);
        }
    }
});
//# sourceMappingURL=hero-list.component.js.map