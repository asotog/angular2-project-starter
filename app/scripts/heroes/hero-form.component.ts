import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { Hero }    from './hero';

@Component({
  selector: 'hero-form',
  templateUrl: 'scripts/heroes/hero-form.component.html'
})
export class HeroFormComponent {
  
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
            
  model = new Hero(18, 'Dr IQ', this.powers[0], 5, 'Chuck Overstreet');
  
  submitted = false;
  
  onSubmit() {
    this.submitted = true;
  }
}
