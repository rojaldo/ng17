import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from '../models/beer';
import { Observable, map } from 'rxjs';
import { OrderOption } from '../enums/order-option';

@Pipe({
  name: 'orderBeers',
  standalone: true
})
export class OrderBeersPipe implements PipeTransform {

  transform(beers$: Observable<Beer[]> | null, ...args: OrderOption[]): Observable<Beer[]> | null | undefined{
    if(args.length === 1) {
      switch(args[0]) {
        case OrderOption.alphAsc:
          return beers$?.pipe(map(beers => beers.sort((a, b) => a.name.localeCompare(b.name))));
        case OrderOption.alphDesc:
          return beers$?.pipe(map(beers => beers.sort((a, b) => b.name.localeCompare(a.name))));
        case OrderOption.abvAsc:
          return beers$?.pipe(map(beers => beers.sort((a, b) => a.abv - b.abv)));
        case OrderOption.abvDesc:
          return beers$?.pipe(map(beers => beers.sort((a, b) => b.abv - a.abv)));
      }
    }
    else {
      console.error('Invalid number of arguments for orderBeers pipe: ' + args.length + ' expected 1.');
      return beers$;
    }
    
  }

}
