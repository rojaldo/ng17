import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../../models/hero';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, JsonPipe],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

  heroes: Hero[] = [
    new Hero('Batman', 'The dark knight'),
    new Hero('Superman', 'Man of steel'),
    new Hero('Spiderman', 'The amazing Spiderman')
  ];

  heroName = '';
  heroDescription = '';

  addHero() {
    
      this.heroes.push(new Hero(this.heroName, this.heroDescription));
      this.heroName = '';
      this.heroDescription = '';
    
  }

}
