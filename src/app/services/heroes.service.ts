import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private _heroes: Hero[] = [
    new Hero('Batman', 'The dark knight'),
    new Hero('Superman', 'Man of steel'),
    new Hero('Spiderman', 'The amazing Spiderman')
  ];

  constructor() { }

  get heroes() {
    return [...this._heroes];
  }

  addHero(hero: Hero) {
    this._heroes.push(hero);
  }

  removeHero(index: number) {
    this._heroes.splice(index, 1);
  }
}
