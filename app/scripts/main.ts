// typings reference added
// please see breaking changes under: 
// https://github.com/angular/angular/blob/master/CHANGELOG.md#user-content-200-beta6-2016-02-11
///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>


import {bootstrap}    from 'angular2/platform/browser';
import {enableProdMode}    from 'angular2/core';
import {HeroListComponent} from './heroes/hero-list.component';
import {HeroService} from './heroes/hero.service';
import {Logger} from './heroes/logger.service';

console.info('Hi there 2');
enableProdMode();
bootstrap(HeroListComponent, [HeroService, Logger]);
