import { CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export const beersGuard: CanActivateFn = (route, state) => {
  return new Observable<boolean>(observer => {
    const beers = JSON.parse(localStorage.getItem('beers') || '[]');
    if(beers.length) observer.next(false);
    else observer.next(true);
    observer.complete();
  });
};
