import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../../models/hero';
import { HeroesListComponent } from '../heroes-list/heroes-list.component';
import { HeroFormComponent } from '../hero-form/hero-form.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeroesListComponent, HeroFormComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

  heroes: Hero[] = [
    new Hero('Batman', 'The dark knight'),
    new Hero('Superman', 'Man of steel'),
    new Hero('Spiderman', 'The amazing Spiderman')
  ];

  addHero(newHero: Hero) {
      this.heroes.push(newHero);    
  }

}
