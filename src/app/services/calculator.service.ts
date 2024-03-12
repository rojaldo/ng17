import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

enum State {
  INIT,
  FIRST_FIGURE,
  SECOND_FIGURE,
  RESULT
}

@Injectable()
export class CalculatorService {

  private _display = '';
  display$ = new BehaviorSubject<string>(this._display);
  private currentState = State.INIT;
  private firstFigure = 0;
  private operator = '';
  private secondFigure = 0;
  private result = 0;

  get display () {
    return this._display;
  }

  constructor() { }

  handleSymbol(symbol: string): void{
    if (symbol === 'C') {
      this.clearCalculator();
      this.display$.next(this._display);
    }
    switch (this.currentState) {
      case State.INIT:
        break;
      case State.FIRST_FIGURE:
        if (this._isOperator(symbol)) {
          this.operator = symbol;
          this.currentState = State.SECOND_FIGURE;
          this._display += symbol;
        }
        break;
      case State.SECOND_FIGURE:
        if (symbol === '=') {
          this.result = this._calculate();
          this._display += symbol + this.result;
          this.currentState = State.RESULT;
        }
        break;
      case State.RESULT:
        if (this._isOperator(symbol)) {
          let firstNumber = this.result;
          this.clearCalculator();
          this.firstFigure = firstNumber;
          this.operator = symbol;
          this.currentState = State.SECOND_FIGURE;
          this._display = firstNumber + symbol;
        }
        break;
      default:
        break;
    }
    this.display$.next(this._display);
  }

  private readonly _isOperator = (symbol: string) => symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/';

  private _calculate() {
    switch (this.operator) {
      case '+':
        return this.firstFigure + this.secondFigure;
      case '-':
        return this.firstFigure - this.secondFigure;
      case '*':
        return this.firstFigure * this.secondFigure;
      case '/':
        return this.firstFigure / this.secondFigure;
      default:
        return 0;
    }
  }

  handleNumber(num: number): void{
    switch (this.currentState) {
      case State.INIT:
        this.firstFigure = num;
        this.currentState = State.FIRST_FIGURE;
        this._display = num.toString();
        break;
      case State.FIRST_FIGURE:
        this.firstFigure = this.firstFigure * 10 + num;
        this._display += num.toString(); 
        break;
      case State.SECOND_FIGURE:
        this.secondFigure = this.secondFigure * 10 + num;
        this._display += num.toString();
        break;
      case State.RESULT:
        this.clearCalculator();
        this.firstFigure = num;
        this.currentState = State.FIRST_FIGURE;
        this._display = num.toString();
        break;
      default:
        break;
    }
    this.display$.next(this._display);
  }

  private clearCalculator() {
    this.currentState = State.INIT;
    this.firstFigure = 0;
    this.operator = '';
    this.secondFigure = 0;
    this.result = 0;
    this._display = '';
  }

}
