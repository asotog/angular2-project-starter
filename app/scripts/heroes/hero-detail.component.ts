import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Hero} from './hero';

@Component({
  selector:    'hero-detail',
  template: '<div>{{hero | json}}</div><h4>{{hero.name}}</h4><button class="btn btn-default" (click)="onDelete()">Delete</button>'
})
export class HeroDetailComponent  {
  
  @Input()  hero: Hero;
  
  @Output() deleted = new EventEmitter<Hero>();
  
  constructor() {}
  
  onDelete() {
    this.deleted.emit(this.hero);
  }
  
}
