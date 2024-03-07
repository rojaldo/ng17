import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private _apodInfo: any = {};
  apodInfo$ = new BehaviorSubject<any>(this._apodInfo);


  constructor(private http: HttpClient) { }

  getApod() {
    
    const baseUrl = 'https://api.nasa.gov/planetary/apod';
    const apiKey = 'DEMO_KEY';
    const url = `${baseUrl}?api_key=${apiKey}`;

    const observer = {
      next: (response: any) => {
        console.log(response);
        this._apodInfo = response;
        this.apodInfo$.next(this._apodInfo);
      },
      error: (error: any) => {
        console.error(error);
        this.apodInfo$.error('Failed to retrieve APOD: ' + error.message);
      },
      complete: () => {
        this.apodInfo$.complete();
      }
    };
    this.http.get(url).subscribe(observer);
  }
}
