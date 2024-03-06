import { Component, EventEmitter, Output } from '@angular/core';
import { Hero } from '../../../models/hero';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.scss'
})
export class HeroFormComponent {

  @Output() onAddHero = new EventEmitter<Hero>();

  heroName = '';
  heroDescription = '';

  addHero() { 
    this.onAddHero.emit(new Hero(this.heroName, this.heroDescription));
    this.heroName = '';
    this.heroDescription = '';
  }
}
