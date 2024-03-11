import { Component, Input } from '@angular/core';
import { Beer } from '../../../models/beer';

@Component({
  selector: 'app-beer-list',
  standalone: true,
  imports: [],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})
export class BeerListComponent {

  @Input() beers: Beer[] = [];

}
