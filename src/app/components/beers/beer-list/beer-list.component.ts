import { Component, Input } from '@angular/core';
import { Beer } from '../../../models/beer';
import { UpperCasePipe } from '@angular/common';
import { ShortenPipe } from '../../../pipes/shorten.pipe';
import { FilterBeersPipe } from '../../../pipes/filter-beers.pipe';

@Component({
  selector: 'app-beer-list',
  standalone: true,
  imports: [UpperCasePipe, ShortenPipe, FilterBeersPipe],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})
export class BeerListComponent {


  @Input() beers: Beer[] | null = []


}
