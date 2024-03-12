import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Beer } from '../../../models/beer';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { ShortenPipe } from '../../../pipes/shorten.pipe';
import { FilterBeersPipe } from '../../../pipes/filter-beers.pipe';

@Component({
  selector: 'app-beer-list',
  standalone: true,
  imports: [UpperCasePipe, ShortenPipe, FilterBeersPipe],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})
export class BeerListComponent implements OnChanges{


  @Input() beers: Beer[] | null = []

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Beers changed: ' + JSON.stringify(changes));
  }

}
