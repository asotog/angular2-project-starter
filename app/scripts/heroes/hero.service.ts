import {Injectable} from 'angular2/core';
import {Hero} from './hero';
import {Logger} from './logger.service';

@Injectable()
export class HeroService {
  
  heroes: Hero[];
  
  constructor(private logger: Logger) {
    this.heroes = [
      new Hero(1, 'Windstorm', '', 6, ''),
      new Hero(13, 'Bombasto', '', 5, ''),
      new Hero(15, 'Magneta', '', 3, ''),
      new Hero(20, 'Tornado', '', 8, '')
    ];
  }
  getHeroes() {
    this.logger.log('Getting heroes ...')
    return this.heroes;
  }
}
