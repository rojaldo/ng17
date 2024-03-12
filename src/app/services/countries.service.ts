import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private countries: any[] = [];
  countriesNames$ = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient) { }

  getCountries() {
    const observer = {
      next: (response: any) => {
        console.log(response);
        this.countries = response;
        const names = this.countries.map(country => country.name.common);
        this.countriesNames$.next(names);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('Completed');
      }
    };
    this.http.get('https://restcountries.com/v3.1/all').subscribe(observer);
  }
}
