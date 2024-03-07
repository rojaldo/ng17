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
    const observer = {
      next: (response: any) => {
        console.log(response);
        this._apodInfo = response;
        this.apodInfo$.next(this._apodInfo);
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
        console.log('Completed');
      }
    };
    this.http.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').subscribe(observer);
  }
}
