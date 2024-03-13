import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Hero } from '../../../models/hero';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.scss'
})
export class HeroFormComponent implements OnChanges{

  @Output() onAddHero = new EventEmitter<Hero>();

  @Input() hero: Hero = new Hero('','');

  heroName = '';
  heroDescription = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.hero.name ? this.heroName = this.hero.name : null;
    this.hero.description ? this.heroDescription = this.hero.description : null;
  }

  addHero() { 
    this.onAddHero.emit(new Hero(this.heroName, this.heroDescription));
    this.heroName = '';
    this.heroDescription = '';
  }
}
