import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

enum State {
  INIT,
  FIRST_FIGURE,
  SECOND_FIGURE,
  RESULT
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  display = '';

  currentState = State.INIT;
  firstFigure = 0;
  operator = '';
  secondFigure = 0;
  result = 0;

  handleClick(value: string | number) {
    (typeof value === 'string') ? this.handleSymbol(value): this.handleNumber(value);
  }

  handleSymbol(symbol: string) {
    if (symbol === 'C') {
      this.clearCalculator();
      return;
    }
    switch (this.currentState) {
      case State.INIT:
        break;
      case State.FIRST_FIGURE:
        if (this.isOperator(symbol)) {
          this.operator = symbol;
          this.currentState = State.SECOND_FIGURE;
          this.display += symbol;
        }
        break;
      case State.SECOND_FIGURE:
        if (symbol === '=') {
          this.result = this.calculate();
          this.display += symbol + this.result;
          this.currentState = State.RESULT;
        }
        break;
      case State.RESULT:
        if (this.isOperator(symbol)) {
          let firstNumber = this.result;
          this.clearCalculator();
          this.firstFigure = firstNumber;
          this.operator = symbol;
          this.currentState = State.SECOND_FIGURE;
          this.display = firstNumber + symbol;
        }
        break;
      default:
        break;
    }
  }

  readonly isOperator = (symbol: string) => symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/';

  calculate() {
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

  handleNumber(num: number) {
    switch (this.currentState) {
      case State.INIT:
        this.firstFigure = num;
        this.currentState = State.FIRST_FIGURE;
        this.display = num.toString();
        break;
      case State.FIRST_FIGURE:
        this.firstFigure = this.firstFigure * 10 + num;
        this.display += num.toString(); 
        break;
      case State.SECOND_FIGURE:
        this.secondFigure = this.secondFigure * 10 + num;
        this.display += num.toString();
        break;
      case State.RESULT:
        this.clearCalculator();
        this.firstFigure = num;
        this.currentState = State.FIRST_FIGURE;
        this.display = num.toString();
        break;
      default:
        break;
    }
  }

  clearCalculator() {
    this.currentState = State.INIT;
    this.firstFigure = 0;
    this.operator = '';
    this.secondFigure = 0;
    this.result = 0;
    this.display = '';
  }
}
