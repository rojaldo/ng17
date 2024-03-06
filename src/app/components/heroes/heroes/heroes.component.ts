import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../../models/hero';
import { HeroesListComponent } from '../heroes-list/heroes-list.component';
import { HeroFormComponent } from '../hero-form/hero-form.component';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeroesListComponent, HeroFormComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit{

  heroes: Hero[] = [];

  constructor(private service: HeroesService) { }
  ngOnInit(): void {
    this.heroes = this.service.heroes;
  }

  addHero(newHero: Hero) {
      this.service.addHero(newHero);
      this.heroes = this.service.heroes;
  }

  removeHero(index: number) {
    this.service.removeHero(index);
    this.heroes = this.service.heroes;
  }

}
