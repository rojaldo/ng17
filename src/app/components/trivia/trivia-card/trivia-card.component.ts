import { Component, Input } from '@angular/core';
import { TriviaCard } from '../../../models/triviacard';

@Component({
  selector: 'app-trivia-card',
  standalone: true,
  imports: [],
  templateUrl: './trivia-card.component.html',
  styleUrl: './trivia-card.component.scss'
})
export class TriviaCardComponent {

  @Input() card: TriviaCard = new TriviaCard();

  buttonClass: string[] = ['btn btn-primary', 'btn btn-primary', 'btn btn-primary', 'btn btn-primary'];

  constructor() { }

  handleClick(answer: string, index: number) {
    this.card.answered = true;
    this.buttonClass = this.card.answers.map((answer: string) => answer === this.card.correctAnswer ? 'btn btn-success' : 'btn btn-secondary');
    answer !== this.card.correctAnswer ? this.buttonClass[index] = 'btn btn-danger' : null;
  }

}
