import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TriviaCard } from '../models/triviacard';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  private _resopnse: any;
  private _cards: TriviaCard[] = [];
  cards$ = new BehaviorSubject<TriviaCard[]>(this._cards);

  constructor(private http:HttpClient) { }

  getTrivia(amount = 10){
    const url = `https://opentdb.com/api.php?amount=${amount}`;
    const observer = {
      next: (response: any) => {
        this._resopnse = response;
        this._cards = [...this._cards, ...this._resopnse.results.map((card: any) => new TriviaCard(card))];
        this.cards$.next(this._cards);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('Completed');
      }
    };
   this.http.get(url).subscribe(observer);
  }
}
