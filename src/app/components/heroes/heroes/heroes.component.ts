import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../../models/hero';
import { HeroesListComponent } from '../heroes-list/heroes-list.component';
import { HeroFormComponent } from '../hero-form/hero-form.component';
import { HeroesService } from '../../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeroesListComponent, HeroFormComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  myHero: Hero = new Hero('','');

  constructor(
    private service: HeroesService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.heroes = this.service.heroes;
    this.route.params.subscribe(params => {
      this.myHero = new Hero(params['name'], params['description']);
    });
  }

  addHero(newHero: Hero) {
    this.service.addHero(newHero);
    this.heroes = this.service.heroes;
  }

  removeHero(index: number) {
    this.service.removeHero(index);
    this.heroes = this.service.heroes;
  }

  handleMyHero() {
    this.router.navigate(['/heroes', { name: "New Hero" , description: "New Hero Description"}]);
  }

}
