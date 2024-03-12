import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from '../models/beer';
import { Observable } from 'rxjs';

@Pipe({
  name: 'filterBeers',
  standalone: true
})
export class FilterBeersPipe implements PipeTransform {

  transform(beers: Beer[], ...args: number[]): Observable<Beer[]> {
    if(!args.length) return new Observable<Beer[]>(observer => {
      observer.next(beers);
      observer.complete();
    }); 
    else if(args.length === 2) {
      return new Observable<Beer[]>(observer => {
        observer.next(beers.filter(beer => beer.abv >= args[0] && beer.abv <= args[1]));
        observer.complete();
      });
    }
    else {
      console.error('Invalid number of arguments for filterBeers pipe: ' + args.length + ' expected 0 or 2.');
      return new Observable<Beer[]>(observer => {
        observer.next(beers);
        observer.complete();
      });
    }
  }

}
