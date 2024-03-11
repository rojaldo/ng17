import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Beer } from '../models/beer';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  private _beers: Beer[] = [];
  beers$ = new BehaviorSubject<Beer[]>(this._beers);

  constructor(private http: HttpClient) { }

  getBeers() {
    const observer = {
      next: (response: any) => {
        this._beers = response.map((beer: any) => new Beer(beer));
        this.beers$.next(this._beers);
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
      }
    };
    this.http.get('https://api.punkapi.com/v2/beers').subscribe(observer);
  }
}
