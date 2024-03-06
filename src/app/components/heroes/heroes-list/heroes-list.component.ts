import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../../models/hero';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.scss'
})
export class HeroesListComponent {

  @Input() heroes: Hero[] = [];
  @Output() onRemoveHero = new EventEmitter<number>();

  removeHero(index: number) {
    this.onRemoveHero.emit(index);
  }

}
