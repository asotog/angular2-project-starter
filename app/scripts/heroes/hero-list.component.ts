import {Component} from 'angular2/core';
import {NgFor, NgIf} from 'angular2/common';
import {Hero} from './hero';
import {HeroFormComponent} from './hero-form.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {ExponentialStrengthPipe} from './exponential-strength.pipe';
import {HighlightDirective} from './highlight.directive';

@Component({
  selector:    'hero-list',
  templateUrl: 'scripts/heroes/hero-list.component.html',
  pipes: [ExponentialStrengthPipe],
  directives: [HeroFormComponent, HeroDetailComponent, HighlightDirective]
})
export class HeroListComponent  {
  
  constructor(heroService: HeroService) {
    console.info('initializing heroes 2');
    this.heroes = heroService.getHeroes();
  }
  
  heroes:Hero[] = [];
  selectedHero: Hero;
  
  // ngOnInit(){
  //   this.heroes = this._service.getHeroes();
  // }
  
  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
  
  deleteHero(hero: Hero) {
    console.info('deleting');
  }
}
