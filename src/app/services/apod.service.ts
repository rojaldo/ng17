import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Apod } from '../models/apod';

@Injectable()
export class ApodService {

  private _apodInfo: Apod = new Apod();
  apodInfo$ = new BehaviorSubject<Apod>(this._apodInfo);


  constructor(private http: HttpClient) { }

  getApod(date?: string) {
    
    const baseUrl = 'https://api.nasa.gov/planetary/apod';
    const apiKey = 'DEMO_KEY';
    let url = `${baseUrl}?api_key=${apiKey}`;
    date ? url = url.concat(`&date=${date}`) : url;

    const observer = {
      next: (response: any) => {
        this._apodInfo = new Apod(response);
        this.apodInfo$.next(this._apodInfo);
      },
      error: (error: any) => {
        console.error(error);
        this.apodInfo$.error('Failed to retrieve APOD: ' + error.message);
      },
      complete: () => {
      }
    };
    console.log('URL: ' + url);
    this.http.get(url).subscribe(observer);
  }
}
