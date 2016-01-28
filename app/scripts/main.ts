import {bootstrap}    from 'angular2/platform/browser';
import {enableProdMode}    from 'angular2/core';
import {HeroListComponent} from './heroes/hero-list.component';
import {HeroService} from './heroes/hero.service';
import {Logger} from './heroes/logger.service';

console.info('Hi there 2');
enableProdMode();
bootstrap(HeroListComponent, [HeroService, Logger]);
